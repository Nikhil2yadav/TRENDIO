<?php  
    include "Header.php";
    include "Connection.php";
    $res = array();

    if(isset($_POST['SellerId'])){
        $SellerId = $_POST['SellerId'];
    } else {
        $res['error'] = "SellerId Not Found";
        echo json_encode($res);
        exit;
    }

    $Get_pending_order = "SELECT 
        s.SellerId,
        s.Name AS SellerName,
        p.paymentId,
        o.*,
        od.*,
        pr.*,
        pi.*,
        b.*,
        a.*,
        p.paymentStatus
    FROM payments p
    JOIN `order` o ON p.orderId = o.orderId
    JOIN orderdetails od ON o.orderId = od.orderId
    JOIN products pr ON od.ProductId = pr.ProductId
    JOIN productimages pi ON pr.ProductId = pi.ProductId
    JOIN seller s ON pr.SellerId = s.SellerId
    JOIN buyer b ON p.BuyerId = b.BuyerId
    JOIN address a ON o.AddressId = a.AddressId
    WHERE od.delivery_status = 'Shipped' 
    AND s.SellerId = '$SellerId'";

    $result = mysqli_query($conn, $Get_pending_order);

    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $res[] = $row; 
        }
        echo json_encode($res); // ✅ Moved outside the loop
    } else {
        $res['error'] = "No Pending Orders Found";
        echo json_encode($res);
    }

?>
