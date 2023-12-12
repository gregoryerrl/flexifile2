$( document ).ready( function() {

  let btnWelcome          = $( "[name='welcome']" );
  let txtFullName         = $( "[name='fullname']" );
  let txtEmail            = $( "[name='email']" );
  let txtPassword         = $( "[name='password']" );
  let cmbUserType         = $( "[name='usertype']" );
  let cmbFacultyType      = $( "[name='facultytype']" );
  let cmbSecurityQuestion = $( "[name='securityquestion']" );
  let txtSecurityAnswer   = $( "[name='securityanswer']" );
  let lblErrorMessage     = $( "[name='error-message']" );
  let btnSignUp           = $( "[name='sign-up']" );
  let btnLogin            = $( "[name='login']" );


  session.init().then( function() {
    if ( session.get( 'user_id' ) !== undefined ) {
      if ( session.get( 'role' ) == 'Dean' ) { redirect( rootURL + 'dean/' ); }
      else if ( session.get( 'role' ) == 'Program Head' ) { redirect( rootURL + 'program-head/' ); }
      else if ( session.get( 'role' ) == 'Task Force Leader' ) { redirect( rootURL + 'task-force-leader/' ); }
      else { redirect( rootURL + 'faculty-member/' ); }
    }
  });


  dbQuery.execute( "Select * From z_role_tb; " ).then( function() {
    cmbUserType.append( '<option value="default" disabled selected>User Role...</option>' );
    for ( var i = 0; i < dbQuery.rows(); i++ ) {
      cmbUserType.append( '<option value="' + dbQuery.result( i, 'role' ) + '">' + dbQuery.result( i, 'role' ) + '</option>' );
    }
  });

  dbQuery.execute( "Select * From z_faculty_type_tb; " ).then( function() {
    cmbFacultyType.append( '<option value="default" disabled selected>Faculty Type...</option>' );
    for ( var i = 0; i < dbQuery.rows(); i++ ) {
      cmbFacultyType.append( '<option value="' + dbQuery.result( i, 'facultytype' ) + '">' + dbQuery.result( i, 'facultytype' ) + '</option>' );
    }
  });

  dbQuery.execute( "Select * From z_secret_questions_tb; " ).then( function() {
    cmbSecurityQuestion.append( '<option value="default" disabled selected>Secret Question...</option>' );
    for ( var i = 0; i < dbQuery.rows(); i++ ) {
      cmbSecurityQuestion.append( '<option value="' + dbQuery.result( i, 'secretquestion' ) + '">' + dbQuery.result( i, 'secretquestion' ) + '</option>' );
    }
  });


  txtFullName.focus();

  btnWelcome.click( function( e )             { redirect( rootURL +  'index.php' ); });
  txtFullName.keypress( function( e )         { if ( e.which == 13 ) { txtEmail.focus().select(); } });
  txtEmail.keypress( function( e )            { if ( e.which == 13 ) { txtPassword.focus().select(); } });
  txtPassword.keypress( function( e )         { if ( e.which == 13 ) { cmbUserType.focus(); } });
  cmbUserType.keypress( function( e )         { if ( e.which == 13 ) { cmbFacultyType.focus(); } });
  cmbFacultyType.keypress( function( e )      { if ( e.which == 13 ) { cmbSecurityQuestion.focus(); } });
  cmbSecurityQuestion.keypress( function( e ) { if ( e.which == 13 ) { txtSecurityAnswer.focus().select(); } });
  txtSecurityAnswer.keypress( function( e )   { if ( e.which == 13 ) { btnSignUp.click(); } });

  btnSignUp.click( function( e ) {
    let formIncomplete  = ( txtFullName.val() == '' || txtPassword.val() == '' || txtPassword.val() == '' || cmbFacultyType.prop( 'selectedIndex' ) == 0 || cmbUserType.prop( 'selectedIndex' ) == 0 || cmbSecurityQuestion.prop( 'selectedIndex' ) == 0 || txtSecurityAnswer.val() == '' );
    let invalidEmail    = ( !isEmail( txtEmail.val() ) );
    let invalidPassword = ( !isValidPassword( txtPassword.val() ) || txtPassword.val().length < 8 );

    lblErrorMessage.removeClass( 'active' );

    if ( formIncomplete ) {
      lblErrorMessage.html( 'Please fill all the required fields' );
      lblErrorMessage.addClass( 'active' );
      txtFullName.focus().select();
    }
    else if ( invalidEmail ) {
      lblErrorMessage.html( 'Please enter a valid Email' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else if ( invalidPassword ) {
      lblErrorMessage.html( 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 8 characters long' );
      lblErrorMessage.addClass( 'active' );
      txtPassword.focus().select();
    }
    else {
      dbQuery.execute( "Select * From user_tb Where email = '" + sqlEscape( txtEmail.val() ) + "'; " ).then( function() {
        if ( dbQuery.rows() > 0 ) {
          lblErrorMessage.html( 'Email already exists.<br>Please use a different email' );
          lblErrorMessage.addClass( 'active' );
          txtEmail.focus().select();
        }
        else {
          dbQuery.executeNonQuery( "Insert Into user_tb Values ( Null, '" + sqlEscape( txtFullName.val() ) + "', '" + sqlEscape( txtEmail.val() ) + "', Sha1( '" + sqlEscape( txtPassword.val() ) + "' ), '" + cmbUserType.val() + "', '" + cmbFacultyType.val() + "', '', '', '" + cmbSecurityQuestion.val() + "', '" + sqlEscape( txtSecurityAnswer.val() ) + "', '', 'Locked' ); " ).then( function( e ) {
            notify( 'success', 'Registration Success', 'Successfully registered new account. Please wait for the system administrator to approve your account.' ).then( function() {
              redirect( rootURL + 'login.php' );
            });
          });
        }
      });
    }
  });

  btnLogin.click( function( e ) { redirect( rootURL + 'login.php' ) });

});