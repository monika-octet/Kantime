var $ = jQuery.noConflict();

// fullscreen
$(document).ready(function () {
  $("#full-screen").click(function () {
    $("body").toggleClass("fullscreen");
  });
});
$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    if ($("body").hasClass("fullscreen")) {
      $("body").removeClass("fullscreen");
    } else {
      $("body").addClass("fullscreen");
    }
  }
});

$(document).ready(function () {
  $("#conflict").click(function () {
    $(".row-2").slideToggle(500);
  });

  //  custom popover
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  $(".drag").click(function () {
    $(".custom-popover").draggable();
  });
  $(".cp-close").click(function () {
    $(".client-detail").dropdown("toggle");
    $(".cal-card").dropdown("toggle");
  });

  // modal planned
  $("#manual-checkin").click(function () {
    $(".manual-checkin").removeClass("d-none");
    $(".fob-checkin").addClass("d-none");
  });
  $("#fob-checkin").click(function () {
    $(".manual-checkin").addClass("d-none");
    $(".fob-checkin").removeClass("d-none");
  });

  // modal planned
  $("#manual-checkout").click(function () {
    $(".manual-checkout").removeClass("d-none");
    $(".fob-checkout").addClass("d-none");
  });
  $("#fob-checkout").click(function () {
    $(".manual-checkout").addClass("d-none");
    $(".fob-checkout").removeClass("d-none");
  });

  // modal in progress
  $("#edit-link").click(function () {
    $(".modal-main").removeClass("d-none");
    $(".modal-edit").addClass("d-none");
  });

  // checkbox
  $("#inprogress-manual-checkout").click(function () {
    $(".inprogress-manual-checkout").removeClass("d-none");
    $(".inprogress-fob-checkout").addClass("d-none");
  });
  $("#inprogress-fob-checkout").click(function () {
    $(".inprogress-manual-checkout").addClass("d-none");
    $(".inprogress-fob-checkout").removeClass("d-none");
  });

  // checkbox
  $("#inprogress-manual-checkout2").click(function () {
    $(".inprogress-manual-checkout2").removeClass("d-none");
    $(".inprogress-fob-checkout2").addClass("d-none");
  });
  $("#inprogress-fob-checkout2").click(function () {
    $(".inprogress-manual-checkout2").addClass("d-none");
    $(".inprogress-fob-checkout2").removeClass("d-none");
  });

  $("#ask-checkout").click(function () {
    $("#ask-checkout").addClass("d-none");
    $("#reply-checkout").removeClass("d-none");
  });

  // filter more dropdown
  $("#more-dd").click(function () {
    $(".more-filter").toggleClass("d-none");
    $("#add-new-filter-wrap").removeClass("d-none");
    $("#filter-cat-list").addClass("d-none");
    $("#add-new-cat").addClass("d-none");
    $("#filter-subcat-list").addClass("d-none");
  });
  $("#filter-close").click(function () {
    $(".more-filter").toggleClass("d-none");
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").addClass("d-none");
    $("#add-new-cat").addClass("d-none");
    $("#filter-subcat-list").addClass("d-none");
  });
  $("#add-new-filter").click(function () {
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").removeClass("d-none");
    $("#add-new-cat").addClass("d-none");
    $("#filter-subcat-list").addClass("d-none");
  });
  $("#filter-cat-list").click(function () {
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").addClass("d-none");
    $("#add-new-cat").removeClass("d-none");
    $("#filter-subcat-list").addClass("d-none");
  });
  $("#add-new-filter-2").click(function () {
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").removeClass("d-none");
    $("#add-new-cat").addClass("d-none");
    $("#filter-subcat-list").addClass("d-none");
  });

  $("#apply-filter").click(function () {
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").addClass("d-none");
    $("#add-new-cat").addClass("d-none");
    $("#filter-subcat-list").removeClass("d-none");
    $(".filter-tag-wrap").removeClass("d-none");
    var colorbar = new Nanobar({ target: document.getElementById("loader") });
    colorbar.go(100);
  });

  $("#show-more-link").click(function () {
    $("#add-new-filter-wrap").addClass("d-none");
    $("#filter-cat-list").addClass("d-none");
    $("#filter-subcat-list").removeClass("d-none");

    $(".more-filter").removeClass("d-none");
  });

  // filter settings dropdown

  $("#filter-settings-btn").click(function () {
    $(".filter-settings-wrap").toggleClass("d-none");
  });
  $("#settings-close").click(function () {
    $(".filter-settings-wrap").addClass("d-none");
  });

  //billing
  $("#remove-dis").click(function () {
    $(".billing .form-select").removeClass("disabled");
    $(".billing .form-control").removeClass("disabled");
    $("#remove-dis").hide();
  });

  //snackbar
  $("#filter-done").click(function () {
    $("#save-filter").modal("hide");
    $(".more-filter").addClass("d-none");
    $(".snackbar").removeClass("d-none");
    setTimeout(function () {
      $(".snackbar").addClass("d-none", {}, 500);
    }, 3000);
  });
  $("#snackbar-close").click(function () {
    $(".snackbar").addClass("d-none");
  });
});

