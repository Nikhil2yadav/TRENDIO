<?php 
include "connection.php";
include "Header.php";
if(isset($_POST['SellerId'])){
    $SellerId = $_POST['SellerId'];
} else {
    $res['error'] = "SellerId Not Found";
    echo json_encode($res);
    exit;
}
$query = "SELECT SUM(sellerAmount) as totalsellerAmount
    FROM payments p
    JOIN `order` o ON p.orderId = o.orderId
    JOIN orderdetails od ON o.orderId = od.orderId
    JOIN products pr ON od.ProductId = pr.ProductId
    JOIN productimages pi ON pr.ProductId = pi.ProductId
    JOIN seller s ON pr.SellerId = s.SellerId
    JOIN buyer b ON p.BuyerId = b.BuyerId
    JOIN address a ON o.AddressId = a.AddressId
    WHERE  s.SellerId = '$SellerId'";
$result = mysqli_query($conn, $query);

if ($row = mysqli_fetch_assoc($result)) {
    $totalAmount = $row['totalsellerAmount'];
    echo json_encode(['totalsellerAmount' => $totalAmount]);
} else {
    echo json_encode(['totalsellerAmount' => 0]);
}
