<?php
// include "Header.php";
// include "connection.php"; // Include your database connection file

// // $data = json_decode(file_get_contents("php://input"), true);

// if (
//     isset($_POST['orderId']) &&
//     isset($_POST['BuyerId']) &&
//     isset($_POST['paymentMethod']) &&
//     isset($_POST['amount']) 
//     // isset($_POST['paymentStatus'])
// ) {
//     $orderId = $_POST['orderId'];
//     $BuyerId = $_POST['BuyerId'];
//     $paymentMethod = $_POST['paymentMethod'];
//     $amount = $_POST['amount'];
//     // $paymentStatus = $_POST['paymentStatus'];
//     $paymentStatus = "Completed";

//     // Generate a unique transaction ID
//     do {
//         $transactionId = "TXN_" . time() . rand(1000, 9999);
//         $checkQuery = "SELECT transactionId FROM payments WHERE transactionId = '$transactionId'";
//         $result = mysqli_query($conn, $checkQuery);
//     } while (mysqli_num_rows($result) > 0);

//     // Insert payment details into the database
//     $sql = "INSERT INTO payments (orderId, BuyerId, paymentMethod, transactionId, amount, paymentStatus) 
//             VALUES ('$orderId', '$BuyerId', '$paymentMethod', '$transactionId', '$amount', '$paymentStatus')";

//     if (mysqli_query($conn, $sql)) {
//         $updateOrder = "UPDATE `order` SET status = '1', delivery_status = 'Pending' WHERE orderId = '$orderId'";
//         mysqli_query($conn, $updateOrder);

//         echo json_encode([
//             "success" => true,
//             "message" => "Payment inserted successfully",
//             "transactionId" => $transactionId
//         ]);
//         $deleteAddtocartproduct=""
//     } else {
//         echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
//     }
// } else {
//     echo json_encode(["success" => false, "error" => "Missing required fields"]);
// }

// mysqli_close($conn);

include "Header.php";
include "connection.php"; // Include your database connection file

if (
    isset($_POST['orderId']) &&
    isset($_POST['BuyerId']) &&
    isset($_POST['paymentMethod']) &&
    isset($_POST['amount']) 
) {
    $orderId = $_POST['orderId'];
    $BuyerId = $_POST['BuyerId'];
    $paymentMethod = $_POST['paymentMethod'];
    $amount = $_POST['amount'];
    $paymentStatus = "Completed";
    $adminAmount = $amount * 0.1; // 10%
    $sellerAmount = $amount * 0.9; // 90%
    // Generate a unique transaction ID
    do {
        $transactionId = "TXN_" . time() . rand(1000, 9999);
        $checkQuery = "SELECT transactionId FROM payments WHERE transactionId = '$transactionId'";
        $result = mysqli_query($conn, $checkQuery);
    } while (mysqli_num_rows($result) > 0);

    // Insert payment details into the database
    $sql = "INSERT INTO payments (orderId, BuyerId, paymentMethod, transactionId, amount, paymentStatus,adminAmount,sellerAmount) 
            VALUES ('$orderId', '$BuyerId', '$paymentMethod', '$transactionId', '$amount', '$paymentStatus','$adminAmount','$sellerAmount')";

    if (mysqli_query($conn, $sql)) {
        // Update order status
        $updateOrder = "UPDATE `order` SET status = '1'  WHERE orderId = '$orderId'";
        mysqli_query($conn, $updateOrder);

        // Delete products from add to cart after successful payment
        $deleteAddToCart = "DELETE FROM addtocart WHERE BuyerId = '$BuyerId'";
        mysqli_query($conn, $deleteAddToCart);

        echo json_encode([
            "success" => true,
            "message" => "Payment inserted successfully",
            "transactionId" => $transactionId
        ]);
    } else {
        echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
}

mysqli_close($conn);
?>

