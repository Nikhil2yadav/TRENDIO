<?php 
    include "Connection.php";
    if(isset($_POST['SellerproductId'])&& isset($_POST['inventoryId'])&& isset($_POST['ProductId']) && isset($_POST['CustomerId'])){
        $SellerproductId=$_POST['SellerproductId'];
        $inventoryId=$_POST['inventoryId'];
        $ProductId=$_POST['ProductId'];
        $CustomerId=$_POST['CustomerId'];

        $str="insert into sellerproduct values(NULL,'".$inventoryId."','".$ProductId."','".$CustomerId."')";
        $res=array();
        if($conn->query($str)==true){
            $res["RecodeInsert"]="true";
            echo json_encode($res);
        }
        else{
            $res["RecodeInsert"]='false';
            echo json_encode($res);
        }
       
        
    }
    else{
        $res["text"]="error";
        $res["invalid"]="error";
        echo json_encode($res);
    }

?>