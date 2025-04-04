
<?php
// include "../Header.php";
// include "../Connection.php";

// // Get query parameters
// $month = isset($_GET['month']) ? $_GET['month'] : '';  
// $year = isset($_GET['year']) ? $_GET['year'] : '';  
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';  

// // Base SQL query to count orders per seller
// $sql = "SELECT 
//     s.sellerId, 
//     s.Name, 
//     COUNT(DISTINCT o.orderId) AS totalOrders,  -- Distinct count of orders for each seller
//     p.productId,
//     p.productName,
//     p.productType  
// FROM Seller s
// JOIN approvedseller a ON s.sellerId = a.sellerId  
// JOIN Products p ON s.sellerId = p.sellerId  -- Join Seller with Products directly
// JOIN OrderDetails od ON p.productId = od.productId  -- Join OrderDetails to get orderId
// JOIN `Order` o ON o.orderId = od.orderId  -- Join Order table for the actual order
// GROUP BY s.sellerId, s.Name, p.productId, p.productName, p.productType
// ORDER BY totalOrders DESC;
// ";

// // Add conditions based on the parameters passed
// $whereClauses = [];

// if ($month) {
//     $whereClauses[] = "MONTH(o.date) = '$month'";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(o.date) = '$year'";
// }
// if ($sellerId) {
//     $whereClauses[] = "s.sellerId = '$sellerId'";
// }

// // Append WHERE conditions if any
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // Add GROUP BY and ORDER BY at the end (correct placement)
// $sql .= " GROUP BY s.sellerId, s.Name ORDER BY totalOrders DESC";

// // Execute the query
// $result = mysqli_query($conn, $sql);

// // Fetch all rows
// $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// // Return the result as JSON
// echo json_encode($data);

// include "../Header.php";
// include "../Connection.php";

// // Get query parameters
// $month = isset($_GET['month']) ? $_GET['month'] : '';  
// $year = isset($_GET['year']) ? $_GET['year'] : '';  
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';  

// // Base SQL query to count orders per seller
// $sql = "SELECT 
//     s.sellerId, 
//     s.Name, 
//     COUNT(DISTINCT o.orderId) AS totalOrders,  -- Distinct count of orders for each seller
//     p.productId,
//     p.productName,
//     p.productType  
// FROM Seller s
// JOIN approvedseller a ON s.sellerId = a.sellerId  
// JOIN Products p ON s.sellerId = p.sellerId  -- Join Seller with Products directly
// JOIN OrderDetails od ON p.productId = od.productId  -- Join OrderDetails to get orderId
// JOIN `Order` o ON o.orderId = od.orderId  -- Join Order table for the actual order
// ";

// // Add conditions based on the parameters passed
// $whereClauses = [];

// if ($month) {
//     $whereClauses[] = "MONTH(o.date) = ?";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(o.date) = ?";
// }
// if ($sellerId) {
//     $whereClauses[] = "s.sellerId = ?";
// }

// // Append WHERE conditions if any
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // Add GROUP BY and ORDER BY at the end (correct placement)
// $sql .= " GROUP BY s.sellerId, s.Name, p.productId, p.productName, p.productType ORDER BY totalOrders DESC";

// // Prepare the SQL statement
// $stmt = mysqli_prepare($conn, $sql);

// // Bind parameters dynamically based on the conditions
// $bindTypes = '';
// $params = [];

// if ($month) {
//     $bindTypes .= 'i';  // 'i' for integer (assuming month is an integer)
//     $params[] = $month;
// }
// if ($year) {
//     $bindTypes .= 'i';  // 'i' for integer (assuming year is an integer)
//     $params[] = $year;
// }
// if ($sellerId) {
//     $bindTypes .= 'i';  // 'i' for integer (assuming sellerId is an integer)
//     $params[] = $sellerId;
// }

// // Bind the parameters to the prepared statement
// if ($bindTypes) {
//     mysqli_stmt_bind_param($stmt, $bindTypes, ...$params);
// }

// // Execute the query
// mysqli_stmt_execute($stmt);

// // Get the result
// $result = mysqli_stmt_get_result($stmt);

// // Fetch all rows
// $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// // Return the result as JSON
// echo json_encode($data);

// // Close the prepared statement
// mysqli_stmt_close($stmt);

// include "../Header.php";
// include "../Connection.php";

// // Endpoint to get the distinct years for the dropdown
// if (isset($_GET['getYears']) && $_GET['getYears'] == 'true') {
//     $sql = "SELECT DISTINCT YEAR(date) AS year FROM `Order` ORDER BY year DESC";
//     $result = mysqli_query($conn, $sql);
    
