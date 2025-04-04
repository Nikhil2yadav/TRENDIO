<?php
include 'Connection.php';
include 'Header.php';

$response = [];

if (isset($_POST['feedbackid']) && isset($_POST['status'])) {
    $feedbackid = $_POST['feedbackid'];
    $status = $_POST['status'];  // Expecting 1 for activate, 0 for deactivate

    // Validate status value (Only allow 0 or 1)
    if ($status != '0' && $status != '1') {
        $response['success'] = false;
        $response['message'] = "Invalid status value. Use 1 for activate, 0 for deactivate.";
        echo json_encode($response);
        exit;
    }

    // Update query
    $sql = "UPDATE feedback SET activestatus = '$status' WHERE feedbackid = '$feedbackid'";

    if (mysqli_query($conn, $sql)) {
        $response['success'] = true;
        $response['message'] = ($status == '1') ? "Feedback activated successfully." : "Feedback deactivated successfully.";
    } else {
        $response['success'] = false;
        $response['message'] = "Failed to update feedback status.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Missing required parameters (feedbackid, status).";
}

mysqli_close($conn);
echo json_encode($response);
?>
