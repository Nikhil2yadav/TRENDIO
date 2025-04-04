 <?php 
    // include "Connection.php";
    // include "Header.php";
    // $res=array();
    // if(isset($_POST['Name'])){
    //     $Name=$_POST['Name'];
    // }else{
    //     $res['error']='Name is missing';
    //     echo json_encode($res);
    //     exit;
    // }
    // if(isset($_POST['Email'])){
    //     $Email=$_POST['Email'];
    // }else{
    //     $res['error']='Email is missing';
    //     echo json_encode($res);
    //     exit;

    // }
    // if(isset($_POST['Password'])){
    //     $Password=$_POST['Password'];
    // }
    // else{
    //     $res['error']='Password is not found';
    //     echo json_encode($res);
    //     exit;

    // }
    // if(isset($_POST['Number'])){
    //     $Number=$_POST['Number'];
    // }
    // else{
    //     $res['error']='Numberiss missing';
    //     echo json_encode($res);
    //     exit;
    // }
    // $getbuyeremail="select Email from buyer";
    // if(mysqli_query($conn,$getbuyeremail)){

    // }

    // $BuyerInsert_Query="insert into buyer values(NULL,'".$Name."','".$Email."','".$Password."','".$Number."','1')";

    // if($conn->query($BuyerInsert_Query)){
    //     $res['Buyer']='true';
    //     echo json_encode($res);
    // }else{
    //     $res['Buyer']='false';
    //     echo json_encode($res);
    // }
    include "Connection.php";
    include "Header.php";
    $res = array();

    if(isset($_POST['Name'])){
        $Name = $_POST['Name'];
    } else {
        $res['error'] = 'Name is missing';
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Email'])){
        $Email = $_POST['Email'];
    } else {
        $res['error'] = 'Email is missing';
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Password'])){
        $Password = $_POST['Password'];
    } else {
        $res['error'] = 'Password is not found';
        echo json_encode($res);
        exit;
    }

    if(isset($_POST['Number'])){
        $Number = $_POST['Number'];
    } else {
        $res['error'] = 'Number is missing';
        echo json_encode($res);
        exit;
    }

    // Check if the email already exists
    $getbuyeremail = "SELECT Email FROM buyer WHERE Email = '$Email'";
    $result = mysqli_query($conn, $getbuyeremail);
    
    if(mysqli_num_rows($result) > 0){
        $res['error'] = 'Email already exists';
        echo json_encode($res);
        exit;
    }

    $BuyerInsert_Query = "INSERT INTO buyer VALUES (NULL, '".$Name."', '".$Email."', '".$Password."', '".$Number."', '1')";

    if($conn->query($BuyerInsert_Query)){
        $res['Buyer'] = 'true';
    } else {
        $res['Buyer'] = 'false';
    }

    echo json_encode($res);


?>