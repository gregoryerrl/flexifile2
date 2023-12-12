<?php

  $filename = $_GET[ "filename" ];
  $file = $_SERVER["DOCUMENT_ROOT"] . '/projects/flexifile2/attachments/' . $filename;

  unlink( $file );

  echo '{ "result" : "ok" }';

?>