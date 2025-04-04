<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include "../Header.php";
include "../Connection.php";
if(isset($_GET['sellerId'])){
    $sellerId=$_GET['sellerId'];
}else{
    echo json_decode("error");
}
// SQL query to get distinct product types
$sql = "SELECT DISTINCT producttype FROM products where SellerId='$sellerId'"; 
$result = $conn->query($sql);

$productTypes = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $productTypes[] = $row['producttype'];
    }
}

// Return JSON response
echo json_encode($productTypes);

$conn->close();
?>
