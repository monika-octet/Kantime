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
  


//   popover initializer 
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

$(document).ready(function() {
  $('#openAdvanceFilterButton').click(function() {
    // $('#advanceFilterPopup').show();
    $('#advanceFilterPopup').css('right', '0'); // Slide the container from right to left
    $('#advanceFilterPopupContent').css('transform', 'translate(-100%, -50%)'); // Slide the content from right to left
  });

  $('#advanceFilterPopup').click(function(event) {
    if (event.target === this) {
      $(this).css('right', '-100%'); // Slide the container back to the right
      $('#advanceFilterPopupContent').css('transform', 'translate(0, -50%)'); // Slide the content back to the right
    }
  });
});

