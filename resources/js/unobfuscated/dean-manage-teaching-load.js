$( document ).ready( function() {

  let tblTeachingLoads = $( "[name='table-teaching-load']" );



  session.init().then( function() {

    dbQuery.execute(
      "Select " +
        "u.id, " +
        "u.fullname, " +
        "u.type, " +
        "IfNull( Sum( If( a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded  Desc ), 1, 0 ) ), 0 ) loads, " +
        "IfNull( Sum( If( a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ), s.units, 0 ) ), 0 ) hours " +
      "From user_tb u " +
      "Left Join teaching_assignment_tb t On u.id = t.userid " +
      "Left Join subject_tb s On t.subject_code = s.subject_code " +
      "Left Join academic_semester_tb a On t.semester_id = a.id " +
      "Group By u.id; "
    ).then( function() {
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          tblTeachingLoads.children( 'tbody' ).append(
            '<tr>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'fullname' ) + '</td>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'type' ) + '</td>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'loads' ) + '</td>' +
              '<td align="center" valign="middle">' + dbQuery.result( i, 'hours' ) + '</td>' +
              '<td align="center" valign="middle">' +
                '<button class="btn btn-primary btn-sm addbtn5" style="margin-right: 5px;" onclick="viewLoads(\'' + dbQuery.result( i, 'id' ) + '\')">View</button>' +
                '<button class="btn btn-primary btn-sm addbtn5" onclick="addLoad(\'' + dbQuery.result( i, 'id' ) + '\', \'' + dbQuery.result( i, 'type' ) + '\', \'' + dbQuery.result( i, 'loads' ) + '\')">Add</button>' +
              '</td>' +
            '</tr>'
          )
        }
      }
    });

  });

});





function viewLoads( id ) {
  let modalLoads    = $( "[name='modal-view-teaching-load']" );
  let tblLoads      = $( "[name='table-view-teaching-load']" );
  let lblTotalFTE   = $( "[name='total-fte']" );
  let tmpTotalUnits = 0;
  let tmpTotalFTE   = 0;

  log(
    "Select " +
      "s.*, " +
      "a.id semester_id " +
    "From user_tb u " +
    "Left Join teaching_assignment_tb t On u.id = t.userid " +
    "Left Join subject_tb s On t.subject_code = s.subject_code " +
    "Left Join academic_semester_tb a On t.semester_id = a.id " +
    "Where u.id = '" + id + "' And a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ); "
  )
  dbQuery.execute(
    "Select " +
      "s.*, " +
      "a.id semester_id " +
    "From user_tb u " +
    "Left Join teaching_assignment_tb t On u.id = t.userid " +
    "Left Join subject_tb s On t.subject_code = s.subject_code " +
    "Left Join academic_semester_tb a On t.semester_id = a.id " +
    "Where u.id = '" + id + "' And a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ); "
  ).then( function() {
    tblLoads.children( 'tbody' ).html( '' );

    if ( dbQuery.rows() > 0 ) {
      for ( var i = 0; i < dbQuery.rows(); i++ ) {
        tblLoads.children( 'tbody' ).append(
          '<tr>' +
            '<td align="center" valign="middle">' + dbQuery.result( i, 'subject_code' ) + '</td>' +
            '<td align="center" valign="middle">' + dbQuery.result( i, 'subject_title' ) + '</td>' +
            '<td align="center" valign="middle">' + dbQuery.result( i, 'units' ) + '</td>' +
            '<td align="center" valign="middle">' + dbQuery.result( i, 'fte' ) + '</td>' +
          '</tr>'
        );
        tmpTotalFTE += parseFloat( dbQuery.result( i, 'fte' ) );
      }
    }

    lblTotalFTE.html( tmpTotalFTE );
  });

  modalLoads.modal( 'show' );
}

function addLoad( user_id, type, current_load ) {
  let modalAddLoad    = $( "[name='modal-add-teaching-load']" );
  let cmbSubjectCode  = $( "[name='teaching_load_add_subject_code']" );
  let cmbSubjectTitle = $( "[name='teaching_load_add_subject_title']" );
  let txtUnits        = $( "[name='teaching_load_add_units']" );
  let txtFTE          = $( "[name='button-add-teaching-load-save']" );
  let btnSave         = $( "[name='teaching_load_add_fte']" );
  let arrSubjects     = {};

  cmbSubjectCode.html( '<option value="default" disabled selected>Subject ID...</option>' );
  cmbSubjectTitle.html( '<option value="default" disabled selected>Subject Title...</option>' );
  txtUnits.val( '' );
  txtFTE.val( '' );

  dbQuery.execute(
    "Select s.* From subject_tb s " +
    "Left Join teaching_assignment_tb ta On s.subject_code = ta.subject_code " +
    "And ta.semester_id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ) " +
    "Where ta.id Is Null "
  ).then( function() {
    if ( dbQuery.rows() > 0 ) {
      arrSubjects = query_result;

      for ( var i = 0; i < arrSubjects.length; i++ ) {
        cmbSubjectCode.append( '<option value="' + i + '">' + arrSubjects[i].subject_code + '</option>' );
        cmbSubjectTitle.append( '<option value="' + i + '">' + arrSubjects[i].subject_title + '</option>' );
      }

      cmbSubjectCode.off( 'change' ).on( 'change', function() {
        cmbSubjectTitle.children( "option[value='" + cmbSubjectCode.val() + "']" ).prop( 'selected', true );
        txtUnits.val( arrSubjects[ cmbSubjectCode.val() ].units );
        txtFTE.val( arrSubjects[ cmbSubjectCode.val() ].fte );
      });

      cmbSubjectTitle.off( 'change' ).on( 'change', function() {
        cmbSubjectCode.children( "option[value='" + cmbSubjectTitle.val() + "']" ).prop( 'selected', true );
        txtUnits.val( arrSubjects[ cmbSubjectTitle.val() ].units );
        txtFTE.val( arrSubjects[ cmbSubjectTitle.val() ].fte );
      });

      btnSave.off( 'click' ).on( 'click', function() {
        if ( cmbSubjectCode.val() !== 'default' ) {
          dbQuery.executeNonQuery( "Insert Into teaching_assignment_tb Values ( Null,  ); " ).then( function() {

          });
        }
      });
    }

    modalAddLoad.modal( 'show' );
  });

}