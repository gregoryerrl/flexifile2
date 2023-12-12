$( document ).ready( function() {

  let btnEditPersonalInformation   = $( "[name='edit-personal-information']" );
  let btnEditFamilyInformation     = $( "[name='edit-family-information']" );
  let btnEditEducationalBackground = $( "[name='edit-educational-background']" );
  let btnEditCivilService          = $( "[name='edit-civil-service']" );
  let btnEditWorkExperience        = $( "[name='edit-work-experience']" );
  let btnEditVoluntaryWork         = $( "[name='edit-voluntary-work']" );
  let btnEditTrainingPrograms      = $( "[name='edit-training-programs']" );
  let btnEditOtherInfo             = $( "[name='edit-other-info']" );


  let btnSavePersonalInformation   = $( "[name='save-personal-information']" );
  let btnSaveFamilyInformation     = $( "[name='save-family-information']" );
  let btnSaveEducationalBackground = $( "[name='save-educational-background']" );
  let btnSaveCivilService          = $( "[name='save-civil-service']" );
  let btnSaveWorkExperience        = $( "[name='save-work-experience']" );
  let btnSaveVoluntaryWork         = $( "[name='save-voluntary-work']" );
  let btnSaveTrainingPrograms      = $( "[name='save-training-programs']" );
  let btnSaveOtherInfo             = $( "[name='save-other-info']" );


  let modalEditPersonalInformation   = $( "[name='modal-edit-personal-information']" );
  let modalEditFamilyInformation     = $( "[name='modal-edit-family-information']" );
  let modalEditEducationalBackground = $( "[name='modal-edit-educational-background']" );
  let modalEditCivilService          = $( "[name='modal-edit-civil-service']" );
  let modalEditWorkExperience        = $( "[name='modal-edit-work-experience']" );
  let modalEditVoluntaryWork         = $( "[name='modal-edit-voluntary-work']" );
  let modalEditTrainingPrograms      = $( "[name='modal-edit-training-programs']" );
  let modalEditOtherInfo             = $( "[name='modal-edit-other-info']" );


  let tblChildren              = $( "[name='table-children']" );
  let tblEducationalBackground = $( "[name='table-educational-background']" );
  let tblCivilService          = $( "[name='table-civil-service']" );
  let tblWorkExperience        = $( "[name='table-work-experience']" );
  let tblVoluntaryWork         = $( "[name='table-voluntary-work']" );
  let tblTrainingPrograms      = $( "[name='table-training-programs']" );
  let tblOtherInfo             = $( "[name='table-other-info']" );


  let txtPIFirstname               = $( "[name='pi_firstname']" );
  let txtPISurname                 = $( "[name='pi_surname']" );
  let txtPIMidname                 = $( "[name='pi_midname']" );
  let txtPIExtension               = $( "[name='pi_extension']" );
  let txtPIBirthday                = $( "[name='pi_birthday']" );
  let txtPIBirthplace              = $( "[name='pi_birthplace']" );
  let txtPISex                     = $( "[name='pi_sex']" );
  let txtPICivilStatus             = $( "[name='pi_civilStatus']" );
  let txtPIHeight                  = $( "[name='pi_height']" );
  let txtPIWeight                  = $( "[name='pi_weight']" );
  let txtPIBloodtype               = $( "[name='pi_bloodtype']" );
  let txtPIGSIS                    = $( "[name='pi_gsis']" );
  let txtPIPagIbig                 = $( "[name='pi_pagibig']" );
  let txtPIPhilhealth              = $( "[name='pi_philhealth']" );
  let txtPISSS                     = $( "[name='pi_sss']" );
  let txtPITIN                     = $( "[name='pi_tin']" );
  let txtPIAgencyNo                = $( "[name='pi_agencyNo']" );
  let txtPICitizenship             = $( "[name='pi_citizenship']" );
  let txtPITelephone               = $( "[name='pi_telephone']" );
  let txtPIEmail                   = $( "[name='pi_email']" );
  let txtPIMobileNo                = $( "[name='pi_mobileNo']" );
  let txtPIResidentialHouseNo      = $( "[name='pi_residentialHouseNo']" );
  let txtPIResidentialStreet       = $( "[name='pi_residentialStreet']" );
  let txtPIResidentialSubdivision  = $( "[name='pi_residentialSubdivision']" );
  let txtPIResidentialBarangay     = $( "[name='pi_residentialBarangay']" );
  let txtPIResidentialMunicipality = $( "[name='pi_residentialMunicipality']" );
  let txtPIResidentialProvince     = $( "[name='pi_residentialProvince']" );
  let txtPIResidentialZipcode      = $( "[name='pi_residentialZipcode']" );
  let txtPIPermanentHouseNo        = $( "[name='pi_permanentHouseNo']" );
  let txtPIPermanentStreet         = $( "[name='pi_permanentStreet']" );
  let txtPIPermanentSubdivision    = $( "[name='pi_permanentSubdivision']" );
  let txtPIPermanentBarangay       = $( "[name='pi_permanentBarangay']" );
  let txtPIPermanentMunicipality   = $( "[name='pi_permanentMunicipality']" );
  let txtPIPermanentProvince       = $( "[name='pi_permanentProvince']" );
  let txtPIPermanentZipcode        = $( "[name='pi_permanentZipcode']" );

  let txtFISpouseSurname   = $( "[name='fi_spouseSurname']" );
  let txtFISpouseFirstname = $( "[name='fi_spouseFirstname']" );
  let txtFISpouseMidname   = $( "[name='fi_spouseMidname']" );
  let txtFISpouseExtension = $( "[name='fi_spouseExtension']" );
  let txtFIOccupation      = $( "[name='fi_occupation']" );
  let txtFIEmployer        = $( "[name='fi_employer']" );
  let txtFIBusiness        = $( "[name='fi_business']" );
  let txtFITelephoneNo     = $( "[name='fi_telephoneNo']" );
  let txtFIFatherSurname   = $( "[name='fi_fatherSurname']" );
  let txtFIFatherFirstname = $( "[name='fi_fatherFirstname']" );
  let txtFIFatherMidname   = $( "[name='fi_fatherMidname']" );
  let txtFIFatherExtension = $( "[name='fi_fatherExtension']" );
  let txtFIMotherSurname   = $( "[name='fi_motherSurname']" );
  let txtFIMotherFirstname = $( "[name='fi_motherFirstname']" );
  let txtFIMotherMidname   = $( "[name='fi_motherMidname']" );


  session.init().then( function() {

    btnEditPersonalInformation.click( function( e ) {
      txtPIFirstname.val( '' );
      txtPISurname.val( '' );
      txtPIMidname.val( '' );
      txtPIExtension.val( '' );
      txtPIBirthday.val( '' );
      txtPIBirthplace.val( '' );
      txtPISex.val( '' );
      txtPICivilStatus.val( '' );
      txtPIHeight.val( '' );
      txtPIWeight.val( '' );
      txtPIBloodtype.val( '' );
      txtPIGSIS.val( '' );
      txtPIPagIbig.val( '' );
      txtPIPhilhealth.val( '' );
      txtPISSS.val( '' );
      txtPITIN.val( '' );
      txtPIAgencyNo.val( '' );
      txtPICitizenship.val( '' );
      txtPITelephone.val( '' );
      txtPIEmail.val( '' );
      txtPIMobileNo.val( '' );
      txtPIResidentialHouseNo.val( '' );
      txtPIResidentialStreet.val( '' );
      txtPIResidentialSubdivision.val( '' );
      txtPIResidentialBarangay.val( '' );
      txtPIResidentialMunicipality.val( '' );
      txtPIResidentialProvince.val( '' );
      txtPIResidentialZipcode.val( '' );
      txtPIPermanentHouseNo.val( '' );
      txtPIPermanentStreet.val( '' );
      txtPIPermanentSubdivision.val( '' );
      txtPIPermanentBarangay.val( '' );
      txtPIPermanentMunicipality.val( '' );
      txtPIPermanentProvince.val( '' );
      txtPIPermanentZipcode.val( '' );

      dbQuery.execute( "Select * From personal_info_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1; " ).then( function( e ) {
        if ( dbQuery.rows() > 0 ) {
          txtPIFirstname.val(               dbQuery.result( 0, 'firstname' ) );
          txtPISurname.val(                 dbQuery.result( 0, 'surname' ) );
          txtPIMidname.val(                 dbQuery.result( 0, 'midname' ) );
          txtPIExtension.val(               dbQuery.result( 0, 'extension' ) );
          txtPIBirthday.val(                dbQuery.result( 0, 'birthday' ) );
          txtPIBirthplace.val(              dbQuery.result( 0, 'birthplace' ) );
          txtPISex.val(                     dbQuery.result( 0, 'sex' ) );
          txtPICivilStatus.val(             dbQuery.result( 0, 'civil_status' ) );
          txtPIHeight.val(                  dbQuery.result( 0, 'height' ) );
          txtPIWeight.val(                  dbQuery.result( 0, 'weight' ) );
          txtPIBloodtype.val(               dbQuery.result( 0, 'bloodtype' ) );
          txtPIGSIS.val(                    dbQuery.result( 0, 'gsis' ) );
          txtPIPagIbig.val(                 dbQuery.result( 0, 'pagibig' ) );
          txtPIPhilhealth.val(              dbQuery.result( 0, 'philhealth' ) );
          txtPISSS.val(                     dbQuery.result( 0, 'sss' ) );
          txtPITIN.val(                     dbQuery.result( 0, 'tin' ) );
          txtPIAgencyNo.val(                dbQuery.result( 0, 'agency_no' ) );
          txtPICitizenship.val(             dbQuery.result( 0, 'citizenship' ) );
          txtPITelephone.val(               dbQuery.result( 0, 'telephone' ) );
          txtPIEmail.val(                   dbQuery.result( 0, 'email' ) );
          txtPIMobileNo.val(                dbQuery.result( 0, 'mobile_no' ) );
          txtPIResidentialHouseNo.val(      dbQuery.result( 0, 'residential_house_no' ) );
          txtPIResidentialStreet.val(       dbQuery.result( 0, 'residential_street' ) );
          txtPIResidentialSubdivision.val(  dbQuery.result( 0, 'residential_subdivision' ) );
          txtPIResidentialBarangay.val(     dbQuery.result( 0, 'residential_barangay' ) );
          txtPIResidentialMunicipality.val( dbQuery.result( 0, 'residential_municipality' ) );
          txtPIResidentialProvince.val(     dbQuery.result( 0, 'residential_province' ) );
          txtPIResidentialZipcode.val(      dbQuery.result( 0, 'residential_zipcode' ) );
          txtPIPermanentHouseNo.val(        dbQuery.result( 0, 'permanent_house_no' ) );
          txtPIPermanentStreet.val(         dbQuery.result( 0, 'permanent_street' ) );
          txtPIPermanentSubdivision.val(    dbQuery.result( 0, 'permanent_subdivision' ) );
          txtPIPermanentBarangay.val(       dbQuery.result( 0, 'permanent_barangay' ) );
          txtPIPermanentMunicipality.val(   dbQuery.result( 0, 'permanent_municipality' ) );
          txtPIPermanentProvince.val(       dbQuery.result( 0, 'permanent_province' ) );
          txtPIPermanentZipcode.val(        dbQuery.result( 0, 'permanent_zipcode' ) );
        }

        modalEditPersonalInformation.modal( 'show' );
      });

    });


    btnEditFamilyInformation.click( function( e ) {
      txtFISpouseSurname.val( '' );
      txtFISpouseFirstname.val( '' );
      txtFISpouseMidname.val( '' );
      txtFISpouseExtension.val( '' );
      txtFIOccupation.val( '' );
      txtFIEmployer.val( '' );
      txtFIBusiness.val( '' );
      txtFITelephoneNo.val( '' );
      txtFIFatherSurname.val( '' );
      txtFIFatherFirstname.val( '' );
      txtFIFatherMidname.val( '' );
      txtFIFatherExtension.val( '' );
      txtFIMotherSurname.val( '' );
      txtFIMotherFirstname.val( '' );
      txtFIMotherMidname.val( '' );

      dbQuery.execute( "Select * From family_background_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1; " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          txtFISpouseSurname.val(   dbQuery.result( 0, 'spouse_surname' ) );
          txtFISpouseFirstname.val( dbQuery.result( 0, 'spouse_firstname' ) );
          txtFISpouseMidname.val(   dbQuery.result( 0, 'spouse_midname' ) );
          txtFISpouseExtension.val( dbQuery.result( 0, 'spouse_extension' ) );
          txtFIOccupation.val(      dbQuery.result( 0, 'occupation' ) );
          txtFIEmployer.val(        dbQuery.result( 0, 'employer' ) );
          txtFIBusiness.val(        dbQuery.result( 0, 'business_address' ) );
          txtFITelephoneNo.val(     dbQuery.result( 0, 'telephone_no' ) );
          txtFIFatherSurname.val(   dbQuery.result( 0, 'father_surname' ) );
          txtFIFatherFirstname.val( dbQuery.result( 0, 'father_firstname' ) );
          txtFIFatherMidname.val(   dbQuery.result( 0, 'father_midname' ) );
          txtFIFatherExtension.val( dbQuery.result( 0, 'father_extension' ) );
          txtFIMotherSurname.val(   dbQuery.result( 0, 'mother_surname' ) );
          txtFIMotherFirstname.val( dbQuery.result( 0, 'mother_firstname' ) );
          txtFIMotherMidname.val(   dbQuery.result( 0, 'mother_midname' ) );

          modalEditFamilyInformation.modal( 'show' );
        }
      });


      dbQuery.execute( "Select * From family_children_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From family_children_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrChildren = [];
          tblChildren.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrChildren.push( [ dbQuery.result( i, 'id' ), dbQuery.result( i, 'childname' ), dbQuery.result( i, 'childbirth' ) ] );
            tblChildren.children( 'tbody' ).append(
              '<tr>' +
                '<td>' + dbQuery.result( i, 'childname' ) + '</td>' +
                '<td>' + moment( dbQuery.result( i, 'childbirth' ), 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
                '<td><button class="btn btn-danger btn-sm addbtn5" onclick="removeChildren(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }
        }
      });

    });


    btnEditEducationalBackground.click( function( e ) {

      dbQuery.execute( "Select * From education_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From education_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrEducationalBackground = [];
          tblEducationalBackground.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrEducationalBackground.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'level' ),
              dbQuery.result( i, 'schoolName' ),
              dbQuery.result( i, 'degree' ),
              dbQuery.result( i, 'fromDate' ),
              dbQuery.result( i, 'toDate' ),
              dbQuery.result( i, 'units' ),
              dbQuery.result( i, 'graduated' ),
              dbQuery.result( i, 'honors' )
            ] );
            tblEducationalBackground.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'level' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'schoolName' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'degree' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'fromDate' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'toDate' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'units' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'graduated' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'honors' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeEducationalBackground(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditEducationalBackground.modal( 'show' );
        }
      });

    });


    btnEditCivilService.click( function( e ) {

      dbQuery.execute( "Select * From civil_service_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From civil_service_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrCivilService = [];
          tblCivilService.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrCivilService.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'career' ),
              dbQuery.result( i, 'rating' ),
              dbQuery.result( i, 'examination' ),
              dbQuery.result( i, 'place' ),
              dbQuery.result( i, 'number' ),
              dbQuery.result( i, 'validity' )
            ] );
            tblCivilService.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'career' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'rating' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'examination' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'place' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'number' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'validity' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeCivilService(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditCivilService.modal( 'show' );
        }
      });

    });


    btnEditWorkExperience.click( function( e ) {

      dbQuery.execute( "Select * From work_experience_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From work_experience_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrWorkExperience = [];
          tblWorkExperience.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrWorkExperience.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'work_from_date' ),
              dbQuery.result( i, 'work_to_date' ),
              dbQuery.result( i, 'position_title' ),
              dbQuery.result( i, 'department' ),
              dbQuery.result( i, 'salary' ),
              dbQuery.result( i, 'paygrade' ),
              dbQuery.result( i, 'appointment' ),
              dbQuery.result( i, 'gov_service' )
            ] );
            tblWorkExperience.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'work_from_date' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'work_to_date' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'position_title' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'department' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'salary' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'paygrade' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'appointment' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'gov_service' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeWorkExperience(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditWorkExperience.modal( 'show' );
        }
      });

    });


    btnEditVoluntaryWork.click( function( e ) {

      dbQuery.execute( "Select * From voluntary_work_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From voluntary_work_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrVoluntaryWork = [];
          tblVoluntaryWork.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrVoluntaryWork.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'organization' ),
              dbQuery.result( i, 'from_date' ),
              dbQuery.result( i, 'to_date' ),
              dbQuery.result( i, 'hours' ),
              dbQuery.result( i, 'position' )
            ] );
            tblVoluntaryWork.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'organization' ) + '</td>' +
                '<td valign="middle">' + moment( dbQuery.result( i, 'from_date' ), 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
                '<td valign="middle">' + moment( dbQuery.result( i, 'to_date' ), 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'hours' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'position' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeVoluntaryWork(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditVoluntaryWork.modal( 'show' );
        }
      });

    });


    btnEditTrainingPrograms.click( function( e ) {

      dbQuery.execute( "Select * From training_programs_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From training_programs_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrTrainingPrograms = [];
          tblTrainingPrograms.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrTrainingPrograms.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'title' ),
              dbQuery.result( i, 'training_from_date' ),
              dbQuery.result( i, 'training_to_date' ),
              dbQuery.result( i, 'duration' ),
              dbQuery.result( i, 'type' ),
              dbQuery.result( i, 'sponsor' )
            ] );
            tblTrainingPrograms.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'title' ) + '</td>' +
                '<td valign="middle">' + moment( dbQuery.result( i, 'training_from_date' ), 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
                '<td valign="middle">' + moment( dbQuery.result( i, 'training_to_date' ), 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'duration' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'type' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'sponsor' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeTrainingProgram(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditTrainingPrograms.modal( 'show' );
        }
      });

    });


    btnEditOtherInfo.click( function( e ) {

      dbQuery.execute( "Select * From other_info_tb Where userid = '" + session.get( 'user_id' ) + "' And datetimeupdated = (" +
                         "Select datetimeupdated From other_info_tb Where userid = '" + session.get( 'user_id' ) + "' Order By datetimeupdated Desc Limit 1 " +
                       "); " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          arrOtherInfo = [];
          tblOtherInfo.children( 'tbody' ).html( '' );

          for ( var i = 0; i < dbQuery.rows(); i++ ) {
            arrOtherInfo.push( [
              dbQuery.result( i, 'id' ),
              dbQuery.result( i, 'skills_hobbies' ),
              dbQuery.result( i, 'recognition' ),
              dbQuery.result( i, 'association' )
            ] );
            tblOtherInfo.children( 'tbody' ).append(
              '<tr>' +
                '<td valign="middle">' + dbQuery.result( i, 'skills_hobbies' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'recognition' ) + '</td>' +
                '<td valign="middle">' + dbQuery.result( i, 'association' ) + '</td>' +
                '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeOtherInfo(\'' + dbQuery.result( i, 'id' ) + '\')">Remove</button></td>' +
              '</tr>'
            );
          }

          modalEditOtherInfo.modal( 'show' );
        }
      });

    });





    btnSavePersonalInformation.click( function( e ) {

      dbQuery.executeNonQuery(
        "Insert Into personal_info_tb Values (" +
          "Null, " +
          "'" + session.get( 'user_id' ) + "', " +
          "'" + sqlEscape( txtPIFirstname.val() ) + "', " +
          "'" + sqlEscape( txtPISurname.val() ) + "', " +
          "'" + sqlEscape( txtPIMidname.val() ) + "', " +
          "'" + sqlEscape( txtPIExtension.val() ) + "', " +
          "'" + sqlEscape( txtPIBirthday.val() ) + "', " +
          "'" + sqlEscape( txtPIBirthplace.val() ) + "', " +
          "'" + sqlEscape( txtPISex.val() ) + "', " +
          "'" + sqlEscape( txtPICivilStatus.val() ) + "', " +
          "'" + sqlEscape( txtPIHeight.val() ) + "', " +
          "'" + sqlEscape( txtPIWeight.val() ) + "', " +
          "'" + sqlEscape( txtPIBloodtype.val() ) + "', " +
          "'" + sqlEscape( txtPIGSIS.val() ) + "', " +
          "'" + sqlEscape( txtPIPagIbig.val() ) + "', " +
          "'" + sqlEscape( txtPIPhilhealth.val() ) + "', " +
          "'" + sqlEscape( txtPISSS.val() ) + "', " +
          "'" + sqlEscape( txtPITIN.val() ) + "', " +
          "'" + sqlEscape( txtPIAgencyNo.val() ) + "', " +
          "'" + sqlEscape( txtPICitizenship.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialHouseNo.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialStreet.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialSubdivision.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialBarangay.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialMunicipality.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialProvince.val() ) + "', " +
          "'" + sqlEscape( txtPIResidentialZipcode.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentHouseNo.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentStreet.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentSubdivision.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentBarangay.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentMunicipality.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentProvince.val() ) + "', " +
          "'" + sqlEscape( txtPIPermanentZipcode.val() ) + "', " +
          "'" + sqlEscape( txtPITelephone.val() ) + "', " +
          "'" + sqlEscape( txtPIEmail.val() ) + "', " +
          "'" + sqlEscape( txtPIMobileNo.val() ) + "', " +
          "Now() " +
        "); "
      ).then( function() {
      dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Personal information Details' ); " ).then( function() {
        notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
          reload();
        });
      })});

    });


    btnSaveFamilyInformation.click( function( e ) {

      dbQuery.executeNonQuery(
        "Insert Into family_background_tb Values (" +
          "Null, " +
          "'" + session.get( 'user_id' ) + "', " +
          "'" + sqlEscape( txtFISpouseSurname.val() ) + "', " +
          "'" + sqlEscape( txtFISpouseFirstname.val() ) + "', " +
          "'" + sqlEscape( txtFISpouseMidname.val() ) + "', " +
          "'" + sqlEscape( txtFISpouseExtension.val() ) + "', " +
          "'" + sqlEscape( txtFIOccupation.val() ) + "', " +
          "'" + sqlEscape( txtFIEmployer.val() ) + "', " +
          "'" + sqlEscape( txtFIBusiness.val() ) + "', " +
          "'" + sqlEscape( txtFITelephoneNo.val() ) + "', " +
          "'" + sqlEscape( txtFIFatherSurname.val() ) + "', " +
          "'" + sqlEscape( txtFIFatherFirstname.val() ) + "', " +
          "'" + sqlEscape( txtFIFatherMidname.val() ) + "', " +
          "'" + sqlEscape( txtFIFatherExtension.val() ) + "', " +
          "'" + sqlEscape( txtFIMotherSurname.val() ) + "', " +
          "'" + sqlEscape( txtFIMotherFirstname.val() ) + "', " +
          "'" + sqlEscape( txtFIMotherMidname.val() ) + "', " +
          "Now() " +
        "); "
      ).then( function() {
      dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Family information Details' ); " ).then( function() {
        (async function insertQuery() {
          for ( var i = 0; i < arrChildren.length; i++ ) {
            await dbQuery.executeNonQuery( "Insert Into family_children_tb Values ( Null, '" + session.get( 'user_id' ) + "', '" + sqlEscape( arrChildren[i][1] ) + "', '" + sqlEscape( arrChildren[i][2] ) + "', Now() ); " );
            if ( i == arrChildren.length - 1 ) {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            }
          }
        })();
      })});

    });


    btnSaveEducationalBackground.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrEducationalBackground.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into education_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][1] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][2] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][3] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][4] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][5] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][6] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][7] ) + "', " +
              "'" + sqlEscape( arrEducationalBackground[i][8] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrEducationalBackground.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Educational Background Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


    btnSaveCivilService.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrCivilService.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into civil_service_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrCivilService[i][1] ) + "', " +
              "'" + sqlEscape( arrCivilService[i][2] ) + "', " +
              "'" + sqlEscape( arrCivilService[i][3] ) + "', " +
              "'" + sqlEscape( arrCivilService[i][4] ) + "', " +
              "'" + sqlEscape( arrCivilService[i][5] ) + "', " +
              "'" + sqlEscape( arrCivilService[i][6] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrCivilService.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Civil Service Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


    btnSaveWorkExperience.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrWorkExperience.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into work_experience_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][1] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][2] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][3] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][4] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][5] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][6] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][7] ) + "', " +
              "'" + sqlEscape( arrWorkExperience[i][8] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrWorkExperience.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Work Experience Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


    btnSaveVoluntaryWork.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrVoluntaryWork.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into voluntary_work_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrVoluntaryWork[i][1] ) + "', " +
              "'" + sqlEscape( arrVoluntaryWork[i][2] ) + "', " +
              "'" + sqlEscape( arrVoluntaryWork[i][3] ) + "', " +
              "'" + sqlEscape( arrVoluntaryWork[i][4] ) + "', " +
              "'" + sqlEscape( arrVoluntaryWork[i][5] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrVoluntaryWork.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Voluntary Work Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


    btnSaveTrainingPrograms.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrTrainingPrograms.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into training_programs_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][1] ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][2] ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][3] ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][4] ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][5] ) + "', " +
              "'" + sqlEscape( arrTrainingPrograms[i][6] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrTrainingPrograms.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Trainings and Programs Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


    btnSaveOtherInfo.click( function( e ) {

      (async function insertQuery() {
        for ( var i = 0; i < arrOtherInfo.length; i++ ) {
          await dbQuery.executeNonQuery(
            "Insert Into other_info_tb Values (" +
              "Null, " +
              "'" + session.get( 'user_id' ) + "', " +
              "'" + sqlEscape( arrOtherInfo[i][1] ) + "', " +
              "'" + sqlEscape( arrOtherInfo[i][2] ) + "', " +
              "'" + sqlEscape( arrOtherInfo[i][3] ) + "', " +
              "Now() " +
            "); "
          );
          if ( i == arrOtherInfo.length - 1 ) {
            dbQuery.executeNonQuery( "Insert Into notification_tb Values ( Null, '" + session.get( 'fullname' ) + "', '" + session.get( 'type' ) + "', Now(), 'edited his/her Other Info Details' ); " ).then( function() {
              notify( 'success', 'Update Success', 'Successfully updated PDS' ).then( function() {
                reload();
              });
            });
          }
        }
      })();

    });


  });


});




