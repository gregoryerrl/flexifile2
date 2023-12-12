$( document ).ready( function() {

  let btnPDSUpload             = $( "[name='button-pds-upload']" );
  let filePDSUpload            = $( "[name='file-pds-upload']" );
  let xWorkbook                = undefined;
  let xWorksheet               = undefined;

  let lblFirstName             = $( "[name='firstname']" );
  let lblLastName              = $( "[name='lastname']" );
  let lblMiddlenName           = $( "[name='middlename']" );
  let lblExtName               = $( "[name='extname']" );
  let lblDateOfBirth           = $( "[name='dateofbirth']" );
  let lblPlaceOfBirth          = $( "[name='placeofbirth']" );
  let lblGender                = $( "[name='gender']" );
  let lblCivilStatus           = $( "[name='civilstatus']" );
  let lblHeight                = $( "[name='height']" );
  let lblWeight                = $( "[name='weight']" );
  let lblBloodType             = $( "[name='bloodtype']" );
  let lblGSISID                = $( "[name='gsisid']" );
  let lblPagibigID             = $( "[name='pagibigid']" );
  let lblPhilHealthID          = $( "[name='philhealthid']" );
  let lblSSSNo                 = $( "[name='sssno']" );
  let lblTINNo                 = $( "[name='tinno']" );
  let lblAgencyNo              = $( "[name='agencyno']" );
  let lblCitizenship           = $( "[name='citizenship']" );
  let lblTelephone             = $( "[name='telephone']" );
  let lblEmail                 = $( "[name='email']" );
  let lblMobileNo              = $( "[name='mobileno']" );

  let lblResidential_house_no     = $( "[name='residential_house_no']" );
  let lblResidential_street       = $( "[name='residential_street']" );
  let lblResidential_subdivision  = $( "[name='residential_subdivision']" );
  let lblResidential_barangay     = $( "[name='residential_barangay']" );
  let lblResidential_municipality = $( "[name='residential_municipality']" );
  let lblResidential_province     = $( "[name='residential_province']" );
  let lblResidential_zipcode      = $( "[name='residential_zipcode']" );
  let lblPermanent_house_no       = $( "[name='permanent_house_no']" );
  let lblPermanent_street         = $( "[name='permanent_street']" );
  let lblPermanent_subdivision    = $( "[name='permanent_subdivision']" );
  let lblPermanent_barangay       = $( "[name='permanent_barangay']" );
  let lblPermanent_municipality   = $( "[name='permanent_municipality']" );
  let lblPermanent_province       = $( "[name='permanent_province']" );
  let lblPermanent_zipcode       = $( "[name='permanent_zipcode']" );

  let lblSpouseSurname   = $( "[name='spouseSurname']" );
  let lblSpouseFirstName = $( "[name='spouseFirstname']" );
  let lblSpouseMidName   = $( "[name='spouseMidname']" );
  let lblSpouseExtension = $( "[name='spouseExtension']" );
  let lblOccupation      = $( "[name='occupation']" );
  let lblEmployer        = $( "[name='employer']" );
  let lblBusinessAddress = $( "[name='businessAddress']" );
  let lblTelephoneSpouse = $( "[name='telephone_spouse']" );
  let lblFatherSurname   = $( "[name='father_surname']" );
  let lblFather_firstname = $( "[name='father_firstname']" );
  let lblFather_midname   = $( "[name='father_midname']" );
  let lblFather_extension = $( "[name='father_extension']" );
  let lblMother_surname   = $( "[name='mother_surname']" );
  let lblMother_firstname = $( "[name='mother_firstname']" );
  let lblMother_midname   = $( "[name='mother_midname']" );

  let panelChildren = $( "[name='panel_children']" );

  let lblElementrary_name_of_school = $( "[name='elementrary_name_of_school']" );
  let lblElementrary_degree_course  = $( "[name='elementrary_degree_course']" );
  let lblElementary_from            = $( "[name='elementary_from']" );
  let lblElementary_to              = $( "[name='elementary_to']" );
  let lblElementary_highest_level   = $( "[name='elementary_highest_level']" );
  let lblElementary_year_graduated  = $( "[name='elementary_year_graduated']" );
  let lblElementary_honors          = $( "[name='elementary_honors']" );

  let panelEducationalBackground   = $( "[name='panel_educational_background']" );
  let panelCivilServiceEligibility = $( "[name='panel_civil_service_eligibility']" );
  let panelWorkExperience          = $( "[name='panel_work_experience']" );
  let panelVoluntaryWork           = $( "[name='panel_voluntary_work']" );
  let panelTrainingsAttended       = $( "[name='panel_trainings_attended']" );
  let panelOtherInformation        = $( "[name='panel_other_information']" );


  session.init().then( function() {

    btnPDSUpload.click( function() {
      filePDSUpload.click();
    });

    filePDSUpload.on( 'change', function( e ) { uploadPDS( e.target ); });

    dbQuery.execute( "Select * From personal_info_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1; " ).then( function () {
      if ( dbQuery.rows() > 0 ) {
        lblFirstName.append(    formatData( dbQuery.result( 0, 'firstname' ) ) );
        lblLastName.append(     formatData( dbQuery.result( 0, 'surname' ) ) );
        lblMiddlenName.append(  formatData( dbQuery.result( 0, 'midname' ) ) );
        lblExtName.append(      formatData( dbQuery.result( 0, 'extension' ) ) );
        lblDateOfBirth.append(  formatData( dbQuery.result( 0, 'birthday' ), 'date' ) );
        lblPlaceOfBirth.append( formatData( dbQuery.result( 0, 'birthplace' ) ) );
        lblGender.append(       formatData( dbQuery.result( 0, 'sex' ) ) );
        lblCivilStatus.append(  formatData( dbQuery.result( 0, 'civil_status' ) ) );
        lblHeight.append(       formatData( dbQuery.result( 0, 'height' ) ) );
        lblWeight.append(       formatData( dbQuery.result( 0, 'weight' ) ) );
        lblBloodType.append(    formatData( dbQuery.result( 0, 'bloodtype' ) ) );
        lblGSISID.append(       formatData( dbQuery.result( 0, 'gsis' ) ) );
        lblPagibigID.append(    formatData( dbQuery.result( 0, 'pagibig' ) ) );
        lblPhilHealthID.append( formatData( dbQuery.result( 0, 'philhealth' ) ) );
        lblSSSNo.append(        formatData( dbQuery.result( 0, 'sss' ) ) );
        lblTINNo.append(        formatData( dbQuery.result( 0, 'tin' ) ) );
        lblAgencyNo.append(     formatData( dbQuery.result( 0, 'agency_no' ) ) );
        lblCitizenship.append(  formatData( dbQuery.result( 0, 'citizenship' ) ) );
        lblTelephone.append(    formatData( dbQuery.result( 0, 'telephone' ) ) );
        lblEmail.append(        formatData( dbQuery.result( 0, 'email' ) ) );
        lblMobileNo.append(     formatData( dbQuery.result( 0, 'mobile_no' ) ) );

        lblResidential_house_no.append(     formatData( dbQuery.result( 0, 'residential_house_no' ) ) );
        lblResidential_street.append(       formatData( dbQuery.result( 0, 'residential_street' ) ) );
        lblResidential_subdivision.append(  formatData( dbQuery.result( 0, 'residential_subdivision' ) ) );
        lblResidential_barangay.append(     formatData( dbQuery.result( 0, 'residential_barangay' ) ) );
        lblResidential_municipality.append( formatData( dbQuery.result( 0, 'residential_municipality' ) ) );
        lblResidential_province.append(     formatData( dbQuery.result( 0, 'residential_province' ) ) );
        lblResidential_zipcode.append(      formatData( dbQuery.result( 0, 'residential_zipcode' ) ) );
        lblPermanent_house_no.append(       formatData( dbQuery.result( 0, 'permanent_house_no' ) ) );
        lblPermanent_street.append(         formatData( dbQuery.result( 0, 'permanent_street' ) ) );
        lblPermanent_subdivision.append(    formatData( dbQuery.result( 0, 'permanent_subdivision' ) ) );
        lblPermanent_barangay.append(       formatData( dbQuery.result( 0, 'permanent_barangay' ) ) );
        lblPermanent_municipality.append(   formatData( dbQuery.result( 0, 'permanent_municipality' ) ) );
        lblPermanent_province.append(       formatData( dbQuery.result( 0, 'permanent_province' ) ) );
        lblPermanent_zipcode.append(        formatData( dbQuery.result( 0, 'permanent_zipcode' ) ) );
      }
    });


    dbQuery.execute( "Select * From family_background_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1; " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        lblSpouseSurname.append(    formatData( dbQuery.result( 0, 'spouseSurname' ) ) );
        lblSpouseFirstName.append(  formatData( dbQuery.result( 0, 'spouseFirstname' ) ) );
        lblSpouseMidName.append(    formatData( dbQuery.result( 0, 'spouseMidname' ) ) );
        lblSpouseExtension.append(  formatData( dbQuery.result( 0, 'spouseExtension' ) ) );
        lblOccupation.append(       formatData( dbQuery.result( 0, 'occupation' ) ) );
        lblEmployer.append(         formatData( dbQuery.result( 0, 'employer' ) ) );
        lblBusinessAddress.append(  formatData( dbQuery.result( 0, 'businessAddress' ) ) );
        lblTelephoneSpouse.append(  formatData( dbQuery.result( 0, 'telephone_spouse' ) ) );
        lblFatherSurname.append(    formatData( dbQuery.result( 0, 'father_surname' ) ) );
        lblFather_firstname.append( formatData( dbQuery.result( 0, 'father_firstname' ) ) );
        lblFather_midname.append(   formatData( dbQuery.result( 0, 'father_midname' ) ) );
        lblFather_extension.append( formatData( dbQuery.result( 0, 'father_extension' ) ) );
        lblMother_surname.append(   formatData( dbQuery.result( 0, 'mother_surname' ) ) );
        lblMother_firstname.append( formatData( dbQuery.result( 0, 'mother_firstname' ) ) );
        lblMother_midname.append(   formatData( dbQuery.result( 0, 'mother_midname' ) ) );
      }
    });


    dbQuery.execute( "Select * From family_children_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From family_children_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelChildren.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelChildren.append(
            '<div class="row">' +
              '<div class="col">' +
                '<div class="input-group input-group-sm"><p>Child Name:</p></div>' +
                '<div class="mb-3" style="margin-top: -15px !important; ">' + formatData( dbQuery.result( i, 'childname' ) ) + '</div>' +
              '</div>' +
              '<div class="col">' +
                '<div class="input-group input-group-sm"><p>Date of Birth:</p></div>' +
              '</div>' +
            '</div>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From education_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From education_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     ") Order By fromDate Asc; " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelEducationalBackground.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelEducationalBackground.append(
            '<h5 class="fw-bold mt-4 mb-3" style="margin-left: 10px; text-transform: capitalize !important; ">' + dbQuery.result( i, 'level' ).toLowerCase() + '</h5>' +
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                  '<div class="input-group input-group-sm mb-3"><p>Name of School: </p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'schoolName' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Basic Educational / Degree / Course: </p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'degree' ) ) + '</div>' +
                  '<p style="margin-bottom: 0;">Period Attendance</p>'+
                  '<div class="input-group input-group-sm">' +
                    '<span class="mx-2"></span>' +
                    '<p>From: &nbsp' + formatData( dbQuery.result( i, 'fromDate' ) ) + '</p>' +
                    '<span class="mx-5"></span>' +
                    '<p>To: &nbsp' + formatData( dbQuery.result( i, 'toDate' ) ) + '</p>' +
                  '</div>' +
                '</div>' +
                '<div class="col">' +
                  '<div class="input-group input-group-sm mb-3"><p>Highest Level / Unit Earned: </p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'units' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Year Graduated: </p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'graduated' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Scholarship / Academic Honors Recieved: </p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'honors' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div><hr>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From civil_service_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From civil_service_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelCivilServiceEligibility.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelCivilServiceEligibility.append(
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                '<div class="input-group input-group-sm mb-3"><p>Career Service:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'career' ) ) + '</div>' +
                '<div class="input-group input-group-sm mb-3"><p>Rating:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'rating' ) ) + '</div>' +
                '<div class="input-group input-group-sm mb-3"><p>Date of Examination/Conferment:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'examination' ) ) + '</div>' +
              '</div>' +
              '<div class="col">' +
                '<div class="input-group input-group-sm mb-3"><p>Place of Examination/Conferment:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'place' ) ) + '</div>' +
                '<p><strong>License</strong></p>' +
                '<div class="input-group input-group-sm mb-3"><p>Number:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'number' ) ) + '</div>' +
                '<div class="input-group input-group-sm mb-3"><p>Date of Validity:</p></div>' +
                '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'validity' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From work_experience_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From work_experience_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelWorkExperience.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelWorkExperience.append(
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                  '<p style="margin-bottom: 0;">Inclusive Dates</p>'+
                  '<div class="input-group input-group-sm mb-3">' +
                    '<p>From: &nbsp' + formatData( dbQuery.result( i, 'work_from_date' ) ) + '</p>' +
                    '<span class="mx-5"></span>' +
                    '<p>To: &nbsp' + formatData( dbQuery.result( i, 'work_to_date' ) ) + '</p>' +
                  '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Position Title:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'position_title' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Department/Agency/Office/Company:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'department' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Monthly Salary:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'salary' ) ) + '</div>' +
                '</div>' +
                '<div class="col text-start">' +
                  '<div class="input-group input-group-sm mb-3"><p>Salary/Job/Pay Grade (if applicable) & Step  (Format "00-0")/ Increment:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'paygrade' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Status of Appointment:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'appointment' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Govt Service (Y/N):</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'gov_service' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div><hr>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From voluntary_work_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From voluntary_work_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelVoluntaryWork.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelVoluntaryWork.append(
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                  '<div class="input-group input-group-sm mb-3"><p>Name and Address of Organization:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'organization' ) ) + '</div>' +
                  '<p style="margin-bottom: 0;">Inclusive Dates</p>'+
                  '<div class="input-group input-group-sm mb-3">' +
                    '<p>From: &nbsp' + formatData( dbQuery.result( i, 'from_date' ) ) + '</p>' +
                    '<span class="mx-5"></span>' +
                    '<p>To: &nbsp' + formatData( dbQuery.result( i, 'to_date' ) ) + '</p>' +
                  '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Number of Hours:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'hours' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Position/ Nature of Work:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'position' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div><hr>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From training_programs_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From training_programs_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelTrainingsAttended.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelTrainingsAttended.append(
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                  '<div class="input-group input-group-sm mb-3"><p>Title of Learning and Development Interventions/Training Programs:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'title' ) ) + '</div>' +
                  '<p style="margin-bottom: 0;">Inclusive Dates of Attendance</p>'+
                  '<div class="input-group input-group-sm mb-3">' +
                    '<p>From: &nbsp' + formatData( dbQuery.result( i, 'training_from_date' ) ) + '</p>' +
                    '<span class="mx-5"></span>' +
                    '<p>To: &nbsp' + formatData( dbQuery.result( i, 'training_to_date' ) ) + '</p>' +
                  '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Number of Hours:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'duration' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Type of LD( Managerial/ Supervisory/Technical/etc):</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'type' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Conducted/Sponsored by:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'sponsor' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div><hr>'
          )
        }
      }
    });


    dbQuery.execute( "Select * From other_info_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                       "Select datetimeupdated From other_info_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                     "); " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        panelOtherInformation.html( '' );

        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          panelOtherInformation.append(
            '<div class="container text-start">' +
              '<div class="row">' +
                '<div class="col">' +
                  '<div class="input-group input-group-sm mb-3"><p>Special Skill and Hobbies:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'skills_hobbies' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Non-Academic Distinctions/Recognition:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'recognition' ) ) + '</div>' +
                  '<div class="input-group input-group-sm mb-3"><p>Membership in Association/Organization by:</p></div>' +
                  '<div class="mb-3" style="margin-top: -30px !important; ">' + formatData( dbQuery.result( i, 'association' ) ) + '</div>' +
                '</div>' +
              '</div>' +
            '</div><hr>'
          )
        }
      }
    });


  });





  function uploadPDS( pdsfile ) {
    loadWorkbook( pdsfile ).then( function() {
      loadWorksheet( 'C1' ).then( function() {
        if ( getCellData( 'A64' ).indexOf( 'CS FORM 212 (Revised 2017)' ) >= 0 ) {
          // Promise.all([
          //   dbQuery.executeNonQuery(
          //     "Insert Into personal_info_tb Values (" +
          //       "Null, " +
          //       "'" + session.get( 'user_id' ) + "', " +
          //       "'" + sqlEscape( getCellData( 'D10' ).trim() ) + "', " +
          //       "'" + sqlEscape( getCellData( 'D11' ).trim() ) + "', " +
          //       "'" + sqlEscape( getCellData( 'D12' ).trim() ) + "', " +
          //       "'" + sqlEscape( getCellData( 'L11' ).replace( 'NAME EXTENSION (JR., SR)', '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIBirthday + moment( getCellData( 'D13' ).trim(), 'MM/DD/YYYY' ).format( 'YYYY-MM-DD' ) ) + "', " +
          //       "'" + sqlEscape( txtPIBirthplace + getCellData( 'D15' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPISex + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPICivilStatus + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIHeight + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIWeight + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIBloodtype + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIGSIS + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPagIbig + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPhilhealth + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPISSS + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPITIN + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIAgencyNo + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPICitizenship + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialHouseNo + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialStreet + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialSubdivision + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialBarangay + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialMunicipality + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialProvince + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIResidentialZipcode + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentHouseNo + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentStreet + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentSubdivision + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentBarangay + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentMunicipality + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentProvince + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIPermanentZipcode + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPITelephone + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIEmail + getCellData( '' ).trim() ) + "', " +
          //       "'" + sqlEscape( txtPIMobileNo + getCellData( '' ).trim() ) + "', " +
          //       "Now() " +
          //     "); "
          //   )
          // ]).then( function() {
          //   notify( 'success', 'Upload Success', 'Successfully updated PDS Information.' ).then( function() {
          //     reload();
          //   });
          // });
        }
        else {
          notify( 'error', 'Invalid File', 'Please upload a valid PDS file' );
        }
      })
    });
  }





  function formatData( data, type = 'text' ) {
    return '<div class="fw-bold ml-2 d-block">' + ( data ? ( type == 'date' ? moment( data, 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) : data ) : '-' ) + '</div>';
  }



  function loadWorkbook( fileLocation ) {
    return new Promise( function ( resolve, reject ) {
      let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;

      if ( regex.test( fileLocation.value.toLowerCase() ) ) {
        if ( typeof ( FileReader ) != 'undefined' ) {
          var reader = new FileReader();

          //For Browsers other than IE.
          if ( reader.readAsBinaryString ) {
            reader.onload = function ( e ) {
              xWorkbook = XLSX.read( e.target.result, { type: 'binary' });
              resolve();
            };

            reader.readAsBinaryString( fileLocation.files[0] );
          }
          else {

          //For IE Browser.
          reader.onload = function ( e ) {
            var data = '';
            var bytes = new Uint8Array( e.target.result );
              for ( var i = 0; i < bytes.byteLength; i++ ) {
                data += String.fromCharCode( bytes[i] );
              }
              xWorkbook = XLSX.read( e.target.result, { type: 'binary' });
              resolve();
            };
            reader.readAsArrayBuffer( fileLocation.files[0] );
          }
        }
        else {
          notify( 'error', 'Browser Error', 'This browser does not support HTML5' );
          reject();
        }
      }
      else {
        notify( 'error', 'Invalid File', 'Please upload a valid PDS file' );
        reject();
      }
    });
  }

  function loadWorksheet( sheetname ) {
    return new Promise( function( resolve, reject ) {
      for ( var i = 0; i < xWorkbook.SheetNames.length; i++ ) {
        if ( xWorkbook.SheetNames[i] == sheetname ) {
          xWorksheet = XLSX.utils.sheet_to_json( xWorkbook.Sheets[ xWorkbook.SheetNames[0] ], { header : 1 } );
          resolve();
        }

        if ( i == xWorkbook.SheetNames.length - 1 && xWorksheet == undefined ) {
          notify( 'error', 'Invalid File', 'Please upload a valid PDS file' );
          reject();
        }
      }
    });
  }

  function getCellData( cell ) {
    let row = ( ( cell.replace( /([a-zA-Z ])/g, '' ) ) - 1 );
    let col = ( ( cell.replace( /([0-9 ])/g, '' ) ).split( '' ).reduce( ( r, a ) => r * 26 + parseInt( a, 36 ) - 9, 0 ) - 1 );

    if ( !xWorksheet[row][col] ) { return ''; }
    else { return xWorksheet[row][col]; }
  }

});