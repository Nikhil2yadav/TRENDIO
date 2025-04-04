<?php 
//     include "Connection.php";
//     include "Header.php";
//     $res=array();
//     if(isset($_GET['orderId'])){
//         $orderId=$_GET['orderId'];
//         $getdata="SELECT 
//         p.paymentId,
//         p.orderId,
//         p.paymentMethod,
//         p.amount AS paidAmount,
//         p.paymentStatus,
//         p.BuyerId,
//         o.date,
//         o.totalAmount AS orderTotal,
//         o.status AS orderStatus,
//         od.*,
//         a.addtocartId,
//         pr.productname,
//         pi.*,
//         addr.*
//         FROM `payments` p
//         INNER JOIN `order` o ON p.orderId  = o.orderId 
//         INNER JOIN orderdetails od ON o.orderId = od.orderId
//         INNER JOIN addtocart a ON od.addtocartId = a.addtocartId
//         INNER JOIN products pr ON a.productid = pr.productid
//         LEFT JOIN productimages pi ON pr.productid = pi.productid
//         INNER JOIN address addr ON o.addressId = addr.addressId
//         WHERE p.orderId = '$orderId'";
//         $result=mysqli_query($conn,$getdata);
//         if(mysqli_num_rows($result)>0){
//             $orderd=[];
//             while($row=mysqli_fetch_assoc($result)){
//                 $orderd[]=$row;
//             }
//             echo json_encode([$orderd]);
//         }else {
//             echo json_encode(["message" => "No order found"]);
//         }
        
// }else{
//     $res['orderId']="Not Found";
// echo json_encode($res);

// }  
// include "Connection.php";
// include "Header.php";

// $res = [];

// if (isset($_GET['orderId'])) {
//     $orderId = $_GET['orderId'];

//     $getdata = "SELECT 
//         p.paymentId,
//         p.orderId,
//         p.paymentMethod,
//         p.amount AS paidAmount,
//         p.paymentStatus,
//         p.BuyerId,
//         o.date,
//         o.totalAmount AS orderTotal,
//         o.status AS orderStatus,
//         od.*,
//         a.*,
//         pr.productname,
//         pi.*,
//         addr.*
//     FROM `payments` p
//     INNER JOIN `order` o ON p.orderId = o.orderId 
//     INNER JOIN orderdetails od ON o.orderId = od.orderId
//     INNER JOIN addtocart a ON od.addtocartId = a.addtocartId
//     INNER JOIN products pr ON a.productid = pr.productid
//     LEFT JOIN productimages pi ON pr.productid = pi.productid
//     INNER JOIN address addr ON o.addressId = addr.addressId
//     WHERE p.orderId = '$orderId'";

//     $result = mysqli_query($conn, $getdata);

//     if (mysqli_num_rows($result) > 0) {
//         $orderd = [];

//         while ($row = mysqli_fetch_assoc($result)) {
//             $orderd[] = $row;
//         }

//         echo json_encode($orderd); // Remove extra nesting
//     } else {
//         echo json_encode(["message" => "No order found"]);
//     }
// } else {
//     echo json_encode(["error" => "orderId not provided"]);
// }
include "Connection.php";
include "Header.php";
$res = [];

if (isset($_GET['orderId'])) {
    $orderId = $_GET['orderId'];

    $getdata = "SELECT 
    p.paymentId,
    p.orderId,
    p.paymentMethod,
    p.amount AS paidAmount,
    p.paymentStatus,
    p.BuyerId,
    o.date,
    o.totalAmount AS orderTotal,
    o.status AS orderStatus,
    od.*,
    pr.*,
    pi.*,
    addr.*
FROM `payments` p
INNER JOIN `order` o ON p.orderId = o.orderId 
INNER JOIN orderdetails od ON o.orderId = od.orderId
INNER JOIN products pr ON od.productId = pr.productId
LEFT JOIN productimages pi ON pr.productid = pi.productid
INNER JOIN address addr ON o.addressId = addr.addressId
WHERE p.orderId = '$orderId'";

    $result = mysqli_query($conn, $getdata);

    if (mysqli_num_rows($result) > 0) {
        $order = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $order[] = $row;
        }

        // Send a clean JSON response
        echo json_encode($order);
    } else {
        echo json_encode(["message" => "No order found"]);
    }
} else {
    echo json_encode(["orderId" => "Not Found"]);
}
?>
