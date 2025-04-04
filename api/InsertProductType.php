<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();

    if(isset($_POST['TypeName']  )){
        $TypeName=$_POST['TypeName'];
        $insert_producttype="insert into producttype (TypeName) values ('$TypeName')";
        $result=mysqli_query($conn,$insert_producttype);
        if($result){
            $res['success']="true";
            echo json_encode($res);
        }else{
            $res['success']="false";
            echo json_encode($res);
        }
    }else{
        $res['error']="false Invalid data";
        echo json_encode($res);
    }
?>