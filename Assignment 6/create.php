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

    <?php

    ?>

    <div class="container" >
        <h1 class="mt-3">User Registration</h1>
        <h6>Please Enter your details below</h6>

        <form action="/ass6/submit.php" id="reg-form" method="POST">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control border" placeholder="eg: jackdoe@email.com" name="email" required>
            </div>

            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control border" placeholder="Your name here..." name="name" required>
                <small class="form-text text-muted">First name and Surname</small>
            </div>

            <div class="form-group">
                <label>Phone No.</label>
                <input type="text" class="form-control border" placeholder="Phone No. here..." name="phone" required>
                <small class="form-text text-muted">10-digit Phone number</small>
            </div>

            <div class="form-group">
                <label>Select your Occupation</label>
                <select class="form-control" name="occupation">
                    <option value="Student">Student</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Working">Working</option>
                </select>
            </div>

            <input type="submit" class="btn btn-primary" value="Register">
        </form>
    </div>
</body>
</html>