<?php 
include "Connection.php";
    echo "<pre>";
    print_r($_POST);
    if(isset($_POST['inventoryid']) && isset($_POST['ProductId']) && isset($_POST['availablestock']) ){
        $inventoryid =$_POST['inventoryid'];
        $ProductId =$_POST['ProductId'];
        $availablestock =$_POST['availablestock'];
    $str="insert into inventory values(NULL,'".$ProductId."','".$availablestock."')";
     echo $str;
    $res=array();
    if($conn->query($str)==true){
        $res["Success"]="true";
        echo json_encode($res);
    }else{
        $res["Success"]="false";
        echo json_encode($res);
    }
}
else
{
    $res["test"] = "FALSE";
    $res["Success"] = "FALSE";
    $res["Message"] = "Invalid Input";
    echo json_encode($res);
}
?>