let tblChildren = $( "[name='table-children']" );
let arrChildren = [];

function addChildren() {
  let tmpTxtName      = $( "[name='fi_add_childname']" );
  let tmpTxtBirthdate = $( "[name='fi_add_childbirth']" );

  if ( tmpTxtName.val() !== '' && tmpTxtBirthdate.val() !== '' ) {
    arrChildren.push([ moment().format( 'YYMMDDhhmmss' ), tmpTxtName.val(), tmpTxtBirthdate.val() ]);

    tblChildren.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrChildren.length; i++ ) {
      tblChildren.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrChildren[i][1] + '</td>' +
          '<td valign="middle">' + moment( arrChildren[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeChildren(\'' + arrChildren[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtName.val( '' );
    tmpTxtBirthdate.val( '' );
    tmpTxtName.focus().select();
  }
}

function removeChildren( id ) {
  let tmpArrChildren = [];

  new Promise( function( resolve, reject ) {
    tblChildren.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrChildren.length; i++ ) {
      if ( arrChildren[i][0] !== id ) {
        tmpArrChildren.push( arrChildren[i] );
        tblChildren.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrChildren[i][1] + '</td>' +
            '<td valign="middle">' + moment( arrChildren[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeChildren(\'' + arrChildren[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrChildren.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrChildren = tmpArrChildren;
  });
}



let tblEducationalBackground = $( "[name='table-educational-background']" );
let arrEducationalBackground = [];

function addEducationalBackground() {
  let tmpTxtLevel      = $( "[name='eb_add_level']" );
  let tmpTxtSchoolName = $( "[name='eb_add_schoolName']" );
  let tmpTxtDegree     = $( "[name='eb_add_degree']" );
  let tmpTxtFromDate   = $( "[name='eb_add_fromDate']" );
  let tmpTxtToDate     = $( "[name='eb_add_toDate']" );
  let tmpTxtUnits      = $( "[name='eb_add_units']" );
  let tmpTxtGraduated  = $( "[name='eb_add_graduated']" );
  let tmpTxtHonors     = $( "[name='eb_add_honors']" );


  if ( tmpTxtLevel.val() !== '' && tmpTxtSchoolName.val() !== '' && tmpTxtDegree.val() !== '' && tmpTxtFromDate.val() !== '' && tmpTxtToDate.val() !== '' && tmpTxtUnits.val() !== '' && tmpTxtGraduated.val() !== '' && tmpTxtHonors.val() !== '' ) {
    arrEducationalBackground.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtLevel.val(),
      tmpTxtSchoolName.val(),
      tmpTxtDegree.val(),
      tmpTxtFromDate.val(),
      tmpTxtToDate.val(),
      tmpTxtUnits.val(),
      tmpTxtGraduated.val(),
      tmpTxtHonors.val()
    ]);

    tblEducationalBackground.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrEducationalBackground.length; i++ ) {
      tblEducationalBackground.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrEducationalBackground[i][1] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][2] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][3] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][4] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][5] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][6] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][7] + '</td>' +
          '<td valign="middle">' + arrEducationalBackground[i][8] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeEducationalBackground(\'' + arrEducationalBackground[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtLevel.val( '' );
    tmpTxtSchoolName.val( '' );
    tmpTxtDegree.val( '' );
    tmpTxtFromDate.val( '' );
    tmpTxtToDate.val( '' );
    tmpTxtUnits.val( '' );
    tmpTxtGraduated.val( '' );
    tmpTxtHonors.val( '' );
    tmpTxtLevel.focus().select();
  }
}

function removeEducationalBackground( id ) {
  let tmpArrEducationalBackground = [];

  new Promise( function( resolve, reject ) {
    tblEducationalBackground.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrEducationalBackground.length; i++ ) {
      if ( arrEducationalBackground[i][0] !== id ) {
        tmpArrEducationalBackground.push( arrEducationalBackground[i] );
        tblEducationalBackground.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrEducationalBackground[i][1] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][2] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][3] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][4] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][5] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][6] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][7] + '</td>' +
            '<td valign="middle">' + arrEducationalBackground[i][8] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeEducationalBackground(\'' + arrEducationalBackground[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrEducationalBackground.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrEducationalBackground = tmpArrEducationalBackground;
  });
}



