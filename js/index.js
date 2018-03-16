$("document").ready(function() {

    //full-page carousel
    $(".carousel").slick();

    //carousel buttons
    $(".slick-next").insertBefore( $(".slick-list") );
    $(".slick-prev").html("<");
    $(".slick-next").html(">");
    //navigation

    var openNav = function() {
        $("#js-nav").css("height", "calc(100vh - 80px)");
        $("#logo").css("margin-top", "calc(100vh - 80px)");
    }

    var closeNav = function() {
        $("#js-nav").css("height", "0");
        $("#logo").css("margin-top", "0");
    }
    //kute.js defaults
    KUTE.defaultOptions = {
        delay: 0,
        repeat: 0,
        repeatDelay: 0,
        yoyo: false,
        easing: 'easeInOut',
        keepHex: false,
        morphPrecision: 1, // SVG Plugin only
    };
    //morph animation
    var stroke1 = KUTE.to("#one", { path: "#first" }, {duration: 300});
    var stroke2 = KUTE.to("#two", { path: "#second" }, {duration: 400});
    var stroke3 = KUTE.to("#three", { path: "#third" }, {duration: 500});
    var close1 = KUTE.to("#close", { path: "#x1" }, {duration: 400});

    var oneString = $("#one").attr("d");
    var twoString = $("#two").attr("d");
    var threeString = $("#three").attr("d");
    var closeString = $("#close").attr("d");
    //$("#p").html(oneString);

    $("#logo").hover(function() {
        $("#zero").fadeOut(400);
        stroke1.start();
        stroke2.start();
        stroke3.start();
    }, function() {
        if (!open) {
            $("#zero").fadeIn(400);
            $("#close").css("visibility", "hidden");
        }
        //stroke1.reverse();
        KUTE.to("#one", { path: oneString }).start();
        //stroke2.reverse();
        KUTE.to("#two", { path: twoString }).start();
        //stroke3.reverse();
        KUTE.to("#three", { path: threeString }).start();
    });

    //burger animation
    var open = false;

    $("#logo").click(function() {

        open = !open;

        if(open) {
            //$("#p").html("no burger");
            $("#close").css("visibility", "visible");
            $("#zero, #one, #two, #three").fadeOut();
            close1.start();
            openNav();
        }
        else {
            //$("#p").html("burger");
            $("#one, #two, #three").fadeIn();
            //close1.reverse();
            KUTE.to("#close", { path: closeString }, {duration: 400}).start();
            closeNav();
        }
    });

    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
});

