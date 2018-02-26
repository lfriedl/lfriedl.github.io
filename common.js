

$(function(){
    // add hover text on NewWindow links
    $("a.newwnd").attr("title", "Opens in New Window");

    // change style of current nav item
    var currentPage = getCurrentFileName();
    $("nav li a").each(function(){
        if ($(this).attr("href") == currentPage) {
            $(this).parent().addClass("current");
            $(this).attr("href", "javascript:;").css("cursor", "default");
        }
    });

    $(".todo").prepend("&nbsp;TODO: ");
});

function getCurrentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}
