$( document ).ready( function() {

  let pdsDeadline = $( "[name='pds-deadline']" );

  let dtDay       = $( "[name='dt-day']" );
  let dtDate      = $( "[name='dt-date']" );
  let dtTime      = $( "[name='dt-time']" );

  let panelAnnouncement = $( "[name='panel-announcement']" );
  let lblAnnouncement   = $( "[name='announcement']" );
  let txtAnnouncement   = $( "[name='text-announcement']" );
  let btnAnnouncement   = $( "[name='post-announcement']" );


  session.init().then( function() {
    if ( ( session.get( 'role' ) !== 'Dean' && session.get( 'role' ) !== 'Program Head' ) || currentURL !== '/dean/' ) { panelAnnouncement.hide(); }
  });


  dbQuery.execute( "Select Now() 'Now'; " ).then( function() {
    var dtNow = moment( dbQuery.result( 0, 'Now' ), 'YYYY-MM-DD hh:mm:ss' );

    dtDay.html( dtNow.format( 'dddd' ) );
    dtDate.html( dtNow.format( 'MMM DD, YYYY' ) );
    dtTime.html( dtNow.format( 'hh:mm:ss A' ) );

    setInterval( function() {
      dtDay.html( dtNow.format( 'dddd' ) );
      dtDate.html( dtNow.format( 'MMM DD, YYYY' ) );
      dtTime.html( dtNow.format( 'hh:mm:ss A' ) );
      dtNow.add( 1, 's' );
    }, 1000 );
  });


  dbQuery.execute( "Select * From announcements_tb Order By datetimeadded Desc Limit 1; " ).then( function() {
    lblAnnouncement.html( dbQuery.result( 0, 'announcement' ) );
  });


  dbQuery.execute( "Select deadline, Now() 'now' From pds_deadline_tb Order By datetimeadded Desc Limit 1" ).then( function() {
    let deadline        = moment( dbQuery.result( 0, 'deadline' ), 'YYYY-MM-DD' );
    let datenow         = moment( dbQuery.result( 0, 'now' ), 'YYYY-MM-DD' );
    let datediff        = deadline.diff( datenow, 'd' );
    let warningInterval = 10;


    if ( datediff == 0 ) {
      pdsDeadline.addClass( 'warning' );
      pdsDeadline.children( 'h3' ).html( 'Today is the deadline for updating PDS' );
    }
    else if ( datediff == 1 ) {
      pdsDeadline.addClass( 'warning' );
      pdsDeadline.children( 'h3' ).html( 'Tomorrow is the deadline for updating PDS ' );
    }
    else if ( datediff > 1 && datediff <= warningInterval ) {
      pdsDeadline.addClass( 'warning' );
      pdsDeadline.children( 'h3' ).html( datediff + ' days left to update your PDS' );
    }
    else if ( datediff > warningInterval ) {
      pdsDeadline.children( 'h3' ).html( datediff + ' days left to update your PDS' );
    }
  });


  txtAnnouncement.keypress( function( e ) { if ( e.which == 13 ) { btnAnnouncement.click(); } })
  btnAnnouncement.click( function( e ) {
    if ( txtAnnouncement.val() !== '' ) {
      dbQuery.executeNonQuery( "Insert Into announcements_tb Values ( Null, '" + sqlEscape( txtAnnouncement.val() ) + "', '" + session.get( 'user_id' ) + "', Now() ); " ).then( function() {
        reload();
      });
    }
  });

});