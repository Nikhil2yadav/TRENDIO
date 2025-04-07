<?php
// include "Header.php";
// include "Connection.php";

// $sellerId = $_GET['sellerId'];

// $query = "SELECT * FROM seller_contact WHERE SellerId = '$sellerId' ORDER BY Date DESC";
// $result = mysqli_query($conn, $query);

// $messages = array();

// while ($row = mysqli_fetch_assoc($result)) {
//     $messages[] = $row;
// }

// echo json_encode($messages);

include "Header.php";
include "Connection.php";

// Check if 'sellerId' is set in the URL
if (isset($_GET['sellerId'])) {
    $sellerId = $_GET['sellerId'];
    $query = "SELECT * FROM seller_contact WHERE sellerId = '$sellerId' ORDER BY Date DESC";
} else {
    // $query = "SELECT * FROM seller_contact ORDER BY Date DESC";
    $query = "SELECT sc.*, s.Name 
          FROM seller_contact sc
          INNER JOIN seller s ON sc.sellerId = s.sellerId
          where sc.Reply=''
          ORDER BY sc.Date DESC";

}

$result = mysqli_query($conn, $query);

$messages = array();

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $messages[] = $row;
    }
    echo json_encode($messages);
} else {
    echo json_encode(['error' => 'Query failed']);
}
?>

