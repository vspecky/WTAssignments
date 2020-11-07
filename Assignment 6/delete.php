<?php
require_once __DIR__ . "/dbhandling/dbconn.php";
require_once __DIR__ . "/dbhandling/dbhandler.php";

if (!isset($_GET['id'])) {
    echo "Please specify a USER ID as a query parameter";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

$conn = new DatabaseAss6();
$handler = new Handler($conn->connect());

$row = $handler->deleteUser($_GET['id']);

if ($row > 0) {
    echo "<p>Record Deleted successfully. Click <a href='/ass6/view.php'>here</a> to view all records.</p>";
} else {
    echo "ERROR: Unable to delete record";
}
?>