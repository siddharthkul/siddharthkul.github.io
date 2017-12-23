$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('#goUpFab').hide();
    var current = 1;
    $("#side-nav-item-1").removeClass("grey-text text-lighten-4").addClass("pink-text");
    $('#fullpage').fullpage({
        keyboardScrolling: false,
        // css3: false,
        onLeave: function(index, nextIndex, direction){
            $("#side-nav-item-"+index).removeClass("pink-text").addClass("grey-text text-lighten-4");
            $("#side-nav-item-"+nextIndex).addClass("pink-text").removeClass("grey-text text-lighten-4");
            current = nextIndex;
            if(current!=1){
                $('#intropage').addClass("fadeOut").removeClass("fadeIn");
            }else{
                $('#intropage').addClass("fadeIn").removeClass("fadeOut");
            }
            if(current==2){
                $('#about_col').addClass("fadeIn").removeClass("fadeOut");
            } else{
                $('#about_col').addClass("fadeOut").removeClass("fadeIn");
            }
            if(current==3){
                $('#abodemart_col').addClass("fadeIn").removeClass("fadeOut");
            } else{
                $('#abodemart_col').addClass("fadeOut").removeClass("fadeIn");
            }
            if(current==4){
                $('#other_col').addClass("fadeIn").removeClass("fadeOut");
            } else{
                $('#other_col').addClass("fadeOut").removeClass("fadeIn");
            }
            if(current==7){
                $('#goUpFab').fadeIn();
            }else{
                $('#goUpFab').fadeOut();
            }            
        }
    });
    document.onkeydown = function(e) {
        if(e.keyCode == 40){
            if(current!=7){
                $("#side-nav-item-"+current).removeClass("pink-text").addClass("grey-text text-lighten-4");
                current++;
            }
        }else if(e.keyCode == 38){
            if(current!=1){
                $("#side-nav-item-"+current).removeClass("pink-text").addClass("grey-text text-lighten-4");
                current--;
            }
        }
        $.fn.fullpage.moveTo(current);
        $("#side-nav-item-"+current).removeClass("grey-text text-lighten-4").addClass("pink-text");
    }
    $(".collection-item").click(function(){
        var dockItem = $(this).attr('id')
        var target = (dockItem.charAt(dockItem.length-1))
        $.fn.fullpage.moveTo(target);
    });
    $('#scrollBtn').click(function(){
        $.fn.fullpage.moveTo(2);
    });
    $('.fixed-action-btn').floatingActionButton();
    //$.fn.fullpage.setMouseWheelScrolling(false);
    //$.fn.fullpage.setAllowScrolling(false);
    $('#goUpFab').click(function(){
        $.fn.fullpage.moveTo(1);
    });
});