$( document ).ready( () => {


  let btnWelcome        = $( "[name='welcome']" );
  let txtEmail          = $( "[name='email']" );
  let txtPassword       = $( "[name='password']" );
  let lblErrorMessage   = $( "[name='error-message']" );
  let btnLogin          = $( "[name='login']" );
  let btnForgotPassword = $( "[name='forgot-password']" );
  let btnSignUp         = $( "[name='sign-up']" );


  session.init().then( function() {
    if ( session.get( 'user_id' ) !== undefined ) {
      if ( session.get( 'role' ) == 'Dean' ) { redirect( rootURL + 'dean/' ); }
      else if ( session.get( 'role' ) == 'Program Head' ) { redirect( rootURL + 'program-head/' ); }
      else if ( session.get( 'role' ) == 'Task Force Leader' ) { redirect( rootURL + 'task-force-leader/' ); }
      else { redirect( rootURL + 'faculty-member/' ); }
    }
  });


  txtEmail.focus();

  btnWelcome.click( function( e )     { redirect( rootURL +  'index.php' ); });
  txtEmail.keypress( function( e )    { if ( e.which == 13 ) { txtPassword.focus().select(); } });
  txtPassword.keypress( function( e ) { if ( e.which == 13 ) { btnLogin.click();  } });

  btnLogin.click( function( e ) {
    let formIncomplete = ( txtEmail .val() == '' ||  txtPassword.val() == '' );
    let invalidEmail   = !isEmail( txtEmail .val() );

    lblErrorMessage.removeClass( 'active' );

    if ( formIncomplete ) {
      lblErrorMessage.html( 'Please fill all the required fields' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();
    }
    else if ( invalidEmail ) {
      lblErrorMessage.html( 'Please enter a valid email' );
      lblErrorMessage.addClass( 'active' );
      txtEmail.focus().select();

    }
    else {
      dbQuery.execute( "Select *, Sha1( '" + sqlEscape( txtPassword.val() ) + "' ) 'password2' From user_tb Where email = '" + sqlEscape( txtEmail.val() ) + "'; " ).then( function( e ) {
        if ( dbQuery.rows() > 0 ) {
          if ( dbQuery.result( 0, 'password' ) !== dbQuery.result( 0, 'password2' ) ) {
            lblErrorMessage.html( 'Invalid Password' );
            lblErrorMessage.addClass( 'active' );
            txtPassword.focus().select();
          }
          else if ( dbQuery.result( 0, 'accountstatus' ) == 'Locked' ) {
            lblErrorMessage.html( 'Account is currently locked' );
            lblErrorMessage.addClass( 'active' );
            txtEmail.focus().select();
          }
          else {
            Promise.all([
              session.set( 'user_id', dbQuery.result( 0, 'id' ) ),
              session.set( 'fullname', dbQuery.result( 0, 'fullname' ) ),
              session.set( 'email', dbQuery.result( 0, 'email' ) ),
              session.set( 'role', dbQuery.result( 0, 'role' ) ),
              session.set( 'type', dbQuery.result( 0, 'type' ) ),
              session.set( 'designation', dbQuery.result( 0, 'designation' ) ),
              session.set( 'status', dbQuery.result( 0, 'status' ) )
            ]).then( function() {
              if ( session.get( 'role' ) == 'Dean' ) { redirect( rootURL + 'dean/' ); }
              else if ( session.get( 'role' ) == 'Program Head' ) { redirect( rootURL + 'program-head/' ); }
              else if ( session.get( 'role' ) == 'Task Force Leader' ) { redirect( rootURL + 'task-force-leader/' ); }
              else { redirect( rootURL + 'faculty-member/' ); }
            });
          }
        }
        else {
          lblErrorMessage.html( 'Invalid Credentials' );
          lblErrorMessage.addClass( 'active' );
          txtEmail.focus().select();
        }
      });
    }
  });

  btnForgotPassword.click( function ( e ) { redirect( rootURL + 'forgot-password.php' ); });
  btnSignUp.click( function( e ) { redirect( rootURL + 'sign-up.php' ); });

});