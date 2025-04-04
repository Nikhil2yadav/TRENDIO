<?php
// include '../Connection.php'; // Include your database connection file
// include "../Header.php";
// header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// // Get Seller ID from request (Assuming seller is logged in and sending their ID)
// $sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : 0;

// if ($sellerId == 0) {
//     echo json_encode(["error" => "Invalid seller ID"]);
//     exit;
// }

// $response = [];

// // Fetch Total Revenue
// $revenueQuery = "SELECT SUM(o.totalamount) AS total_revenue 
//                  FROM `order` o 
//                  INNER JOIN orderdetails od ON o.orderId = od.orderid
//                  INNER JOIN products p ON od.productid = p.ProductId
//                  WHERE p.sellerid = ?";
// $stmt = $conn->prepare($revenueQuery);
// $stmt->bind_param("i", $sellerId);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_revenue'] = $result->fetch_assoc()['total_revenue'] ?? 0;

// // Fetch Total Orders
// $orderCountQuery = "SELECT COUNT(o.orderId) AS total_orders 
//                     FROM `order` o 
//                     INNER JOIN orderdetails od ON o.orderid = od.orderid
//                     INNER JOIN products p ON od.productid = p.ProductId
//                     WHERE p.sellerid = ?";
// $stmt = $conn->prepare($orderCountQuery);
// $stmt->bind_param("i", $sellerId);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_orders'] = $result->fetch_assoc()['total_orders'] ?? 0;

// // Fetch Order Details with Product Info
// $orderDetailsQuery = "SELECT o.orderId AS order_id, o.date, o.totalamount, 
//                       p.ProductId AS product_id, p.productname, p.ProductPrice, od.quantity, od.delivery_status
//                       FROM `order` o 
//                       INNER JOIN orderdetails od ON o.orderId = od.orderid
//                       INNER JOIN products p ON od.productid = p.ProductId
//                       WHERE p.sellerid = ?";
// $stmt = $conn->prepare($orderDetailsQuery);
// $stmt->bind_param("i", $sellerId);
// $stmt->execute();
// $result = $stmt->get_result();
// $orderDetails = [];
// while ($row = $result->fetch_assoc()) {
//     $orderDetails[] = $row;
// }
// $response['orders'] = $orderDetails;

// echo json_encode($response);

// include '../Connection.php'; // Database connection
// include "../Header.php";
// header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// $sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : 0;
// $month = isset($_GET['month']) ? intval($_GET['month']) : 0;
// $year = isset($_GET['year']) ? intval($_GET['year']) : 0;
// $productName = isset($_GET['productName']) ? $_GET['productName'] : '';

// if ($sellerId == 0) {
//     echo json_encode(["error" => "Invalid seller ID"]);
//     exit;
// }

// $response = [];

// // Fetch Total Revenue with filters
// $whereClauses = ["p.sellerid = ?"];
// $params = [$sellerId];
// $types = "i";

// if ($month > 0) {
//     $whereClauses[] = "MONTH(o.date) = ?";
//     $params[] = $month;
//     $types .= "i";
// }

// if ($year > 0) {
//     $whereClauses[] = "YEAR(o.date) = ?";
//     $params[] = $year;
//     $types .= "i";
// }

// if (!empty($productName)) {
//     $whereClauses[] = "p.productname LIKE ?";
//     $params[] = "%" . $productName . "%";
//     $types .= "s";
// }

// $whereSql = implode(" AND ", $whereClauses);

// $revenueQuery = "SELECT SUM(o.totalamount) AS total_revenue FROM `order` o 
//                  INNER JOIN orderdetails od ON o.orderId = od.orderid 
//                  INNER JOIN products p ON od.productid = p.ProductId 
//                  WHERE $whereSql";
// $stmt = $conn->prepare($revenueQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_revenue'] = $result->fetch_assoc()['total_revenue'] ?? 0;

// // Fetch Total Orders
// $orderCountQuery = "SELECT COUNT(o.orderId) AS total_orders FROM `order` o 
//                     INNER JOIN orderdetails od ON o.orderid = od.orderid 
//                     INNER JOIN products p ON od.productid = p.ProductId 
//                     WHERE $whereSql";
// $stmt = $conn->prepare($orderCountQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_orders'] = $result->fetch_assoc()['total_orders'] ?? 0;

