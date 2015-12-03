$(document).ready(function (){

    var $fullpage = $("#fullpage");
   
    //fullpage
    $fullpage.fullpage();
    $('.fp-controlArrow').css('opacity', 0.2).hover(function(){
        $(this).css('opacity', 1);
    }).mouseleave(function(){
        $(this).css('opacity', 0.2);
    });
    
});
