<?php 
    include "Header.php";
    include "Connection.php";
    
        $str="SELECT * FROM login ";
    $data=mysqli_query($conn,$str);
    $res=array();
    while($row=mysqli_fetch_assoc($data)){
        $res[]=$row;
    }
     echo json_encode($res);
    
    
?>