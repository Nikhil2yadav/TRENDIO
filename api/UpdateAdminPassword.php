<?php 

// Include necessary files
include "Header.php";
include "Connection.php";

// Initialize an array to store the result
$result = array();

// echo "<pre>";
// print_r($_POST);
// Check if LoginId is set
if(isset($_POST['LoginId'])){
    $LoginId = $_POST['LoginId'];  // Get the LoginId from POST request
} else {
    // Return an error if LoginId is not set
    $result['error'] = 'LoginId is missing';
    echo json_encode($result);
    return;  // Stop the script
}


// Check if current_password is set
if(isset($_POST["current_password"])){
    $current_password = $_POST['current_password'];  // Get current password
} else {
    // Return an error if current_password is not set
    $result['error'] = 'Current password is missing';
    echo json_encode($result);
    return;  // Stop the script
}

// Check if NewPassword is set
if(isset($_POST['NewPassword'])){
    $NewPassword = $_POST['NewPassword'];  // Get new password
} else {
    // Return an error if NewPassword is not provided
    $result['error'] = 'New password is missing';
    echo json_encode($result);
    return;  // Stop the script
}

// SQL query to check if the current password matches with the one in the database
$get_Password_query = "SELECT * FROM login WHERE LoginId = '".$LoginId."' AND Password = '".$current_password."'";
$data = mysqli_query($conn, $get_Password_query);
$count = mysqli_num_rows($data);  // Check how many rows match

if ($count == 1) {  // If the current password is correct
    // Now we can update the password
    $updatePassword = "UPDATE `login` SET `Password` = '$NewPassword' WHERE `login`.`LoginId` = '".$LoginId."';";

    // Execute the update query
    if($conn->query($updatePassword)){
        // If update is successful
        $result['Updated'] = "true";
    } else {
        // If update fails
        $result['Updated'] = 'false';
        $result['error'] = 'Failed to update password';
    }
} else {
    // If the current password is incorrect
    $result['count'] = "0";  // No matching rows found
    $result['Updated'] = 'false';
    $result['error'] = 'Incorrect current password';
}

// Return the result as JSON
echo json_encode($result);


    

?>