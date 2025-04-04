<?php 
    include "Header.php";
    include "Connection.php";

    $res = array();

    if (isset($_POST['Size'])) {
        $Size = mysqli_real_escape_string($conn, $_POST['Size']); // Prevent SQL Injection

        $insert_Size = "INSERT INTO size (ProductSize) VALUES ('$Size')"; // Replace size_column_name

        $result = mysqli_query($conn, $insert_Size);

        if ($result) {
            $res['success'] = 'true';
        } else {
            $res['success'] = 'false';
            $res['error'] = mysqli_error($conn); // Show SQL error for debugging
        }
    } else {
        $res['Size'] = 'not found';
    }

    echo json_encode($res);
?>
