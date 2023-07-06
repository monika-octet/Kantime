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
})


$(document).ready(function () {

  $('#preference-criteria-table .multiselect-container .multiselect-option').click(function () {
    var buttonTitle = $(this).attr('title');   
    if ($.trim(buttonTitle) === 'Preffered') {
      $(this).parent().siblings('.multiselect').removeClass('color-red');
      $(this).parent().siblings('.multiselect').addClass('color-green');
    }
    else if ($.trim(buttonTitle) === 'Non Preffered') {
      $(this).parent().siblings('.multiselect').removeClass('color-green');
      $(this).parent().siblings('.multiselect').addClass('color-red');
    } else {
      $(this).parent().siblings('.multiselect').removeClass('color-green');
      $(this).parent().siblings('.multiselect').removeClass('color-red');
    }
  });


});