//     $years = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $years[] = $row['year'];
//     }

//     // Return years as JSON
//     echo json_encode($years);
//     exit();
// }

// // Get filter parameters
// $month = isset($_GET['month']) ? $_GET['month'] : '';  
// $year = isset($_GET['year']) ? $_GET['year'] : '';  
// $productType = isset($_GET['productType']) ? $_GET['productType'] : '';  
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';

// // Base SQL query to count the number of products sold by each seller
// $sql = "SELECT 
//     s.sellerId, 
//     s.Name, 
//     COUNT(DISTINCT o.orderId) AS totalOrders, 
//     COUNT(od.productId) AS totalProductsSold  -- Count how many products were sold
// FROM Seller s
// JOIN approvedseller a ON s.sellerId = a.sellerId  
// JOIN Products p ON s.sellerId = p.sellerId
// JOIN OrderDetails od ON p.productId = od.productId
// JOIN `Order` o ON o.orderId = od.orderId
// ";

// // Add WHERE conditions based on filter parameters
// $whereClauses = [];

// if ($month) {
//     $whereClauses[] = "MONTH(o.date) = '$month'";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(o.date) = '$year'";
// }
// if ($productType) {
//     $whereClauses[] = "p.productType = '$productType'";
// }
// if ($sellerId) {
//     $whereClauses[] = "s.sellerId = '$sellerId'";
// }

// // Append WHERE conditions if any
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // Group by seller
// $sql .= " GROUP BY s.sellerId, s.Name ORDER BY totalOrders DESC";

// $result = mysqli_query($conn, $sql);

// // Fetch all rows
// $data = [];
// while ($row = mysqli_fetch_assoc($result)) {
//     $data[] = $row;
// }

// // Return the result as JSON
// echo json_encode($data);

// include "../Header.php";
// include "../Connection.php";

// // Endpoint to get the available product types
// if (isset($_GET['getProductTypes']) && $_GET['getProductTypes'] == 'true') {
//     $sql = "SELECT * FROM ProductType";  // Assuming you have a table called ProductType
//     $result = mysqli_query($conn, $sql);
    
//     $productTypes = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $productTypes[] = $row['TypeName']; // Adjust based on your actual column name
//     }

//     // Return product types as JSON
//     echo json_encode($productTypes);
//     exit();
// }

// // Get filter parameters (for sales report)
// $month = isset($_GET['month']) ? $_GET['month'] : '';  
// $year = isset($_GET['year']) ? $_GET['year'] : '';  
// $productType = isset($_GET['productType']) ? $_GET['productType'] : '';  
// $sellerId = isset($_GET['sellerId']) ? $_GET['sellerId'] : '';

// // Base SQL query to count the number of products sold by each seller
// $sql = "SELECT 
//     seller.sellerid, 
//     seller.name, 
//     COUNT(orderdetails.productid) AS total_products_sold, 
//     COALESCE(SUM(orderdetails.subtotal), 0) AS total_revenue, 
//     MONTH(`order`.date) AS month, 
//     YEAR(order.date) AS year, 
//     products.producttype
// FROM seller
// LEFT JOIN products ON seller.sellerid = products.sellerid
// LEFT JOIN orderdetails ON products.productid = orderdetails.productid
// LEFT JOIN `order` ON orderdetails.orderId = `order`.orderId
// GROUP BY seller.sellerid, month, year, products.producttype;
// ";

// // Add WHERE conditions based on filter parameters
// $whereClauses = [];

// if ($month) {
//     $whereClauses[] = "MONTH(order.date) = '$month'";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(order.date) = '$year'";
// }
// if ($productType) {
//     $whereClauses[] = "products.productType = '$productType'";
// }
// if ($sellerId) {
//     $whereClauses[] = "seller.sellerId = '$sellerId'";
// }

// // Append WHERE conditions if any
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // Group by seller
// $sql .= " GROUP BY seller.sellerId, seller.Name ORDER BY total_products_sold DESC";

// $result = mysqli_query($conn, $sql);

// // Fetch all rows
// $data = [];
// while ($row = mysqli_fetch_assoc($result)) {
//     $data[] = $row;
// }

// // Return the result as JSON
// echo json_encode($data);

// include "../Header.php";
// include "../Connection.php";

