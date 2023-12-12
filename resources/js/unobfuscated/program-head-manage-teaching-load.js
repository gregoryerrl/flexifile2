$(document).ready(function () {
  let tblTeachingLoads = $("[name='table-teaching-load']");

  session.init().then(function () {
    dbQuery.execute("Select * From user_tb; ").then(function () {
      if (dbQuery.rows() > 0) {
        for (var i = 0; i < dbQuery.rows(); i++) {
          let loads = 0;
          let name = dbQuery.result(i, "fullname");
          let type = dbQuery.result(i, "type");
          let totalFTE = 0;
          let id = dbQuery.result(i, "id");
          dbQuery
            .execute(
              "Select * From teaching_assignment_tb Where userid = '" +
                dbQuery.result(i, "id") +
                "' ; "
            )
            .then(function () {
              if (dbQuery.rows() > 0) {
                for (var j = 0; j < dbQuery.rows(); j++) {
                  console.log(dbQuery.result(j, "fte"));
                  totalFTE = totalFTE + parseFloat(dbQuery.result(j, "fte"));
                }
              }
              loads = dbQuery.rows();
              tblTeachingLoads
                .children("tbody")
                .append(
                  "<tr>" +
                    '<td align="center" valign="middle">' +
                    name +
                    "</td>" +
                    '<td align="center" valign="middle">' +
                    type +
                    "</td>" +
                    '<td align="center" valign="middle">' +
                    loads +
                    "</td>" +
                    '<td align="center" valign="middle">' +
                    totalFTE +
                    "</td>" +
                    '<td align="center" valign="middle">' +
                    '<button class="btn btn-info btn-sm addbtn5" style="margin-right: 5px;" onclick="viewLoads(\'' +
                    id +
                    "')\">Manage</button>" +
                    "</td>" +
                    "</tr>"
                );
            });
        }
      }
    });
  });
});

function viewLoads(id) {
  let modalLoads = $("[name='modal-view-teaching-load']");
  let tblLoads = $("[name='table-view-teaching-load']");
  let lblTotalFTE = $("[name='total-fte']");
  let tmpTotalUnits = 0;
  let tmpTotalFTE = 0;

  let btnAddNew = $("[name='add-new']");
  let btnCloseView = $("[name='button-manage-load-close']");

  let lblFullname = $("[name='fullname']");
  let lblType = $("[name='type']");
  let lblLoads = $("[name='loads']");

  btnCloseView.off("click").click(function () {
    reload();
  });

  dbQuery
    .execute("Select * From user_tb Where id = '" + id + "' ; ")
    .then(function () {
      lblFullname.html(dbQuery.result(0, "fullname"));
      lblType.html(dbQuery.result(0, "type"));

      btnAddNew.off("click").click(function () {
        addLoad(id);
      });
    });

  log(
    "Select " +
      "s.*, " +
      "a.id semester_id " +
      "From user_tb u " +
      "Left Join teaching_assignment_tb t On u.id = t.userid " +
      "Left Join subject_tb s On t.subject_code = s.subject_code " +
      "Left Join academic_semester_tb a On t.semester_id = a.id " +
      "Where u.id = '" +
      id +
      "' And a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ); "
  );
  dbQuery
    .execute(
      "Select " +
        "s.*, " +
        "a.id semester_id, " +
        "t.section, " +
        "t.units, " +
        "t.fte " +
        "From user_tb u " +
        "Left Join teaching_assignment_tb t On u.id = t.userid " +
        "Left Join subject_tb s On t.subject_code = s.subject_code " +
        "Left Join academic_semester_tb a On t.semester_id = a.id " +
        "Where u.id = '" +
        id +
        "' And a.id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ); "
    )
    .then(function () {
      console.log("Current Semester ID: " + dbQuery.result(0, "semester_id"));
      lblLoads.html("Total Load: " + dbQuery.rows());
      tblLoads.children("tbody").html("");

      if (dbQuery.rows() > 0) {
        for (var i = 0; i < dbQuery.rows(); i++) {
          tblLoads
            .children("tbody")
            .append(
              "<tr>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "subject_code") +
                "</td>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "subject_title") +
                "</td>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "units") +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "section") +
                "</td>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "fte") +
                "</td>" +
                "</tr>"
            );
          tmpTotalFTE += parseFloat(dbQuery.result(i, "fte"));
        }
      }

      lblTotalFTE.html(tmpTotalFTE);
    });

  modalLoads.modal("show");
}

