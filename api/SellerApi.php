 <?php 

// include "Header.php";
// include "Connection.php";

// $res = array();

// // Check if all required POST variables are set
// if (isset($_POST["Name"]) && isset($_POST["Email"]) && isset($_POST["Password"]) && isset($_POST["Number"]) && isset($_POST["GST_Number"]) && isset($_POST["Aadhar_Card_Number"]) && isset($_POST["Pan_Card_Number"]) ) {    
//     $Name = $_POST['Name'];
//     $Email = $_POST['Email'];
//     $Password = $_POST['Password'];
//     $Number = $_POST['Number'];
//     $GST_Number = $_POST['GST_Number'];
//     $Aadhar_Card_Number = $_POST['Aadhar_Card_Number'];
//     $Pan_Card_Number = $_POST['Pan_Card_Number'];

//     $query ="INSERT INTO `seller`(`SellerId`, `Name`, `Email`, `Password`, `Number`, `GST_Number`, `Aadhar_Card_Number`, `Pan_Card_Number`, `role`,`activestatus`) VALUES (NULL,'".$Name."','".$Email."','".$Password."','".$Number."','$GST_Number','".$Aadhar_Card_Number."','".$Pan_Card_Number."','seller','1')";


//     if ($conn->query($query) === TRUE) {
//         $res['selleradded'] = 'TRUE';
//         $sellerid = mysqli_insert_id($conn);
//         // echo $sellerid;
//         $temp_seller_query = "INSERT INTO `tempseller` (`tempsellerid`, `sellerid`, `status`) VALUES (NULL, '".$sellerid."', ''); ";
//         mysqli_query($conn,$temp_seller_query);
//     } else {
//         $res['selleradded'] = 'false';
//         $res['Error'] = $conn->error;
//     }
   
// } else {
//     $res["selleradded"] = "false";
//     $res['selleradded'] = 'false';
//     $res['Error'] = "Required fields are missing";
// }

// echo json_encode($res);


include "Header.php";
include "Connection.php";

$res = array();

// Check if all required POST variables are set
if (isset($_POST["Name"]) && isset($_POST["Email"]) && isset($_POST["Password"]) && isset($_POST["Number"]) && isset($_POST["GST_Number"]) && isset($_POST["Aadhar_Card_Number"]) && isset($_POST["Pan_Card_Number"]) ) {    
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $Number = $_POST['Number'];
    $GST_Number = $_POST['GST_Number'];
    $Aadhar_Card_Number = $_POST['Aadhar_Card_Number'];
    $Pan_Card_Number = $_POST['Pan_Card_Number'];

    // Check if the email already exists
    $checkEmailQuery = "SELECT * FROM `seller` WHERE `Email` = '$Email'";
    $emailResult = $conn->query($checkEmailQuery);

    if ($emailResult->num_rows > 0) {
        $res["selleradded"] = "false";
        $res["Error"] = "Email already exists";
    } else {
        // Insert new seller if email is unique
        $query ="INSERT INTO `seller`(`SellerId`, `Name`, `Email`, `Password`, `Number`, `GST_Number`, `Aadhar_Card_Number`, `Pan_Card_Number`, `role`, `activestatus`) 
                 VALUES (NULL, '$Name', '$Email', '$Password', '$Number', '$GST_Number', '$Aadhar_Card_Number', '$Pan_Card_Number', 'seller', '1')";

        if ($conn->query($query) === TRUE) {
            $res['selleradded'] = 'TRUE';
            $sellerid = mysqli_insert_id($conn);

            // Insert into temp seller table
            $temp_seller_query = "INSERT INTO `tempseller` (`tempsellerid`, `sellerid`, `status`) VALUES (NULL, '$sellerid', ''); ";
            mysqli_query($conn, $temp_seller_query);
        } else {
            $res['selleradded'] = 'false';
            $res['Error'] = $conn->error;
        }
    }
} else {
    $res["selleradded"] = "false";
    $res["Error"] = "Required fields are missing";
}

echo json_encode($res);



?> 

