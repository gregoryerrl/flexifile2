$( document ).ready( function() {

  let txtTitle         = $( "[name='dr_title']" );
  let cmbFacultyMember = $( "[name='dr_faculty_member']" );


  session.init().then( function(){

    dbQuery.execute( "Select * From user_tb; " ).then( function() {
      cmbFacultyMember.html( '' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          cmbFacultyMember.append( '<option value="' + dbQuery.result( i, 'id' ) + '">' + dbQuery.result( i, 'fullname' ) + '</option>' );
          if ( i == dbQuery.rows() - 1 ) { VirtualSelect.init({ ele: "[name='dr_faculty_member']" }); }
        }
      }
    });


    dbQuery.execute( "Select * From user_tb; " ).then( function() {
      cmbFacultyMember.html( '' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          cmbFacultyMember.append( '<option value="' + dbQuery.result( i, 'id' ) + '">' + dbQuery.result( i, 'fullname' ) + '</option>' );
          if ( i == dbQuery.rows() - 1 ) { VirtualSelect.init({ ele: "[name='dr_faculty_member']" }); }
        }
      }
    });

    

  });

});