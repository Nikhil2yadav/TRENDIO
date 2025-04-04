<?php
include "Connection.php";
include "Header.php";

$res = array();

if (isset($_POST['Email']) && isset($_POST['Password'])) {
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    $query = "UPDATE buyer SET Password='$password' WHERE Email='$email'";
    // echo $query;
    $result = mysqli_query($conn, $query);

    if ($result) {
        $res['updated'] = "TRUE";
    } else {
        $res['updated'] = "FALSE";
    }
} else {
    $res['updated'] = "FALSE";
    $res['message'] = "Invalid request";
}

echo json_encode($res);
?>
