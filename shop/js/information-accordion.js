/**
 * Created by ������ on 2015/9/29.
 * QQ:290147465
 */


$(function () {

    $(".accBox li,.rj-cw3 li").mouseenter(function () {

        $(this).addClass("active").siblings().removeClass("active");
    });
})
