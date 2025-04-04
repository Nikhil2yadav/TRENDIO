<?php
include "Header.php";
include "Connection.php";

$res = array();

// $data = json_decode(file_get_contents("php://input"), true);

if (isset($_POST['sellerId']) && isset($_POST['message'])) {
    $sellerId = $_POST['sellerId'];
    $message = $_POST['message'];

    $insert_query = "INSERT INTO seller_contact (SellerId, Message) VALUES ('$sellerId', '$message')";
    $result = mysqli_query($conn, $insert_query);

    if ($result) {
        $res['success'] = true;
        $res['message'] = "Message sent successfully to Admin";
    } else {
        $res['success'] = false;
        $res['message'] = "Failed to send message";
    }
} else {
    $res['success'] = false;
    $res['message'] = "Invalid data";
}

echo json_encode($res);
?>