$(document).ready(function () {
  var data = [
    {
      id: 0,
      html: '<div class="d-flex align-items-start dd-data"><img src="images/home.svg"/><div><span>Clients Home</span><p>4522 Elsie Drive, Fort Pierre. South Dakota (SD) - 57532</p></div></div>',
    },
    {
      id: 1,
      html: '<div class="d-flex align-items-start dd-data"><span class="radio"></span><div><span>Other Addess</span><p>4522 Elsie Drive, Fort Pierre. South Dakota (SD) - 57532</p></div></div>',
    },
    {
      id: 2,
      html: '<div class="d-flex align-items-start dd-data"><span class="radio"></span><div><span>Other Addess 2</span><p>4522 Elsie Drive, Fort Pierre. South Dakota (SD) - 57532</p></div></div>',
    },
  ];

  // $(".location").select2({
  //   dropdownParent: $('#checkin'),
  //   data: data,
  //   minimumResultsForSearch: -1,
  //   escapeMarkup: function (markup) {
  //     return markup;
  //   },
  //   templateResult: function (data) {
  //     return data.html;
  //   },
  //   templateSelection: function (data) {
  //     return data.html;
  //   }
  // });
  // $(".location1").select2({
  //   dropdownParent: $('#checkout'),
  //   data: data,
  //   minimumResultsForSearch: -1,
  //   escapeMarkup: function (markup) {
  //     return markup;
  //   },
  //   templateResult: function (data) {
  //     return data.html;
  //   },
  //   templateSelection: function (data) {
  //     return data.html;
  //   }
  // });
  // $(".location2").select2({
  //   dropdownParent: $('#inprogress-checkout'),
  //   data: data,
  //   minimumResultsForSearch: -1,
  //   escapeMarkup: function (markup) {
  //     return markup;
  //   },
  //   templateResult: function (data) {
  //     return data.html;
  //   },
  //   templateSelection: function (data) {
  //     return data.html;
  //   }
  // });
});

// c-dropdown
(function ($) {
  var RadioDropdown = function (el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find(".dropdown-label");
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[name="dropdown-group"]');

    this.onRadio();

    this.$label.on("click", function (e) {
      e.preventDefault();
      _this.toggleOpen();
    });

    this.$checkAll.on("click", function (e) {
      e.preventDefault();
      _this.onCheckAll();
    });

    this.$inputs.on("change", function (e) {
      _this.onRadio();
    });
  };

  RadioDropdown.prototype.onRadio = function () {
    this.updateStatus();
  };

  RadioDropdown.prototype.updateStatus = function () {
    var checked = this.$el.find(":checked");

    this.areAllChecked = false;
    this.$checkAll.html("Check All");

    if (checked.length <= 0) {
      this.$label.html("All");
    } else if (checked.length === 1) {
      this.$label.html(checked.parent("label").text());
    } else if (checked.length === this.$inputs.length) {
      this.$label.html("All");
      this.areAllChecked = true;
      this.$checkAll.html("Uncheck All");
    } else {
      this.$label.html(checked.length + " Selected");
    }
  };

  RadioDropdown.prototype.onCheckAll = function (checkAll) {
    if (!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html("Uncheck All");
      this.$inputs.prop("checked", true);
    } else {
      this.areAllChecked = false;
      this.$checkAll.html("Check All");
      this.$inputs.prop("checked", false);
    }

    this.updateStatus();
  };

  RadioDropdown.prototype.toggleOpen = function (forceOpen) {
    var _this = this;

    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$el.addClass("on");
      $(document).on("click", function (e) {
        if (!$(e.target).closest("[data-control]").length) {
          _this.toggleOpen();
        }
      });
    } else {
      this.isOpen = false;
      this.$el.removeClass("on");
      $(document).off("click");
    }
  };

  var RadioesDropdowns = document.querySelectorAll(
    '[data-control="Radio-dropdown"]'
  );
  for (var i = 0, length = RadioesDropdowns.length; i < length; i++) {
    new RadioDropdown(RadioesDropdowns[i]);
  }
})(jQuery);

