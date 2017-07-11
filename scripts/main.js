//sidebar menu toggle
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

//carousel controller
$("#slider").on('slide.bs.carousel', function(evt) 
{

    var step = $(evt.relatedTarget).index();

    $('#slider_captions .ss-carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() 
    {
            $('#caption-'+step).fadeIn();
    });



});
