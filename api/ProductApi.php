 <?php
// include "Connection.php";
// include "Header.php";
// $result = array();

// // Validate all required fields
// if (!isset($_POST['SellerId'])) {
//     $result['error'] = "SellerId is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['ProductName'])) {
//     $result['error'] = "Product Name is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['ProductPrice'])) {
//     $result['error'] = "Price is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['producttype'])) {
//     $result['error'] = "Product type is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['ProductDescription'])) {
//     $result['error'] = "Product Description is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['Size'])) {
//     $result['error'] = "Product Size is Missing";
//     echo json_encode($result);
//     exit;
// }

// if (!isset($_POST['Gender'])) {
//     $result['error'] = "Product Gender is Missing";
//     echo json_encode($result);
//     exit;
// }

// // Sanitize inputs to prevent SQL injection
// $SellerId = mysqli_real_escape_string($conn, $_POST['SellerId']);
// $ProductName = mysqli_real_escape_string($conn, $_POST['ProductName']);
// $Price = mysqli_real_escape_string($conn, $_POST['ProductPrice']);
// $Producttype = mysqli_real_escape_string($conn, $_POST['producttype']);
// $ProductDescription = mysqli_real_escape_string($conn, $_POST['ProductDescription']);
// $Size = mysqli_real_escape_string($conn, $_POST['Size']);
// $Gender = mysqli_real_escape_string($conn, $_POST['Gender']);

// // Insert product into Product table
// $AddProduct_Query = "INSERT INTO products VALUES(NULL, '$SellerId', '$ProductName', '$Price', '$Producttype', '$ProductDescription', CURRENT_DATE(), '$Gender','1')";

// if ($conn->query($AddProduct_Query)) {
//     $ProductId = $conn->insert_id; // Get last inserted Product ID
// // print_r($_FILES);

//     // Check if images were uploaded
//     if (isset($_FILES['ProductImage']) && !empty($_FILES['ProductImage']['name'][0])) {
//         $totalFiles = count($_FILES['ProductImage']['name']);
//         $uploadDir = "Images/"; // Define the upload directory

//         // Create an array to store new image names
//         $imageNames = [NULL, NULL, NULL, NULL];
//         for ($i = 0; $i < $totalFiles && $i < 4; $i++) { // Limit to 4 images
//             $fileTmpPath = $_FILES['ProductImage']['tmp_name'][$i];
//             $fileName = $_FILES['ProductImage']['name'][$i]; 
// $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);


//             // Rename image with ProductId + timestamp + index
//             $newFileName = "product_" . $ProductId . "_" . time() . "_$i." . $fileExtension;
//             $destPath = $uploadDir . $newFileName;

//             if (move_uploaded_file($fileTmpPath, $destPath)) {
//                 $imageNames[$i] = $newFileName;
//             }
//         }

//         // Insert into productimages table
//         $query = "INSERT INTO productimages (ProductId, Image1, Image2, Image3, Image4) 
//                   VALUES ('$ProductId', " . 
//                   ($imageNames[0] ? "'{$imageNames[0]}'" : "NULL") . ", " . 
//                   ($imageNames[1] ? "'{$imageNames[1]}'" : "NULL") . ", " . 
//                   ($imageNames[2] ? "'{$imageNames[2]}'" : "NULL") . ", " . 
//                   ($imageNames[3] ? "'{$imageNames[3]}'" : "NULL") . ")";

//         if (!$conn->query($query)) {
//             $result["error"] = "Error uploading images: " . $conn->error;
//         }
//     } else {
//         $result["warning"] = "No product images uploaded";
//         echo json_encode($result);
//         exit;
//     }

   
//     $Sizes = mysqli_real_escape_string($conn, $Size); // Keep the comma-separated format
// $insertSizeQuery = "INSERT INTO productsize (ProductId, Size) VALUES ('$ProductId', '$Sizes')";
// $conn->query($insertSizeQuery);

//     $result["Product"] = "true";
//     $result["ProductId"] = $ProductId;
//     $result["message"] = "Product added successfully";
//     echo json_encode($result);
// } else {
//     $result["Product"] = "false";
//     $result["error"] = "Error adding product: " . $conn->error;
//     echo json_encode($result);
// }



include "Connection.php";
include "Header.php";
$result = array();