function addLoad(user_id) {
  let modalAddLoad = $("[name='modal-add-teaching-load']");

  let cmbSubjectTitle = $("[name='teaching_load_add_subject_title']");

  let txtSubjectCode = $("[name='teaching-load-subject-code']");
  let txtUnits = $("[name='teaching_load_add_units']");
  let txtSection = $("[name='teaching_load_add_section']");
  let txtFTE = $("[name='teaching_load_add_fte']");

  let btnSave = $("[name='button-add-teaching-load-save']");
  let btnCancel = $("[name='button-add-teaching-load-cancel']");

  let arrSubjects = {};

  let semester_id = 0;

  cmbSubjectTitle.html(
    '<option value="default" disabled selected>Subject Title...</option>'
  );
  txtUnits.val("");
  txtSection.val("");
  txtFTE.val("");
  txtSubjectCode.val("");

  dbQuery
    .execute(
      "Select s.*, ta.semester_id From subject_tb s " +
        "Left Join teaching_assignment_tb ta On s.subject_code = ta.subject_code " +
        "Left Join academic_semester_tb a On ta.semester_id = a.id " +
        "And ta.semester_id = ( Select id From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date Order By datetimeadded Desc ) "
    )
    .then(function () {
      semester_id = dbQuery.result(0, "semester_id");
      console.log(semester_id);
      if (dbQuery.rows() > 0) {
        arrSubjects = query_result;

        for (var i = 0; i < arrSubjects.length; i++) {
          cmbSubjectTitle.append(
            '<option value="' +
              i +
              '">' +
              arrSubjects[i].subject_title +
              "</option>"
          );
        }

        cmbSubjectTitle.off("change").on("change", function () {
          // Assuming txtSubjectCode is a valid reference to an input element
          txtSubjectCode.val(arrSubjects[cmbSubjectTitle.val()].subject_code);
        });

        txtUnits.on("input", updateFTE);
        txtSection.on("input", updateFTE);

        function updateFTE() {
          if (isNumeric(txtSection.val()) && isNumeric(txtUnits.val())) {
            txtFTE.val(
              parseFloat(txtUnits.val()) * parseFloat(txtSection.val())
            );
            console.log("Valid");
          } else {
            txtFTE.val("");
            console.log("Invalid");
          }
        }

        btnSave.click(function () {
          let loggedUserId = session.get("user_id");
          let notValidNumbers =
            !isNumeric(txtUnits.val()) ||
            !isNumeric(txtSection.val()) ||
            !isNumeric(txtFTE.val());

          if (notValidNumbers) {
            notify(
              "warning",
              "Incomplete Fields",
              "Please enter valid numbers on Units and Sections"
            );
          } else {
            if (txtSubjectCode.val() != "" && txtFTE.val() != "") {
              console.log("Execute");
              dbQuery
                .executeNonQuery(
                  "Insert Into teaching_assignment_tb Values ( Null, '" +
                    semester_id +
                    "', '" +
                    user_id +
                    "', '" +
                    txtSubjectCode.val() +
                    "', '" +
                    txtUnits.val() +
                    "', '" +
                    txtSection.val() +
                    "', '" +
                    txtFTE.val() +
                    "', '" +
                    loggedUserId +
                    "', Now() ) ; "
                )
                .then(function () {
                  notify(
                    "success",
                    "Success",
                    "Successfully added subject"
                  ).then(function () {
                    reload();
                  });
                });
            }
          }
        });

        btnCancel.click(function () {
          reload();
        });
      }

      modalAddLoad.modal("show");
    });
}
