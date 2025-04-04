<?php 
    // include "Connection.php";
    // include "Header.php";
    // $res=array();
    // if(isset($_POST['Email'])){
    //     $Email=$_POST['Email'];
    //     $query="SELECT * FROM seller WHERE Email='$Email'";
    //     // echo $query;
    //     $result=mysqli_query($conn,$query);
    //     if(mysqli_num_rows($result)>0){
    //         $res['Email']="true";
    //         echo json_encode($res);
    //     }
    //     else{
    //         $res['Email']='false';
    //         echo json_encode($res);
    //         echo json_encode("Email doesn't exist");
    //     }
    // }else{
    //     $res['Email']="false";
    //     echo json_encode($res);

    // }
    include "Connection.php";
    include "Header.php";
    $res = array();

    if(isset($_POST['Email'])) {
        $Email = $_POST['Email'];

        // Check in Seller Table
        $query_seller = "SELECT * FROM seller WHERE Email='$Email'";
        $result_seller = mysqli_query($conn, $query_seller);

        // Check in Admin Table
        $query_admin = "SELECT * FROM login WHERE Email='$Email'";
        $result_admin = mysqli_query($conn, $query_admin);

        if(mysqli_num_rows($result_seller) > 0) {
            $res['Email'] = "true";
        } elseif(mysqli_num_rows($result_admin) > 0) {
            $res['Email'] = "true";
        } else {
            $res['Email'] = "false";
        }

        echo json_encode($res);
    } else {
        $res['Email'] = "false";
        echo json_encode($res);
    }
?>
