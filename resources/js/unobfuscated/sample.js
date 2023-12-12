$( document ).ready( function() {

  let btnUpload  = $( '#upload' );
  let xWorkbook  = undefined;
  let xWorksheet = undefined;


  btnUpload.click( function() {
    let fileLocation = $( '#fileUpload' )[0];

    xWorkbook = loadWorkbook( fileLocation );
  });


  function loadWorkbook( fileLocation ) {
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;

    if ( regex.test( fileLocation.value.toLowerCase() ) ) {
      if ( typeof ( FileReader ) != 'undefined' ) {
        var reader = new FileReader();

        //For Browsers other than IE.
        if ( reader.readAsBinaryString ) {
          reader.onload = function ( e ) {
            return fetchData( e.target.result );
          };

          reader.readAsBinaryString( fileLocation.files[0] );
        }
        else {

        //For IE Browser.
        reader.onload = function ( e ) {
          var data = '';
          var bytes = new Uint8Array( e.target.result );
            for ( var i = 0; i < bytes.byteLength; i++ ) {
              data += String.fromCharCode( bytes[i] );
            }
            return fetchData( data );
          };
          reader.readAsArrayBuffer( fileLocation.files[0] );
        }
      }
      else {
        alert('This browser does not support HTML5.');
      }
    }
    else {
      alert('Please upload a valid Excel file.');
    }
  }

  function fetchData( data ) {
    var workbook = XLSX.read(data, {
      type: 'binary'
    });

    var excelRows = XLSX.utils.sheet_to_json( workbook.Sheets[ workbook.SheetNames[0] ], { header : 1 } );

    console.log( getCellData( excelRows, 'A64' ) );
  }

  function getCellData( worksheet, cell ) {
    let row = ( ( cell.replace( /([a-zA-Z ])/g, '' ) ) - 1 );
    let col = ( ( cell.replace( /([0-9 ])/g, '' ) ).split( '' ).reduce( ( r, a ) => r * 26 + parseInt( a, 36 ) - 9, 0 ) - 1 );

    if ( !worksheet[row][col] ) { return ''; }
    else { return worksheet[row][col]; }
  }

  // function ProcessExcel(data) {
  //     //Read the Excel File data.
  //     var workbook = XLSX.read(data, {
  //         type: 'binary'
  //     });

  //     //Fetch the name of First Sheet.
  //     var firstSheet = workbook.SheetNames[0];

  //     //Read all rows from First Sheet into an JSON array.
  //     var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

  //     //Create a HTML Table element.
  //     var table = $("<table />");
  //     table[0].border = "1";

  //     //Add the header row.
  //     var row = $(table[0].insertRow(-1));

  //    //Add the header cells.
  //     var headerCell = $("<th />");
  //     headerCell.html("Id");
  //     row.append(headerCell);

  //     var headerCell = $("<th />");
  //     headerCell.html("Name");
  //     row.append(headerCell);

  //     var headerCell = $("<th />");
  //     headerCell.html("Country");
  //     row.append(headerCell);

  //     //Add the data rows from Excel file.
  //     for (var i = 0; i < excelRows.length; i++) {
  //         //Add the data row.
  //         var row = $(table[0].insertRow(-1));

  //         //Add the data cells.
  //         var cell = $("<td />");
  //         cell.html(excelRows[i].Id);
  //         row.append(cell);

  //         cell = $("<td />");
  //         cell.html(excelRows[i].Name);
  //         row.append(cell);

  //         cell = $("<td />");
  //         cell.html(excelRows[i].Country);
  //         row.append(cell);
  //     }

  //     var dvExcel = $("#dvExcel");
  //     dvExcel.html("");
  //     dvExcel.append(table);
  // };

});