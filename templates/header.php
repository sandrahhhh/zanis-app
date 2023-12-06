<?php 
session_start();  
if (!isset($_SESSION['admin_id'])) {
  header("location:login.php");
}

?>
<!DOCTYPE html>
<html lang="en-US">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/> 
<link rel="icon" href="logo.png" type="image/x-icon">
    
<head>
<title>Farmers Pride</title>
    <link type="text/css" rel="stylesheet" href="css/css.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

    

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/dashboard/">
</head>
    
<body>
    <div id="ribbon">
        <ul>
            <li>Farmer's Pride</li>
            <li><input type="text" name="search" id="search"></li>

            <?php
    		if (isset($_SESSION['admin_id'])) {
    			?>
                <li><a class="nav-link" href="../admin/admin-logout.php">Sign out</a></li>

                    <?php
    		}else{
    			$uriAr = explode("/", $_SERVER['REQUEST_URI']);
    			$page = end($uriAr);
    			if ($page === "login.php") {
    				?>
                    <li><a class="nav-link" href="../admin/register.php">Register</a></li>
	    			<?php
    			}else{
    				?>
                    <li><a class="nav-link" href="../admin/login.php">Login</a></li>
	    			<?php
    			}
    		}
    	?>
        </ul>
</div>
    			
    

<div id="side_bar">
    <ul>
    <li><span class="glyphicon glyphicon-home" aria-hidden="true"></span><a href="index.php">Dashboard</a></li>
    <li><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span><a href="orders.php">Orders</a></li>
    <li><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span><a href="categories.php">Categories</a></li>
    <li><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><a href="products.php">Products</a></li>
    <li><span class="glyphicon glyphicon-user" aria-hidden="true"></span><a href="customers.php">Customers</a></li>
    </ul>
</div>