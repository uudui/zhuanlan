/**
 * Created by Administrator on 2016/6/12.
 */

$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
            //动态加载更多数据
            console.log("======================================1")
        }
    });
})
