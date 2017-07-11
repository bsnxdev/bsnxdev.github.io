$(document).ready(function(){
    //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
    //Vertical Sliding
    //Caption Sliding (Partially Hidden to Visible)
    $('.boxgrid-about.caption').hover(function(){
        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500});
    }, function() {
        $(".cover", this).stop().animate({top:'300px'},{queue:false,duration:800});
    });
});
