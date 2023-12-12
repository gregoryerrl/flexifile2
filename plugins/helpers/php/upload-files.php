<?php

  if ( $_SERVER[ 'REQUEST_METHOD' ] === 'POST' ) {

    if ( isset( $_FILES[ 'FileInfo' ] ) ) {

      $path = $_SERVER["DOCUMENT_ROOT"] . '/projects/flexifile2/attachments' . $_POST[ 'SaveLocation' ];

      session_start();
      $_SESSION[ 'temp' ] = $path;

      $file_name = $_FILES[ 'FileInfo' ][ 'name' ];
      $file_tmp = $_FILES[ 'FileInfo' ][ 'tmp_name' ];
      $file_type = $_FILES[ 'FileInfo' ][ 'type' ];
      $file_size = $_FILES[ 'FileInfo' ][ 'size' ];
      $file_ext = strtolower( end( explode( '.', $_FILES[ 'FileInfo' ][ 'name' ] ) ) );

      $file = $path . $_POST[ 'FileName' ] . '.' . $file_ext;

      move_uploaded_file( $file_tmp, $file );

    }

  }


?>