// tooltip initialize
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// toast initialize

// datepicer js
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "right",
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});

$('input[name="end-date"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format("YYYY"), 10),
  locale: {
    format: "MMM DD, YYYY",
  },
});

$('input[name="start-date"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format("YYYY"), 10),
  locale: {
    format: "MMM DD, YYYY",
  },
});

// content editable
$(document).ready(function () {
  var edit = document.getElementById("editIcon");
  edit.onclick = function (e) {
    $(".editContent").prop("contenteditable", "true");
    $(".edit-notes").addClass("editableContent");
  };

  var editLeave = document.getElementById("editNotes");
  editLeave.onmouseout = function (e) {
    $(".editContent").prop("contenteditable", "false");
    $(".edit-notes").removeClass("editableContent");
  };
  editLeave.onmouseover = function (e) {
    $(".editContent").prop("contenteditable", "true");
    $(".edit-notes").removeClass("editableContent");
  };
  editLeave.onfocus = function (e) {
    $(".edit-notes").addClass("editableContent");
  };
  editLeave.onfocusout = function (e) {
    $(".edit-notes").removeClass("editableContent");
  };
});

// tag search
$(document).ready(function () {
  $('input[name="search"]').amsifySuggestags({
    suggestions: [
      {
        tag: "Williams, Jam J <p>Caregiver</p>",
        value: 1,
      },
      {
        tag: "Williams, Jam H <p>Client</p>",
        value: 2,
      },
      {
        tag: "Williams, Jam M <p>Caregiver</p>",
        value: 3,
      },
    ],
    whiteList: true,
    tagLimit: 5,
    selectOnHover: false,
    tagLimit: 2,
  });
});
$(document).ready(function () {
  $('input[name="clientName"]').amsifySuggestags({
    suggestions: [
      {
        tag: "John Doe <p>#0001</p>",
        value: 1,
      },
      {
        tag: "John Roberto <p>#0321</p>",
        value: 2,
      },
      {
        tag: "John Roy <p>#2443</p>",
        value: 3,
      },
    ],
    whiteList: true,
    tagLimit: 1,
    selectOnHover: false,
    afterAdd: function (value) {
      $("#box-lob").val("Adult").attr("disabled", true);
      $("#box-location").val("Texas").attr("disabled", true);
      $(".amsify-suggestags-input-area").addClass("valued");
    },
  });
});
// filter tag search
$(document).ready(function () {
  $('input[name="filtersearch"]').amsifySuggestags({
    suggestions: [
      {
        tag: "Williams, Jam J",
        value: 1,
      },
      {
        tag: "Williams, Jam H",
        value: 2,
      },
      {
        tag: "Williams",
        value: 3,
      },
      {
        tag: "Williams, Jam A",
        value: 4,
      },
    ],
    whiteList: true,
    tagLimit: 5,
    selectOnHover: false,
    tagLimit: 5,
  });
});
// time start search
$("#start-time").inputmask({ alias: "99:99" });
$("#end-time").inputmask({ alias: "99:99" });
$("#time-picker").click(function () {
  $("#time-picker-wrap").show();
});
$(".close-picker").click(function () {
  $("#time-picker-wrap").hide();
});
$("#start-time").focus(function () {
  $(".start-time-list").show();
});
$("#start-time").focusout(function () {
  $(".start-time-list").hide();
});
$("#end-time").focus(function () {
  $(".end-time-list").show();
});
$("#end-time").focusout(function () {
  $(".end-time-list").hide();
});

$(document).mouseup(function (e) {
  var tp = $(".time-picker");
  if (!tp.is(e.target) && tp.has(e.target).length === 0) {
    $("#time-picker-wrap").hide();
  }
});

