<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_GET['buyerId'])){
        $buyerId=$_GET['buyerId'];
        $deletebuyer_query="delete from buyer where BuyerId='".$buyerId."'";
        $result=mysqli_query($conn,$deletebuyer_query);
        if($result){
            $res['buyerdelete']="true";
            echo json_encode($res);
        }
        else{
            $res['buyerdelete']="false";
            echo json_encode($res);
        }
    }else{
        $res['error']="buyer Is not found";
        echo json_encode($res);
    }

?>