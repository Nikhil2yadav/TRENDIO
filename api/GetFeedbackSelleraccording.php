<?php 
    include "Header.php";
    include "Connection.php";

    $res=array();
    if(isset($_GET['SellerId'])){
        $SellerId=$_GET['SellerId'];

        $query="SELECT rating.rating,feedback.feedbackid, feedback.comment ,feedback.activestatus,buyer.Name AS BuyerName,products.ProductName,productimages.Image1 FROM `feedback` 
JOIN `rating` ON rating.feedbackid=feedback.feedbackid
JOIN `buyer`ON buyer.BuyerId = rating.BuyerId
JOIN `products` ON products.ProductId=rating.ProductId
JOIN `productimages` ON products.ProductId=productimages.ProductId
WHERE products.SellerId='$SellerId'";
        $result=mysqli_query($conn,$query);
        if($result){
            while($row=mysqli_fetch_assoc($result)){
                $res[]=$row;
            }
        echo json_encode($res);
        }else{
            $res['error']="data not found";
        }
    }else{
        $res['error']="SellerId not found";

    }
?>