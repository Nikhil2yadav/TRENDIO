<?php
include "Header.php";
// session_start();
include 'Connection.php';

if (isset($_POST['Email']) && isset($_POST['Password'])) {  
    $Email =$_POST['Email'];
    $Password = $_POST['Password'];

    $str = "SELECT * FROM login WHERE Email='$Email' AND Password='$Password'";
//    echo $str;    
    $data = mysqli_query($conn, $str);
    $count = mysqli_num_rows($data);
    $res = array();
    $admin =  array();

    if ($count == 1 ) {
        $res["admin"] = "TRUE";
        while($row = mysqli_fetch_array($data) ){
            $admin[] = $row;
            
        }  
       $res['Data']=$admin; 
    } else {
        $res["admin"] = "FALSE";
        $res["Message"] = "Invalid Email or Password";
        $seller_api="SELECT * FROM approvedseller,seller where  seller.Email = '".$Email."' and seller.Password = '".$Password."' and approvedseller.status= 1  and approvedseller.SellerId = seller.SellerId";
        $data=mysqli_query($conn,$seller_api);
        $count=mysqli_num_rows($data);
        $check = array();
        $check = mysqli_fetch_array($data);
        
        if($count==1 && $check['activestatus'] == '1') {
            $res["seller"]="TRUE";
            
            $res['Data']=$check;
        } 
        else if ($count==1 && $check['activestatus'] == '0') {
            $res["seller"] = "inactivestatus";
        }
        else {
            $res["admin"] = "FALSE";
            $res["seller"] = "FALSE";
            $res["Message"] = "Invalid Email or Password";
    
        }
    }
} else {
    $res["test"] = "FALSE";
    $res["Success"] = "FALSE";
    $res["Message"] = "Invalid Input";
}
echo json_encode($res);

?>
