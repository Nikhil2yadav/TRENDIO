<?php 
    include "Header.php";
    include "connection.php";
    $res=array();
    if(isset($_GET['addressid'])){
        $addressid=$_GET['addressid'];
    }
    else{
        $res['error']="addressid not found";
        echo json_encode($res);
        exit;
    }
    $get_address="select * from address where addressid='".$addressid."'";
    $result=mysqli_query($conn,$get_address);
    if($result){
        while ($row=mysqli_fetch_assoc($result)){
            $res[]=$row;
        }
        echo json_encode($res);
    }
?>