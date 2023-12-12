<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="resources/img/logo.png">

  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="resources/css/flexifile.css">

  <title>FLEXIFILE | Login</title>

</head>
<body class="page-login">

  <div class="sr-only root"></div>

  <div class="w-100 h-30">
    <a href="#"><img name="welcome" class="m-1 ms-5" src="resources/img/logo.png"></a>
    <!-- <div class="float-end me-5 mt-3">
      <a href="login-page.php" class="d-inline rounded m-1 px-3 f-bold py-2 text-decoration-none btn-1">Login</a>
      <a href="signup-page.php" class="d-inline rounded m-1 px-3 f-bold py-2 text-decoration-none btn-1">Sign Up</a>
    </div> -->
  </div>

  <div class="mt-5 d-flex justify-content-center align-items-center">
    <div class="w-25 p-3 border border-2 border-light rounded position-relative form">
      <div class="mt-5 mx-4 text-center">
        <h3 class="text-light fw-bold">Log In</h3>
        <div class="input-group mt-3 mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
          <input type="text" name="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
          <input type="password" name="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required>
        </div>
        <div class="error-message" name="error-message"></div>
        <input class="rounded btn btn-light mt-3 mx-3 mb-3" name="login" type="submit" value="Log In"><br>
        <a class="mt-3 text-decoration-none" name="forgot-password" href="#">Forgot Password?</a>
        <p class="text-light">Don't have an account? <a class="text-decoration-none" name="sign-up" href="#">Sign Up</a></p>
      </div>
    </div>
  </div>

  <script src="plugins/jquery/jquery.min.js"></script>
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="plugins/helpers/js/helpers.js"></script>
  <script src="resources/js/unobfuscated/public-login-page.js"></script>

</body>
</html>