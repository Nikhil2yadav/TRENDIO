<?php 
include "Header.php";
include "Connection.php";
$res = array();
if(isset($_POST['BuyerId'])){  // or $_GET['BuyerId'] if using GET
    $BuyerId = $_POST['BuyerId'];  // or $_GET['BuyerId'] if using GET
    $get_addtocart = "SELECT 
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
    $result = mysqli_query($conn, $get_addtocart);
    if($result){
        while($row = mysqli_fetch_assoc($result)){
            $res[] = $row;
        }
        echo json_encode($res);  // Send JSON-encoded data after the loop
    }else{
        $res["success"] = "false";
        echo json_encode($res);
    }
}else{
    $res['buyerid'] = 'not found';
    echo json_encode($res);
}
?>
