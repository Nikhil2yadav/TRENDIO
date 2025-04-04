<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_POST['BuyerId'])){
        $BuyerId=$_POST['BuyerId'];
        $str="SELECT 
    addtocart.*, 
    products.*, 
    buyer.*, 
    productimages.Image1 AS ProductImage 
FROM 
    addtocart
JOIN 
    products ON products.ProductId = addtocart.ProductId
JOIN 
    buyer ON addtocart.BuyerId = buyer.BuyerId
LEFT JOIN 
    productimages ON productimages.ProductId = products.ProductId
WHERE 
    buyer.BuyerId = '".$BuyerId."'";
        $data=mysqli_query($conn,$str);
        while($row=mysqli_fetch_assoc($data)){
            $res[]=$row;
        }
    }else{
        $res['error']='BuyerId is not found';
        echo json_encode($res);
        return;
    }
    echo json_encode($res);
?>