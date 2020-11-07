<?php
require_once __DIR__ . "/dbhandling/dbconn.php";
require_once __DIR__ . "/dbhandling/dbhandler.php";

$conn = new DatabaseAss6();
$handler = new Handler($conn->connect());

$stmt = $handler->fetchUsers();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Event Registration</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <ul class="nav navbar-nav">
                <li class="nav-item"><a href="/ass6/home.php" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/ass6/create.php" class="nav-link">Create</a></li>
                <li class="nav-item"><a href="/ass6/view.php" class="nav-link">View</a></li>
            </ul>
        </nav>
    </header>

    <div class="container" >
        <h1 class="mt-3">View Users</h1>
        <p>(Note: the ID field is auto-incrementing, i.e. if you don't see a particular ID, the record associated with that ID has been deleted.</p>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <?php while ($entry = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
                    <tr>
                        <th scope="row"><?php echo $entry["id"]; ?></th>
                        <td><?php echo $entry["name"]; ?></td>
                        <td><?php echo $entry["email"]; ?></td>
                        <td><?php echo $entry["occupation"]; ?></td>
                        <td><?php echo $entry["phone"]; ?></td>
                        <td><a class="btn btn-primary" href="/ass6/edit.php?id=<?php echo $entry["id"] ?>">Edit</a></td>
                        <td><a class="btn btn-danger" href="/ass6/delete.php?id=<?php echo $entry["id"] ?>">Delete</a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</body>
</html>