 <?php 
    // include "Header.php";
    // include "Connection.php";
    // $result = array();
    // if(isset($_POST['BuyerId'])){
    //     $BuyerId=$_POST['BuyerId'];
    // }else{
    //     $result['error']="BuyerId not found";
    //     echo json_encode($result);
    //     return;
    // }
    // if(isset($_POST['current_password'])){
    //     $current_password=$_POST['current_password'];
    // }
    // else{
    //     $result['error'] = 'Current password is missing';
    // echo json_encode($result);
    // return; 
    // }
    // if(isset($_POST['NewPassword'])){
    //     $NewPassword = $_POST['NewPassword'];  // Get new password
    // } else {
    //     // Return an error if NewPassword is not provided
    //     $result['error'] = 'New password is missing';
    //     echo json_encode($result);
    //     return;  // Stop the script
    // }
    // $get_Password_query = "SELECT * FROM `buyer` WHERE BuyerId = '".$BuyerId."' AND Password = '".$current_password."'";
    // $data = mysqli_query($conn, $get_Password_query);
    // $count = mysqli_num_rows($data);
    // if ($count == 1) {  // If the current password is correct
    //     // Now we can update the password
    //     $updatePassword = "UPDATE `buyer` SET `Password` = '$NewPassword' WHERE `BuyerId` = '".$BuyerId."';";
    
    //     // Execute the update query
    //     if($conn->query($updatePassword)){
    //         // If update is successful
    //         $result['Updated'] = "true";
    //     } else {
    //         // If update fails
    //         $result['Updated'] = 'false';
    //         $result['error'] = 'Failed to update password';
    //     }
    // } else {
    //     // If the current password is incorrect
    //     $result['count'] = "0";  // No matching rows found
    //     $result['Updated'] = 'false';
    //     $result['error'] = 'Incorrect current password';
    // }
    
    // // Return the result as JSON
    // echo json_encode($result);
    
    include "Header.php";
    include "Connection.php";
    $result = array();

    // Check if BuyerId is provided
    if(!isset($_POST['BuyerId']) || !isset($_POST['current_password']) || !isset($_POST['NewPassword'])){
        $result['error'] = 'Missing required fields';
        echo json_encode($result);
        return;
    }

    $BuyerId = $_POST['BuyerId'];
    $current_password = $_POST['current_password'];
    $NewPassword = $_POST['NewPassword'];

    // Fetch current password from database
    $query = "SELECT Password FROM `buyer` WHERE BuyerId = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $BuyerId);
    $stmt->execute();
    $resultData = $stmt->get_result()->fetch_assoc();

    if(!$resultData) {
        $result['error'] = 'Invalid BuyerId';
        echo json_encode($result);
        return;
    }

    $hashed_password = $resultData['Password'];
//     echo $hashed_password;
// echo $current_password;
    // Verify current password
    if ($current_password !== $hashed_password) {
        $result['error'] = 'Incorrect current password';
        echo json_encode($result);
        return;
    }

    // Hash new password
    $new_hashed_password = ($NewPassword);

    // Update new password in database
    $update_query = "UPDATE `buyer` SET `Password` = ? WHERE `BuyerId` = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("ss", $new_hashed_password, $BuyerId);

    if ($update_stmt->execute()) {
        $result['Updated'] = 'true';
        $result['message'] = 'Password updated successfully';
    } else {
        $result['Updated'] = 'false';
        $result['error'] = 'Failed to update password';
    }

    echo json_encode($result);
?>
