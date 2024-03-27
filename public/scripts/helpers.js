$(document).ready(function() {
  // var headerHeight = $(".header-container").outerHeight();
  // console.log(headerHeight);

  $(window).scroll(function() {
      if ($(this).scrollTop() > 120) {
        $("nav").addClass("nav-scrolled");
      } else {
        $("nav").removeClass("nav-scrolled");
      }
  });
});