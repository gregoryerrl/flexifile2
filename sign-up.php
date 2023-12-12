<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="resources/img/logo.png">

  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="plugins/sweetalert2/css/sweetalert2.min.css">
  <link rel="stylesheet" href="resources/css/flexifile.css">

  <title>FLEXIFILE | Sign-Up</title>

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
    <div class="w-25 p-3 border border-2 border-light rounded ">
      <div class="mx-4 text-center">
        <h3 class="text-light fw-bold">Registration</h3>
        <div class="row mt-4 mb-3">
          <div class="col">
            <input type="text" name="fullname" class="form-control" placeholder="Fullname" aria-label="fullname">
          </div>                    
        </div>
        <input type="email" class="form-control mb-3" name="email" placeholder="Email" aria-label="Email">
        <input type="password" class="form-control mb-5" name="password" placeholder="Password" aria-label="password">
        <select class="w-100 p-2 rounded mb-3" name="usertype" id="role"></select>
        <select class="w-100 p-2 rounded mb-3" name="facultytype" id="type"></select>
        <select class="w-100 p-2 rounded mb-3" name="securityquestion" id="role"></select>
        <input type="text" class="form-control mb-3" name="securityanswer" placeholder="Security Answer" aria-label="Security Answer">
        <div class="error-message" name="error-message"></div>
        <input class="mx-3 btn btn-light rounded mt-3" name="sign-up" type="submit" value="Sign Up">
        <p class="text-light mt-2">Already have an account? <a class="text-decoration-none" name="login" href="#">Login</a></p>
      </div>
    </div>
  </div>

  <script src="plugins/jquery/jquery.min.js"></script>
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="plugins/sweetalert2/js/sweetalert2.min.js"></script>
  <script src="plugins/helpers/js/helpers.js"></script>
  <script src="resources/js/unobfuscated/public-sign-up.js"></script>

</body>
</html>