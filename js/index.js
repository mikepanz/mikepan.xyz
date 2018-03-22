$("document").ready(function() {

    //full-page carousel
    $(".carousel").slick({
        speed: 500,
        cssEase: "ease-in-out",
        easing: "ease-in-out"
      });

    //carousel buttons
    $(".slick-next").insertBefore( $(".slick-list") );
    $(".slick-prev").html("<i class='fa fa-angle-left'></i>");
    $(".slick-next").html("<i class='fa fa-angle-right'></i>");
    //navigation

    var openNav = function() {
        $("#js-nav").css("height", "calc(100vh - 8vh)");
        $("#logo").css("margin-top", "calc(100vh - 8vh)");
    }

    var closeNav = function() {
        $("#js-nav").css("height", "0");
        $("#logo").css("margin-top", "0");
        //$("#p").html("burger");
        $("#one, #two, #three").fadeIn();
        //close1.reverse();
        KUTE.to("#close", { path: closeString }, {duration: 300}).start();
        
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
    //morph animation using KUTE.js
    var stroke1 = KUTE.to("#one", { path: "#first" }, {duration: 200});
    var stroke2 = KUTE.to("#two", { path: "#second" }, {duration: 300});
    var stroke3 = KUTE.to("#three", { path: "#third" }, {duration: 400});
    var close1 = KUTE.to("#close", { path: "#x1" }, {duration: 300});

    var oneString = $("#one").attr("d");
    var twoString = $("#two").attr("d");
    var threeString = $("#three").attr("d");
    var closeString = $("#close").attr("d");

    $("#logo").hover(function() {
        $("#zero").fadeOut(300);
        stroke1.start();
        stroke2.start();
        stroke3.start();
    }, function() {
        if (!open) {
            $("#zero").fadeIn(300);
            $("#close").css("visibility", "hidden");
        }
        //stroke1.reverse();
        KUTE.to("#one", { path: oneString }, {duration: 450}).start();
        //stroke2.reverse();
        KUTE.to("#two", { path: twoString }, {duration: 450}).start();
        //stroke3.reverse();
        KUTE.to("#three", { path: threeString }, {duration: 450}).start();
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
            closeNav();
        }
    });

    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

    //navigation
    $('a[data-slide]').click( function() {
        //close nav bar
        open = !open;
        $("#zero").fadeIn(300);
        $("#close").css("visibility", "hidden");
        closeNav();
        //navigate to page
        var slideIndex = $(this).data("slide");
        $( '.carousel' ).slick('slickGoTo', slideIndex-1);
      });
});

