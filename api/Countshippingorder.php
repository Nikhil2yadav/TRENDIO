<?php 
    include "Header.php";
    include "connection.php";
    $res=array();
    if(isset($_POST['SellerId'])){
        $SellerId=$_POST["SellerId"];
        
    }
    else{
        $res['error']="Seller Id is not found";
        json_encode($res);
        exit;
    }
    $countorder_seller="SELECT 
    s.SellerId,
    s.Name AS SellerName,
    p.paymentId,
    o.orderId,
    od.orderDetailId,
    pr.ProductId,
    p.paymentStatus
FROM payments p
JOIN `order` o ON p.orderId = o.orderId
JOIN orderdetails od ON o.orderId = od.orderId
JOIN products pr ON od.ProductId = pr.ProductId
JOIN seller s ON pr.SellerId = s.SellerId
WHERE od.delivery_status = 'Shipped' 
AND s.SellerId = '$SellerId'"; 

    $Ordercount_seller=mysqli_query($conn,$countorder_seller);
    $count=mysqli_num_rows($Ordercount_seller);
    $res['totalorder']=$count;
    echo json_encode($res);
?>