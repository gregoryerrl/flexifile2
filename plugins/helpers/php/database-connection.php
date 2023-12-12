<?php

  $server   = 'localhost';
  $username = 'root';
  $password = '';
  $db       = 'flexifile';
  $conn     = new mysqli( $server, $username, $password, $db );

  if ( $conn -> connect_error )  { die( "connection_error" ); }

?>