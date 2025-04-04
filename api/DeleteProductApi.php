<?php
    include 'Header.php';
    include 'Connection.php';

    $result = array();
    file_put_contents("log.txt", json_encode($_GET) . PHP_EOL, FILE_APPEND);
    if (isset($_GET['ProductId'])) {
        $ProductId = $_GET['ProductId'];

        // Fetch product images from productimage table
        $imageQuery = "SELECT Image1, image2, image3, image4 FROM productimages WHERE ProductId = '".$ProductId."'";
        // echo $imageQuery;
        $imageData = mysqli_query($conn, $imageQuery);
        
        if ($imageRow = mysqli_fetch_assoc($imageData)) {
            $imagePaths = [$imageRow['Image1'], $imageRow['image2'], $imageRow['image3'], $imageRow['image4']];

            // Delete each image file if it exists
            foreach ($imagePaths as $img) {
                if (!empty($img)) {
                    $imgPath = "Images/" . $img;
                    if (file_exists($imgPath)) {
                        unlink($imgPath);
                    }
                }
            }
        }

        // Delete associated images from the productimage table
        // $deleteImagesQuery = "DELETE FROM productimages WHERE ProductId = '".$ProductId."'";
        // mysqli_query($conn, $deleteImagesQuery);

        // Delete the product from the products table
        $deleteProductQuery = "DELETE FROM products WHERE ProductId = '".$ProductId."'";
        $deleteProduct = mysqli_query($conn, $deleteProductQuery);

        if ($deleteProduct) {
            $result["DeleteProduct"] = "true";
        } else {
            $result["DeleteProduct"] = "false";
            $result["Error"] = mysqli_error($conn);
        }

        echo json_encode($result);
    } else {
        $result["DeleteProduct"] = "false";
        $result["Error"] = "ProductId is required";
        echo json_encode($result);
    }
    
?>