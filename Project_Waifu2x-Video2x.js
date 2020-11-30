$(document).ready(function () {
    // Magnific Popup plugin: https://dimsemenov.com/plugins/magnific-popup/
    // Lightbox gallery plugin
    $('.GUI_gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true },
        image: { titleSrc: 'title' }
        // other options
    });
    // Floating-toTop-Button plugin: https://github.com/thexmanxyz/Floating-ToTop-Button
    // On click brings user back to the top of the page
    $("body").toTopButton({
        imagePath: 'assets/images/icons',

        // arrow, arrow-circle, caret, caret-circle, circle, circle-o, arrow-l, drop, rise, top
        // or your own SVG icon
        arrowType: 'arrow',

        // 'w' = white
        // 'b' = black
        iconColor: 'w',

        // icon shadow
        // from 1 to 16
        iconShadow: 4
    });
    // Allows for menu bar show on scroll up
    var previousScroll = window.pageYOffset;
    window.onscroll = function () {
        var currentScroll = window.pageYOffset;
        console.log("currentScroll: ", currentScroll);
        if (previousScroll > currentScroll) {
            $(".menu").css({ top: "0px" });
        }
        else {
            $(".menu").css({ top: "-1000px" });
        }
        previousScroll = currentScroll;
    };
});