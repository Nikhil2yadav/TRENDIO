<?php
// include "connection.php";
// // header('Content-Type: application/json');
// include "Header.php";

// // Check if orderId is provided
// if (!isset($_GET['orderId'])) {
//     echo json_encode(["error" => "Order ID not provided"]);
//     exit();
// }

// $orderId = $_GET['orderId'];

// // Query to fetch ordered products
// $sql = "SELECT 
//     o.*,
//     od.*,
//     p.*,
//     pi.*
// FROM `order` o
// INNER JOIN orderdetails od ON o.orderId = od.orderId
// INNER JOIN addtocart a ON od.addtocartid = a.addtocartid
// INNER JOIN products p ON a.productid = p.productid
// INNER JOIN productimages pi ON p.productid = pi.productid
// WHERE o.orderId = '$orderId'
// ";

// $result = mysqli_query($conn, $sql);

// if (mysqli_num_rows($result) > 0) {
//     $orderDetails = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $orderDetails[] = $row;
//     }
//     echo json_encode(["orderDetails" => $orderDetails]);
// } else {
//     echo json_encode(["message" => "No products found for this order"]);
// }

include "connection.php";
include "Header.php";

// Check if orderId is provided
if (!isset($_GET['orderId'])) {
    echo json_encode(["error" => "Order ID not provided"]);
    exit();
}

$orderId = $_GET['orderId'];

// Query to fetch ordered products
$sql = "SELECT 
            o.*,
            od.*,
            p.*,
            pi.*
        FROM `order` o
        INNER JOIN orderdetails od ON o.orderId = od.orderId
        INNER JOIN products p ON od.productId = p.productId
        INNER JOIN productimages pi ON p.productId = pi.productId
        WHERE o.orderId = '$orderId'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $orderDetails = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $orderDetails[] = $row;
    }
    echo json_encode(["orderDetails" => $orderDetails]);
} else {
    echo json_encode(["message" => "No products found for this order"]);
}
?>

