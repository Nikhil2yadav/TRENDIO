<?php 
    include "Connection.php";
    include "Header.php";
    $res=array();
    if(isset($_GET['orderId'])){
        $orderId=$_GET['orderId'];

        $deleteOrder="DELETE FROM `order` WHERE orderId ='$orderId'";
        $result=mysqli_query($conn,$deleteOrder);
        if($result){
            $res["Order"]="true";
            echo json_encode($res);
        }else{
            $res["Order"]="false";
            echo json_encode($res);
        }
    }else{
        $res["orderId"]="not found";
            echo json_encode($res);
    }
?>