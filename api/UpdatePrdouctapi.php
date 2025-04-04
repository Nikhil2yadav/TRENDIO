<?php
include "Connection.php";
include "Header.php";

$result = array();

// Validate required fields
if (!isset($_POST['ProductId'])) {
    $result['error'] = "Product ID is Missing";
    echo json_encode($result);
    exit;
}

$ProductId = mysqli_real_escape_string($conn, $_POST['ProductId']);
$SellerId = isset($_POST['SellerId']) ? mysqli_real_escape_string($conn, $_POST['SellerId']) : null;
$ProductName = isset($_POST['ProductName']) ? mysqli_real_escape_string($conn, $_POST['ProductName']) : null;
$Price = isset($_POST['ProductPrice']) ? mysqli_real_escape_string($conn, $_POST['ProductPrice']) : null;
$ProductType = isset($_POST['producttype']) ? mysqli_real_escape_string($conn, $_POST['producttype']) : null;
$ProductDescription = isset($_POST['ProductDescription']) ? mysqli_real_escape_string($conn, $_POST['ProductDescription']) : null;
$Size = isset($_POST['Size']) ? mysqli_real_escape_string($conn, $_POST['Size']) : null;
$Gender = isset($_POST['Gender']) ? mysqli_real_escape_string($conn, $_POST['Gender']) : null;

// Update product details
$updateProductQuery = "UPDATE products SET 
    SellerId = '$SellerId',
    ProductName = '$ProductName',
    ProductPrice = '$Price',
    producttype = '$ProductType',
    ProductDescription = '$ProductDescription',
    Gender = '$Gender'
    WHERE ProductId = '$ProductId'";

if (!$conn->query($updateProductQuery)) {
    $result["error"] = "Error updating product: " . $conn->error;
    echo json_encode($result);
    exit;
}

// Update Sizes
if ($Size) {
    $updateSizeQuery = "UPDATE productsize SET Size = '$Size' WHERE ProductId = '$ProductId'";
    $conn->query($updateSizeQuery);
}

// Fetch existing images from database
$existingImagesQuery = "SELECT Image1, Image2, Image3, Image4 FROM productimages WHERE ProductId = '$ProductId'";
$existingImagesResult = $conn->query($existingImagesQuery);
$existingImages = $existingImagesResult->fetch_assoc();

$imageNames = [
    $existingImages['Image1'] ?? NULL,
    $existingImages['Image2'] ?? NULL,
    $existingImages['Image3'] ?? NULL,
    $existingImages['Image4'] ?? NULL
];

$uploadDir = "Images/";

// Update Product Images (Keep old images, update new ones)
if (isset($_FILES['ProductImage']) && !empty($_FILES['ProductImage']['name'][0])) {
    $totalFiles = count($_FILES['ProductImage']['name']);
    
    for ($i = 0; $i < $totalFiles && $i < 4; $i++) { // Limit to 4 images
        if (!empty($_FILES['ProductImage']['name'][$i])) { 
            // Delete old image before uploading new one
            if (!empty($imageNames[$i]) && file_exists($uploadDir . $imageNames[$i])) {
                unlink($uploadDir . $imageNames[$i]);
            }

            $fileTmpPath = $_FILES['ProductImage']['tmp_name'][$i];
            $fileName = $_FILES['ProductImage']['name'][$i]; 
            $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);

            // Rename image with ProductId + timestamp + index
            $newFileName = "product_" . $ProductId . "_" . time() . "_$i." . $fileExtension;
            $destPath = $uploadDir . $newFileName;

            if (move_uploaded_file($fileTmpPath, $destPath)) {
                $imageNames[$i] = $newFileName; // Replace only updated images
            }
        }
    }

    // Update product images in database
    $updateImageQuery = "UPDATE productimages SET 
        Image1 = " . ($imageNames[0] ? "'{$imageNames[0]}'" : "Image1") . ", 
        Image2 = " . ($imageNames[1] ? "'{$imageNames[1]}'" : "Image2") . ", 
        Image3 = " . ($imageNames[2] ? "'{$imageNames[2]}'" : "Image3") . ", 
        Image4 = " . ($imageNames[3] ? "'{$imageNames[3]}'" : "Image4") . " 
        WHERE ProductId = '$ProductId'";

    if (!$conn->query($updateImageQuery)) {
        $result["error"] = "Error updating images: " . $conn->error;
        echo json_encode($result);
        exit;
    }
}

$result["Product"] = "true";
$result["ProductId"] = $ProductId;
$result["message"] = "Product updated successfully";
echo json_encode($result);
?>
