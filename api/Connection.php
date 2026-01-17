<?php 
// Disable exception reporting for connection attempts to handle fallbacks gracefully
mysqli_report(MYSQLI_REPORT_OFF);

// Attempt 1: Docker Connection
// Host: db, User: root, Pass: root
$conn = @mysqli_connect('db', 'root', 'root', 'project');

// Attempt 2: Local XAMPP Connection (Fallback)
// Host: localhost, User: root, Pass: 'root' or '' (empty)
if (!$conn) {
    // Try with empty password (common XAMPP default)
    $conn = @mysqli_connect('localhost', 'root', '', 'project');
}

// Check final status
if (!$conn) {
    die("Error Database is not connected: " . mysqli_connect_error());
}
?>