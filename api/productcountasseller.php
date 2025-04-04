<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_POST['SellerId'])){
        $Sellerid=$_POST['SellerId'];
    }else{
        $res['error']="Seller Id is not found";
        json_encode($res);
    }
    $countproductas_seller="select * from products where SellerId='".$Sellerid."'";
    $Productcount_seller=mysqli_query($conn,$countproductas_seller);
    $count=mysqli_num_rows($Productcount_seller);
    $res['totalproduct']=$count;
    echo json_encode($res);
?>