let tblCivilService = $( "[name='table-civil-service']" );
let arrCivilService = [];

function addCivilService() {
  let tmpTxtCareer      = $( "[name='cs_add_career']" );
  let tmpTxtRating      = $( "[name='cs_add_rating']" );
  let tmpTxtExamination = $( "[name='cs_add_examination']" );
  let tmpTxtPlace       = $( "[name='cs_add_place']" );
  let tmpTxtNumber      = $( "[name='cs_add_number']" );
  let tmpTxtValidity    = $( "[name='cs_add_validity']" );


  if ( tmpTxtCareer.val() !== '' && tmpTxtRating.val() !== '' && tmpTxtExamination.val() !== '' && tmpTxtPlace.val() !== '' && tmpTxtNumber.val() !== '' && tmpTxtValidity.val() !== '' ) {
    arrCivilService.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtCareer.val(),
      tmpTxtRating.val(),
      tmpTxtExamination.val(),
      tmpTxtPlace.val(),
      tmpTxtNumber.val(),
      tmpTxtValidity.val()
    ]);

    tblCivilService.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrCivilService.length; i++ ) {
      tblCivilService.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrCivilService[i][1] + '</td>' +
          '<td valign="middle">' + arrCivilService[i][2] + '</td>' +
          '<td valign="middle">' + arrCivilService[i][3] + '</td>' +
          '<td valign="middle">' + arrCivilService[i][4] + '</td>' +
          '<td valign="middle">' + arrCivilService[i][5] + '</td>' +
          '<td valign="middle">' + arrCivilService[i][6] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeCivilService(\'' + arrCivilService[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtCareer.val( '' );
    tmpTxtRating.val( '' );
    tmpTxtExamination.val( '' );
    tmpTxtPlace.val( '' );
    tmpTxtNumber.val( '' );
    tmpTxtValidity.val( '' );
    tmpTxtCareer.focus().select();
  }
}

function removeCivilService( id ) {
  let tmpArrCivilService = [];

  new Promise( function( resolve, reject ) {
    tblCivilService.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrCivilService.length; i++ ) {
      if ( arrCivilService[i][0] !== id ) {
        tmpArrCivilService.push( arrCivilService[i] );
        tblCivilService.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrCivilService[i][1] + '</td>' +
            '<td valign="middle">' + arrCivilService[i][2] + '</td>' +
            '<td valign="middle">' + arrCivilService[i][3] + '</td>' +
            '<td valign="middle">' + arrCivilService[i][4] + '</td>' +
            '<td valign="middle">' + arrCivilService[i][5] + '</td>' +
            '<td valign="middle">' + arrCivilService[i][6] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeCivilService(\'' + arrCivilService[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrCivilService.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrCivilService = tmpArrCivilService;
  });
}



let tblWorkExperience = $( "[name='table-work-experience']" );
let arrWorkExperience = [];

function addWorkExperience() {
  let tmpTxtWorkFromDate = $( "[name='we_add_work-from-date']" );
  let tmpTxtWorkToDate   = $( "[name='we_add_work-to-date']" );
  let tmpTxtPosition     = $( "[name='we_add_position']" );
  let tmpTxtDepartment   = $( "[name='we_add_department']" );
  let tmpTxtSalary       = $( "[name='we_add_salary']" );
  let tmpTxtPaygrade     = $( "[name='we_add_paygrade']" );
  let tmpTxtAppointment  = $( "[name='we_add_appointment']" );
  let tmpTxtGovService   = $( "[name='we_add_gov-service']" );


  if ( tmpTxtWorkFromDate.val() !== '' && tmpTxtWorkToDate.val() !== '' && tmpTxtPosition.val() !== '' && tmpTxtDepartment.val() !== '' && tmpTxtSalary.val() !== '' && tmpTxtPaygrade.val() !== '' && tmpTxtAppointment.val() !== '' && tmpTxtGovService.val() !== '' ) {
    arrWorkExperience.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtWorkFromDate.val(),
      tmpTxtWorkToDate.val(),
      tmpTxtPosition.val(),
      tmpTxtDepartment.val(),
      tmpTxtSalary.val(),
      tmpTxtPaygrade.val(),
      tmpTxtAppointment.val(),
      tmpTxtGovService.val()
    ]);

    tblWorkExperience.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrWorkExperience.length; i++ ) {
      tblWorkExperience.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrWorkExperience[i][1] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][2] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][3] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][4] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][5] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][6] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][7] + '</td>' +
          '<td valign="middle">' + arrWorkExperience[i][8] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeWorkExperience(\'' + arrWorkExperience[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtWorkFromDate.val( '' );
    tmpTxtWorkToDate.val( '' );
    tmpTxtPosition.val( '' );
    tmpTxtDepartment.val( '' );
    tmpTxtSalary.val( '' );
    tmpTxtPaygrade.val( '' );
    tmpTxtAppointment.val( '' );
    tmpTxtGovService.val( '' );
    tmpTxtWorkFromDate.focus().select();
  }
}

