$(document).ready(function () {
  console.log("hey");
  let btnAddNew = $("[name='button-add-new']");
  let tblSubjects = $("[name='table-subjects']");

  let modalAddSubject = $("[name='modal-add-subject']");
  let txtAddSubjectID = $("[name='subject_add_subjectid']");
  let txtAddSubjectTitle = $("[name='subject_add_subjecttitle']");
  let txtAddUnits = $("[name='subject_add_units']");
  let txtAddSections = $("[name='subject_add_sections']");
  let txtAddFTE = $("[name='subject_add_fte']");
  let btnAddSubjectSave = $("[name='button-add-subject-save']");

  session.init().then(function () {
    dbQuery.execute("Select * From subject_tb; ").then(function () {
      if (dbQuery.rows() > 0) {
        for (var i = 0; i < dbQuery.rows(); i++) {
          tblSubjects
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
                "</td>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "sections") +
                "</td>" +
                '<td align="center" valign="middle">' +
                dbQuery.result(i, "fte") +
                "</td>" +
                '<td align="center" valign="middle">' +
                '<button class="btn btn-primary btn-sm addbtn5" style="margin-right: 5px;" onclick="editSubject(\'' +
                dbQuery.result(i, "id") +
                "')\">Edit</button>" +
                '<button class="btn btn-danger btn-sm addbtn5" onclick="deleteSubject(\'' +
                dbQuery.result(i, "id") +
                "')\">Delete</button>" +
                "</td>" +
                "</tr>"
            );
        }
      }
    });

    txtAddSubjectID.keypress(function (e) {
      if (e.which == 13) {
        txtAddSubjectTitle.focus().select();
      }
    });
    txtAddSubjectTitle.keypress(function (e) {
      if (e.which == 13) {
        txtAddUnits.focus().select();
      }
    });
    txtAddUnits.keypress(function (e) {
      if (e.which == 13) {
        txtAddSections.focus().select();
      }
    });
    txtAddSections.keypress(function (e) {
      if (e.which == 13) {
        txtAddFTE.focus().select();
      }
    });
    txtAddFTE.keypress(function (e) {
      if (e.which == 13) {
        btnAddSubjectSave.click();
      }
    });

    txtAddUnits.focusout(function (e) {
      if (isNumeric(txtAddSections.val()) && isNumeric(txtAddUnits.val())) {
        txtAddFTE.val(
          parseFloat(txtAddUnits.val()) * parseFloat(txtAddSections.val())
        );
      } else {
        txtAddFTE.val("");
      }
    });

    txtAddSections.focusout(function (e) {
      if (isNumeric(txtAddSections.val()) && isNumeric(txtAddUnits.val())) {
        txtAddFTE.val(
          parseFloat(txtAddUnits.val()) * parseFloat(txtAddSections.val())
        );
      } else {
        txtAddFTE.val("");
      }
    });

    btnAddNew.click(function () {
      modalAddSubject.modal("show");
      txtAddSubjectID.focus();
    });

    btnAddSubjectSave.click(function () {
      let notValidNumbers =
        !isNumeric(txtAddUnits.val()) ||
        !isNumeric(txtAddSections.val()) ||
        !isNumeric(txtAddFTE.val());

      if (notValidNumbers) {
        notify(
          "warning",
          "Incomplete Fields",
          "Please enter valid numbers on Units, Sections and FTE fields"
        );
      } else {
        if (
          txtAddSubjectID.val() !== "" &&
          txtAddSubjectTitle.val() !== "" &&
          txtAddUnits.val() !== "" &&
          txtAddSections.val() !== "" &&
          txtAddFTE.val() !== ""
        ) {
          dbQuery
            .executeNonQuery(
              "Insert Into subject_tb Values ( Null, '" +
                sqlEscape(txtAddSubjectID.val()) +
                "', '" +
                sqlEscape(txtAddSubjectTitle.val()) +
                "', '" +
                sqlEscape(txtAddUnits.val()) +
                "', '" +
                sqlEscape(txtAddSections.val()) +
                "', '" +
                sqlEscape(txtAddFTE.val()) +
                "', '" +
                session.get("user_id") +
                "', Now() ) ; "
            )
            .then(function () {
              notify(
                "success",
                "Add Success",
                "Successfully added new subject"
              ).then(function () {
                reload();
              });
            });
        }
      }
    });
  });
});

