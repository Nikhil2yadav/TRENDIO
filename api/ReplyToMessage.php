<?php
include "Header.php";
include "Connection.php";

// $data = json_decode(file_get_contents("php://input"), true);

if (isset($_POST['contactId']) && isset($_POST['reply'])) {
    $contactId = $_POST['contactId'];
    $reply = $_POST['reply'];

    $update_query = "UPDATE seller_contact SET Reply = '$reply' WHERE ContactID = '$contactId'";
    $result = mysqli_query($conn, $update_query);

    if ($result) {
        $res['success'] = true;
        $res['message'] = "Reply sent successfully";
    } else {
        $res['success'] = false;
        $res['message'] = "Failed to send reply";
    }
}

echo json_encode($res);
?>
