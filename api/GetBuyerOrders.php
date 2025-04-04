<?php 
    include "Header.php";
    include "Connection.php";

    $res=array();

    if(isset($_GET['BuyerId'])){
        $BuyerId=$_GET['BuyerId'];

        $get_buyer_order="SELECT productimages.Image1, `order`.date as orderDate , `order`.orderId, products.ProductName , orderdetails.subtotal , orderdetails.delivery_status FROM `orderdetails` JOIN `order`ON `order`.orderId=orderdetails.orderId 
JOIN `products` ON orderdetails.ProductId=products.ProductId
JOIN `productimages` ON productimages.ProductId=products.ProductId
JOIN `address` ON `order`.addressid = address.addressid WHERE address.Buyerid='$BuyerId' ORDER BY `order`.date DESC;";
        $result=mysqli_query($conn,$get_buyer_order);
        if($result){
            while($row=mysqli_fetch_assoc($result)){
                $res[]=$row;
            }
            echo json_encode($res);
        }
    }
    else{
        $res['error']='BuyerId not found'; 
        echo json_encode($res);
    }
?>