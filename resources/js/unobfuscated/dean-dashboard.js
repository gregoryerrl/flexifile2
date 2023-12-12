$( document ).ready( function() {

  let panelHeader     = $( "[name='header']" );

  let cntMembers      = $( "[name='count-members']" );
  let cntITEFaculty   = $( "[name='count-itefaculty']" );
  let cntGEFaculty    = $( "[name='count-gefaculty']" );
  let cntPermanent    = $( "[name='count-permanent']" );
  let cntTemporary    = $( "[name='count-temporary']" );
  let cntContractual  = $( "[name='count-contractual']" );
  let cntPartTime     = $( "[name='count-parttime']" );

  let btnSeePDS       = $( "[name='seepds']" );
  let btnSeeFiles     = $( "[name='seefiles']" );
  let btnSeeFolders   = $( "[name='seefolders']" );

  let lblPDSLastUpdated = $( "[name='pdslastupdated']" );
  let lblDesignation    = $( "[name='designation']" );
  let lblAcademicYear   = $( "[name='academicyear']" );


  session.init().then( function() {
    if ( session.get( 'user_id' ) == undefined ) {
      redirect( rootURL + 'login.php' );
    }
  });
  

  dbQuery.execute( 
    "Select " +
      "Count( * ) Members, " +
      "Sum( If( type = 'ITE Faculty', 1, 0 ) ) ITEFaculty, " +
      "Sum( If( type = 'GE Faculty', 1, 0 ) ) GEFaculty, " +
      "Sum( If( status = 'Permanent', 1, 0 ) ) Permanent, " +
      "Sum( If( status = 'Temporary', 1, 0 ) ) Temporary, " +
      "Sum( If( status = 'Contractual', 1, 0 ) ) Contractual, " +
      "Sum( If( status = 'Part-Time', 1, 0 ) ) PartTime " +
    "From user_tb; "
  ).then( function() {
    cntMembers.append( dbQuery.result( 0, 'Members' ) );
    cntITEFaculty.append( dbQuery.result( 0, 'ITEFaculty' ) );
    cntGEFaculty.append( dbQuery.result( 0, 'GEFaculty' ) );
    cntPermanent.append( '<h5>' + dbQuery.result( 0, 'Permanent' ) + '</h5>' );
    cntTemporary.append( '<h5>' + dbQuery.result( 0, 'Temporary' ) + '</h5>' );
    cntContractual.append( '<h5>' + dbQuery.result( 0, 'Contractual' ) + '</h5>' );
    cntPartTime.append( '<h5>' + dbQuery.result( 0, 'PartTime' ) + '</h5>' );
  });


  dbQuery.execute(
    "Select " +
      "( Select datetimeupdated From personal_info_tb Order By datetimeupdated Desc Limit 1 ) lastupdated " +
      "Union " +
      "( Select datetimeupdated From family_background_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From education_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From civil_service_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From work_experience_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From voluntary_work_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From training_programs_tb Order By datetimeupdated Desc Limit 1 ) " +
      "Union " +
      "( Select datetimeupdated From other_info_tb Order By datetimeupdated Desc Limit 1 ) " +
    "Order By lastupdated Desc; "
  ).then( function() {
    if ( dbQuery.rows() > 0 ) {
      lblPDSLastUpdated.append( moment( dbQuery.result( 0, 'lastupdated' ), 'YYYY-MM-DD- hh:mm:ss' ).format( 'MM/DD/YYYY hh:mm:ss A' ) );
    }
    else {
      lblPDSLastUpdated.append( "-" );
    }
  });


  session.init().then( function() {
    dbQuery.execute( "Select * From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date; " ).then( function( e ) {
      lblDesignation.html( session.get( 'designation' ) );
      if ( dbQuery.rows() > 0 ) {
        lblAcademicYear.html( dbQuery.result( 0, 'title' ) + ' ' );
      }
    });
  });


  btnSeePDS.click( function( e )     { redirect( rootURL + 'program-head/view-pds.php' ); });
  btnSeeFiles.click( function( e )   { redirect( rootURL + 'program-head/attachments.php' ); });
  btnSeeFolders.click( function( e ) { redirect( rootURL + 'program-head/manage-attachments.php' ); });

});