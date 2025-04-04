<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();

    if(isset($_POST['BuyerId']))
    {
     $BuyerId=$_POST['BuyerId'];
     $str="SELECT * FROM address where BuyerId= '$BuyerId' and activestatus='1' ";
     $data=mysqli_query($conn,$str);
     while($row=mysqli_fetch_assoc($data)){
       $res[]=$row;
     }
    }else{
     $res['error']='BuyerId is not found';
     
    }
    echo json_encode($res);
?> 