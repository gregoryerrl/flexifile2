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

  <title>FLEXIFILE | Manage Users</title>

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
      <h1>Manage Users</h1>
      <div style="width: 100%; text-align: right;">
        <button name="button-add-new" class="btn btn-success">Add New</button>
      </div>
      
      <div class="table-teaching mt-3 overflow-scroll">
        <table name="table-users" class="table table-striped">
          <thead class="table-success">
              <tr>
                  <th style="text-align: center;">Name</th>
                  <th style="text-align: center;">Designation</th>
                  <th style="text-align: center;">Faculty Type</th>
                  <th style="text-align: center;">Action</th>
              </tr>
          </thead>
          <tbody class="table-secondary">
          </tbody>
        </table>
      </div>
    </div>



    <div name="modal-add-user" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Add New User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
              <div class="col">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Subject ID</span>
                  <input type="text" name="user_add_subjectid" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Subject Title</span>
                  <input type="text" name="user_add_subjecttitle" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Units</span>
                  <input type="text" name="user_add_units" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Full-Time Equivalent (FTE)</span>
                  <input type="text" name="user_add_fte" class="form-control">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" name="button-add-user-save" >Save</button>
            <button type="button" class="btn btn-danger"data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>


    <div name="modal-edit-user" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Edit Subject</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
              <div class="col">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Subject ID</span>
                  <input type="text" name="user_edit_subjectid" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Subject Title</span>
                  <input type="text" name="user_edit_subjecttitle" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Units</span>
                  <input type="text" name="user_edit_units" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Full-Time Equivalent (FTE)</span>
                  <input type="text" name="user_edit_fte" class="form-control">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" name="button-edit-user-save" >Save</button>
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
  <script src="../resources/js/unobfuscated/dean-manage-users.js"></script>

</body>
</html>