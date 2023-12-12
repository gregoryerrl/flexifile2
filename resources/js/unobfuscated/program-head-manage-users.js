$( document ).ready( function() {

  let tblUsers = $( "[name='table-users']" );



  session.init().then( function() {

    dbQuery.execute( "Select * From user_tb; " ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          tblUsers.children( 'tbody' ).append(
            '<tr>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'fullname' ) + '</td>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'type' ) + '</td>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'designation' ) + '</td>' +
              '<td align="center" valign="middle" style="color:' + ( dbQuery.result( i, 'accountstatus' ) == 'Active' ? 'Green' : 'Red' ) + '">' +
                dbQuery.result( i, 'accountstatus' ) +
              '</td>' +
              '<td align="center" valign="middle">' +
                '<button class="btn btn-primary btn-sm addbtn5" style="margin-right: 5px;" onclick="editUser(\'' + dbQuery.result( i, 'id' ) + '\')">Edit</button>' +
                ( dbQuery.result( i, 'accountstatus' ) == 'Active' ?
                  '<button class="btn btn-danger btn-sm addbtn5" onclick="lockAccount(\'' + dbQuery.result( i, 'id' ) + '\')">Lock</button>' :
                  '<button class="btn btn-success btn-sm addbtn5" onclick="unlockAccount(\'' + dbQuery.result( i, 'id' ) + '\')">Unlock</button>'
                ) +
              '</td>' +
            '</tr>'
          )
        }
      }

    });



    dbQuery.execute( "Select * From z_role_tb; " ).then( function() {
      let cmbRole = $( "[name='user_edit_role']" );

      cmbRole.append( '<option value="default" disabled selected>Role...</option>' );
      for ( var i = 0; i < dbQuery.rows(); i++ ) {
        cmbRole.append( '<option value="' + dbQuery.result( i, 'role' ) + '">' + dbQuery.result( i, 'role' ) + '</option>' );
      }
    });


    dbQuery.execute( "Select * From z_faculty_type_tb; " ).then( function() {
      let cmbUserType = $( "[name='user_edit_type']" );

      cmbUserType.append( '<option value="default" disabled selected>User Type...</option>' );
      for ( var i = 0; i < dbQuery.rows(); i++ ) {
        cmbUserType.append( '<option value="' + dbQuery.result( i, 'facultytype' ) + '">' + dbQuery.result( i, 'facultytype' ) + '</option>' );
      }
    });


    let cmbStatus = $( "[name='user_edit_status']" );

    cmbStatus.html( '<option value="default" disabled selected>Employment Status...</option>' );
    cmbStatus.append( '<option value="Contractual">Contractual</option>' );
    cmbStatus.append( '<option value="Part-Time">Part-Time</option>' );
    cmbStatus.append( '<option value="Permanent">Permanent</option>' );
    cmbStatus.append( '<option value="Temporary">Temporary</option>' );

  });

});





function editUser( id ) {
  let txtUserID                = $( "[name='user_edit_userid']" );
  let txtFullName              = $( "[name='user_edit_fullname']" );
  let txtEmail                 = $( "[name='user_edit_email']" );
  let txtDesignation           = $( "[name='user_edit_designation']" );
  let txtEducationalAttainment = $( "[name='user_edit_educational_attainment']" );
  let cmbEmploymentStatus      = $( "[name='user_edit_status']" );
  let cmbRole                  = $( "[name='user_edit_role']" );
  let cmbUserType              = $( "[name='user_edit_type']" );
  let modalEditUser            = $( "[name='modal-edit-user']" );
  let btnSave                  = $( "[name='button-edit-user-save']" );

  dbQuery.execute( "Select * from user_tb Where id = '" + id + "'; " ).then( function() {

    txtUserID.val( dbQuery.result( 0, 'id' ) );
    txtFullName.val( dbQuery.result( 0, 'fullname' ) );
    txtEmail.val( dbQuery.result( 0, 'email' ) );
    txtDesignation.val( dbQuery.result( 0, 'designation' ) );
    txtEducationalAttainment.val( dbQuery.result( 0, 'educationalattainment' ) );
    cmbEmploymentStatus.children( "[value='" + dbQuery.result( 0, 'status' ) + "']" ).attr( 'selected', true );
    cmbRole.children( "[value='" + dbQuery.result( 0, 'role' ) + "']" ).attr( 'selected', true );
    cmbUserType.children( "[value='" + dbQuery.result( 0, 'type' ) + "']" ).attr( 'selected', true );
    modalEditUser.modal( 'show' );
    txtFullName.focus().select();

    btnSave.off( 'click' ).click( function() {
      let formIncomplete = ( txtUserID.val() == '' || txtFullName.val() == '' || txtDesignation.val() == '' || txtEducationalAttainment.val() == '' || cmbEmploymentStatus.val() == null || cmbRole.val() == null || cmbUserType.val() == null );

      if ( formIncomplete ) {
        notify( 'warning', 'Incomplete Fields', 'Please fill all the required fields.' );
      }
      else {
        dbQuery.executeNonQuery( "Update user_tb Set fullname = '" + txtFullName.val() + "', email = '" + txtEmail.val() + "', designation = '" + txtDesignation.val() + "', educationalattainment = '" + txtEducationalAttainment.val() + "', role = '" + cmbRole.val() + "', type = '" + cmbUserType.val() + "', status = '" + cmbEmploymentStatus.val() + "' Where id = '" + id + "';" ).then( function() {
          notify( 'success', 'Update Success', 'Successfully updated user account.' ).then( function() {
            reload();
          });
        });
      }
    });
  });
}


function lockAccount( id ) {
  dbQuery.executeNonQuery( "Update user_tb Set accountstatus = 'Locked' Where id = '" + id + "'; " ).then( function() {
    reload();
  });
}


function unlockAccount( id ) {
  dbQuery.executeNonQuery( "Update user_tb Set accountstatus = 'Active' Where id = '" + id + "'; " ).then( function() {
    reload();
  });
}