// conflict modal
$(document).ready(function () {
  $("#cb-add-exception-show").click(function () {
    $("#cb-add-exception").removeClass("d-none");
  });
  $("#cb-add-exception-hide").click(function () {
    $("#cb-add-exception").addClass("d-none");
  });
  $("#cb-add-reason-show").click(function () {
    $("#cb-add-reason").removeClass("d-none");
  });
  $("#cb-add-reason-hide").click(function () {
    $("#cb-add-reason").addClass("d-none");
  });
  $("#cb-resolve-show").click(function () {
    $("#cb-resolve").removeClass("d-none");
  });
  $("#cb-resolve-hide").click(function () {
    $("#cb-resolve").addClass("d-none");
  });
  $("#cb-addnote-show").click(function () {
    $("#cb-addnote").removeClass("d-none");
  });

  $("#cb-editconflict-show").click(function () {
    $("#cb-editc1").addClass("d-none");
    $("#cb-editc2").removeClass("d-none");
  });
  $("#cb-editconflict-hide").click(function () {
    $("#cb-editc2").addClass("d-none");
    $("#cb-editc1").removeClass("d-none");
  });
});
// edit missed visit modal
$(document).ready(function () {
  $("#edit-missed-visit").click(function () {
    $("#missed-1").removeClass("d-none");
    $("#missed-2").addClass("d-none");
    $("#modal-edit-visit .form-control").removeClass("disabled");
    $("#modal-edit-visit .form-select").removeClass("disabled");
  });
});
// bulk action + progress
$(document).ready(function () {
  $("#apply-bulk").click(function () {
    $("#bulk-select").addClass("d-none");
    $("#bulk-progress").removeClass("d-none");
    setTimeout(function () {
      $("#bulk-select").removeClass("d-none");
      $("#bulk-progress").addClass("d-none");
      var colorbar = new Nanobar({ target: document.getElementById("loader") });
      colorbar.go(100);
    }, 2000);
  });
});

// label dropdown
$(".dropdown.d-hover").hover(function () {
  $(".dropdown-toggle", this).trigger("click");
});

// outside div
$(document).mouseup(function (e) {
  var container = $(".filter-settings");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".filter-settings-wrap").addClass("d-none");
  }
});

// Hide header on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = jQuery('.header').outerHeight();

// jQuery(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = jQuery(this).scrollTop();

//   // Make scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta)
//     return;

//   // If scrolled down and past the navbar, add class .nav-up.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     jQuery('header').removeClass('nav-down').addClass('nav-up');
//   } else {
//     // Scroll Up
//     if (st + jQuery(window).height() < jQuery(document).height()) {
//       jQuery('header').removeClass('nav-up').addClass('nav-down');
//     }
//   }

//   lastScrollTop = st;
// }

// duties
$(document).ready(function () {
  $(".duties").click(function () {
    $(this).next(".duties-list").show();
    $(".duties-selection").hide();
  });
  $(".close-save").click(function () {
    $(".duties-list").hide();
    $(".duties-selection").hide();
  });
  $(".li-perform").click(function () {
    $(".performdiv").show();
    $(".notperformdiv").hide();
    $(".declineddiv").hide();
  });
  $(".li-notperformed").click(function () {
    $(".notperformdiv").show();
    $(".performdiv").hide();
    $(".declineddiv").hide();
  });
  $(".li-declined").click(function () {
    $(".declineddiv").show();
    $(".notperformdiv").hide();
    $(".performdiv").hide();
  });
});
$(document).mouseup(function (e) {
  var duties = $(".duties-wrap");
  if (!duties.is(e.target) && duties.has(e.target).length === 0) {
    $(".duties-list").hide();
  }
});

//editable duties
$(document).ready(function () {
  var editDuties = document.querySelector(".duties-note p");
  editDuties.onmouseout = function (e) {
    $("p").prop("contenteditable", "false");
  };
  editDuties.onmouseover = function (e) {
    $("p").prop("contenteditable", "true");
  };
});

//sweet alert
$(document).ready(function () {
  $(".undo-adjudicate").click(function () {
    swal({
      title: "Are you sure you want to undo Adjudication ?",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: "images/swal/warning.svg",
      buttons: ["No, Go Back", "Yes, Undo Adjudication"],
    }).then(() => {
      swal({
        title: "Undo Adjudication is success",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        icon: "images/swal/success.svg",
        buttons: "Ok",
      });
    });
  });
  $("#add-label-save").click(function () {
    swal({
      title: "New Labels has been added to the visit",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: "images/swal/warning.svg",
      buttons: "Ok",
    });
  });
  $("#mark-visit-save").click(function () {
    swal({
      title: "You have Marked Visit as Missed",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: "images/swal/danger.svg",
      buttons: ["Undo", "Ok"],
    });
  });
  $("#undo-failed").click(function () {
    swal({
      title: "Undo Adjudication Failed",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: "images/swal/danger.svg",
      buttons: "Try Again",
    });
  });
  $("#generate-schedule").click(function () {
    swal({
      title: "6 Schedules have been generated successfully!",
      icon: "images/swal/success.svg",
      buttons: "Ok",
    });
  });
  $("#save-breakdown").click(function () {
    swal({
      title: "Breakdown Saved Successfully!",
      icon: "images/swal/success.svg",
      buttons: "Ok",
    }).then(function () {
      window.location = "plan-overview.html";
    });
  });
});

