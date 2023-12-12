<?php

  require( '../plugins/fpdf/fpdf.php' );
  require( '../plugins/helpers/php/database-connection.php' );
  session_start();


  class PDF extends FPDF {

    // Page header
    function Header() {

      if ( $this -> PageNo() == 1 ) {
        // $this -> SetY(8);

        // $this -> SetFont( 'Arial', 'B', 10 );
        // $this -> SetFillColor( 255, 255, 255 );

        // $this -> Ln(5);
        // $this -> SetFont( 'Arial', '', 10 );
        // $this -> Ln(13);
      }

      $this -> Ln(6.2);

    }

    // Page footer
    function Footer() {

      // Position at 1.5 cm from bottom
      $this -> SetY(-12);
      // Arial italic 8
      $this -> SetFont( 'Arial', '', 7.5 );
      // Page number
      $this -> Cell( 30, 10, 'Page ' . $this -> PageNo() . ' of {nb}', 0, 0, 'L' );

      // $this -> Cell( 30, 10, 'Date-Time Printed:  ' . date("F d, Y H:i:s A"), 0, 0, 'R' );

    }

    // Display Table Cell Contents
    function TableContent( $xData, $xWidth, $xHeight, $xAlignment, $xColorFill ) {

      $errWidthMargin  = 2;
      $errHeightMargin = 1.5;

      $cellData        = $xData;
      $cellWidth       = $xWidth;
      $cellHeight      = $xHeight;
      $cellAlignment   = $xAlignment;
      $cellColorFill   = $xColorFill;
      $lineCount       = 1;
      $colLineCount    = array();

      for ( $i = 0; $i < count( $cellData ); $i++ ) {

        $tmpData      = explode( "<br/>", $xData[$i] );
        $tmpLineCount = 0;
        $tmpCellItems = array();
        $tmpString    = '';

        for ( $ii = 0; $ii < count( $tmpData ); $ii++ ) {

          $strCurrentIndex = 0;
          $strStartIndex   = 0;
          $strSelLength    = 0;
          $strLength       = strlen( $tmpData[$ii] );
          $strContent      = '';

          while ( $strCurrentIndex < $strLength ) {

            if ( $this -> GetStringWidth( substr( $tmpData[$ii], $strStartIndex, $strSelLength ) ) > ( $cellWidth[$i] - $errMargin )   ) {
              $strStartIndex = $strCurrentIndex;
              $tmpLineCount++;
              $strSelLength = 0;
            }

            $strContent .= substr( $tmpData[$ii], $strCurrentIndex, 1 );
            $strCurrentIndex++;
            $strSelLength++;
          }

          if ( $tmpString !== '' ) { $tmpString .= "\n"; }
          $tmpString .= $strContent;
          $tmpLineCount++;
        }

        $cellData[$i] = $tmpString;

        if ( $tmpLineCount > $lineCount ) { $lineCount = $tmpLineCount; }
        array_push( $colLineCount, $tmpLineCount );

      }


      for ( $i = 0; $i < count( $cellData ); $i++ ) {

        $rowCount = count( explode( '<br/>', $cellData[$i] ) );
        $tmpItem = str_replace( "<br/>", "\n", $cellData[$i] );

        if ( $colLineCount[$i] > 1 ) {
          $XPos = $this -> GetX();
          $YPos = $this -> GetY();
          $blankLines = '';

          if ( $colLineCount[$i] < $lineCount ) {
            for ( $ii = 0; $ii < ( $lineCount - $colLineCount[$i] ); $ii++ ) { 
              $blankLines .= "\n ";
            }
          }

          $this -> Cell( $cellWidth[$i], ( $cellHeight - ( $lineCount > 0 ? $errHeightMargin : 0 ) ) * $lineCount, '', 'LTRB', 0, $cellAlignment[$i], $cellColorFill );
          $addMargin = ( $cellHeight - ( $lineCount > 0 ? $errHeightMargin : 0 ) ) * ( $lineCount - $colLineCount[$i] ) / 2;
          $this -> SetXY( $XPos, $YPos + $addMargin );
          $this -> MultiCell( $cellWidth[$i], ( $cellHeight - ( $lineCount > 0 ? $errHeightMargin : 0 ) ), $tmpItem . $blankLines, 0, $cellAlignment[$i], 0 );
          $this -> SetXY( $XPos + $cellWidth[$i], $YPos );
        }
        else {
          $this -> Cell( $cellWidth[$i], ( $cellHeight - ( $lineCount > 0 ? $errHeightMargin : 0 ) ) * $lineCount, $tmpItem, 'LTRB', 0, $cellAlignment[$i], $cellColorFill );
        }

      }

      $nextLineMargin = ( $cellHeight - ( $lineCount > 0 ? $errHeightMargin : 0 ) ) * $lineCount;

      $this -> ln($nextLineMargin);

    }

  }


  $SignLocY = 95;

  $pdf = new PDF( 'P', 'mm', array( 210 , 297 ) );

  $pdf -> AliasNbPages();
  $pdf -> AddPage( 'P' );


  $pdf -> Ln( 1.5 );
  $pdf -> SetFont( 'Arial', 'B', 10 );

  $pdf -> Cell( 0, 6, 'MATRIX OF FACULTY PER TEACHING ASSIGNMENT', 0, 0, 'C' );
  $pdf -> Ln( 8 );

  $_SESSION[ 'ta_semester' ] = '1|2';
  $_SESSION[ 'ta_faculties' ] = '35';

  $semesters = '';
  $tmpSemesters = explode( '|', $_SESSION[ 'ta_semester' ] );

  $faculties = '';
  $tmpFaculties = explode( '|', $_SESSION[ 'ta_faculties' ] );

  foreach ( $tmpSemesters as $key => $value) {
    $semesters .= ( $semesters == '' ? '' : ', ' ) . '\'' . $value . '\'';
  }

  foreach ( $tmpFaculties as $key => $value) {
    $faculties .= ( $faculties == '' ? '' : ', ' ) . '\'' . $value . '\'';
  }

  $query = "Select * From academic_semester_tb Where id In ( " . $semesters . " ); ";
  $result = $conn -> query( $query );
  while ( $academic_semester = $result -> fetch_assoc() ) {
    $pdf -> Cell( 0, 6, $academic_semester[ 'title' ], 0, 0, 'L' );
    $pdf -> Ln( 6 );


    $CellData      = array( '', '', '' );
    $CellWidth     = array( 50, 50, 50 );
    $CellHeight    = 8; 
    $CellAlignment = array( 'C', 'C', 'C' );
    $CellColorFill = 0;

    $pdf -> TableContent( $CellData, $CellWidth, $CellHeight, $CellAlignment, $CellColorFill );

    $query2 = "Select * From user_tb Where id In ( " . $faculties . " ); ";
    $result2 = $conn -> query( $query2 );
    while ( $facuty_info = $result2 -> fetch_assoc() ) {
    }

    // $query = "Select * From academic_semester_tb; ";
    // $result2 = $conn -> query( $query );
    // while ( $row = $result2 -> fetch_assoc() ) {
      // $pdf -> Cell( 0, 6, $faculties, 0, 0, 'L' );
      // $pdf -> Ln( 6 );
    // }
  }


  $pdf -> Output();

?>