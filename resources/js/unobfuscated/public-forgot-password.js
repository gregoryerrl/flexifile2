$( document ).ready( () => {


  let txtEmail          = $( "[name='email']" );
  let lblSecretQuestion = $( "[name='secretquestion']" );
  let txtSecretAnswer   = $( "[name='secretanswer']" );
  let txtNewPassword    = $( "[name='newpassword']" );
  let txtNewPassword2   = $( "[name='newpassword2']" );
  let lblErrorMessage   = $( "[name='error-message']" );
  let panelStep1        = $( "[name='step1']" );
  let panelStep2        = $( "[name='step2']" );
  let panelStep3        = $( "[name='step3']" );
  let btnNext           = $( "[name='next']" );
  let btnNext2          = $( "[name='next2']" );
  let btnSubmit         = $( "[name='submit']" );
  let btnLogin          = $( "[name='login']" );
  let ID                = '';
  let SecretQuestion    = '';
  let SecretAnswer      = '';


  session.init().then( function() {
    if ( session.get( 'user_id' ) !== undefined ) {
      if ( session.get( 'role' ) == 'Dean' ) { redirect( rootURL + 'dean/' ); }
      else if ( session.get( 'role' ) == 'Program Head' ) { redirect( rootURL + 'program-head/' ); }
      else if ( session.get( 'role' ) == 'Task Force Leader' ) { redirect( rootURL + 'task-force-leader/' ); }
      else { redirect( rootURL + 'faculty-member/' ); }
    }
  });



  txtEmail.focus();
  panelStep2.hide();
  panelStep3.hide();


  txtEmail.keypress( function( e )        { if ( e.which == 13 ) { btnNext.click(); } });
  txtSecretAnswer.keypress( function( e ) { if ( e.which == 13 ) { btnNext2.click(); } });
  txtNewPassword.keypress( function( e )  { if ( e.which == 13 ) { txtNewPassword2.focus().select(); } });
  txtNewPassword2.keypress( function( e ) { if ( e.which == 13 ) { btnSubmit.click(); } });


  btnNext.click( function() {
    let invalidEmail    = !isEmail( txtEmail.val() );

    lblErrorMessage.removeClass( 'active' );

    if ( txtEmail.val() == '' ) {
      lblErrorMessage.html( 'Please enter your email' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else if ( invalidEmail ) {
      lblErrorMessage.html( 'Please enter a valid Email' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else {
      dbQuery.execute( "Select * From user_tb Where email = '" + sqlEscape( txtEmail.val() ) + "'; " ).then( function() {
        if ( dbQuery.rows() > 0 ){
          ID             = dbQuery.result( 0, 'id' );
          SecretQuestion = dbQuery.result( 0, 'secretquestion' );
          SecretAnswer   = dbQuery.result( 0, 'secretanswer' );
          panelStep1.hide();
          panelStep2.show();
          lblSecretQuestion.html( SecretQuestion );
          txtSecretAnswer.focus().select();
        }
        else {
          lblErrorMessage.html( 'Please enter a registered Email' );
          lblErrorMessage.addClass( 'active' );
          txtEmail.focus().select();
        }
      });
    }
  });

  btnNext2.click( function() {
    lblErrorMessage.removeClass( 'active' );

    if ( txtSecretAnswer.val() == '' ) {
      lblErrorMessage.html( 'Please enter your secret answer' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else if ( SecretAnswer !== txtSecretAnswer.val() ) {
      txtEmail.val( '' );
      txtSecretAnswer.val( '' );
      panelStep1.show();
      panelStep2.hide();
      lblErrorMessage.html( 'Credentials did not match' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else {
      txtNewPassword.val( '' );
      txtNewPassword2.val( '' );
      panelStep2.hide();
      panelStep3.show();
      txtNewPassword.focus().select();
    }
  });

  btnSubmit.click( function() {
    let passwordNotMatched = ( txtNewPassword.val() !== txtNewPassword2.val() );
    let invalidPassword    = ( !isValidPassword( txtNewPassword.val() ) || txtNewPassword.val().length < 8 )

    lblErrorMessage.removeClass( 'active' );

    if ( passwordNotMatched ) {
      lblErrorMessage.html( 'Passwords did not match' );
      lblErrorMessage.addClass( 'active' );
      txtNewPassword.focus().select();
    }
    else if ( invalidPassword ) {
      lblErrorMessage.html( 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 8 characters long' );
      lblErrorMessage.addClass( 'active' );
      txtNewPassword.focus().select();
    }
    else {
      dbQuery.executeNonQuery( "Update user_tb Set password = Sha( '" + txtNewPassword.val() + "' ) Where id = '" + ID + "'; " ).then( function( e ) {
        notify( 'success', 'Successfully changed', 'Successfully updated account password. Please login to continue' ).then( function() {
          redirect( rootURL + 'login.php' );
        });
      });
    }
  });

  btnLogin.click( function() { redirect( rootURL + 'login.php' ) });

});