$(document).ready(function () {
  let sidebarHome = $("[name='sidebar-home']");
  let sidebarMyProfile = $("[name='sidebar-myprofile']");
  let sidebarAcademicSemester = $("[name='sidebar-academicsemester']");
  let sidebarHandledSubjects = $("[name='sidebar-handledsubjects']");
  let sidebarManageSubjects = $("[name='sidebar-managesubjects']");
  let sidebarManageTeachingLoads = $("[name='sidebar-manageteachingloads']");
  let sidebarManageUsers = $("[name='sidebar-manageusers']");
  let sidebarReports = $("[name='sidebar-reports']");
  let sidebarManageAnnouncements = $("[name='sidebar-manageannouncements']");
  let userType = "";

  console.log(
    "Number of elements selected:",
    sidebarManageAnnouncements.length
  );

  session.init().then(function () {
    sidebarMyProfile.hide();
    sidebarAcademicSemester.hide();
    sidebarHandledSubjects.hide();
    sidebarManageSubjects.hide();
    sidebarManageTeachingLoads.hide();
    sidebarManageUsers.hide();
    sidebarManageAnnouncements.hide();
    sidebarReports.hide();

    if (session.get("role") == "Dean") {
      userType = "dean";
      sidebarHandledSubjects.show();
      sidebarManageSubjects.show();
      sidebarManageTeachingLoads.show();
      sidebarManageUsers.show();
      sidebarManageAnnouncements.show();
    } else if (session.get("role") == "Program Head") {
      userType = "program-head";
      sidebarAcademicSemester.show();
      sidebarManageSubjects.show();
      sidebarManageTeachingLoads.show();
      sidebarManageUsers.show();
    } else if (session.get("role") == "Task Force Leader") {
      userType = "task-force-leader";
      sidebarReports.show();
    } else {
      userType = "faculty-member";
    }
  });

  sidebarHome.click(function (e) {
    redirect(rootURL + userType + "/");
  });
  sidebarMyProfile.click(function (e) {
    redirect(rootURL + userType + "/view-pds.php");
  });
  sidebarAcademicSemester.click(function (e) {
    redirect(rootURL + userType + "/academic-semester.php");
  });
  sidebarHandledSubjects.click(function (e) {
    redirect(rootURL + userType + "/handled-subjects.php");
  });
  sidebarManageSubjects.click(function (e) {
    redirect(rootURL + userType + "/manage-subjects.php");
  });
  sidebarManageTeachingLoads.click(function (e) {
    redirect(rootURL + userType + "/manage-teaching-load.php");
  });
  sidebarManageUsers.click(function (e) {
    redirect(rootURL + userType + "/manage-users.php");
  });
  sidebarReports.click(function (e) {
    redirect(rootURL + userType + "/reports-dynamic.php");
  });
  sidebarManageAnnouncements.click(function (e) {
    redirect(rootURL + userType + "/manage-announcements.php");
  });
});
