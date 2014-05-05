$(document).ready(function (){
    var buy = $('.event-action')
    var overlay = $('#overlay');
    var modal = overlay.find('#modal');
    var cancel = overlay.find('button')

    buy.on('click', function(e){
        overlay.animate({
            opacity:1
        });
        overlay.show();
        overlay.css({
            position: 'fixed'
        });
        $("body").css("overflow", "hidden");
    });

    overlay.on('click', function(e){
        $("body").css("overflow", "visible");
        overlay.hide();
        overlay.css({
            opacity: 0
        });


        modal.click(false);
    });

    modal.click(function(e){
        e.stopPropagation();
    });


    cancel.on('click', function(e){
        $("body").css("overflow", "visible");
        overlay.hide();
        overlay.css({
            opacity: 0
        });
    });



});