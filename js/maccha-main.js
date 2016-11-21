$(document).ready(function(){
    $(".header").affix({
        offset: {
            top: $(".hero-wrap").outerHeight(true) - 100
        }
    });
    $("#button-continue").on("click", function(){

        $(".second-hidden").fadeIn().removeClass("second-hidden");
        $(".second-to-hide").addClass("second-hidden");
    });
});
