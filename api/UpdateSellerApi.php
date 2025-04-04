<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header('Content-Type: application/json');
    header("Access-Control-Allow-Headers: Content-Type");

    include "Connection.php";
    $res=array();
        if(isset($_POST["SellerId"])){
            $SellerId=$_POST['SellerId'];
            if(isset($_POST['Name'],$_POST['Email'],$_POST['Password'],$_POST['Number'],$_POST['GST_Number'],$_POST['Aadhar_Card_Number'],$_POST['Pan_Card_Number']))
            {
                
                $str="update seller set Name='".$_POST['Name']."',Email='".$_POST['Email']."',Password='".$_POST['Password']."',Number='".$_POST['Number']."',GST_Number='".$_POST['GST_Number']."',Aadhar_Card_Number='".$_POST['Aadhar_Card_Number']."',Pan_Card_Number='".$_POST['Pan_Card_Number']."' where SellerId='".$_POST['SellerId']."'";
                
                if (mysqli_query($conn, $str)) {
                    $res["success"]="true";
                    echo json_encode($res);
                    // echo json_encode(array("status" => "success", "message" => "Seller updated successfully"));
                } 
                else {
                    echo json_encode(array("status" => "error", "message" => "Error updating seller"));
                }
            } 
            else{
                echo json_encode(array("status" => "error", "message" => "SellerId not found"));

            }
        }
        
    
?>