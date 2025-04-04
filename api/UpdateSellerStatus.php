<?php 
    include "Connection.php";
    include "Header.php";
    $res = array();

    if(isset($_POST["SellerId"])) {
        $SellerId = $_POST['SellerId'];
        $query = "SELECT activestatus FROM seller WHERE SellerId='$SellerId'";
        $result = mysqli_query($conn, $query);

        if($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $currentStatus = $row['activestatus'];

            $newStatus = ($currentStatus == 1) ? "0" : "1";

            $updateQuery = "UPDATE seller SET activestatus='$newStatus' WHERE SellerId='$SellerId'";
            if(mysqli_query($conn, $updateQuery)) {
                $res['success'] = "true";
                $res['message'] = "Seller status updated successfully";
                $res['newStatus'] = $newStatus;
            } else {
                $res['success'] = "false";
                $res['message'] = "Failed to update seller status.";
            }
        } else {
            $res['success'] = "false";
            $res['message'] = "Seller not found.";
        }
    } else {
        $res['success'] = "false";
        $res['message'] = "SellerId not found.";
    }

    echo json_encode($res);
?>
