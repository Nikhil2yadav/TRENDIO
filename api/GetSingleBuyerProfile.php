<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();

    if(isset($_POST['BuyerId'])){
        $BuyerId=$_POST['BuyerId'];
    }
    else{
        $res['data']="BuyerId not found";
        echo json_encode($res);
        exit;
    }
    $Get_buyer_data="select * from `buyer` where BuyerId='".$BuyerId."'";
    $result=mysqli_query($conn,$Get_buyer_data);

    if($result){
        while($row=mysqli_fetch_assoc($result))
        {
            $res[]=$row;
        }
        echo json_encode($res);
    }else{
        $res['data']="False";
        echo json_encode($res);
    }
?>