function editSubject(id) {
  let txtEditSubjectID = $("[name='subject_edit_subjectid']");
  let txtEditSubjectTitle = $("[name='subject_edit_subjecttitle']");
  let txtEditUnits = $("[name='subject_edit_units']");
  let txteditSections = $("[name='subject_edit_sections']");
  let txtEditFTE = $("[name='subject_edit_fte']");

  let modalEditSubject = $("[name='modal-edit-subject']");
  let btnEditSubjectSave = $("[name='button-edit-subject-save']");

  txtEditUnits.focusout(function (e) {
    if (isNumeric(txteditSections.val()) && isNumeric(txtEditUnits.val())) {
      txtEditFTE.val(
        parseFloat(txtEditUnits.val()) * parseFloat(txteditSections.val())
      );
    } else {
      txtEditFTE.val("");
    }
  });

  txteditSections.focusout(function (e) {
    if (isNumeric(txteditSections.val()) && isNumeric(txtEditUnits.val())) {
      txtEditFTE.val(
        parseFloat(txtEditUnits.val()) * parseFloat(txteditSections.val())
      );
    } else {
      txtEditFTE.val("");
    }
  });

  dbQuery
    .execute("Select * from subject_tb Where id = '" + id + "'; ")
    .then(function () {
      txtEditSubjectID.val(dbQuery.result(0, "subject_code"));
      txtEditSubjectTitle.val(dbQuery.result(0, "subject_title"));
      txtEditUnits.val(dbQuery.result(0, "units"));
      txteditSections.val(dbQuery.result(0, "sections"));
      txtEditFTE.val(dbQuery.result(0, "fte"));

      btnEditSubjectSave.off("click").click(function () {
        let notValidNumbers =
          !isNumeric(txtEditUnits.val()) ||
          !isNumeric(txteditSections.val()) ||
          !isNumeric(txtEditFTE.val());

        if (notValidNumbers) {
          notify(
            "warning",
            "Invalid Numbers",
            "Please enter valid numbers on Units, Sections and FTE fields"
          );
        } else if (
          txtEditSubjectID.val() !== "" &&
          txtEditSubjectTitle.val() !== "" &&
          txtEditUnits.val() !== "" &&
          txteditSections.val() !== "" &&
          txtEditFTE.val() !== ""
        ) {
          notify(
            "warning",
            "Incomplete Fields",
            "Please please fill all the required fields"
          );
        } else {
          dbQuery
            .executeNonQuery(
              "Update subject_tb Set subject_code = '" +
                sqlEscape(txtEditSubjectID.val()) +
                "', subject_title = '" +
                sqlEscape(txtEditSubjectTitle.val()) +
                "', units = '" +
                sqlEscape(txtEditUnits.val()) +
                "', sections = '" +
                sqlEscape(txteditSections.val()) +
                "', fte = '" +
                sqlEscape(txtEditFTE.val()) +
                "' Where id = '" +
                id +
                "'; "
            )
            .then(function () {
              notify(
                "success",
                "Edit Success",
                "Successfully edited subject"
              ).then(function () {
                reload();
              });
            });
        }
      });

      modalEditSubject.modal("show");
      txtEditSubjectID.focus();
    });
}

function deleteSubject(id) {
  notify(
    "warning",
    "Confirm Delete",
    "Do you really want to delete this subject?",
    "YesNo"
  ).then(function (e) {
    if (e.value) {
      dbQuery
        .executeNonQuery("Delete From subject_tb Where id = '" + id + "'; ")
        .then(function () {
          notify(
            "success",
            "Delete Success",
            "Successfully deleted subject"
          ).then(function () {
            reload();
          });
        });
    }
  });
}
