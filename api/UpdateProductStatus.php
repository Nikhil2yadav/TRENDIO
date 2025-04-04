<?php 
    include "Connection.php";
    include "Header.php";
    $res=array();
    if(isset($_POST['ProductId'])){
        $ProductId=$_POST['ProductId'];
        $query="SELECT activestatus FROM products WHERE ProductId='$ProductId'";
        $result=mysqli_query($conn,$query);
        if($result && mysqli_num_rows($result)>0){
            $row=mysqli_fetch_assoc($result);
            $currentStatus=$row['activestatus'];
            $newStatus=($currentStatus == 1) ? "0" : "1";
            $updateQuery="UPDATE products SET activestatus='$newStatus' WHERE ProductId='$ProductId'";
            if(mysqli_query($conn,$updateQuery)){
                $res['success'] = "true";
                $res['message'] = "Product status updated successfully";
                $res['newStatus'] = $newStatus;
            } else {
                $res['success'] = "false";
                $res['message'] = "Failed to update Product status.";
            }
        } else {
            $res['success'] = "false";
            $res['message'] = "Product not found.";
        }
    } else {
        $res['success'] = "false";
        $res['message'] = "ProductID not found.";
    }

    echo json_encode($res);
?>
