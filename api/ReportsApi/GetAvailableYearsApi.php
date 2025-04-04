<?php
include "../Header.php";
include "../Connection.php";

// Fetch distinct years from the Products table
$sql = "SELECT DISTINCT YEAR(p.date) AS year FROM Products p ORDER BY year DESC";

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($data);  // Return the years as a JSON response
?>
