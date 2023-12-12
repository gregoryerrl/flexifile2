<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="resources/img/logo.png">

  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="plugins/sweetalert2/css/sweetalert2.min.css">
  <link rel="stylesheet" href="resources/css/flexifile.css">

  <title>FLEXIFILE | Forgot Password</title>

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
        <h3 class="text-light fw-bold mb-5">Forgot Password</h3>
        <div name="step1">
          <div class="input-group mt-3 mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
            <input type="text" name="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
          </div>
          <div class="error-message" name="error-message"></div>
          <button class="rounded btn btn-light mt-3 mx-3 mb-3" name="next" value="Next">Next</button><br>
        </div>
        <div name="step2">
          <div class="secret-question mb-4" name="secretquestion"><h5></h5></div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
            <input type="password" name="secretanswer" class="form-control" placeholder="Secret Answer" aria-label="secretanswer" aria-describedby="basic-addon1">
          </div>
          <div class="error-message" name="error-message"></div>
          <button class="rounded btn btn-light mt-3 mx-3 mb-3" name="next2" value="Next">Next</button><br>
        </div>
        <div name="step3">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
            <input type="password" name="newpassword" class="form-control" placeholder="New Password" aria-label="newpassword" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
            <input type="password" name="newpassword2" class="form-control" placeholder="Re-type New Password" aria-label="newpassword2" aria-describedby="basic-addon1">
          </div>
          <div class="error-message" name="error-message"></div>
          <button class="rounded btn btn-light mt-3 mx-3 mb-3" name="submit" value="Next">Submit</button><br>
        </div>
        <p class="text-light mt-2">Already have an account? <a class="text-decoration-none" name="login" href="#">Login</a></p>
      </div>
    </div>
  </div>

  <script src="plugins/jquery/jquery.min.js"></script>
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="plugins/sweetalert2/js/sweetalert2.min.js"></script>
  <script src="plugins/helpers/js/helpers.js"></script>
  <script src="resources/js/unobfuscated/public-forgot-password.js"></script>

</body>
</html>