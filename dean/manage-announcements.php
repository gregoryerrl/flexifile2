<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../resources/img/logo.png">

  <link rel="stylesheet" href="../plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="../plugins/sweetalert2/css/sweetalert2.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/solid.min.css">
  <link rel="stylesheet" href="../resources/css/flexifile.css">

  <title>FLEXIFILE | Manage Announcements</title>

</head>
<body class="page-home">

  <div class="sr-only root">../</div>

  <div class="layout">
    <?php include '../resources/php/header.php'; ?>
    <?php include '../resources/php/sidebar.php'; ?>
  </div>


  <div class="content">
  <?php include '../resources/php/content-header.php'; ?>


<div class="dean-teaching mt-3 rounded bg-light p-3 pb-3 mb-5">
  <h1>Manage Announcement</h1>
  <div class="mt-3 py-5 announcement" style="background-color:#2C6E2C !important">
        <p class="text-center p-2 fw-bold mb-3">Current Announcement</p>
        <div class="w-100 d-flex">
        <div class="col-sm-8 rounded bg-light mx-auto text-center pt-2 pb-4">
         
          
            <button class="btn btn-primary btn-sm addbtn5 text-center mx-auto mb-3" onclick="editSubject()">Edit</button>'
       
          <h5 class="text-center mt-2" name="announcement" style="color:black"></h5>
        </div>
        </div>
      </div>
      
</div>

        <div name="modal-edit-subject" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel9">Edit Announcement</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
                  <div class="col">
                    <div class="input-group input-group-sm mb-3">
      
                      <input type="text" name="subject_edit_subjectid" class="form-control">
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" name="button-edit-subject-save" >Save</button>
                <button type="button" class="btn btn-danger"data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>


  </div>

  <script src="../plugins/jquery/jquery.min.js"></script>
  <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../plugins/fontawesome/js/fontawesome.min.js"></script>
  <script src="../plugins/sweetalert2/js/sweetalert2.min.js"></script>
  <script src="../plugins/moment/moment.min.js"></script>
  <script src="../plugins/helpers/js/helpers.js"></script>
  <script src="../resources/js/unobfuscated/global-header.js"></script>
  <script src="../resources/js/unobfuscated/global-content-header.js"></script>
  <script src="../resources/js/unobfuscated/global-sidebar.js"></script>
  <script src="../resources/js/unobfuscated/dean-manage-announcements.js"></script>

</body>
</html>