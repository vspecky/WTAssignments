<?php
require_once __DIR__ . "/dbhandling/dbconn.php";
require_once __DIR__ . "/dbhandling/dbhandler.php";

if (!isset($_GET['id'])) {
    echo "Please specify an user id to update";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

if (!isset($_POST['email'])) {
    echo "Please enter your email";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

if (!isset($_POST['name'])) {
    echo "Please enter a proper email";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

if (!isset($_POST['phone'])) {
    echo "Please enter a proper Phone Number";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

if (!isset($_POST['occupation'])) {
    echo "Please enter a proper occupation";
    echo "<p>Click <a href='/ass6/view.php'>here</a> to go back to the records page.";
    return;
}

$conn = new DatabaseAss6();
$handler = new Handler($conn->connect());

$row = $handler->updateUser($_GET['id'], $_POST['email'], $_POST['name'], $_POST['phone'], $_POST['occupation']);

if ($row > 0) {
    echo "<p>Record Added successfully. Click <a href='/ass6/view.php'>here</a> to view all records.</p>";
} else {
    echo "ERROR: Unable to add record";
}
?>