function removeWorkExperience( id ) {
  let tmpArrWorkExperience = [];

  new Promise( function( resolve, reject ) {
    tblWorkExperience.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrWorkExperience.length; i++ ) {
      if ( arrWorkExperience[i][0] !== id ) {
        tmpArrWorkExperience.push( arrWorkExperience[i] );
        tblWorkExperience.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrWorkExperience[i][1] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][2] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][3] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][4] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][5] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][6] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][7] + '</td>' +
            '<td valign="middle">' + arrWorkExperience[i][8] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeWorkExperience(\'' + arrWorkExperience[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrWorkExperience.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrWorkExperience = tmpArrWorkExperience;
  });
}



let tblVoluntaryWork = $( "[name='table-voluntary-work']" );
let arrVoluntaryWork = [];

function addVoluntaryWork() {
  let tmpTxtOrganization      = $( "[name='vw_add_organization']" );
  let tmpTxtVoluntaryFromDate = $( "[name='vw_add_voluntary-from-date']" );
  let tmpTxtVoluntaryToDate   = $( "[name='vw_add_voluntary-to-date']" );
  let tmpTxtHours             = $( "[name='vw_add_hours']" );
  let tmpTxtPosition          = $( "[name='vw_add_position']" );


  if ( tmpTxtOrganization.val() !== '' && tmpTxtVoluntaryFromDate.val() !== '' && tmpTxtVoluntaryToDate.val() !== '' && tmpTxtHours.val() !== '' && tmpTxtPosition.val() !== '' ) {
    arrVoluntaryWork.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtOrganization.val(),
      tmpTxtVoluntaryFromDate.val(),
      tmpTxtVoluntaryToDate.val(),
      tmpTxtHours.val(),
      tmpTxtPosition.val()
    ]);

    tblVoluntaryWork.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrVoluntaryWork.length; i++ ) {
      tblVoluntaryWork.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrVoluntaryWork[i][1] + '</td>' +
          '<td valign="middle">' + moment( arrVoluntaryWork[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
          '<td valign="middle">' + moment( arrVoluntaryWork[i][3], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
          '<td valign="middle">' + arrVoluntaryWork[i][4] + '</td>' +
          '<td valign="middle">' + arrVoluntaryWork[i][5] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeVoluntaryWork(\'' + arrVoluntaryWork[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtOrganization.val( '' );
    tmpTxtVoluntaryFromDate.val( '' );
    tmpTxtVoluntaryToDate.val( '' );
    tmpTxtHours.val( '' );
    tmpTxtPosition.val( '' );
  }
}

function removeVoluntaryWork( id ) {
  let tmpArrVoluntaryWork = [];

  new Promise( function( resolve, reject ) {
    tblVoluntaryWork.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrVoluntaryWork.length; i++ ) {
      if ( arrVoluntaryWork[i][0] !== id ) {
        tmpArrVoluntaryWork.push( arrVoluntaryWork[i] );
        tblVoluntaryWork.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrVoluntaryWork[i][1] + '</td>' +
            '<td valign="middle">' + moment( arrVoluntaryWork[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
            '<td valign="middle">' + moment( arrVoluntaryWork[i][3], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
            '<td valign="middle">' + arrVoluntaryWork[i][4] + '</td>' +
            '<td valign="middle">' + arrVoluntaryWork[i][5] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeVoluntaryWork(\'' + arrVoluntaryWork[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrVoluntaryWork.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrVoluntaryWork = tmpArrVoluntaryWork;
  });
}



let tblTrainingPrograms = $( "[name='table-training-programs']" );
let arrTrainingPrograms = [];

function addTrainingProgram() {
  let tmpTxtTitle            = $( "[name='tp_add_title']" );
  let tmpTxtTrainingFromDate = $( "[name='tp_add_training_from_date']" );
  let tmpTxtTrainingToDate   = $( "[name='tp_add_training_to_date']" );
  let tmpTxtDuration         = $( "[name='tp_add_duration']" );
  let tmpTxtType             = $( "[name='tp_add_type']" );
  let tmpTxtSponsor          = $( "[name='tp_add_sponsor']" );


  if ( tmpTxtTitle.val() !== '' && tmpTxtTrainingFromDate.val() !== '' && tmpTxtTrainingToDate.val() !== '' && tmpTxtDuration.val() !== '' && tmpTxtType.val() !== '' && tmpTxtSponsor.val() !== '' ) {
    arrTrainingPrograms.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtTitle.val(),
      tmpTxtTrainingFromDate.val(),
      tmpTxtTrainingToDate.val(),
      tmpTxtDuration.val(),
      tmpTxtType.val(),
      tmpTxtSponsor.val()
    ]);

    tblTrainingPrograms.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrTrainingPrograms.length; i++ ) {
      tblTrainingPrograms.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrTrainingPrograms[i][1] + '</td>' +
          '<td valign="middle">' + moment( arrTrainingPrograms[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
          '<td valign="middle">' + moment( arrTrainingPrograms[i][3], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
          '<td valign="middle">' + arrTrainingPrograms[i][4] + '</td>' +
          '<td valign="middle">' + arrTrainingPrograms[i][5] + '</td>' +
          '<td valign="middle">' + arrTrainingPrograms[i][6] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeTrainingProgram(\'' + arrTrainingPrograms[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtTitle.val( '' );
    tmpTxtTrainingFromDate.val( '' );
    tmpTxtTrainingToDate.val( '' );
    tmpTxtDuration.val( '' );
    tmpTxtType.val( '' );
    tmpTxtSponsor.val( '' );
  }
}

function removeTrainingProgram( id ) {
  let tmpArrTrainingPrograms = [];

  new Promise( function( resolve, reject ) {
    tblTrainingPrograms.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrTrainingPrograms.length; i++ ) {
      if ( arrTrainingPrograms[i][0] !== id ) {
        tmpArrTrainingPrograms.push( arrTrainingPrograms[i] );
        tblTrainingPrograms.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrTrainingPrograms[i][1] + '</td>' +
            '<td valign="middle">' + moment( arrTrainingPrograms[i][2], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
            '<td valign="middle">' + moment( arrTrainingPrograms[i][3], 'YYYY-MM-DD' ).format( 'MM/DD/YYYY' ) + '</td>' +
            '<td valign="middle">' + arrTrainingPrograms[i][4] + '</td>' +
            '<td valign="middle">' + arrTrainingPrograms[i][5] + '</td>' +
            '<td valign="middle">' + arrTrainingPrograms[i][6] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeTrainingProgram(\'' + arrTrainingPrograms[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrTrainingPrograms.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrTrainingPrograms = tmpArrTrainingPrograms;
  });
}



let tblOtherInfo = $( "[name='table-other-info']" );
let arrOtherInfo = [];

function addOtherInfo() {
  let tmpTxtSkills      = $( "[name='oi_add_skills']" );
  let tmpTxtDistinction = $( "[name='oi_add_distinction']" );
  let tmpTxtAssociation = $( "[name='oi_add_association']" );


  if ( tmpTxtSkills.val() !== '' && tmpTxtDistinction.val() !== '' && tmpTxtAssociation.val() !== '' ) {
    arrOtherInfo.push([
      moment().format( 'YYMMDDhhmmss' ),
      tmpTxtSkills.val(),
      tmpTxtDistinction.val(),
      tmpTxtAssociation.val()
    ]);

    tblOtherInfo.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrOtherInfo.length; i++ ) {
      tblOtherInfo.children( 'tbody' ).append(
        '<tr>' +
          '<td valign="middle">' + arrOtherInfo[i][1] + '</td>' +
          '<td valign="middle">' + arrOtherInfo[i][2] + '</td>' +
          '<td valign="middle">' + arrOtherInfo[i][3] + '</td>' +
          '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeOtherInfo(\'' + arrOtherInfo[i][0] + '\')">Remove</button></td>' +
        '</tr>'
      );
    }

    tmpTxtSkills.val( '' );
    tmpTxtDistinction.val( '' );
    tmpTxtAssociation.val( '' );
  }
}

function removeOtherInfo( id ) {
  let tmpArrOtherInfo = [];

  new Promise( function( resolve, reject ) {
    tblOtherInfo.children( 'tbody' ).html( '' );
    for ( var i = 0; i < arrOtherInfo.length; i++ ) {
      if ( arrOtherInfo[i][0] !== id ) {
        tmpArrOtherInfo.push( arrOtherInfo[i] );
        tblOtherInfo.children( 'tbody' ).append(
          '<tr>' +
            '<td valign="middle">' + arrOtherInfo[i][1] + '</td>' +
            '<td valign="middle">' + arrOtherInfo[i][2] + '</td>' +
            '<td valign="middle">' + arrOtherInfo[i][3] + '</td>' +
            '<td valign="middle"><button class="btn btn-danger btn-sm addbtn5" onclick="removeOtherInfo(\'' + arrOtherInfo[i][0] + '\')">Remove</button></td>' +
          '</tr>'
        );
      }

      if ( i == arrOtherInfo.length - 1 ) { resolve(); }
    }
  }).then( function() {
    arrOtherInfo = tmpArrOtherInfo;
  });
}