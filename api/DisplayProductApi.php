<?php 
    include "Connection.php";
    include "Header.php";
    // $res=array();
    $totalPeoduct="SELECT 
    p.*,
    pi.Image1,
    s.Name
    FROM products p
    LEFT JOIN productimages pi ON p.ProductId = pi.ProductId
    LEFT JOIN seller s ON p.SellerId = s.SellerId WHERE p.activestatus='1' 
";
    $data=mysqli_query($conn,$totalPeoduct);
    $result = array();
    while($row = mysqli_fetch_assoc($data)){
        $result[] = $row;
    }
    echo json_encode($result);
?>