// // Endpoint to get the available product types
// if (isset($_GET['getProductTypes']) && $_GET['getProductTypes'] == 'true') {
//     $sql = "SELECT * FROM ProductType";  // Assuming you have a table called ProductType
//     $result = mysqli_query($conn, $sql);
    
//     $productTypes = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $productTypes[] = $row['TypeName']; // Adjust based on your actual column name
//     }

//     // Return product types as JSON
//     echo json_encode($productTypes);
//     exit();
// }

// // Get filter parameters
// $month = isset($_GET['month']) ? intval($_GET['month']) : '';  
// $year = isset($_GET['year']) ? intval($_GET['year']) : '';  
// $productType = isset($_GET['productType']) ? mysqli_real_escape_string($conn, $_GET['productType']) : '';  
// $sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : '';

// // Base SQL query
// $sql = "SELECT 
//     seller.sellerid, 
//     seller.name, 
//     COUNT(orderdetails.productid) AS total_products_sold, 
//     COALESCE(SUM(orderdetails.subtotal), 0) AS total_revenue, 
//     MONTH(`order`.date) AS month, 
//     YEAR(`order`.date) AS year, 
//     IFNULL(products.producttype, 'Unknown') AS producttype
// FROM seller
// LEFT JOIN products ON seller.sellerid = products.sellerid
// LEFT JOIN orderdetails ON products.productid = orderdetails.productid
// LEFT JOIN `order` ON orderdetails.orderId = `order`.orderId";

// // **WHERE conditions**
// $whereClauses = [];

// if ($month) {
//     $whereClauses[] = "MONTH(order.date) = $month";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(order.date) = $year";
// }
// if ($productType) {
//     $whereClauses[] = "products.productType = '$productType'";
// }
// if ($sellerId) {
//     $whereClauses[] = "seller.sellerId = $sellerId";
// }

// // Append WHERE conditions **before GROUP BY**
// if (count($whereClauses) > 0) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // **Ensure proper GROUP BY**
// $sql .= " GROUP BY seller.sellerid, seller.name, products.producttype";

// // **Sort by total sales**
// $sql .= " ORDER BY total_products_sold DESC";

// $result = mysqli_query($conn, $sql);

// $data = [];
// while ($row = mysqli_fetch_assoc($result)) {
//     $data[] = $row;
// }

// // Return the result as JSON
// echo json_encode($data);
include "../Header.php";
include "../Connection.php";

// Set JSON response header
header('Content-Type: application/json');

// **Handle available product types**
if (isset($_GET['getProductTypes']) && $_GET['getProductTypes'] == 'true') {
    $sql = "SELECT DISTINCT productType FROM products";  
    $result = mysqli_query($conn, $sql);
    
    if (!$result) {
        echo json_encode(["error" => mysqli_error($conn)]);
        exit();
    }

    $productTypes = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $productTypes[] = $row['productType'];  
    }

    echo json_encode($productTypes);
    exit();
}
// Fetch seller names for dropdown
if (isset($_GET['getSellers']) && $_GET['getSellers'] == 'true') {
    $sql = "SELECT sellerid, name FROM seller";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        echo json_encode(["error" => mysqli_error($conn)]);
        exit();
    }

    $sellers = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $sellers[] = ["sellerid" => $row['sellerid'], "name" => $row['name']];
    }

    echo json_encode($sellers);
    exit();
}

// Fetch available years from database
if (isset($_GET['getYears']) && $_GET['getYears'] == 'true') {
    $sql = "SELECT DISTINCT YEAR(date) AS year FROM `order` ORDER BY year DESC";
    $result = mysqli_query($conn, $sql);

    if (!$result) {
        echo json_encode(["error" => mysqli_error($conn)]);
        exit();
    }

    $years = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $years[] = $row['year'];
    }

    echo json_encode($years);
    exit();
}

// **Get filter parameters**
$month = isset($_GET['month']) ? intval($_GET['month']) : null;  
$year = isset($_GET['year']) ? intval($_GET['year']) : null;  
$productType = isset($_GET['productType']) ? mysqli_real_escape_string($conn, $_GET['productType']) : null;  
$sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : null;

// **Base SQL Query**
$sql = "SELECT 
    seller.sellerid, 
    seller.name, 
    COUNT(orderdetails.productid) AS total_products_sold, 
    COALESCE(SUM(orderdetails.subtotal), 0) AS total_revenue, 
    COALESCE(MONTH(order.date), 0) AS month, 
    COALESCE(YEAR(order.date), 0) AS year, 
    IFNULL(products.producttype, 'All Products') AS producttype
