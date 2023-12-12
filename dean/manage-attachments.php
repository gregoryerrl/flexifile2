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

  <title>FLEXIFILE | Attachments</title>

</head>
<body class="page-home">

  <div class="sr-only root">../</div>

  <div class="layout">
    <?php include '../resources/php/header.php'; ?>
    <?php include '../resources/php/sidebar.php'; ?>
  </div>


  <div class="content">

    <?php include '../resources/php/content-header.php'; ?>

    <div class="mt-3 rounded nine-div">
      <div class="nine-div-container p-3 text-start">
        <h4>Attachments</h4>
        <div class="overflow-scroll nine-div-table">
          <div style="width: 250px; margin-top: 20px;">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">Sort by:</span>
              <select class="form-select" name="filter_by_document_type"></select>
            </div>
          </div>
          <table style="width: 100%;">
            <tr>
              <td>
                <div name="file-location" style="padding: 5px;">Location: <span></span></div>
              </td>
              <td align="right">
                <div style="padding: 5px;">
                  <button name="attachments_create_folder" class="btn btn-sm btn-primary">Create Folder</button>
                  <button name="attachments_upload_file" class="btn btn-sm btn-success">Upload File</button>
                </div>
              </td>
            </tr>
          </table>
          <table name="table-attachments" class="table table-striped">
            <thead class="text-center table-success">
              <tr>
                <th>File Name</th>
                <th>Document Type</th>
                <th>Size</th>
                <th>Date-Time Uploaded</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div name="modal-attachments-create-folder" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Create New Folder</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
              <div class="col">
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Folder Name</span>
                  <input type="text" name="attachments_create_file_folder_name" class="form-control">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" name="button-create-folder-save" >Save</button>
            <button type="button" class="btn btn-danger"data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>


    <div name="modal-attachments-upload-file" class="modal fade" data-bs-backdrop="false" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel9">Upload File</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start mt-2" style="width: 50%; margin: 0 auto; ">
              <div class="col">
                <div class="input-group input-group-sm mb-3">
                    <input type="file" class="image-file" name="attachments_upload_file_attachment">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">File Name</span>
                  <input type="text" name="attachments_upload_file_name" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">Document Type</span>
                  <input type="text" name="attachments_upload_file_type" class="form-control">
                </div>
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm" style="width: 40%">File Size</span>
                  <input type="text" name="attachments_upload_file_size" class="form-control" readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" name="button-upload-file-save" >Save</button>
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
  <script src="../resources/js/unobfuscated/dean-manage-attachments.js"></script>

</body>
</html>