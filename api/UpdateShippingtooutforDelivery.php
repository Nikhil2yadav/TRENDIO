<?php 
    // include "Header.php";
    // include "Connection.php";
    // $res=array();
    // if(isset($_POST['orderDetailId'])){
    //     $orderDetailId=$_POST['orderDetailId'];

    //     $update_Pending_to_shiping="UPDATE `orderdetails` SET `delivery_status`= `Shiping` WHERE `orderDetailId`='$orderDetailId'";
    //     $result=mysqli_query($conn,$update_Pending_to_shiping);
    //     if($result){
    //         $res['Update']='true';
    //         echo json_encode($res);
    //     }else{
    //         $res['Update']='false';
    //         echo json_encode($res);
    //     }
    // }
    // else{
    //     $res['orderDetailId']='Not found';
    //     echo json_encode($res);
    // }
    include "Header.php";
    include "Connection.php";
    $res = array();
    
    if (isset($_POST['orderDetailId']) && isset($_POST['orderStatus'])) {
        $orderDetailId = $_POST['orderDetailId'];
        $orderStatus = $_POST['orderStatus'];
    
        $updateStatusQuery = "UPDATE `orderdetails` SET `delivery_status`='$orderStatus' WHERE `orderDetailId`='$orderDetailId'";
        $result = mysqli_query($conn, $updateStatusQuery);
    
        if ($result) {
            $res['Update'] = 'true';
        } else {
            $res['Update'] = 'false';
        }
    } else {
        $res['error'] = 'Invalid Data';
    }
    
    echo json_encode($res);
    ?>
    