<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../resources/img/logo.png">

  <link rel="stylesheet" href="../plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="../plugins/fontawesome/css/solid.min.css">
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

    <div class="mt-3 eight-div">
      <div class="eight-div-container1 my-3">
          <div class="container text-center">
            <div class="row">
              <div class="col box1 rounded p-2 m-2" style="background-color:#094509;">
                <img class="mt-4" src="../resources/img/icon5.png">
                <h4 name="count-members" class="mt-3 text-light">Members: </h4>
              </div>
              <div class="col box2 rounded p-2 m-2" style="background-color:#2C6E2C;">
                <img class="mt-4" src="../resources/img/icon5.png">
                <h4 name="count-itefaculty" class="mt-3 text-light">ITE Faculty: </h4>
              </div>
              <div class="col box3 rounded p-2 m-2" style="background-color:#769776;">
                <img  class="mt-4"src="../resources/img/icon5.png">
                <h4 name="count-gefaculty" class="mt-3 text-light">GE Faculty: </h4>
              </div>
            </div>                    
        </div>
      </div>
      <div class="eight-div-container2">
        <div class="container text-center">                   
          <div class="row">
            <div class="col box4 rounded m-2 p-0">
              <div class="float-start p-2" style="background-color:#454545;width:30%;height:100%;border-radius:.5em 0em 0em .5em;"><img src="../resources/img/icon6.png"></div>
              <div name="count-permanent" class="float-end p-2 text-light" style="background-color:#828282;width:70%;height:100%;border-radius:0em .5em .5em 0em;"><h5>Permanent</h5></div>
            </div>
            <div class="col box5 rounded m-2 p-0">
              <div class="float-start p-2" style="background-color:#2C6E2C;width:30%;height:100%;border-radius:.5em 0em 0em .5em;"><img src="../resources/img/icon6.png"></div>
              <div name="count-temporary" class="float-end p-2 text-light" style="background-color:#769776;width:70%;height:100%;border-radius:0em .5em .5em 0em;"><h5>Temporary</h5></div>
            </div>
            <div class="col box4 rounded m-2 p-0">
              <div class="float-start p-2" style="background-color:#454545;width:30%;height:100%;border-radius:.5em 0em 0em .5em;"><img src="../resources/img/icon6.png"></div>
              <div name="count-contractual" class="float-end p-2 text-light" style="background-color:#828282;width:70%;height:100%;border-radius:0em .5em .5em 0em;"><h5>Contractual</h5></div>
            </div>
            <div class="col box5 rounded m-2 p-0">
              <div class="float-start p-2" style="background-color:#2C6E2C;width:30%;height:100%;border-radius:.5em 0em 0em .5em;"><img src="../resources/img/icon6.png"></div>
              <div name="count-parttime" class="float-end p-2 text-light" style="background-color:#769776;width:70%;height:100%;border-radius:0em .5em .5em 0em;"><h5>Part-Time</h5></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container mt-2 px-0 third-div">
      <div class="row row-cols-2">
        <div class="col">
          <div class="my-2 bg-light  p-3 rounded third-div-container">
            <table class="table">
              <tbody>
                <tr><td class="border-0"><h2 class="text-center">Faculty Profile Status</h2></td></tr>
                <tr><td class="border-0"><h4 name="pdslastupdated">Last time updated: </h4></td></tr>                                    
                <tr><td class="border-0 text-center"><a name="seepds" class="bg-success py-2 rounded text-decoration-none text-bold text-light px-4"  href="#">See PDS>></a></td></tr>
              </tbody>
            </table>                         
          </div>
        </div>
        <div class="col">
          <div class="my-2 bg-light p-3 rounded third-div-container">
            <table class="table">
              <tbody>
                <tr>
                  <td class="border-0">
                    <div class="mx-2">
                        <img class="d-inline mx-1 icon" src="../resources/img/icon1.png">
                        <img class="d-inline mx-1 icon" src="../resources/img/icon2.png">
                        <img class="d-inline mx-1 icon" src="../resources/img/icon3.png">
                        <img class="d-inline mx-1 icon" src="../resources/img/icon4.png">
                    </div>
                  </td>
                </tr>
                <tr><td class="border-0"></td></tr>
                <tr><td class="border-0 text-center"><a name="seefiles" class="bg-success py-2 rounded text-decoration-none text-bold text-light px-4"  href="#">See Files>></a></td></tr>
              </tbody>
            </table> 
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 bg-light rounded p-3 fourth-div">
      <div class="container text-start my-4">
        <div class="row">
          <div class="col border-end border-3 border-secondary-subtle">
            <div><h4 class="d-inline">Designation:</h4></div>
            <div><h4 name="designation" class="d-inline fw-bold"></h4></div>
          </div>
          <div class="col">
            <div><h4>Academic Year/Semester:</h4></div>
            <div><h4 name="academicyear" class="fw-bold"></h4></div>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-3 rounded six-div">
      <div class="six-div-container p-3  text-start">
        <h4>Faculty Progress:</h4>                
        <div class="overflow-scroll six-div-table">
          <table class="table table-striped">
            <thead class="text-center table-success">
              <tr>
                <th>Faculty Name</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sample</td>
                <td>sample</td>
                <td>sample</td>
                <td>sample</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>

  <script src="../plugins/jquery/jquery.min.js"></script>
  <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../plugins/fontawesome/js/fontawesome.min.js"></script>
  <script src="../plugins/moment/moment.min.js"></script>
  <script src="../plugins/helpers/js/helpers.js"></script>
  <script src="../resources/js/unobfuscated/global-header.js"></script>
  <script src="../resources/js/unobfuscated/global-content-header.js"></script>
  <script src="../resources/js/unobfuscated/global-sidebar.js"></script>
  <script src="../resources/js/unobfuscated/dean-dashboard.js"></script>

</body>
</html>