FROM seller
LEFT JOIN products ON seller.sellerid = products.sellerid
LEFT JOIN orderdetails ON products.productid = orderdetails.productid
LEFT JOIN `order` ON orderdetails.orderId = `order`.orderId";

// **WHERE conditions**
$whereClauses = [];

if ($productType && $productType !== "All") {
    $whereClauses[] = "products.producttype = '$productType'";
}
if ($month) {
    $whereClauses[] = "MONTH(order.date) = $month";
}
if ($year) {
    $whereClauses[] = "YEAR(order.date) = $year";
}
if ($sellerId) {
    $whereClauses[] = "seller.sellerid = $sellerId";
}

// Append `WHERE` conditions before `GROUP BY`
if (!empty($whereClauses)) {
    $sql .= " WHERE " . implode(" AND ", $whereClauses);
}

// **Ensure proper GROUP BY**
$sql .= " GROUP BY seller.sellerid, seller.name";

// **Sort by total sales**
$sql .= " ORDER BY total_products_sold DESC";

$result = mysqli_query($conn, $sql);

if (!$result) {
    echo json_encode(["error" => mysqli_error($conn)]);
    exit();
}

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// **Return the result as JSON**
echo json_encode($data);
// include "../Header.php";
// include "../Connection.php";

// header('Content-Type: application/json');

// // **Fetch seller names for dropdown**
// if (isset($_GET['getSellers']) && $_GET['getSellers'] == 'true') {
//     $sql = "SELECT sellerid, name FROM seller";
//     $result = mysqli_query($conn, $sql);

//     if (!$result) {
//         echo json_encode(["error" => mysqli_error($conn)]);
//         exit();
//     }

//     $sellers = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $sellers[] = ["sellerid" => $row['sellerid'], "name" => $row['name']];
//     }

//     echo json_encode($sellers);
//     exit();
// }

// // **Fetch available years from database**
// if (isset($_GET['getYears']) && $_GET['getYears'] == 'true') {
//     $sql = "SELECT DISTINCT YEAR(date) AS year FROM `order` ORDER BY year DESC";
//     $result = mysqli_query($conn, $sql);

//     if (!$result) {
//         echo json_encode(["error" => mysqli_error($conn)]);
//         exit();
//     }

//     $years = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $years[] = $row['year'];
//     }

//     echo json_encode($years);
//     exit();
// }

// // **Get filter parameters**
// $month = isset($_GET['month']) ? intval($_GET['month']) : null;
// $year = isset($_GET['year']) ? intval($_GET['year']) : null;
// $productType = isset($_GET['productType']) ? mysqli_real_escape_string($conn, $_GET['productType']) : null;
// $sellerId = isset($_GET['sellerId']) ? intval($_GET['sellerId']) : null;

// // **Base SQL Query (Show seller-wise orders by default)**
// $sql = "SELECT 
//     seller.sellerid, 
//     seller.name, 
//     COUNT(orderdetails.productid) AS total_products_sold, 
//     COALESCE(SUM(orderdetails.subtotal), 0) AS total_revenue
// FROM seller
// LEFT JOIN products ON seller.sellerid = products.sellerid
// LEFT JOIN orderdetails ON products.productid = orderdetails.productid
// LEFT JOIN `order` ON orderdetails.orderId = `order`.orderId";

// // **WHERE conditions**
// $whereClauses = [];

// if ($productType && $productType !== "All") {
//     $whereClauses[] = "products.producttype = '$productType'";
// }
// if ($month) {
//     $whereClauses[] = "MONTH(order.date) = $month";
// }
// if ($year) {
//     $whereClauses[] = "YEAR(order.date) = $year";
// }
// if ($sellerId) {
//     $whereClauses[] = "seller.sellerid = $sellerId";
// }

// // **Apply Filters Only If Provided**
// if (!empty($whereClauses)) {
//     $sql .= " WHERE " . implode(" AND ", $whereClauses);
// }

// // **Ensure grouping by seller**
// $sql .= " GROUP BY seller.sellerid, seller.name";

// // **Sort by total sales**
// $sql .= " ORDER BY total_products_sold DESC";

// $result = mysqli_query($conn, $sql);

// if (!$result) {
//     echo json_encode(["error" => mysqli_error($conn)]);
//     exit();
// }

// $data = [];
// while ($row = mysqli_fetch_assoc($result)) {
//     $data[] = $row;
// }

// // **Return the result as JSON**
// echo json_encode($data);

?>








