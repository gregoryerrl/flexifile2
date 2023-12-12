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


    <div class="profile-pds mt-3 rounded p-2">

      <div class="pt-2">
      <!-- <button type="button" class="btn btn-dark" >Create</button> -->
      <button name="button-pds-upload" type="button" class="btn btn-primary">Upload PDS File</button>
      <input name="file-pds-upload" class="sr-only" type="file" />
      </div>
      <hr class="hr"/>
      <div class="profile-pds rounded bg-secondary bg-opacity-50 p-2 text-center">
        <div class="d-flex justify-content-center">
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="personal" href="#personal-info">Personal Information</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="family" href="#family-background">Family Background</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="educational" href="#educational-background">Educational Background</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="civilservice" href="#civil-service">Civil Service Eligibility</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="workexp" href="#work-exp">Work Experience</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="voluntary" href="#voluntary-work">Voluntary Work</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info" id="interventions" href="#training-programs-ld">L&D Interventions</a>
          <span class="vertical-line"></span>
          <a class="d-inline link-opacity-100 px-1  nav-link-info"id="interventions" href="#other_info">Other Information</a>
        </div>
      </div>


      <div class="profile-pds-personal m-3" id="personal-info">
        <h4 class="fw-bold ml-4">Personal Information</h4>
        <div class="container text-start">
          <div class="row">
            <div class="col">
              <div class="input-group input-group-sm mb-2"><p name="firstname">Firstname: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="lastname">Surname: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="middlename">Middle Name: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="extname">Name Extension(JR,SR): </p></div>
              <div class="input-group input-group-sm mb-2"><p name="dateofbirth">Date of Birth: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="placeofbirth">Place of Birth: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="gender">Sex: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="civilstatus">Civil Status: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="height">Height(m): </p></div>
              <div class="input-group input-group-sm mb-2"><p name="weight">Weight(kg): </p></div>
              <div class="input-group input-group-sm mb-2"><p name="bloodtype">Blood Type: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="gsisid">GSIS ID no: </p></div> 
              <div class="input-group input-group-sm mb-2"><p name="pagibigid">PAGIBIG ID no: </p></div>  
              <div class="input-group input-group-sm mb-2"><p name="philhealthid">PHILHEATH ID no: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="sssno">SSS no: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="tinno">Tin no: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="agencyno">Agency Employee no: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="citizenship">Citizenship: </p></div>  
              <div class="input-group input-group-sm mb-2"><p name="telephone">Telephone: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="email">E-mail Address: </p></div>
              <div class="input-group input-group-sm mb-2"><p name="mobileno">Mobile no: </p></div>   
            </div>
            <div class="col">
              <p class="mb-4"><strong>Residential Address:</strong></p>
                <div class="input-group input-group-sm mb-2"><p name="residential_house_no">House/Block/Lot No. </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_street">Street: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_subdivision">Subdivision/Village: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_barangay">Barangay: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_municipality">City/Municipality: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_province">Province: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="residential_zipcode">Zipcode: </p></div>
              <p class="mt-5 mb-4"><strong>Permanent Address:</strong></p>
                <div class="input-group input-group-sm mb-2"><p name="permanent_house_no">House/Block/Lot No. </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_street">Street: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_subdivision">Subdivision/Village: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_barangay">Barangay: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_municipality">City/Municipality: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_province">Province: </p> </div>
                <div class="input-group input-group-sm mb-2"><p name="permanent_zipcode">Zipcode: </p></div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-end">
          <button name="edit-personal-information" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div> 
      </div>


      <div class="profile-pds-family m-3" id="family-background">
        <h4 class="fw-bold">Family Background</h4>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p name="spouseSurname">Spouse Surname: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="spouseFirstname">Spouse Firstname: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="spouseMidname">Spouse Middle Name: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="spouseExtension">Spouse Extension: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="occupation">Occupation: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="employer">Employer/Business Name: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="businessAddress">Business Address: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="telephone_spouse">Telephone no: </p></div> 
                <div class="input-group input-group-sm mb-3"><p name="father_surname">Father's Surname: </p></div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p name="father_firstname">Father's Firstname: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="father_midname">Father's Middle name: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="father_extension">Name Extension(JR.,SR): </p></div>
                <div class="text-start"><p><strong>Mother's Maiden name</strong></p></div>                      
                <div class="input-group input-group-sm mb-3"><p name="mother_surname">Mother's Surname: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="mother_firstname">Mother's Firstname: </p></div>
                <div class="input-group input-group-sm mb-3"><p name="mother_midname">Mother's Middle name: </p></div>
              </div>                    
            </div>
            <div class="row text-start">
              <p><strong>Name of Children</strong></p>
              <div name="panel_children">
                <div class="row">
                  <div class="col">
                    <div class="input-group input-group-sm mb-3"><p>Child Name: -</p></div>
                  </div>
                  <div class="col">
                    <div class="input-group input-group-sm mb-3"><p>Date of Birth: -</p></div>
                  </div>
                </div>
              </div>
            </div>              
        </div>
        <div class="mt-2 text-end">
          <button name="edit-family-information" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-education m-3" id="educational-background">
        <h4 class="fw-bold">Educational Background</h4>

        <div name="panel_educational_background">

          <h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px;">Elementary</h5>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name of School: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: -</p></div>
                <p>Period Attendance</p>
                <div class="input-group input-group-sm mb-3">
                  <span class="mx-3"></span>
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Year Graduated: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: -</p></div>
              </div>
            </div>
          </div>
          <h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px;">Secondary</h5>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name of School: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: -</p></div>
                <p>Period Attendance</p>
                <div class="input-group input-group-sm mb-3">
                  <span class="mx-3"></span>
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Year Graduated: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: -</p></div>
              </div>
            </div>
          </div>
          <h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px;">Vocational / Trade Course</h5>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name of School: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: -</p></div>
                <p>Period Attendance</p>
                <div class="input-group input-group-sm mb-3">
                  <span class="mx-3"></span>
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Year Graduated: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: -</p></div>
              </div>
            </div>
          </div>
          <h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px;">College</h5>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name of School: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: -</p></div>
                <p>Period Attendance</p>
                <div class="input-group input-group-sm mb-3">
                  <span class="mx-3"></span>
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Year Graduated: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: -</p></div>
              </div>
            </div>
          </div>
          <h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px;">Graduate Studies</h5>
          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name of School: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: -</p></div>
                <p>Period Attendance</p>
                <div class="input-group input-group-sm mb-3">
                  <span class="mx-3"></span>
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
              </div>
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Year Graduated: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-educational-background" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-civil m-3" id="civil-service">
        <h4 class="fw-bold">Civil Service Eligibility </h4>

        <div name="panel_civil_service_eligibility">

          <div class="container text-start">
            <div class="row">
              <div class="col">
              <div class="input-group input-group-sm mb-3"><p>Career Service: -</p></div>
              <div class="input-group input-group-sm mb-3"><p>Rating: -</p></div>
              <div class="input-group input-group-sm mb-3"><p>Date of Examination/Conferment: -</p></div>
            </div>
            <div class="col">
              <div class="input-group input-group-sm mb-3"><p>Place of Examination/Conferment: -</p></div>
              <p><strong>License</strong></p>
              <div class="input-group input-group-sm mb-3"><p>Number: -</p></div>
              <div class="input-group input-group-sm mb-3"><p>Date of Validity: -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-civil-service" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-work m-3" id="work-exp">
        <h4 class="fw-bold">Work Experience </h4>

        <div name="panel_work_experience">

          <div class="container text-start">
            <div class="row">
              <div class="col">
                <p>Inclusive Dates</p>
                <div class="input-group input-group-sm mb-3">
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
                <div class="input-group input-group-sm mb-3"><p>Position Title: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Department/Agency/Office/Company: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Monthly Salary: -</p></div>
              </div>
              <div class="col text-start">
                <div class="input-group input-group-sm mb-3"><p>Salary/Job/Pay Grade (if applicable) & Step  (Format "00-0")/ Increment: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Status of Appointment: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Govt Service (Y/N): -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-work-experience" type="button" class="btn btn-success px-3 edit-btn-1"  >Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-voluntary m-" id="voluntary-work">
        <h4 class="fw-bold">Voluntary Work or Involvement in Civic/Non-Government/People/Voluntary Organization/s </h4>

        <div name="panel_voluntary_work">

          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Name and Address of Organization: -</p></div>
                <p>Inclusive Dates</p>
                <div class="input-group input-group-sm mb-3">
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
                <div class="input-group input-group-sm mb-3"><p>Number of Hours: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Position/ Nature of Work: -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-voluntary-work" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-training-programs m-3" id="training-programs-ld">
        <h4 class="fw-bold">Learning and Development (L&D) Interventions/Training Programs Attended </h4>

        <div name="panel_trainings_attended">

          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Title of Learning and Development Interventions/Training Programs: -</p></div>
                <p><strong>Inclusive Dates of Attendance</strong></p>
                <div class="input-group input-group-sm mb-3">
                  <p>From: -</p>
                  <span class="mx-5"></span>
                  <p>To: -</p>
                </div>
                <div class="input-group input-group-sm mb-3"><p>Number of Hours: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Type of LD( Managerial/ Supervisory/Technical/etc): -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Conducted/Sponsored by: -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-training-programs" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


      <div class="profile-pds-intervention m-3" id="other_info">
        <h4 class="fw-bold">Other Information </h4>

        <div name="panel_other_information">

          <div class="container text-start">
            <div class="row">
              <div class="col">
                <div class="input-group input-group-sm mb-3"><p>Special Skill and Hobbies: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Non-Academic Distinctions/Recognition: -</p></div>
                <div class="input-group input-group-sm mb-3"><p>Membership in Association/Organization by: -</p></div>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-2 text-end">
          <button name="edit-other-info" type="button" class="btn btn-success px-3 edit-btn-1">Edit</button>
          <hr class="border border-success border-3 opacity-100"/>
        </div>
      </div>


    </div>

  </div>

  <?php include '../resources/php/pds-modals.php'; ?>

  <script src="../plugins/jquery/jquery.min.js"></script>
  <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../plugins/fontawesome/js/fontawesome.min.js"></script>
  <script src="../plugins/sweetalert2/js/sweetalert2.min.js"></script>
  <script src="../plugins/moment/moment.min.js"></script>
  <script src="../plugins/xlsx/xlsx.full.min.js"></script>
  <script src="../plugins/xlsx/jszip.js"></script>
  <script src="../plugins/helpers/js/helpers.js"></script>
  <script src="../resources/js/unobfuscated/global-header.js"></script>
  <script src="../resources/js/unobfuscated/global-content-header.js"></script>
  <script src="../resources/js/unobfuscated/global-sidebar.js"></script>
  <script src="../resources/js/unobfuscated/global-pds-modals.js"></script>
  <script src="../resources/js/unobfuscated/task-force-leader-view-pds.js"></script>

</body>
</html>