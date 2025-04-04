<?php 
    // include "Header.php";
    // include "Connection.php";
    // $res=array();

    // if(isset($_POST['BuyerId'])){
    //     $BuyerId=$_POST['BuyerId'];
    // }
    // else{
    //     $res['error']="BuyerId not found";
    //     echo json_encode($res);
    //     exit;
    // }

    // if(isset($_POST['Name'])){
    //     $Name=$_POST['Name'];
    // }
    // else{
    //     $res['error']="Buyer name not found";
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['Email'])){
    //     $Email=$_POST['Email'];
    // }else{
    //     $res['error']="Buyer Email not found";
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['Number'])){
    //     $Number=$_POST['Number'];
    // }else{
    //     $res['error']="Buyer Number not found";
    //     echo json_encode($res);
    //     exit;
    // }
    
    // $update_buyer_profile="UPDATE `buyer` SET Name='".$Name."', Email ='".$Email."', Number ='".$Number."' WHERE BuyerId='".$BuyerId."'";
    // if(mysqli_query($conn,$update_buyer_profile)){
    //     $res["success"]="true";
    //     echo json_encode($res);
    // }else {
    //     echo json_encode(array("status" => "error", "message" => "Error updating buyer"));
    // }

    include "Header.php";
    include "Connection.php";
    $res = array();

    if(isset($_POST['BuyerId'])){
        $BuyerId = $_POST['BuyerId'];
    } else {
        $res['error'] = "BuyerId not found";
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Name'])){
        $Name = $_POST['Name'];
    } else {
        $res['error'] = "Buyer name not found";
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Email'])){
        $Email = $_POST['Email'];
    } else {
        $res['error'] = "Buyer Email not found";
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Number'])){
        $Number = $_POST['Number'];
    } else {
        $res['error'] = "Buyer Number not found";
        echo json_encode($res);
        exit;
    }

    // Check if email already exists and belongs to another user
    $check_email_query = "SELECT * FROM buyer WHERE Email = '$Email' AND BuyerId != '$BuyerId'";
    $result = mysqli_query($conn, $check_email_query);

    if(mysqli_num_rows($result) > 0){
        $res['error'] = "Email already exists!";
        echo json_encode($res);
        exit;
    }

    // Update the buyer profile
    $update_buyer_profile = "UPDATE `buyer` SET Name='$Name', Email='$Email', Number='$Number' WHERE BuyerId='$BuyerId'";

    if(mysqli_query($conn, $update_buyer_profile)){
        $res["success"] = "true";
    } else {
        $res["error"] = "Error updating buyer";
    }

    echo json_encode($res);
?>
