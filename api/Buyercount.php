<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    $countbuyer="SELECT *FROM buyer";
    $Buyer_count=mysqli_query($conn,$countbuyer);
    $count = mysqli_num_rows($Buyer_count);
    $res["totalbuyer"] = $count;
    echo json_encode($res);

?>