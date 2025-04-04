<?php
     include "Header.php";
     include "Connection.php";
     $res=array();

     if(isset($_POST['SellerId']))
     {
      $SellerId=$_POST['SellerId'];
     $str= "SELECT p.*,pi.Image1 FROM products p
LEFT JOIN productimages pi ON p.ProductId = pi.ProductId
WHERE p.SellerId = '$SellerId'";
      $data=mysqli_query($conn,$str);
      while($row=mysqli_fetch_assoc($data)){
        $res[]=$row;
      }
     }else{
      $res['error']='SellerId is not found';
      echo json_encode($res);
      return;
     }
     echo json_encode($res);
?> 