// Validate all required fields
if (!isset($_POST['SellerId'])) {
    $result['error'] = "SellerId is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['ProductName'])) {
    $result['error'] = "Product Name is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['ProductPrice'])) {
    $result['error'] = "Price is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['producttype'])) {
    $result['error'] = "Product type is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['ProductDescription'])) {
    $result['error'] = "Product Description is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['Size'])) {
    $result['error'] = "Product Size is Missing";
    echo json_encode($result);
    exit;
}

if (!isset($_POST['Gender'])) {
    $result['error'] = "Product Gender is Missing";
    echo json_encode($result);
    exit;
}

// Sanitize inputs to prevent SQL injection
$SellerId = mysqli_real_escape_string($conn, $_POST['SellerId']);
$ProductName = mysqli_real_escape_string($conn, $_POST['ProductName']);
$Price = mysqli_real_escape_string($conn, $_POST['ProductPrice']);
$Producttype = mysqli_real_escape_string($conn, $_POST['producttype']);
$ProductDescription = mysqli_real_escape_string($conn, $_POST['ProductDescription']);
$Size = mysqli_real_escape_string($conn, $_POST['Size']);
$Gender = mysqli_real_escape_string($conn, $_POST['Gender']);

// Check if the product already exists for the seller
$checkProductQuery = "SELECT * FROM products WHERE ProductName = '$ProductName' AND SellerId = '$SellerId'";
$productResult = $conn->query($checkProductQuery);

if ($productResult->num_rows > 0) {
    $result["Product"] = "false";
    $result["error"] = "Product already exists for this seller";
    echo json_encode($result);
    exit;
}

// Insert product into Product table
$AddProduct_Query = "INSERT INTO products VALUES(NULL, '$SellerId', '$ProductName', '$Price', '$Producttype', '$ProductDescription', CURRENT_DATE(), '$Gender','1')";

if ($conn->query($AddProduct_Query)) {
    $ProductId = $conn->insert_id; // Get last inserted Product ID

    // Check if images were uploaded
    if (isset($_FILES['ProductImage']) && !empty($_FILES['ProductImage']['name'][0])) {
        $totalFiles = count($_FILES['ProductImage']['name']);
        $uploadDir = "Images/"; // Define the upload directory

        // Create an array to store new image names
        $imageNames = [NULL, NULL, NULL, NULL];
        for ($i = 0; $i < $totalFiles && $i < 4; $i++) { // Limit to 4 images
            $fileTmpPath = $_FILES['ProductImage']['tmp_name'][$i];
            $fileName = $_FILES['ProductImage']['name'][$i]; 
            $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);

            // Rename image with ProductId + timestamp + index
            $newFileName = "product_" . $ProductId . "_" . time() . "_$i." . $fileExtension;
            $destPath = $uploadDir . $newFileName;

            if (move_uploaded_file($fileTmpPath, $destPath)) {
                $imageNames[$i] = $newFileName;
            }
        }

        // Insert into productimages table
        $query = "INSERT INTO productimages (ProductId, Image1, Image2, Image3, Image4) 
                  VALUES ('$ProductId', " . 
                  ($imageNames[0] ? "'{$imageNames[0]}'" : "NULL") . ", " . 
                  ($imageNames[1] ? "'{$imageNames[1]}'" : "NULL") . ", " . 
                  ($imageNames[2] ? "'{$imageNames[2]}'" : "NULL") . ", " . 
                  ($imageNames[3] ? "'{$imageNames[3]}'" : "NULL") . ")";

        if (!$conn->query($query)) {
            $result["error"] = "Error uploading images: " . $conn->error;
        }
    } else {
        $result["warning"] = "No product images uploaded";
        echo json_encode($result);
        exit;
    }

    // Insert size into productsize table
    $Sizes = mysqli_real_escape_string($conn, $Size);
    $insertSizeQuery = "INSERT INTO productsize (ProductId, Size) VALUES ('$ProductId', '$Sizes')";
    $conn->query($insertSizeQuery);

    $result["Product"] = "true";
    $result["ProductId"] = $ProductId;
    $result["message"] = "Product added successfully";
    echo json_encode($result);
} else {
    $result["Product"] = "false";
    $result["error"] = "Error adding product: " . $conn->error;
    echo json_encode($result);
}
?>
 
