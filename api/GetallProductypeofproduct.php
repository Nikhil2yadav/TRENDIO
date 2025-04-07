<?php
include "connection.php";
include "Header.php";

$sql = "SELECT DISTINCT TypeName FROM producttype"; // replace `product_table` with your actual table
$result = $conn->query($sql);

$productTypes = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $productTypes[] = $row['TypeName'];
    }
}

echo json_encode($productTypes);
$conn->close();
?>
