function updateClock () {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

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

    var currentDay = currentTime.getDay();
    var currentDate = currentTime.getDate();
    var currentMonth = currentTime.getMonth();
    var currentYear = currentTime.getFullYear();

    var day = getDayInString(currentDay);
    var month = getMonthInString(currentMonth);
    var dateInString = day + ", " + month + " " + currentDate + ", " + currentYear;

    $('#ddate').html(dateInString);
}

function getMonthInString(month) {
    var strMonth = ""
    switch(month){
        case 0:
            strMonth = "January"; break;
        case 1:
            strMonth = "February"; break;
        case 2:
            strMonth = "March"; break;    
        case 3:
            strMonth = "April"; break;
        case 4:
            strMonth = "May"; break;
        case 5:
            strMonth = "June"; break;
        case 6:
            strMonth = "July"; break;
        case 7:
            strMonth = "August"; break;
        case 8:
            strMonth = "September"; break;
        case 9:
            strMonth = "October"; break;    
        case 10:
            strMonth = "November"; break;
        case 11:
            strMonth = "December"; break;
        default:
            strMonth = "";
    }
    return strMonth;
}

function getDayInString(day) {
    var strDay = ""
    switch(day){
        case 0:
            strDay = "Sunday"; break;
        case 1:
            strDay = "Monday"; break;
        case 2:
            strDay = "Tuesday"; break;    
        case 3:
            strDay = "Wednesday"; break;
        case 4:
            strDay = "Thursday"; break;
        case 5:
            strDay = "Friday"; break;
        case 6:
            strDay = "Saturday"; break;
        default:
            strDay = "";
    }
    return strDay;
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