<?php 
    include "Header.php";
    include "Connection.php";

    $res=array();
    $countSeller="select * from seller";
    $totalseller=mysqli_query($conn,$countSeller);
    $count=mysqli_num_rows($totalseller);
    $res["totalseller"]=$count;
    echo json_encode($res);
?>