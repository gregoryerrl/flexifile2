<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../resources/img/logo.png">

  <link rel="stylesheet" href="../plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/solid.min.css">
  <link rel="stylesheet" href="../plugins/virtual-select/virtual-select.css">
  <link rel="stylesheet" href="../resources/css/flexifile.css">

  <title>FLEXIFILE | Dashboard</title>

</head>
<body class="page-home">

  <div class="sr-only root">../</div>

  <div class="layout">
    <?php include '../resources/php/header.php'; ?>
    <?php include '../resources/php/sidebar.php'; ?>
  </div>


  <div class="content">

    <?php include '../resources/php/content-header.php'; ?>

    <div class="row" style="padding-bottom: 50px !important;">

      <div class="col-md-9">

        <div class="navigation text-center mt-3 bg-light rounded w-100">
          <nav class="navbar navbar-expand-lg navbar-light">                
            <ul class="navbar-nav">
              <li class="nav-item"><a name="link_1" class="nav-link" href="#">Dynamic Report</a></li>
              <li class="nav-item"><a name="link_2" class="nav-link" href="#">Educational Attainment &amp; Academic Rank</a></li>
              <li class="nav-item"><a name="link_3" class="nav-link" href="#">Appoint Status</a></li>
              <li class="nav-item"><a name="link_4" class="nav-link" href="#">Teaching Assignment</a></li>
              <li class="nav-item"><a name="link_5" class="nav-link" href="#">Work Experience</a></li>
              <li class="nav-item"><a name="link_6" class="nav-link" href="#">Professional Organization </a></li>
              <li class="nav-item dropdown">
                <a name="link_7" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Research</a>
                <ul class="dropdown-menu">
                  <li><a name="link_7_1" class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a name="link_7_2" class="dropdown-item" href="#">Presentation</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a name="link_7_3" class="dropdown-item" href="#">Publication</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a name="link_7_4" class="dropdown-item" href="#">Activities</a></li>
                </ul>
              </li>
              <li class="nav-item"><a name="link_8" class="nav-link" href="#">Faculty Dev. Plan</a></li>
            </ul>
          </nav>
        </div>

        <div class="mt-3 p-3 thirteen-div rounded" style="height: auto;">
          <h3> Dynamic Report</h3>
          <hr>
          <label>Title</label>
          <input name="dr_title" class="rounded border-0 title my-2 p-2" placeholder="Title" type="text">
          <div class="my-3">
            <label>Faculty Members</label>
            <select name="dr_faculty_member" id="multi_option" multiple name="native-select" placeholder="Select" data-silent-initial-value-set="false"></select>
          </div>
          <div class="text-end">
              <button class="btn btn-success mt-3">Generate</button>
          </div>
        </div>

      </div>

      <div class="col-md-3">
        <div class="rounded twelve-div p-2 text-center" style="margin-top: 16px;">
          <div class="twelve-div-container">
            <h3>Notification</h3>
            <hr>
            <div class="notification-center">
              <ul class="list-group list-group-flush"><li class="list-group-item">Sample uploaded his/her Personal Data sheet (2023-10-15)</li><li class="list-group-item">john carlo blanco uploaded his/her Personal Data sheet (2023-10-12)</li><li class="list-group-item">rimuru tempest uploaded his/her Personal Data sheet (2023-10-12)</li><li class="list-group-item">sasuke uchiha uploaded his/her Personal Data sheet (2023-10-06)</li><li class="list-group-item">rimiru tempest edited his/her Work Experience Details (2023-10-01)</li><li class="list-group-item">rimiru tempest edited his/her Personal information Details (2023-10-01)</li><li class="list-group-item">rimiru tempest edited his/her Family Background Details (2023-10-01)</li><li class="list-group-item">carlo blanco uploaded his/her Personal Data sheet (2023-10-01)</li><li class="list-group-item">carlo blanco uploaded his/her Personal Data sheet (2023-10-01)</li><li class="list-group-item">carlo blanco uploaded his/her Personal Data sheet (2023-10-01)</li><li class="list-group-item">carlo blanco edited his/her Family Background Details (2023-10-01)</li><li class="list-group-item">rimiru tempest edited his/her Civil Service Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Civil Service Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Civil Service Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Education Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Family Background Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Family Background Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Other Information Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Personal information Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Training Programs Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Training Programs Details (2023-09-30)</li><li class="list-group-item">rimiru tempest edited his/her Voluntary Work Details (2023-09-30)</li><li class="list-group-item">rimiru tempest uploaded his/her Personal Data sheet (2023-09-29)</li><li class="list-group-item">sasuke uchiha uploaded his/her Personal Data sheet (2023-09-26)</li><li class="list-group-item">sasuke uchiha uploaded his/her Personal Data sheet (2023-09-26)</li><li class="list-group-item">naruto uzumaki uploaded his/her Personal Data sheet (2023-09-26)</li><li class="list-group-item">naruto uzumaki uploaded his/her Personal Data sheet (2023-09-26)</li><li class="list-group-item">naruto uzumaki uploaded his/her Personal Data sheet (2023-09-20)</li><li class="list-group-item">Darea Anne Jawili uploaded his/her Personal Data sheet (2023-09-19)</li></ul>            </div>
            <hr>
            <a class="bg-success py-2 rounded text-decoration-none text-bold text-light px-4" href="#">View Updates&gt;&gt;</a>
          </div>
        </div>
      </div>

    </div>

  </div>

  <script src="../plugins/jquery/jquery.min.js"></script>
  <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../plugins/fontawesome/js/fontawesome.min.js"></script>
  <script src="../plugins/moment/moment.min.js"></script>
  <script src="../plugins/virtual-select/virtual-select.js"></script>
  <script src="../plugins/helpers/js/helpers.js"></script>
  <script src="../resources/js/unobfuscated/global-header.js"></script>
  <script src="../resources/js/unobfuscated/global-content-header.js"></script>
  <script src="../resources/js/unobfuscated/global-sidebar.js"></script>
  <script src="../resources/js/unobfuscated/task-force-leader-reports-navbar.js"></script>
  <script src="../resources/js/unobfuscated/task-force-leader-reports-dynamic.js"></script>

</body>
</html>