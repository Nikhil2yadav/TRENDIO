<?php 
    include "Header.php";
    include "Connection.php";

    $res=array();
    if(isset($_POST['addressid'])){
        $addressid=$_POST['addressid'];
    }
    else{
        $res['error']="addressid not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['Address'])){
        $Address=$_POST['Address'];
    }
    else{
        $res['error']="Address not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['City'])){
        $City=$_POST['City'];
    }
    else{
        $res['error']="City not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['State'])){
        $State=$_POST['State'];
    }
    else{
        $res['error']="State not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['Pincode'])){
        $Pincode=$_POST['Pincode'];
    }
    else{
        $res['error']="Pincode not found";
        echo json_encode($res);
        exit;
    }
    $update_address="UPDATE `address` SET Address='".$Address."',State='".$State."',City='".$City."',Pincode='".$Pincode."' WHERE addressid ='".$addressid."' ";
    $result=mysqli_query($conn,$update_address);
    if($result){
        $res['Address']='true';
        echo json_encode($res);
    }else{
        $res['error']='false';
        echo json_encode($res);
    }
?>