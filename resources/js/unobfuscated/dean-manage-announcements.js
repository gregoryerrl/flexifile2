$(document).ready(function () {
  session.init().then(function () {});
});

function editSubject() {
  let modalEditSubject = $("[name='modal-edit-subject']");

  let btnEditSubjectSave = $("[name='button-edit-subject-save']");

  let txtEditSubjectID = $("[name='subject_edit_subjectid']");
  let announcement = "";
  let id = "";

  // dbQuery.execute( "Select * from subject_tb Where id = '" + id + "'; " ).then( function() {
  //   txtEditSubjectID.val(    dbQuery.result( 0, 'subject_code' ) );
  //   txtEditSubjectTitle.val( dbQuery.result( 0, 'subject_title' ) );
  //   txtEditUnits.val(        dbQuery.result( 0, 'units' ) );
  //   txteditSections.val(     dbQuery.result( 0, 'sections' ) );
  //   txtEditFTE.val(          dbQuery.result( 0, 'fte' ) );

  dbQuery
    .execute(
      "Select * From announcements_tb Order By datetimeadded Desc Limit 1; "
    )
    .then(function () {
      txtEditSubjectID.val(dbQuery.result(0, "announcement"));
      announcement = dbQuery.result(0, "announcement");
      id = dbQuery.result(0, "id");
      console.log(announcement);
    });

  btnEditSubjectSave.off("click").click(function () {
    if (txtEditSubjectID.val() == "") {
      notify(
        "warning",
        "Incomplete Fields",
        "Please please fill all the required fields"
      );
    } else {
      dbQuery
        .executeNonQuery(
          "Update announcements_tb Set announcement = '" +
            sqlEscape(txtEditSubjectID.val()) +
            "' Where id = '" +
            id +
            "'; "
        )
        .then(function () {
          console.log(announcement + " changed to " + txtEditSubjectID.val());
          console.log(
            "Update announcements_tb Set announcement = '" +
              sqlEscape(txtEditSubjectID.val()) +
              "' Where id = '" +
              id +
              "'; "
          );
          notify(
            "success",
            "Edit Success",
            "Successfully edited announcement"
          ).then(function () {
            reload();
          });
        });
    }
  });

  modalEditSubject.modal("show");
}

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
        "Update announcements_tb Set announcement = '" +
          sqlEscape(txtEditSubjectID.val()) +
          " Where announcement = '" +
          announcement +
          "'; "
      )
      .then(function () {
        notify(
          "success",
          "Edit Success",
          "Successfully edited announcement"
        ).then(function () {
          reload();
        });
      });
  }
});
