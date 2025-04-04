<?php
include "../Header.php";
include "../Connection.php";

// SQL query to fetch all sellers
$sql = "SELECT sellerId, Name FROM Seller ORDER BY Name ASC";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check if there are any results
if (mysqli_num_rows($result) > 0) {
    // Fetch all the sellers into an associative array
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // Return the data as a JSON response
    echo json_encode($data);
} else {
    // Return an empty array if no sellers are found
    echo json_encode([]);
}

// Close the database connection
mysqli_close($conn);
?>
