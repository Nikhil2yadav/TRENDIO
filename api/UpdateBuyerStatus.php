<?php
include 'Connection.php'; 
include "Header.php";

$res = array();

// Check if buyerId is provided in the POST request
if (isset($_POST['buyerId'])) {
    $BuyerId = $_POST['buyerId'];

    // Fetch the current status of the buyer
    $query = "SELECT activestatus FROM buyer WHERE BuyerId='$BuyerId'";
    $result = mysqli_query($conn, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $currentStatus = $row['activestatus'];

        // Toggle the status (0 -> 1, 1 -> 0)
        $newStatus = ($currentStatus == "1") ? "0" : "1";

        // Update the buyer's active status
        $updateQuery = "UPDATE buyer SET activestatus='$newStatus' WHERE BuyerId='$BuyerId'";
        if (mysqli_query($conn, $updateQuery)) {
            $res['success'] = true;
            $res['message'] = "Buyer status updated successfully.";
            $res['newStatus'] = $newStatus;
        } else {
            $res['success'] = false;
            $res['message'] = "Failed to update buyer status.";
        }
    } else {
        $res['success'] = false;
        $res['message'] = "Buyer not found.";
    }
} else {
    $res['success'] = false;
    $res['message'] = "BuyerId not provided.";
}

// Return response as JSON
echo json_encode($res);
?>
