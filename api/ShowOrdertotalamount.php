<?php 
    include "connection.php";
    include "Header.php";
    $res=array();
    if(isset($_GET['orderId'])){
        $orderId=$_GET['orderId'];

        $displayOrder="SELECT * FROM `order` where orderId = '".$orderId."';
";
        $result=mysqli_query($conn,$displayOrder);
        $order=array();
        if($result){
            while($row=mysqli_fetch_array($result)){
                $order[]=$row;
            }
            echo json_encode($order);
        }else{
            $res['order']='not found';
            echo json_encode($res);
        }

    }else{
        $res['orderId']='not found';
        echo json_encode($res);
    }
?>