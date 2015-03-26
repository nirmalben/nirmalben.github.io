$(document).ready(function () {
    $('#bible-content').hide();
    var links = $('#navbar').find('li');
    var flag = 0;
    
    links.click(function (e) {
        var hamburgerButton = $('.navbar-header > button');
        if (hamburgerButton.is(':visible'))
        	hamburgerButton.trigger('click');	// Close the dropdown
        scroll(0,0);
    });

    $('.toggle-view-btn').click(function (e) {
        e.preventDefault();
        if ($('#bible-content').is(':visible')) {
            $('#bible-content').hide(1000);
            $(this).text('Show');
        } else {
            // Basically, access this function only once
            if (flag == 0)
                getlatestTweetText();
            $('#bible-content').show(1000);
            $(this).text('Hide');
        }
    });

    // Function to get the latest tweet using javascript
    function getlatestTweetText() {
        var twitterWidgetIframe = document.getElementById("twitter-widget-0").contentDocument;
        var latestTweet = (twitterWidgetIframe.getElementsByClassName('stream'))[0].children[0].children[0].children[1].children[0].textContent;

        var latestTweet = $('#twitter-widget-0').find('.twitter-timeline').find('p.e-entry-title').text();
        var latestTweet = (twitterWidgetIframe.getElementsByClassName('stream'))[0].children[0].children[0].children[1].children[0].textContent;

        if (latestTweet.indexOf("please retweet") != -1 || latestTweet.indexOf("Please retweet") != -1 || latestTweet.indexOf("Please Retweet") != -1 
            || latestTweet.indexOf("please Retweet") != -1) {
            latestTweet = latestTweet.substring(0, latestTweet.lastIndexOf("(please")); 
        } else 
            latestTweetNoDirectLink = latestTweet;

        var latestTweetNoDirectLink;
        if (latestTweet.indexOf("http") != -1) {
            latestTweetNoDirectLink = latestTweet.substring(0, latestTweet.lastIndexOf("http")); 
        } else 
            latestTweetNoDirectLink = latestTweet;
        
        latestTweetNoDirectLink = "\" " + latestTweetNoDirectLink + "\""

        $('#twitter-feed-latest').text(latestTweetNoDirectLink);
        $('#twitter-feed-latest').slideDown('slow');
        $('#twitter-feed-link').removeClass('hide');

        // Basically, access this function only once
        if (flag==0) flag = 1;
    }
});