// tooltip initialize
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// toast initialize
$("select").multiselect();
//success
$("#success").click(function () {
  Swal.fire({
    icon: "success",
    title: "Assignment Group 1 added to Learning Path.",
    showConfirmButton: false,
    timer: 1500,
  });
});
$("#success2").click(function () {
  Swal.fire({
    icon: "success",
    title: "Assignment Group 1 added to Learning Path.",
    showConfirmButton: false,
    timer: 1500,
  }).then(function () {
    window.location = "assignment.html";
  });
});

// create new group flow

$(".add-assignment-content").hide();
$(".step-2-footer").hide();

$(".step-1-save-btn").on("click", function () {
  $(".step-1-content").hide();
  $(".add-assignment-content").show();
  $(".step-1-footer").hide();
  $(".step-2-footer").show();
});

$("#publish-check").on("click", function () {
  if ($("#publish-check").is(":checked")) {
    $(".step-2-publish-btn").removeClass("btn-secondary");
    $(".step-2-publish-btn").addClass("btn-primary");
  }
});

// Assignment Tab Btn (Create New Link Change)
$("#create-assignment").hide();

$("#assignment-tab").on("click", function () {
  $("#create-group").hide();
  $("#create-assignment").show();
});

$("#groups-tab").on("click", function () {
  $("#create-assignment").hide();
  $("#create-group").show();
});

// Add Task Table Row
$(".added-task").hide();
$(".added-task-auto-assign").hide();
$(".weightage-without-error").hide();
$(".add-new-task-link").hide();
$(".first-task-row").hide();
$(".weightage-row").hide();

$("#assign-task-modal-btn").on("click", function () {
  $(".first-task-row").show();
  $(".weightage-row").show();
  $(".add-new-task-modal").hide();
  $(".add-new-task-link").show();
});

$(".add-new-task-link").on("click", function () {
  $(".added-task").show();
  $(".switch-to-primary").removeClass("btn-outline-table");
  $(".switch-to-primary").addClass("btn-outline-primary");
});

$(".assign-auto-btn").on("click", function () {
  $(".added-task").hide();
  $(".added-task-auto-assign").show();
  $(".weightage-with-error").hide();
  $(".weightage-without-error").show();
  $(".weightage-error-text").removeClass("weightage-error-text");
  $(".after-auto-publish-btn").removeClass("btn-secondary");
  $(".after-auto-publish-btn").addClass("btn-primary");
});

// Select all checkboxes

$("#checkAll").click(function () {
  $("input:checkbox").not(this).prop("checked", this.checked);
});
