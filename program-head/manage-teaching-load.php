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

  <title>FLEXIFILE | Manage Teaching Load</title>

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
      <h1>Manage Teaching Load</h1>
      <div style="width: 100%; text-align: right;">
      </div>
      
      <div class="table-teaching mt-3 overflow-scroll">
        <table name="table-teaching-load" class="table table-striped">
          <thead class="table-success">
              <tr>
                  <th style="text-align: center;">Name</th>
                  <th style="text-align: center;">Faculty Type</th>
                  <th style="text-align: center;">No. of Loads</th>
                  <th style="text-align: center;">No. of Hours</th>
                  <th style="text-align: center;">Action</th>
              </tr>
          </thead>
          <tbody class="table-secondary">
          </tbody>
        </table>
      </div>
    </div>



    <div name="modal-view-teaching-load" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" >
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Manage Teaching Loads</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="padding-top: 0">
              <div class="py-2 px-3 mb-3 d-flex align-items-center justify-content-between fs-6" style="background-color: #d7d8da">
                <h5 name="fullname"></h5>
                
            <button type="button" class="btn border border-solid border-dark" name="add-new">Add Load +</button>
              </div>
            <div class="d-flex w-100 justify-content-between align-items-center px-3">
            
              <h6 name="type"></h6>
              <h6 class="me-2"name="loads"></h6>
          </div>
            <div class="table-teaching mt-3 overflow-scroll">
              <table name="table-view-teaching-load" class="table table-striped">
                <thead class="table-success">
                    <tr>
                        <th style="text-align: center;">Subject Code</th>
                        <th style="text-align: center;">Subject Title</th>
                        <th style="text-align: center;">Units</th>
                        <th style="text-align: center;">Sections</th>
                        <th style="text-align: center;">FTE</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td align="right" style="font-weight: bold; margin-right:0">TOTAL</td>
                    <td name="total-fte" align="center" style="font-weight: bold;">0</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" name ="button-manage-load-close" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


    <div name="modal-add-teaching-load" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Add Teaching Load</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
              <div class="col">
                <div class="input-group input-group-sm mb-3">
                  <select class="w-100 rounded" style="font-size: 14px; padding: 5px 10px; background-color: transparent;" name="teaching_load_add_subject_title"></select>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Subject Code</span>
                  <input type="text" name='teaching-load-subject-code' class="form-control" readonly>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Units</span>
                  <input type="text" name="teaching_load_add_units" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Section</span>
                  <input type="text" name="teaching_load_add_section" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Full-Time Equivalent (FTE)</span>
                  <input type="text" name="teaching_load_add_fte" class="form-control" readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" name="button-add-teaching-load-save" >Save</button>
            <button type="button" class="btn btn-danger" name="button-add-teaching-load-cancel" data-bs-dismiss="modal">Cancel</button>
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
  <script src="../resources/js/unobfuscated/program-head-manage-teaching-load.js"></script>

</body>
</html>