<?php

include "Header.php";
include "Connection.php";

// Set the response header to JSON
header('Content-Type: application/json');

// Initialize the response array
$result = [];

// Validate input
if (!isset($_POST["loginId"]) || !isset($_POST["SellerId"])) {
    $result['error'] = 'LoginId or SellerId not found';
    echo json_encode($result);
    exit;
}

$LoginId = $_POST["loginId"];
$SellerId = $_POST["SellerId"];

if (empty($LoginId) || empty($SellerId)) {
    $result['error'] = 'LoginId or SellerId is empty';
    echo json_encode($result);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO `approvedseller` (`SellerId`, `LoginId`, `status`) VALUES (?, ?, '1')");
// echo $stmt;
$stmt->bind_param("ss", $SellerId, $LoginId);

// Execute the statement and check for errors
if ($stmt->execute()) {
    $result['approvedseller_insert'] = "success";

    // Prepare and bind statement for deleting from temp seller
    $stmtDelete = $conn->prepare("DELETE FROM `tempseller` WHERE SellerId = ?");
    $stmtDelete->bind_param("s", $SellerId);

    if ($stmtDelete->execute()) {
        $result['delete_status'] = 'success';
    } else {
        $result['delete_status'] = 'fail';
        $result['delete_error'] = $stmtDelete->error;
    }
    
    $stmtDelete->close();
} else {
    $result['approvedseller_insert'] = "fail";
    $result['error'] = $stmt->error;
}

$stmt->close();
$conn->close();

echo json_encode($result);
 ?>


