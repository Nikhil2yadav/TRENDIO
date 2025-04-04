<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    
    if(isset($_POST['BuyerId'])){
        $BuyerId=$_POST['BuyerId'];
    }else{
        $res['error']="buyerID not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['Address'])){
        $Address=$_POST['Address'];
    }else{
        $res["error"]="Address not found";
        echo json_encode($res);
        exit;
    }
    
    if(isset($_POST['State'])){
        $State=$_POST['State'];
    }else{
        $res["error"]="State not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['City'])){
        $City=$_POST['City'];
    }else{
        $res["error"]="City not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['Pincode'])){
        $Pincode=$_POST['Pincode'];
    }else{
        $res["error"]="Pincode not found";
        echo json_encode($res);
        exit;
    }
    $Addressinsertquery="insert into address values(NULL,'".$BuyerId."','".$Address."','".$State."','".$City."','".$Pincode."','1')";
    $result=mysqli_query($conn,$Addressinsertquery);
    if($result){
        $res['Address']="true";
        echo json_encode($res);
        exit;
    }else{
        $res['Address']="false";
        echo json_encode($res);
        exit;
    }
?>