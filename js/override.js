var divs = $('.hello');
$(window).on('scroll', function() {
   var x = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - x/500) });
});

var divs1 = $('.hellob');
$(window).on('scroll', function() {
   var x = $(this).scrollTop();
   divs1.css({ 'opacity' : (1 - x/700) });
});

$("#menu-close").click(function(e) {
e.preventDefault();
$("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#sidebar-wrapper").toggleClass("active");
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fadeincontainer').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window + 200 > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
            
        }); 
    
    });
    
});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
       $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }

});

$(document).ready(function(){
     $(".hellob").effect("bounce", { times:3 }, 100);
});