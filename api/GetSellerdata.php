    <?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header('Content-Type: application/json');
    header("Access-Control-Allow-Headers: Content-Type");
    include "Connection.php";
        $str="select * from seller";
        $data = mysqli_query($conn,$str);
        $res=array();
        while($row=mysqli_fetch_array($data)){
            $res[]=$row;

        }
        echo json_encode($res);

?>