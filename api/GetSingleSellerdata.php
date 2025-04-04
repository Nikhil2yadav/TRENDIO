<?php  
   include "Header.php";
    include "Connection.php";
    if(isset($_POST['SellerId']))
    {
        $SellerId=$_POST['SellerId'];
        $sql="select * from seller where SellerId='".$SellerId."'";
        // echo $sql;
        $data=mysqli_query($conn,$sql);
        // echo ($data);
       $result = array();
       while( $row=mysqli_fetch_array($data)){
        $result[] = $row;
       }
       if(count($result)==1)
       {
       echo json_encode($result);
        $Name=$result[0]['Name'];
        $Email=$result[0]['Email'];
        $Password=$result[0]['Password'];
        $Number=$result[0]['Number'];
        $GST_Number=$result[0]['GST_Number'];
        $Aadhar_Card_Number=$result[0]['Aadhar_Card_Number'];
        $Pan_Card_Number=$result[0]['Pan_Card_Number'];
        }  
        else {
            echo json_encode(array("status" => "error", "message" => "Seller not found"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "SellerId not provided"));
    }

?>