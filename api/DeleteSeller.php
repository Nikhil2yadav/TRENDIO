<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header('Content-Type: application/json');
    header("Access-Control-Allow-Headers: Content-Type");
    include "Connection.php";

    if(isset($_GET['SellerId'])){
        $SellerId=$_GET['SellerId'];
        $str="Delete from seller where SellerId='".$SellerId."'";
        $data=mysqli_query($conn,$str);
       // header("Location:ManageSeller.js");
    }
   
?>  