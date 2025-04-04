<?php 
// include "connection.php";
// include "Header.php";

// $res = array();

// if (isset($_POST['addressid'])) {
//     $addressid = $_POST['addressid'];
// } else {
//     $res['error'] = "Address ID not found";
//     echo json_encode($res);
//     exit;
// }

// if (isset($_POST['totalamount'])) {
//     $totalamount = $_POST['totalamount'];
// } else {
//     $res['error'] = "Total amount not found";
//     echo json_encode($res);
//     exit;
// }

// // Insert into order table
// $orderInsert = "INSERT INTO `order` (addressid, totalamount, date, status) VALUES ('$addressid', '$totalamount', NOW(), '0')";
// $result = mysqli_query($conn, $orderInsert);

// if ($result) {
//     $orderId = mysqli_insert_id($conn); // Get last inserted order ID

//     if (isset($_POST['addtocartid']) && isset($_POST['quantity']) && isset($_POST['subtotal'])) {
//         $addtocartIds = $_POST['addtocartid'];
//         $quantities = $_POST['quantity'];
//         $subtotals = $_POST['subtotal'];

//         // Insert each cart item into orderdetaile table
//         for ($i = 0; $i < count($addtocartIds); $i++) {
//             $addtocartId = $addtocartIds[$i];
//             $quantity = $quantities[$i];
//             $subtotal = $subtotals[$i];

//             $orderDetailInsert = "INSERT INTO orderdetails (orderId, addtocartId, quantity, subtotal) 
//                                   VALUES ('$orderId', '$addtocartId', '$quantity', '$subtotal')";
//             mysqli_query($conn, $orderDetailInsert);
//         }
//     }

//     $res["Order"] = "true";
//     $res["orderId"] = $orderId;
// } else {
//     $res["Order"] = "false";
// }

// echo json_encode($res);

// include "connection.php";
// include "Header.php";

// $res = array();

// if (isset($_POST['addressid'])) {
//     $addressid = $_POST['addressid'];
// } else {
//     $res['error'] = "Address ID not found";
//     echo json_encode($res);
//     exit;
// }

// if (isset($_POST['totalamount'])) {
//     $totalamount = $_POST['totalamount'];
// } else {
//     $res['error'] = "Total amount not found";
//     echo json_encode($res);
//     exit;
// }

// // Insert into order table
// $orderInsert = "INSERT INTO `order` (addressid, totalamount, date, status) VALUES ('$addressid', '$totalamount', NOW(), '0')";
// $result = mysqli_query($conn, $orderInsert);

// if ($result) {
//     $orderId = mysqli_insert_id($conn); // Get last inserted order ID

//     if (isset($_POST['addtocartid']) && isset($_POST['quantity']) && isset($_POST['subtotal'])) {
//         $addtocartIds = $_POST['addtocartid'];
//         $quantities = $_POST['quantity'];
//         $subtotals = $_POST['subtotal'];

//         // Insert each product from addtocart into orderdetails table
//         for ($i = 0; $i < count($addtocartIds); $i++) {
//             $addtocartId = $addtocartIds[$i];
//             $quantity = $quantities[$i];
//             $subtotal = $subtotals[$i];

//             // Fetch productId from addtocart table
//             $productQuery = "SELECT ProductId FROM addtocart WHERE addtocartId = '$addtocartId'";
//             $productResult = mysqli_query($conn, $productQuery);
//             $productRow = mysqli_fetch_assoc($productResult);
//             $productId = $productRow['ProductId'];

//             // Insert product details into orderdetails table
//             $orderDetailInsert = "INSERT INTO orderdetails (orderId, ProductId, quantity, subtotal) 
//                                   VALUES ('$orderId', '$productId', '$quantity', '$subtotal')";
//             mysqli_query($conn, $orderDetailInsert);
//         }
//     }

//     $res["Order"] = "true";
//     $res["orderId"] = $orderId;
// } else {
//     $res["Order"] = "false";
// }

// echo json_encode($res);

// include "connection.php";
// include "Header.php";

// $res = array();

// if (isset($_POST['addressid'])) {
//     $addressid = $_POST['addressid'];
// } else {
//     $res['error'] = "Address ID not found";
//     echo json_encode($res);
//     exit;
// }

