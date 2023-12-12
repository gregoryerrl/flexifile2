$(document).ready(function () {
  let txtCurrentSem = $("[name='current-semester']");
  let txtCurrentStart = $("[name='current-start']");
  let txtCurrentEnd = $("[name='current-end']");
  let semLog = $("[name='semester-log']");

  let currentDate = new Date();

  session.init().then(function () {});
  dbQuery
    .execute(
      "Select * From academic_semester_tb Where Date( Now() ) >= start_date And Date( Now() ) <= end_date; "
    )
    .then(function (e) {
      if (dbQuery.rows() > 0) {
        txtCurrentSem.html(dbQuery.result(0, "title"));
        txtCurrentStart.html(
          moment(dbQuery.result(0, "start_date")).format("MMM DD, YYYY")
        );
        txtCurrentEnd.html(
          moment(dbQuery.result(0, "end_date")).format("MMM DD, YYYY")
        );
      }
    });

  dbQuery.execute("Select * From academic_semester_tb;").then(function () {
    if (dbQuery.rows() > 0) {
      for (var i = 0; i < dbQuery.rows(); i++) {
        semLog
          .children("tbody")
          .append(
            '<p class="w-100" align="center" valign="middle">' +
              '<strong style="background:none">' +
              dbQuery.result(i, "title") +
              "</strong>" +
              " " +
              "(" +
              moment(dbQuery.result(i, "start_date")).format("MMM DD, YYYY") +
              " to " +
              moment(dbQuery.result(i, "end_date")).format("MMM DD, YYYY") +
              ")" +
              "</p>"
          );
      }
    }
  });

  function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    let calendarBody = $('["id=calendar-body"]');
    calendarBody.html(""); // Clear previous content

    let day = 1;

    // Create rows for each week
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");

      // Create individual cells for each day
      for (let j = 0; j < 7; j++) {
        let cell = document.createElement("td");

        if (i === 0 && j < startingDay) {
          // Empty cells before the first day
          cell.innerHTML = "";
        } else if (day > daysInMonth) {
          // Stop when we reach the end of the month
          break;
        } else {
          // Create a day cell
          cell.innerHTML = `<div class="day">${day}</div>`;
          day++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }

  // Initial calendar generation
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

  // Example: Move to the next month
  document
    .getElementById("next-month-btn")
    .addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

  // Example: Move to the previous month
  document
    .getElementById("prev-month-btn")
    .addEventListener("click", function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
});
