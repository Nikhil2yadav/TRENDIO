<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_GET['addtocartid'])){
        $addtocartid=$_GET['addtocartid'];
        $deleteAddtocart="delete from addtocart where addtocartid='".$addtocartid."'";
        if($conn->query($deleteAddtocart)){
            $res['delete']='true';
            echo json_encode($res);
        }
        else{
            $res['delete']='false';
            echo json_encode($res);
        }
    }else{
        $res["addtocartid"]="not found";
        echo json_encode($res);
    }
?>