<?php
// include "Connection.php";
// include "Header.php";

// $res = array();

// if (isset($_POST['Email']) && isset($_POST['Password'])) {
//     $email = $_POST['Email'];
//     $password = $_POST['Password'];

//     $query = "UPDATE seller SET Password='$password' WHERE Email='$email'";
//     // echo $query;
//     $result = mysqli_query($conn, $query);

//     if ($result) {
//         $res['updated'] = "TRUE";
//     } else {
//         $res['updated'] = "FALSE";
//     }
// } else {
//     $res['updated'] = "FALSE";
//     $res['message'] = "Invalid request";
// }

// echo json_encode($res);
include "Connection.php";
include "Header.php";

$res = array();

if (isset($_POST['Email']) && isset($_POST['Password'])) {
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    // Check if the email exists in the seller table
    $querySeller = "SELECT * FROM seller WHERE Email='$email'";
    $resultSeller = mysqli_query($conn, $querySeller);

    // Check if the email exists in the admin table
    $queryAdmin = "SELECT * FROM login WHERE Email='$email'";
    $resultAdmin = mysqli_query($conn, $queryAdmin);

    if (mysqli_num_rows($resultSeller) > 0) {
        // Update seller password
        $updateQuery = "UPDATE seller SET Password='$password' WHERE Email='$email'";
    } elseif (mysqli_num_rows($resultAdmin) > 0) {
        // Update admin password
        $updateQuery = "UPDATE login SET Password='$password' WHERE Email='$email'";
    } else {
        $res['updated'] = "FALSE";
        $res['message'] = "Email not found";
        echo json_encode($res);
        exit();
    }

    // Execute the update query
    if (mysqli_query($conn, $updateQuery)) {
        $res['updated'] = "TRUE";
        $res['message'] = "Password updated successfully";
    } else {
        $res['updated'] = "FALSE";
        $res['message'] = "Failed to update password";
    }
} else {
    $res['updated'] = "FALSE";
    $res['message'] = "Invalid request";
}

echo json_encode($res);
?>