// placeholder require

// sidebar settings
$(document).ready(function () {
  $("#p-setting").hide();
  $("#sidebar-settings").on("click", function () {
    $("#p-setting, #p-list").toggle(10);
  });
});

// date in saved view
$(document).ready(function () {
  $("#include-date").click(function () {
    if ($("#datefilter").is(":checked")) {
      $(".filter-with-date").addClass("d-flex").removeClass("d-none");
    } else {
      $(".filter-with-date").removeClass("d-flex").addClass("d-none");
    }
  });

  $(input["daterange"]).css(
    "width",
    (input.getAttribute("value").length + 1) * 8 + "px"
  );
});

// skeleton
window.onload = function () {
  setInterval(function () {
    $("div, p, h4, input").removeClass("skeleton");
  }, 500);
};

// list-edit
$(document).ready(function () {
  $(".edit").click(function () {
    $(this)
      .parent(".accordion-header")
      .next(".accordion-collapse")
      .find(".list-edit")
      .toggleClass("disabled");
    $(this)
      .parent(".accordion-header")
      .next(".accordion-collapse")
      .find(".action-div")
      .toggle();
  });

  $(".edit-final").click(function () {
    $(this)
      .parent(".accordion-header")
      .next(".accordion-collapse")
      .find(".value-div")
      .toggleClass("d-none");
    $(this)
      .parent(".accordion-header")
      .next(".accordion-collapse")
      .find(".input-div")
      .toggleClass("d-none");
  });
});

// dropzone
var dropzone = new Dropzone("#demo-upload", {
  previewTemplate: document.querySelector("#preview-template").innerHTML,
  parallelUploads: 2,
  thumbnailHeight: 120,
  thumbnailWidth: 120,
  maxFilesize: 3,
  filesizeBase: 1000,
  thumbnail: function (file, dataUrl) {
    if (file.previewElement) {
      file.previewElement.classList.remove("dz-file-preview");
      var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
      for (var i = 0; i < images.length; i++) {
        var thumbnailElement = images[i];
        thumbnailElement.alt = file.name;
        thumbnailElement.src = dataUrl;
      }
      setTimeout(function () {
        file.previewElement.classList.add("dz-image-preview");
      }, 1);
    }
  },
});

// Now fake the file upload, since GitHub does not handle file uploads
// and returns a 404

var minSteps = 6,
  maxSteps = 60,
  timeBetweenSteps = 100,
  bytesPerStep = 100000;

dropzone.uploadFiles = function (files) {
  var self = this;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    totalSteps = Math.round(
      Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep))
    );

    for (var step = 0; step < totalSteps; step++) {
      var duration = timeBetweenSteps * (step + 1);
      setTimeout(
        (function (file, totalSteps, step) {
          return function () {
            file.upload = {
              progress: (100 * (step + 1)) / totalSteps,
              total: file.size,
              bytesSent: ((step + 1) * file.size) / totalSteps,
            };

            self.emit(
              "uploadprogress",
              file,
              file.upload.progress,
              file.upload.bytesSent
            );
            if (file.upload.progress == 100) {
              file.status = Dropzone.SUCCESS;
              self.emit("success", file, "success", null);
              self.emit("complete", file);
              self.processQueue();
              //document.getElementsByClassName("dz-success-mark").style.opacity = "1";
            }
          };
        })(file, totalSteps, step),
        duration
      );
    }
  }
};

// megamenu
$(document).ready(function () {
  $("#flexmenu1").addflexmenu("flexmenu1");
});

// scrollbar

new SimpleBar($(".search-list-height")[0]);
new SimpleBar($(".subcat-list-height")[0]);
new SimpleBar($(".addnew-cat-height")[0]);
new SimpleBar($(".filter-height")[0]);
new SimpleBar($(".filter-height")[1]);
new SimpleBar($(".filter-height")[2]);
new SimpleBar($(".filter-height")[3]);
new SimpleBar($(".cp-body .accordion-body")[0]);
new SimpleBar($(".conflict-body")[0]);
new SimpleBar($("#indicator-height")[0]);
new SimpleBar($(".start-time-list")[0]);
new SimpleBar($(".end-time-list")[0]);
new SimpleBar($(".tab-pane")[0]);
new SimpleBar($(".tab-pane")[1]);
new SimpleBar($(".tab-pane")[2]);
new SimpleBar($(".tab-pane")[3]);
new SimpleBar($(".sidebar-height")[0]);
