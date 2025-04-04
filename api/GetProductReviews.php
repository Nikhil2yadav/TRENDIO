<?php
include 'Connection.php';
include 'Header.php';

$productId = $_GET['productId'];

$data = [];

// Fetch ratings, buyer names, and comments (if activestatus = 1)
$sql = "
    SELECT 
        rating.rating, 
        buyer.Name, 
        (SELECT comment FROM feedback WHERE feedback.activestatus = 1 AND feedback.feedbackid = rating.feedbackid LIMIT 1) AS comment
    FROM rating 
    JOIN feedback ON rating.feedbackid = feedback.feedbackid 
    JOIN buyer ON buyer.BuyerId = rating.BuyerId 
    WHERE rating.ProductId = '$productId'
";

$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = [
        "rating" => $row['rating'],
        "Name" => $row['Name'],
        "comment" => $row['comment'] ?? null  // If no active comment, return null
    ];
}

mysqli_close($conn);

echo json_encode($data);
?>




