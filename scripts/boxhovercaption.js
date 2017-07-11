$(document).ready(function(){
    //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
    //Vertical Sliding
    //Caption Sliding (Partially Hidden to Visible)
    $('.boxgrid.caption').hover(function(){
        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500});
    }, function() {
        $(".cover", this).stop().animate({top:'140px'},{queue:false,duration:800});
    });
});
