<?php
include('connection.php');
include "Header.php";

$query = "SELECT * FROM producttype";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode([]);
}
?>
