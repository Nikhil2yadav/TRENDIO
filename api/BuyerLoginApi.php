<?php 
    include "Header.php";
    include "Connection.php";
    $res=array();
    if(isset($_POST['Email'])){
        $Email=$_POST['Email'];
    }
    else{
        $res['error']="Email id is not found";
        echo json_encode($res);
        exit;
    }
    if(isset($_POST['Password'])){
        $Password=$_POST['Password'];
    }
    else{
        $res['error']="Password id is not found";
        echo json_encode($res);
        exit;
    }
    $BuyerLogin_Query="select * from buyer where Email='".$Email."' and Password ='".$Password."'";
   $data=mysqli_query($conn,$BuyerLogin_Query);
   $count=mysqli_num_rows($data);
    
   $check = array();
   $check = mysqli_fetch_array($data);
//   print_r($check);x  

if($count==1 && $check['activestatus']==1){
    $res['Buyer']='true';
    
    $res['Data']=$check;
    
    echo json_encode($res);
}
else if($count==1 &&  $check['activestatus']==0) {
     $res['Buyer']=' INactiveStatus';
     echo json_encode($res);
}
else{
    $res['Buyer']='false';
    echo json_encode($res);
}

?>