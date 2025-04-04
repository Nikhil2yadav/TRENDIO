
<?php
include "Header.php";
include 'Connection.php';

$query = $_GET['query'] ?? '';


$sql = "SELECT 
                    p.*,
                    pi.*,
                    ps.*
                    FROM products p
                    LEFT JOIN productimages pi ON p.productId = pi.productId
                    LEFT JOIN productsize ps ON p.productId = ps.productId where ProductName LIKE '%$query%'";
$result = mysqli_query($conn, $sql);

$products = [];
while($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
}

echo json_encode($products);
?>