// // Fetch Order Details
// $orderDetailsQuery = "SELECT o.orderId AS order_id, o.date, o.totalamount, 
//                       p.ProductId AS product_id, p.productname, p.ProductPrice, od.quantity, od.delivery_status 
//                       FROM `order` o 
//                       INNER JOIN orderdetails od ON o.orderId = od.orderid 
//                       INNER JOIN products p ON od.productid = p.ProductId 
//                       WHERE $whereSql";
// $stmt = $conn->prepare($orderDetailsQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $orderDetails = [];
// while ($row = $result->fetch_assoc()) {
//     $orderDetails[] = $row;
// }
// $response['orders'] = $orderDetails;

// echo json_encode($response);
// include '../Connection.php'; // Database connection
// include "../Header.php";
// header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// $sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : 0;
// $month = isset($_GET['month']) ? intval($_GET['month']) : 0;
// $year = isset($_GET['year']) ? intval($_GET['year']) : 0;
// $productName = isset($_GET['productName']) ? $_GET['productName'] : '';

// if ($sellerId == 0) {
//     echo json_encode(["error" => "Invalid seller ID"]);
//     exit;
// }

// $response = [];

// // Fetch all available years
// $yearQuery = "SELECT DISTINCT YEAR(o.date) AS year FROM `order` o ORDER BY year DESC";
// $result = $conn->query($yearQuery);
// $years = [];
// while ($row = $result->fetch_assoc()) {
//     $years[] = $row['year'];
// }
// $response['years'] = $years;

// // Fetch all available months
// $monthQuery = "SELECT DISTINCT MONTH(o.date) AS month FROM `order` o ORDER BY month ASC";
// $result = $conn->query($monthQuery);
// $months = [];
// while ($row = $result->fetch_assoc()) {
//     $months[] = date("F", mktime(0, 0, 0, $row['month'], 1)); // Convert to full month name
// }
// $response['months'] = $months;

// // Fetch all data first (without filters)
// if ($month == 0 && $year == 0 && empty($productName)) {
//     $whereSql = "p.sellerid = ?";
//     $params = [$sellerId];
//     $types = "i";
// } else {
//     // Apply filters when provided
//     $whereClauses = ["p.sellerid = ?"];
//     $params = [$sellerId];
//     $types = "i";

//     if ($month > 0) {
//         $whereClauses[] = "MONTH(o.date) = ?";
//         $params[] = $month;
//         $types .= "i";
//     }

//     if ($year > 0) {
//         $whereClauses[] = "YEAR(o.date) = ?";
//         $params[] = $year;
//         $types .= "i";
//     }

//     if (!empty($productName)) {
//         $whereClauses[] = "p.productname LIKE ?";
//         $params[] = "%" . $productName . "%";
//         $types .= "s";
//     }

//     $whereSql = implode(" AND ", $whereClauses);
// }

// // Fetch Total Revenue
// $revenueQuery = "SELECT SUM(o.totalamount) AS total_revenue FROM `order` o 
//                  INNER JOIN orderdetails od ON o.orderId = od.orderid 
//                  INNER JOIN products p ON od.productid = p.ProductId 
//                  WHERE $whereSql";
// $stmt = $conn->prepare($revenueQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_revenue'] = $result->fetch_assoc()['total_revenue'] ?? 0;

// // Fetch Total Orders
// $orderCountQuery = "SELECT COUNT(o.orderId) AS total_orders FROM `order` o 
//                     INNER JOIN orderdetails od ON o.orderid = od.orderid 
//                     INNER JOIN products p ON od.productid = p.ProductId 
//                     WHERE $whereSql";
// $stmt = $conn->prepare($orderCountQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $response['total_orders'] = $result->fetch_assoc()['total_orders'] ?? 0;

