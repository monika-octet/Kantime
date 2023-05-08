// tooltip initialize
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//success
$("#success").click(function () {
  Swal.fire({
    icon: "success",
    title: "Assignment Group 1 added to Learning Path.",
    showConfirmButton: false,
    timer: 1500,
  });
});

// toast initialize
$("select").multiselect();
