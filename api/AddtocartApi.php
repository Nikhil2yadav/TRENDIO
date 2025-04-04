<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    //     echo "<pre>";
    // print_r($_FILES);
    if(isset($_POST['productid'])){
        $productid = $_POST['productid'];
    }else{
        $res['productid']='not found';
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['buyerId'])){
        $buyerId = $_POST['buyerId'];
    }else {
        $res['buyerId']='not found';
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['price'])){
        $price = $_POST['price'];
    }else {
        $res['price']='not found';
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['quantity'])){
        $quantity = $_POST['quantity'];
    }else {
        $res['quantity']='not found';
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['amount'])){
        $amount = $_POST['amount'];
    }else {
        $res['amount']='not found';
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['size'])){
        $size = $_POST['size'];
    }else {
        $res['Size']='not found';
        echo json_encode($res);
        exit;
    }
    $getaddtocartdata="SELECT * FROM addtocart ;";
    $addto_card_data = mysqli_query($conn,$getaddtocartdata); 
    
   $addtocart_query="insert into addtocart values('NULL','".$productid."','".$buyerId."',CURRENT_DATE(),'".$price."','".$quantity."','".$amount."','".$size."') ON DUPLICATE KEY UPDATE quantity = quantity + 1; ";
   $result=mysqli_query($conn,$addtocart_query);
   if($result){
    $res["addtocart"]="true";
    echo json_encode($res);
    exit;
   }else{
    $res["addtocart"]="false";
    echo json_encode($res);
    exit;
   }
    

?>