function updateClock () {
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();
    var currentSeconds = currentTime.getSeconds ();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var timeOfDay = "";
    if (currentHours < 12) {
        timeOfDay = "AM";
    } else if (currentHours == 12 && currentMinutes == 0) {
        timeOfDay = "Noon";
    } else {
        timeOfDay = "PM";
    }

    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    $("#dclock").html(currentTimeString);

    var welcomeText = "";
    if (timeOfDay == "AM") {
        welcomeText = "Good Morning!";
    } else {
        if (currentHours >= 12 || currentHours <= 4) {
            welcomeText = "Good Afternoon!";
        } else if (currentHours > 4 && currentHours <= 8) {
            welcomeText = "Good Evening!";
        } else {
            welcomeText = "Good Night!";
        }
    }
    $('#texts').html(welcomeText);
}

$(document).ready(function () {
    var links = $('#navbar').find('li');
    var flag = 0;
    
    links.click(function (e) {
        var hamburgerButton = $('.navbar-header > button');
        if (hamburgerButton.is(':visible'))
        	hamburgerButton.trigger('click');	// Close the dropdown
        scroll(0,0);
    });

    setInterval('updateClock()', 1000);
});