/**
 * Created by Administrator on 2016/6/12.
 */

$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
            //��̬���ظ�������
            console.log("======================================1")
        }
    });
})
