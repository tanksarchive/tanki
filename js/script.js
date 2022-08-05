$(document).ready(function () {
  $(".MobileMenu").click(function (event) {
    $(".MobileMenu").toggleClass("active");
    $(".HeaderMenu").toggleClass("MenuActive");
    $("body").toggleClass("BodyLock");
  });
});

let shrinkHeader = 1;
let scroll = getCurrentScroll();
if (scroll >= shrinkHeader) {
  $("header").addClass("HeaderFixed");
} else {
  $("header").removeClass("HeaderFixed");
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

$(function () {
  let shrinkHeader = 1;
  $(window).scroll(function () {
    let scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $("header").addClass("HeaderFixed");
    } else {
      $("header").removeClass("HeaderFixed");
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
