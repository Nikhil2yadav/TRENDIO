<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_GET['ProductId'])){
        $ProductId=$_GET['ProductId'];
        $singleProductquery="SELECT 
                    p.*,
                    pi.*,
                    ps.*
                    FROM products p
                    LEFT JOIN productimages pi ON p.productId = pi.productId
                    LEFT JOIN productsize ps ON p.productId = ps.productId
                    WHERE p.productId = '$ProductId';";
        $result=mysqli_query($conn,$singleProductquery);
        if($row=mysqli_fetch_assoc($result)){
            echo json_encode($row);
        }
        else {
            echo json_encode(array("status" => "error", "message" => "Product not found"));
        }
    }else{
        $res['error']="ProductId is not found";
        echo json_encode($res);
    }

?>