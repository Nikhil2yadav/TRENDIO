<?php 
    include "Connection.php";
    include "Header.php";
    // $res=array();
    $totalPeoduct="SELECT 
    p.adminAmount,
    p.sellerAmount,
    p.paymentDate,
    b.Name AS buyerName,
    b.email,
    o.date AS orderDate,
    od.quantity,
    od.subtotal,
    pr.productName,
    pr.productPrice,
    s.Name AS SellerName
FROM 
    payments p
JOIN 
    buyer b ON p.BuyerId = b.BuyerId
JOIN 
    `order` o ON p.`orderId` = o.`orderId`
JOIN 
    orderdetails od ON o.orderId = od.orderId
JOIN 
    products pr ON od.ProductId = pr.ProductId
JOIN 
    seller s ON pr.sellerId = s.sellerId
ORDER BY 
    p.paymentDate DESC;
 
";
    $data=mysqli_query($conn,$totalPeoduct);
    $result = array();
    while($row = mysqli_fetch_assoc($data)){
        $result[] = $row;
    }
    echo json_encode($result);
?>