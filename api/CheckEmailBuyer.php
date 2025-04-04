<?php 
    include "Connection.php";
    include "Header.php";
    $res=array();
    if(isset($_POST['Email'])){
        $Email=$_POST['Email'];
        $query="SELECT * FROM buyer WHERE Email='$Email'";
        // echo $query;
        $result=mysqli_query($conn,$query);
        if(mysqli_num_rows($result)>0){
            $res['Email']="true";
            echo json_encode($res);
        }
        else{
            $res['Email']='false';
            echo json_encode($res);
            echo json_encode("Email doesn't exist");
        }
    }else{
        $res['Email']="false";
        echo json_encode($res);

    }
?>