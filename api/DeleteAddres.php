<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_GET["addressid"])){
        $addressid=$_GET["addressid"];
    }else{
        $res['addressid']="not found";
        echo json_encode($res);
        exit;
    }
    $deleteaddress="UPDATE `address` SET activestatus='0' where addressid='".$addressid."'";
    $result=mysqli_query($conn,$deleteaddress);
    if($result){
        $res["Address"]="true";
        echo json_encode($res);
        exit;
    }
    else{
        $res["Address"]="error";
        echo json_encode($res);
        exit;
    }
?>