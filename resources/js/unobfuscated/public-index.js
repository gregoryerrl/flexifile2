$( document ).ready( function() {

  let btnLogin = $( "[name='login']" );


  session.init().then( function() {
    if ( session.get( 'user_id' ) !== undefined ) {
      if ( session.get( 'role' ) == 'Dean' ) { redirect( rootURL + 'dean/' ); }
      else if ( session.get( 'role' ) == 'Program Head' ) { redirect( rootURL + 'program-head/' ); }
      else if ( session.get( 'role' ) == 'Task Force Leader' ) { redirect( rootURL + 'task-force-leader/' ); }
      else { redirect( rootURL + 'faculty-member/' ); }
    }
  });


  btnLogin.click( function( e ) { redirect( rootURL + 'login.php' ); });

});