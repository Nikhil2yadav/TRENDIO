<?php 
//     include "../Header.php";
//     include "../Connection.php";

//     $sql="SELECT s.sellerId, s.Name, COUNT(p.productId) AS totalProducts 
//         FROM Seller s
//         LEFT JOIN Products p ON s.sellerId = p.sellerId
//         GROUP BY s.sellerId
//         ORDER BY totalProducts DESC";

// $result = mysqli_query($conn, $sql);
// $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// echo json_encode($data);

// include "../Header.php";
// include "../Connection.php";

// // Get query parameters
// $month = isset($_GET['month']) ? $_GET['month'] : '';
// $year = isset($_GET['year']) ? $_GET['year'] : '';
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';

// // Base SQL query
// $sql = "SELECT s.sellerId, s.Name, COUNT(p.productId) AS totalProducts 
//         FROM Seller s
//         LEFT JOIN Products p ON s.sellerId = p.sellerId";

// // Add conditions for month, year, and sellerId if they are provided
// $whereClauses = [];
// if ($month) {
//     $whereClauses[] = "MONTH(p.date) = '$month'";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(p.date) = '$year'";
// }
// if ($sellerId) {
//     $whereClauses[] = "s.sellerId = '$sellerId'";
// }

// // Combine conditions if necessary
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// $sql .= " GROUP BY s.sellerId ORDER BY totalProducts DESC";

// $result = mysqli_query($conn, $sql);
// $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// echo json_encode($data);
// include "../Header.php";
// include "../Connection.php";

// // Get query parameters
// $month = isset($_GET['month']) ? $_GET['month'] : '';  // Default is empty if not set
// $year = isset($_GET['year']) ? $_GET['year'] : '';  // Default is empty if not set
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';  // Default is empty if not set

// // Base SQL query to count products per seller
// $sql = "SELECT s.sellerId, s.Name, COUNT(p.productId) AS totalProducts 
// FROM Seller s
// JOIN approvedseller a ON s.sellerId = a.sellerId  -- Ensures only approved sellers are included
// LEFT JOIN Products p ON s.sellerId = p.sellerId 
// GROUP BY s.sellerId, s.Name
// ORDER BY totalProducts DESC;
// ";

// // Add conditions based on the parameters passed
// $whereClauses = [];
// if ($month) {
//     $whereClauses[] = "MONTH(p.date) = '$month'";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(p.date) = '$year'";
// }
// if ($sellerId) {
//     $whereClauses[] = "s.sellerId = '$sellerId'";
// }

// // Append where conditions if any
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// $sql .= " GROUP BY s.sellerId ORDER BY totalProducts DESC";

// // Execute the query
// $result = mysqli_query($conn, $sql);

// // Fetch all rows
// $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// // Return the result as JSON
// echo json_encode($data);
include "../Header.php";
include "../Connection.php";

// Get query parameters
$month = isset($_GET['month']) ? $_GET['month'] : '';  
$year = isset($_GET['year']) ? $_GET['year'] : '';  
$sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';  

// Base SQL query to count products per seller
$sql = "SELECT s.sellerId, s.Name, COUNT(p.productId) AS totalProducts 
        FROM Seller s
        JOIN approvedseller a ON s.sellerId = a.sellerId  
        LEFT JOIN Products p ON s.sellerId = p.sellerId";  

// Add conditions based on the parameters passed
$whereClauses = [];

if ($month) {
    $whereClauses[] = "MONTH(p.date) = '$month'";
}
if ($year) {
    $whereClauses[] = "YEAR(p.date) = '$year'";
}
if ($sellerId) {
    $whereClauses[] = "s.sellerId = '$sellerId'";
}

// Append WHERE conditions if any
if (count($whereClauses) > 0) {
    $sql .= " WHERE " . implode(" AND ", $whereClauses);
}

// Add GROUP BY and ORDER BY at the end (correct placement)
$sql .= " GROUP BY s.sellerId, s.Name ORDER BY totalProducts DESC";

// Execute the query
$result = mysqli_query($conn, $sql);

// Fetch all rows
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Return the result as JSON
echo json_encode($data);

?>

