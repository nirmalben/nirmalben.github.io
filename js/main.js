
// Stellar is disabled for now
// var stellarActivated = false;

// $(window).resize(function() {
//     react_to_window();
// });

// function react_to_window() {
//     if ($(window).width() <= 1024) {
//         if (stellarActivated == true) {
//             $(window).data('plugin_stellar').destroy();
//             stellarActivated = false;
//         }
//     } else {
//         if (stellarActivated == false) {

//             $(window).stellar({
//                horizontalScrolling: false
//            });
            
//             $(window).data('plugin_stellar').init();
//             stellarActivated = true;
//         }
//     }
// }


$(document).ready(function () {
    // react_to_window();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down')
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        else
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000);
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
});