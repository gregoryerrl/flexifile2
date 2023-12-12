$( document ).ready( function() {

  let btnLogout = $( "[name='logout']" );


  btnLogout.click( function( e ) {
    session.init().then( function() {
      session.destroy().then( function() {
        redirect( rootURL + 'login.php' );
      });
    });
  });

});