// if (isset($_POST['totalamount'])) {
//     $totalamount = $_POST['totalamount'];
// } else {
//     $res['error'] = "Total amount not found";
//     echo json_encode($res);
//     exit;
// }

// // Insert into order table
// $orderInsert = "INSERT INTO `order` (addressid, totalamount, date, status) VALUES ('$addressid', '$totalamount', NOW(), '0')";
// $result = mysqli_query($conn, $orderInsert);

// if ($result) {
//     $orderId = mysqli_insert_id($conn); // Get last inserted order ID

//     if (isset($_POST['addtocartid']) && isset($_POST['quantity']) && isset($_POST['subtotal']) && isset($_POST['Size'])) {
//         $addtocartIds = $_POST['addtocartid'];
//         $quantities = $_POST['quantity'];
//         $subtotals = $_POST['subtotal'];
//         // $sizes = $_POST['Size'];  // New size array

//         // Insert each product into orderdetails table
//         for ($i = 0; $i < count($addtocartIds); $i++) {
//             $addtocartId = $addtocartIds[$i];
//             $quantity = $quantities[$i];
//             $subtotal = $subtotals[$i];
//             // $size = $sizes[$i]; // Get size for each product

//             // Fetch productId from addtocart table
//             $productQuery = "SELECT * FROM addtocart WHERE addtocartId = '$addtocartId'";
//             $productResult = mysqli_query($conn, $productQuery);
//             $productRow = mysqli_fetch_assoc($productResult);
//             $productId = $productRow['ProductId'];
//             $Size=$productRow['Size'];

//             // Insert product, quantity, subtotal, and size into orderdetails table
//             $orderDetailInsert = "INSERT INTO orderdetails (orderId, ProductId, quantity, subtotal, Size) 
//                                   VALUES ('$orderId', '$productId', '$quantity', '$subtotal', '$Size')";
//             mysqli_query($conn, $orderDetailInsert);
//         }
//     }
//     $res["Order"] = "true";
//     $res["orderId"] = $orderId;
// } else {
//     $res["Order"] = "false";
// }

// echo json_encode($res);
include "connection.php";
include "Header.php";

$res = array();

if (isset($_POST['addressid'])) {
    $addressid = $_POST['addressid'];
} else {
    $res['error'] = "Address ID not found";
    echo json_encode($res);
    exit;
}

if (isset($_POST['totalamount'])) {
    $totalamount = $_POST['totalamount'];
} else {
    $res['error'] = "Total amount not found";
    echo json_encode($res);
    exit;
}

// Insert into order table
$orderInsert = "INSERT INTO `order` (addressid, totalamount, date, status) VALUES ('$addressid', '$totalamount', NOW(), '0')";
$result = mysqli_query($conn, $orderInsert);

if ($result) {
    $orderId = mysqli_insert_id($conn); // Get last inserted order ID

    if (isset($_POST['addtocartid']) && isset($_POST['quantity']) && isset($_POST['subtotal'])) {
        $addtocartIds = $_POST['addtocartid'];
        $quantities = $_POST['quantity'];
        $subtotals = $_POST['subtotal'];

        // Insert each product into orderdetails table
        for ($i = 0; $i < count($addtocartIds); $i++) {
            $addtocartId = $addtocartIds[$i];
            $quantity = $quantities[$i];
            $subtotal = $subtotals[$i];

            // Fetch ProductId and Size from addtocart table
            $productQuery = "SELECT ProductId, price, Size FROM addtocart WHERE addtocartId = '$addtocartId'";
            $productResult = mysqli_query($conn, $productQuery);
            $productRow = mysqli_fetch_assoc($productResult);

            if ($productRow) {
                $productId = $productRow['ProductId'];
                $amount=$productRow['price'];
                $size = $productRow['Size'];

                // Insert product details into orderdetails table
                $orderDetailInsert = "INSERT INTO orderdetails (orderId, ProductId, quantity, subtotal, Size, amount) 
                                      VALUES ('$orderId', '$productId', '$quantity', '$subtotal', '$size','$amount')";
                mysqli_query($conn, $orderDetailInsert);
            }
        }
    }
    $res["Order"] = "true";
    $res["orderId"] = $orderId;
} else {
    $res["Order"] = "false";
}

echo json_encode($res);
?>

