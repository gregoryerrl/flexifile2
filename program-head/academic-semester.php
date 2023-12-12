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

    <title>FLEXIFILE | Academic Semester</title>
</head>

<body class="page-home">

    <div class="sr-only root">../</div>

    <div class="layout">
        <?php include '../resources/php/header.php'; ?>
        <?php include '../resources/php/sidebar.php'; ?>
    </div>
    <div class="content">

        <?php include '../resources/php/content-header.php'; ?>

        <div class="rounded bg-light">
            <div class="dean-teaching mt-3 p-3 pb-3">
                <h1>Academic Year | Semester</h1>
            </div>
            <div>
                <div class="d-flex p-3 justify-content-center align-items-center mx-auto rounded" style="width:80%; background-color:#e2e3e5">
                    <h2 style="color: #2C6E2C; font-weight:bold;" name="current-semester"></h2>
                    <div class="py-2 ms-4">
                        <button name="button-set-semester" class="btn btn-success px-3">Set</button>
                    </div>
                </div>
                <div class=" d-flex mt-2 mb-4 justify-content-between mx-auto" style="width:70%">
                    <div class="d-flex">
                        <h4 class="me-2">Start:</h4>
                        <h4 name="current-start" style="font-weight:lighter"></h4>
                    </div>
                    <div class="d-flex">
                        <h4 class="me-2">End: </h4>
                        <h4 name="current-end" style="font-weight:lighter"></h4>
                    </div>
                </div>
                <div class="d-flex w-100 rounded p-3">
                    <div class="w-50">
                        <div class="container mt-4">
                            <h2 class="text-center mb-4">Simple Calendar</h2>

                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sun</th>
                                                <th scope="col">Mon</th>
                                                <th scope="col">Tue</th>
                                                <th scope="col">Wed</th>
                                                <th scope="col">Thu</th>
                                                <th scope="col">Fri</th>
                                                <th scope="col">Sat</th>
                                            </tr>
                                        </thead>
                                        <tbody id="calendar-body">
                                            <!-- Calendar days will go here -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="p-3 w-50" style="background-color:#e2e3e5; border-top-right-radius:0.375rem !important;">
                        <h5 class="text-black w-100 text-center pb-3" style="border-bottom: solid 1px grey;">Academic Semester History Log</h5>
                        <div class="table-teaching mt-3 overflow-scroll">
                            <table class="w-100 table" name="semester-log">
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="exampleModal" data-bs-backdrop="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">SET</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form method="POST">
                            <div class="row align-items-start mt-2">
                                <div class="col">
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">Title:</span>
                                        <input type="text" name="title" class="form-control">
                                    </div>
                                    <h5>Date</h5>
                                    <div class="input-group input-group-sm mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-sm">From:</span>
                                        <input type="date" name="start_date" class="form-control">
                                        <span class="mx-2"></span>
                                        <span class="input-group-text" id="inputGroup-sizing-sm">To:</span>
                                        <input type="date" name="end_date" class="form-control">
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" name="save_semester">Save</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                    </from>
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
    <script src="../resources/js/unobfuscated/program-head-academic-semester.js"></script>







</body>

</html>