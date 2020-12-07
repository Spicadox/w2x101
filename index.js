$(document).ready(function () {
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

    // JqueryUI Tooltip
    $(function () {
        $("#reference").tooltip();
    });

    // JqueryUI dialog box
    $(function () {
        $("#dialog").dialog({
            height: 700,
            width: 1000,
            minWidth: 400,
            maxHeight: 1000,
            maxWidth: 800
        });
    });

    //   $(".menu").click(function () {
    //     $("#dialog").destroy();
    //     $("#tabs").destroy();
    //   });

    //JqueryUI tabs widget with Ajax
    $(function () {
        $("#tabs").tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.fail(function () {
                    ui.panel.html(
                        "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                        "If this wouldn't be a demo.");
                });
            }
        });
    });
    //Ajax for displaying information on popup
    $.ajax({
        type: "get",
        url: "siteInfo.json",
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: $.getJSON("siteInfo.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#tabs-1").html("<p>" + value.description + "</p><img id='popupImage' src=" + value.image + " height=200px height=200px />");
                    $("#tabs-2").html("<p>" + value.about_me + "</p><img src=" + value.image2 + " />" +
                        "<img src=" + value.image3 + " />" +
                        "<img src=" + value.image4 + " />" +
                        "<img src=" + value.image5 + " />" +
                        "<img src=" + value.image6 + " />");
                });
            });
        })
    });

    // Allows for menu bar show on scroll up
    var previousScroll = window.pageYOffset;
    window.onscroll = function () {
        var currentScroll = window.pageYOffset;
        if (previousScroll > currentScroll) {
            $(".menu").css({ top: "0px" });
        }
        else {
            $(".menu").css({ top: "-1000px" });
        }
        previousScroll = currentScroll;
    };

    //Music player: https://www.jqueryscript.net/other/single-button-audio-player.html
    $.ajax({
        type: "get",
        url: "musicInfo.json",
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: $.getJSON("musicInfo.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $('#musicPlayer').buttonAudioPlayer({
                        src: value.audio,
                        loop: true,
                        loopStart: false, // in seconds
                        loopEnd: false // in seconds
                    });
                });
            });
        })
    });
});

