<?php  
    include "Header.php";
    include "Connection.php";

    $res = array();

    // Query to fetch distinct years from the order date
    $Get_order_years = "SELECT DISTINCT YEAR(o.date) AS orderYear FROM `order` o ORDER BY orderYear DESC";
    
    $result_years = mysqli_query($conn, $Get_order_years);

    if (mysqli_num_rows($result_years) > 0) {
        while ($row = mysqli_fetch_assoc($result_years)) {
            $res['years'][] = $row['orderYear']; 
        }
    } else {
        $res['years'] = []; // Return an empty array if no years found
    }

    echo json_encode($res);
?>
    