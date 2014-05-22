function menuBreak() {

    var windowWidth = $(window).width();
    
    var menuLength = 0;
    
    $("#navUl > li").each( function (index, element) {
        menuLength += $(this).width();
    });
    
    if( menuLength > windowWidth*.9 ) {
        var newWidth= menuLength*.7;
        $('#navUl').css({"maxWidth":newWidth});
    } else {
        $('#navUl').css({"maxWidth":windowWidth});
    }

}