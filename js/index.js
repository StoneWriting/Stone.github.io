
// ------------------------------刺绣作品展示动画效果---------------------
$(document).ready(function () {
    $(".thumbs a").addClass("alpha");
    $(".thumbs a:eq(0)").removeClass("alpha");
    $(".thumbs a").mouseover(function () {
        var path = $(this).attr("href");
        var title = $(this).attr("title");
        $("#largeImg").attr({ src: path, alt: title });
        $(this).removeClass("alpha").siblings().addClass("alpha");
    });
    console.log($("div").data("index"));
});

