$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});

$(document).ready(function (){
            $("#down").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#second").offset().top
                    }, 1000);
                //});
            });
        });


$(document).ready(function (){
            $("#downsecond").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#third").offset().top
                    }, 1000);
                //});
            });
        });
$(document).ready(function (){
            $("#downthird").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#final").offset().top
                    }, 1000);
                //});
            });
        });



