<?php
include "Header.php";
    include "Connection.php";
    $select_seller_query = "SELECT * from tempseller,seller where tempseller.sellerid = seller.SellerId ";
    $data = mysqli_query($conn,$select_seller_query);
    $result = array();
    while($row = mysqli_fetch_assoc($data)){
        $result[] = $row; 
    }
    echo json_encode($result);
    
?>