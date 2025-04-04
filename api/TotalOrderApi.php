<?php 
    include "Header.php";
    include "Connection.php";

    $res=array();
    $countSeller="SELECT * FROM `orderdetails`";
    $totalseller=mysqli_query($conn,$countSeller);
    $count=mysqli_num_rows($totalseller);
    $res["totalorder"]=$count;
    echo json_encode($res);
?>