$( document ).ready( function() {

  let cmbFilter = $( "[name='filter_by_document_type']" );

  let lblCurrentLocation = $( "[name='file-location']" );

  let btnCreateFolder = $( "[name='attachments_create_folder']" );
  let btnUploadFile   = $( "[name='attachments_upload_file']" );

  let tblAttachments = $( "[name='table-attachments']" );

  let modalCreateFolder         = $( "[name='modal-attachments-create-folder']" );
  let txtCreateFolderFolderName = $( "[name='attachments_create_file_folder_name']" ); 
  let btnCreateFolderSave       = $( "[name='button-create-folder-save']" ); 

  let modalUploadFile          = $( "[name='modal-attachments-upload-file']" );
  let ctrlUploadFileAttachment = $( "[name='attachments_upload_file_attachment']" );
  let txtUploadFileName        = $( "[name='attachments_upload_file_name']" );
  let txtUploadFileType        = $( "[name='attachments_upload_file_type']" );
  let txtUploadFileSize        = $( "[name='attachments_upload_file_size']" );
  let btnUploadFileSave        = $( "[name='button-upload-file-save']" ); 


  session.init().then( function() {

    let currentLocation = ( session.get( 'attachment_current_location' ) !== undefined ? session.get( 'attachment_current_location' ) : '/' );

    let tmpLocation = currentLocation.split( '/' );

    lblCurrentLocation.children( 'span' ).html( '<a href="#" style="text-decoration: none;" onclick="goto( \'/\' )">root</a>/' );

    if ( tmpLocation.length > 2 ) {
      let tmpGotoLocation = '/';
      for ( var i = 1; i < tmpLocation.length - 1; i++ ) {
        tmpGotoLocation += tmpLocation[i] + '/';
        lblCurrentLocation.children( 'span' ).append( '<a href="#" style="text-decoration: none;" onclick="goto( \'' + tmpGotoLocation + '\' )">' + tmpLocation[ i ] + '</a>/' );
      }
    }


    dbQuery.execute( "Select * From file_manager Where folder = '" + currentLocation + "' And ownerid = '" + session.get( 'user_id' ) + "' And file_type <> 'Folder' Group By file_type; " ).then( function() {
      cmbFilter.html( '<option value="default" selected>All</option>' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          cmbFilter.append( '<option value="' + dbQuery.result( i, 'file_type' ) + '" ' + ( session.get( 'attachments_filter' ) == dbQuery.result( i, 'file_type' ) ? 'selected' : '' ) + '>' + dbQuery.result( i, 'file_type' ) + '</option>' );
        }
      }
    });


    log( session.get( 'attachments_filter' ) )
    log( "Select fm.*, If( fm.file_type = 'Folder', '0', '1' ) tmpIndex From file_manager fm Where fm.folder = '" + currentLocation + "' And fm.ownerid = '" + session.get( 'user_id' ) + "' " + ( session.get( 'attachments_filter' ) !== 'default' && session.get( 'attachments_filter' ) !== undefined ? "And file_type In ( 'Folder', '" + session.get( 'attachments_filter' ) + "' )" : '' ) + " Order By tmpIndex; " )
    dbQuery.execute( "Select fm.*, If( fm.file_type = 'Folder', '0', '1' ) tmpIndex From file_manager fm Where fm.folder = '" + currentLocation + "' And fm.ownerid = '" + session.get( 'user_id' ) + "' " + ( session.get( 'attachments_filter' ) !== 'default' && session.get( 'attachments_filter' ) !== undefined ? "And file_type In ( 'Folder', '" + session.get( 'attachments_filter' ) + "' )" : '' ) + " Order By tmpIndex; " ).then( function() {
      tblAttachments.children( 'tbody' ).html( '' );
      if ( dbQuery.rows() > 0 ) {
        for ( var i = 0; i < dbQuery.rows(); i++ ) {
          tblAttachments.children( 'tbody' ).append(
            '<tr>' +
              (
                dbQuery.result( i, 'file_type' ) == 'Folder' ?
                '<td valign="middle"><a href="#" style="text-decoration: none;" onclick="goto(\'' + dbQuery.result( i, 'folder' ) + dbQuery.result( i, 'file_name' ) + '/\')">' + dbQuery.result( i, 'file_name' ) + '/</a></td>' +
                '<td valign="middle" align="center">-</td>' :
                '<td valign="middle">' + dbQuery.result( i, 'file_name' ) + '</td>' +
                '<td valign="middle" align="center">' + dbQuery.result( i, 'file_type' ) + '</td>'
              ) +
              '<td valign="middle" align="center">' + convertFileSize( dbQuery.result( i, 'file_size' ) ) + '</td>' +
              '<td valign="middle" align="center">' + moment( dbQuery.result( i, 'datetimeuploaded' ), 'YYYY-MM-DD hh:mm:ss' ).format( 'MM/DD/YYYY hh:mm A' ) + '</td>' +
              '<td valign="middle" align="center">' +
                (
                  dbQuery.result( i, 'file_type' ) == 'Folder' ?
                  '' :
                  '<button class="btn btn-sm btn-primary" style="margin-right: 5px;" onclick="downloadFile( \'' + dbQuery.result( i, 'file_name' ) + '.' + dbQuery.result( i, 'file_ext' ) + '\', \'' + rootURL + 'attachments/' + dbQuery.result( i, 'temp_name' ) + '.' + dbQuery.result( i, 'file_ext' ) + '\')">Download</button>'
                ) +
                '<button class="btn btn-sm btn-danger" onclick="deleteFile( \'' + dbQuery.result( i, 'id' ) + '\', \'' + dbQuery.result( i, 'file_type' ) + '\', \'' + dbQuery.result( i, 'folder' ) + dbQuery.result( i, 'file_name' ) + '/\', \'' + dbQuery.result( i, 'temp_name' ) + '.' + dbQuery.result( i, 'file_ext' ) + '\' )">Delete</button>' +
              '</td>' +
            '</tr>'
          );
        }
      }
      else {
        tblAttachments.children( 'tbody' ).html( '<tr align="middle"><td colspan="5" style="color: grey;">No files to display</td><tr>' );
      }
    });


    cmbFilter.change( function() {
      session.set( 'attachments_filter', cmbFilter.val() ).then( function() {
        reload();
      });
    });


    btnCreateFolder.click( function() {
      txtCreateFolderFolderName.val( '' );
      modalCreateFolder.modal( 'show' );
      txtCreateFolderFolderName.focus().select();
    });

    btnCreateFolderSave.click( function() {
      let formIncomplete = ( txtCreateFolderFolderName.val() == '' );

      if ( formIncomplete ) {
        notify( 'warning', 'Incomplete Fields', 'Please fill all the required fields' );
      }
      else {
        dbQuery.executeNonQuery( "Insert Into file_manager Values ( Null, '" + txtCreateFolderFolderName.val() + "', 'Folder', '-', '-', '" + currentLocation + "', '-', '" + session.get( 'user_id' ) + "', Now() ); " ).then( function() {
          reload();
        });
      }
    });


    btnUploadFile.click( function() {
      ctrlUploadFileAttachment.val( '' );
      modalUploadFile.modal( 'show' );
    });


    ctrlUploadFileAttachment.change( function() {
      getFileInfo( ctrlUploadFileAttachment ).then( function( file ) {
        txtUploadFileName.val( '' );
        txtUploadFileType.val( '' );
        txtUploadFileSize.val( convertFileSize( file.Size ) );
      });
    });


    btnUploadFileSave.click( function() {
      let tmpFileName = '';

      if ( ctrlUploadFileAttachment[0].files.length == 0 ) {
        notify( 'warning', 'Incomplete Fields', 'Please select a file to upload' );
      }
      else if ( txtUploadFileName.val() == '' || txtUploadFileType.val() == '' ) {
        notify( 'warning', 'Incomplete Fields', 'Please fill all the required fields' );
      }
      else {
        getFileInfo( ctrlUploadFileAttachment ).then( function( file ) {
          dbQuery.execute(
            "Select " +
            "Date_Format( Now(), '%Y%m%d%H%i%s' ) TempFileName, " +
            "If( ( Select file_name From file_manager Where file_name = '" + MySQLEscape( txtUploadFileName.val() ) + "' And folder = '" + currentLocation + "' Limit 1 ) Is Null, False, True ) DuplicateFile; "
          ).then( function() {
            tmpFileName = session.get( 'user_id' ) + dbQuery.result( 0, 'TempFileName' );

            if ( dbQuery.result( 0, 'DuplicateFile' ) !== '0' ) {
              notify( 'warning', 'Duplicate File', 'File name already with the same file type already exists' );
            }
            else {
              dbQuery.executeNonQuery( "Insert Into file_manager Values ( Null, '" + MySQLEscape( txtUploadFileName.val() ) + "', '" + MySQLEscape( txtUploadFileType.val() ) + "', '" + file.Extension + "', '" + file.Size + "', '" + currentLocation + "', '" + tmpFileName + "', '" + session.get( 'user_id' ) + "', Now() ); " ).then( function() {
                uploadFile( ctrlUploadFileAttachment, tmpFileName ).then( function() {
                  session.init().then( function() {
                    reload();
                  });
                });
              });
            }

          });
        });
      }
    });

  });

});



