<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    $totalbuyer_data="select * from buyer";
    $result=mysqli_query($conn,$totalbuyer_data);
    while($row=mysqli_fetch_assoc($result)){
        $res[]=$row;
    }
    echo json_encode($res);


?>