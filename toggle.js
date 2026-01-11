$(function () {
    $(".content-item a").click(function (e) {
        // e.preventDefault();
        $(this).siblings(".sub-list").toggleClass("sub-list-open");
    });
});