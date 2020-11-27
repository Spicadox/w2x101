$(function(){
  slider = new juxtapose.JXSlider("#juxtapose2",
    [
        {
            src: $("#ff_menu1 :selected").val(),
            credit: 'Source Image'
        },
        {
            src: $("#ff_menu1 :selected").val(),
            credit: "Level 1 noise, 1x scale, and without TTA mode"
        }
    ],
    {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%",
        makeResponsive: true
    });
});