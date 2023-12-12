$( document ).ready( function() {

  let cmbFacultyMember = $( "[name='ta_faculty_member']" );
  let cmbSemester      = $( "[name='ta_semester']" );
  let btnGenerate      = $( "[name='ta_generate']" );


  session.init().then( function() {

    dbQuery.execute( "Select * From user_tb; " ).then( function() {
      cmbFacultyMember.html( '' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          cmbFacultyMember.append( '<option value="' + dbQuery.result( i, 'id' ) + '">' + dbQuery.result( i, 'fullname' ) + '</option>' );
          if ( i == dbQuery.rows() - 1 ) { VirtualSelect.init({ ele: "[name='ta_faculty_member']" }); }
        }
      }
    });

    dbQuery.execute( "Select * From academic_semester_tb; " ).then( function() {
      cmbSemester.html( '' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          cmbSemester.append( '<option value="' + dbQuery.result( i, 'id' ) + '">' + dbQuery.result( i, 'title' ) + '</option>' );
          if ( i == dbQuery.rows() - 1 ) { VirtualSelect.init({ ele: "[name='ta_semester']" }); }
        }
      }
    });

    btnGenerate.click( function() {
      log( cmbFacultyMember.val() )
      // window.open( rootURL + 'task-force-leader/reports-teaching-assignment-generate.php', '_blank' );
    });

  });

});