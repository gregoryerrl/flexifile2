<?php

  include "database-connection.php";
  include "helpers.php";

  session_start();

  $action = $_GET["action"];
  $conn -> query( "Set NAMES 'utf8'; " );

  if ( $action === "query" ) {
    $sql = replace_session_variables( $_GET["query"] );
    $result = $conn -> query( $sql );

    $temp = "[";
    while ( $row = $result -> fetch_assoc() ){
      if ( $temp !== "[" ) { $temp = $temp . ","; }
      $temp = $temp . json_encode( $row );
    }
    $temp = $temp . "]";
    echo $temp;
  }

  else if ( $action === "non-query" ) {
    $sql = replace_session_variables( $_GET["query"] );
    if ( $conn -> query($sql) ) { echo "success"; }
    else { echo "failed"; }
  }

?>