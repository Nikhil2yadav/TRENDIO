<?php  
    include "Header.php";
    include "Connection.php";
    $res = array();
    $Get_total_order_status = "SELECT 
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
    Where od.delivery_status ='Delivered' ";

    $result = mysqli_query($conn, $Get_total_order_status);

    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $res[] = $row; 
        }
        echo json_encode($res); // ✅ Moved outside the loop
    } else {
        $res['error'] = "No Orders Found";
        echo json_encode($res);
    }

?>