// // Fetch Order Details
// $orderDetailsQuery = "SELECT o.orderId AS order_id, o.date, o.totalamount, 
//                       p.ProductId AS product_id, p.productname,p.producttype, p.ProductPrice, od.quantity, od.delivery_status 
//                       FROM `order` o 
//                       INNER JOIN orderdetails od ON o.orderId = od.orderid 
//                       INNER JOIN products p ON od.productid = p.ProductId 
//                       WHERE $whereSql";
// $stmt = $conn->prepare($orderDetailsQuery);
// $stmt->bind_param($types, ...$params);
// $stmt->execute();
// $result = $stmt->get_result();
// $orderDetails = [];
// while ($row = $result->fetch_assoc()) {
//     $orderDetails[] = $row;
// }
// $response['orders'] = $orderDetails;

// // Return full response
// echo json_encode($response);

include '../Connection.php'; // Database connection
include "../Header.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : 0;
$month = isset($_GET['month']) ? intval($_GET['month']) : 0;
$year = isset($_GET['year']) ? intval($_GET['year']) : 0;
$productName = isset($_GET['productName']) ? $_GET['productName'] : '';
$productType = isset($_GET['productType']) ? $_GET['productType'] : '';

if ($sellerId == 0) {
    echo json_encode(["error" => "Invalid seller ID"]);
    exit;
}

$response = [];

// Fetch all available years
$yearQuery = "SELECT DISTINCT YEAR(o.date) AS year FROM `order` o ORDER BY year DESC";
$result = $conn->query($yearQuery);
$years = [];
while ($row = $result->fetch_assoc()) {
    $years[] = $row['year'];
}
$response['years'] = $years;

// Fetch all available months
$monthQuery = "SELECT DISTINCT MONTH(o.date) AS month FROM `order` o ORDER BY month ASC";
$result = $conn->query($monthQuery);
$months = [];
while ($row = $result->fetch_assoc()) {
    $months[] = date("F", mktime(0, 0, 0, $row['month'], 1)); // Convert to full month name
}
$response['months'] = $months;

// Apply filters based on input parameters
$whereClauses = ["p.sellerid = ?"];
$params = [$sellerId];
$types = "i";

if ($month > 0) {
    $whereClauses[] = "MONTH(o.date) = ?";
    $params[] = $month;
    $types .= "i";
}

if ($year > 0) {
    $whereClauses[] = "YEAR(o.date) = ?";
    $params[] = $year;
    $types .= "i";
}

if (!empty($productName)) {
    $whereClauses[] = "p.productname LIKE ?";
    $params[] = "%" . $productName . "%";
    $types .= "s";
}

if (!empty($productType)) {
    $whereClauses[] = "p.producttype = ?";
    $params[] = $productType;
    $types .= "s";
}

$whereSql = implode(" AND ", $whereClauses);

// Fetch Total Revenue
$revenueQuery = "SELECT SUM(o.totalamount) AS total_revenue FROM `order` o 
                 INNER JOIN orderdetails od ON o.orderId = od.orderid 
                 INNER JOIN products p ON od.productid = p.ProductId 
                 WHERE $whereSql";

$stmt = $conn->prepare($revenueQuery);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();
$response['total_revenue'] = $result->fetch_assoc()['total_revenue'] ?? 0;

// Fetch Total Orders
$orderCountQuery = "SELECT COUNT(o.orderId) AS total_orders FROM `order` o 
                    INNER JOIN orderdetails od ON o.orderid = od.orderid 
                    INNER JOIN products p ON od.productid = p.ProductId 
                    WHERE $whereSql";

$stmt = $conn->prepare($orderCountQuery);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();
$response['total_orders'] = $result->fetch_assoc()['total_orders'] ?? 0;

// Fetch Order Details
$orderDetailsQuery = "SELECT o.orderId AS order_id, o.date, o.totalamount, 
                      p.ProductId AS product_id, p.productname, p.producttype, p.ProductPrice, 
                      od.quantity, od.delivery_status 
                      FROM `order` o 
                      INNER JOIN orderdetails od ON o.orderId = od.orderid 
                      INNER JOIN products p ON od.productid = p.ProductId 
                      WHERE $whereSql";

$stmt = $conn->prepare($orderDetailsQuery);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();
$orderDetails = [];
while ($row = $result->fetch_assoc()) {
    $orderDetails[] = $row;
}
$response['orders'] = $orderDetails;

// Return full response
echo json_encode($response);
?>



