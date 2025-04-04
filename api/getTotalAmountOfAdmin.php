<?php 
include "connection.php";
include "Header.php";
$query = "SELECT SUM(adminAmount) as totalAdminAmount FROM payments";
$result = mysqli_query($conn, $query);

if ($row = mysqli_fetch_assoc($result)) {
    $totalAmount = $row['totalAdminAmount'];
    echo json_encode(['totalAdminAmount' => $totalAmount]);
} else {
    echo json_encode(['totalAdminAmount' => 0]);
}
