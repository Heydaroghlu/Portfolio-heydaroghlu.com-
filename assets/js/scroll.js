$(function () {
    var left = $("#left");
    var right = $("#right");
    var logo=$("#menu h3")
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
          left.removeClass("col-xl-8")
          left.addClass("col-xl-9")
          right.removeClass("col-xl-4")
          right.addClass("col-xl-3")
          logo.removeClass("block")
          logo.addClass("none")
        }else{
            left.addClass("col-xl-8")
          left.removeClass("col-xl-9")
          right.removeClass("col-xl-3")
          right.addClass("col-xl-4")
          logo.addClass("block")
          logo.removeClass("none")
        }
    });
});