function goto( loc ) {
  session.init().then( function() {
    session.set( 'attachments_filter', 'default' ).then( function() {
    session.set( 'attachment_current_location', loc ).then( function() {
      reload();
    })});
  });
}



function downloadFile( filename, fileloc ) {
  var link = document.createElement( 'a' );
  link.setAttribute( 'href', fileloc );
  link.setAttribute( 'download', filename );
  link.click();
}


function deleteFile( fileid, filetype, folder, filename ) {
  if ( filetype == 'Folder' ) {
    notify( 'warning', 'Confirm Delete', 'Do you really want to permanently delete this folder. All files contained in this folder will be permanently deleted?', 'YesNo' ).then( function( e ) {
      if ( e.value ) {
        dbQuery.execute( "Select * From file_manager Where folder = '" + folder + "'; " ).then( function() {

          for ( let i = 0, p = Promise.resolve(); i < dbQuery.rows(); i++ ) {
            p = p.then( function() {
                   dbQuery.executeNonQuery( "Delete From file_manager Where id = '" + query_result[ i ][ 'id' ] + "'; " ).then( function() {
                     if ( dbQuery.result( i, 'file_type' ) !== 'Folder' ) {
                       removeFile( dbQuery.result( i, 'temp_name' ) + '.' + dbQuery.result( i, 'file_ext' ) );
                     }
                   });

                   if ( i == dbQuery.rows() - 1 ) {
                     dbQuery.executeNonQuery( "Delete From file_manager Where id = '" + fileid + "'; " ).then( function() {
                       notify( 'warning', 'Delete Success', 'Successfully deleted files' ).then( function() {
                         reload();
                       });
                     });
                   }
                 });
          }
        });
      }
    });
  }
  else {
    notify( 'warning', 'Confirm Delete', 'Do you really want to permanently delete this file?', 'YesNo' ).then( function( e ) {
      if ( e.value ) {
        dbQuery.executeNonQuery( "Delete From file_manager Where id = '" + fileid + "'; " ).then( function() {
          removeFile( filename ).then( function() {
            reload();
          });
        });
      }
    });
  }
}