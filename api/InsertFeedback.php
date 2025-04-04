<?php 
    // include "Header.php";
    // include "Connection.php";

    // $res=array();

    // if(isset($_POST['BuyerId'])){
    //     $BuyerId=$_POST['BuyerId'];
    // }else{
    //     $res['error']='BuyerId not found';
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['ProductId'])){
    //     $ProductId=$_POST['ProductId'];
    // }else{
    //     $res['error']='ProductId not found';
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['rating'])){
    //     $rating=$_POST['rating'];
    // }else{
    //     $res['error']='rating not found';
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['comment'])){
    //     $comment=$_POST['comment'];
    // }else{
    //     $res['error']='comment not found';
    //     echo json_encode($res);
    //     exit;
    // }
    // $sql = "INSERT INTO feedback (BuyerId, ProductId, comment) 
    //     VALUES ('$BuyerId', '$ProductId', '$comment')";

    // if (mysqli_query($conn, $sql)) {
    //     $sql="INSERT INTO rating (BuyerId,ProductId,rating,feedbackid) VALUES('$BuyerId','$ProductId','$rating','$feedbackid')";
    //     if(mysqli_query($conn,$sql)){
    //         echo json_encode(["success" => true, "message" => "Feedback submitted successfully"]);

    //     }
        
    // } else {
    //     echo json_encode(["success" => false, "message" => "Failed to submit feedback"]);
    // }
    // mysqli_close($conn);

    include "Header.php";
    include "Connection.php";

    $res = array();

    if (!isset($_POST['BuyerId']) || !isset($_POST['ProductId']) || !isset($_POST['rating']) || !isset($_POST['comment'])) {
        $res['error'] = 'Required parameters are missing';
        echo json_encode($res);
        exit;
    }

    $BuyerId = $_POST['BuyerId'];
    $ProductId = $_POST['ProductId'];
    $rating = $_POST['rating'];
    $comment = $_POST['comment'];

    // Insert feedback into the feedback table
    $sql = "INSERT INTO feedback (BuyerId, ProductId, comment,activestatus) VALUES ('$BuyerId', '$ProductId', '$comment','1')";
    
    if (mysqli_query($conn, $sql)) {
        // Get the last inserted feedback ID
        $feedbackId = mysqli_insert_id($conn);

        // Insert rating into the rating table
        $sql = "INSERT INTO rating (BuyerId, ProductId, rating, feedbackid) VALUES ('$BuyerId', '$ProductId', '$rating', '$feedbackId')";
        
        if (mysqli_query($conn, $sql)) {
            echo json_encode(["success" => true, "message" => "Feedback submitted successfully", "feedbackId" => $feedbackId]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to insert rating"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to submit feedback"]);
    }

    mysqli_close($conn);
?>
