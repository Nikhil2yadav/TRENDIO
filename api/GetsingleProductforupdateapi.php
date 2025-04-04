<?php 
    include "Connection.php";
    include "Header.php";

    if(isset($_GET['ProductId'])){
        $ProductId = $_GET['ProductId'];
        $str = "SELECT 
                    p.*,
                    pi.*,
                    ps.*
                    FROM products p
                    LEFT JOIN productimages pi ON p.productId = pi.productId
                    LEFT JOIN productsize ps ON p.productId = ps.productId
                    WHERE p.productId = '$ProductId';
                    ";
        $data = mysqli_query($conn, $str);
        if ($row = mysqli_fetch_assoc($data)) {
            echo json_encode($row);
        }
        // $rows = [];
        // while ($row = mysqli_fetch_assoc($data)) {
        //     $rows[] = $row; // Store each row in an array
        // }
        
        // if (!empty($rows)) {
        //     echo json_encode($rows); // Return all rows as a JSON array
        // } else {
        //     echo json_encode(array("status" => "error", "message" => "Product not found"));
        // }
        
    } else {
        echo json_encode(array("status" => "error", "message" => "ProductId not provided"));
    }
?>
