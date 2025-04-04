<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    $countProduct="SELECT *FROM products";
    $Product_count=mysqli_query($conn,$countProduct);
    $count = mysqli_num_rows($Product_count);
    $res["totalproduct"] = $count;
    echo json_encode($res);
    
    
?>