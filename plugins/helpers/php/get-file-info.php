<?php

  if ( isset( $_FILES[ 'FileInfo' ] ) ) {

    $tmp_file_ext  = explode( '.', $_FILES[ 'FileInfo' ][ 'name' ] );

    // $file_name = $_FILES[ 'FileInfo' ][ 'name' ];
    $file_name = str_replace( '.' . end( $tmp_file_ext ), '', $_FILES[ 'FileInfo' ][ 'name' ] );
    $file_tmp  = str_replace( '\\', '/', $_FILES[ 'FileInfo' ][ 'tmp_name' ] );
    $file_type = $_FILES[ 'FileInfo' ][ 'type' ];
    $file_size = $_FILES[ 'FileInfo' ][ 'size' ];
    // $file_ext  = strtolower( end( explode( '.', $_FILES[ 'FileInfo' ][ 'name' ] ) ) );

    $file_ext = strtolower( end( $tmp_file_ext ) );


    echo  '{ "Name" : "' . $file_name . '", "Type" : "' . $file_type . '", "Size" : "' . $file_size . '", "Extension" :"' . $file_ext . '", "TempLocation" : "' . $file_tmp . '" }';

  }

?>