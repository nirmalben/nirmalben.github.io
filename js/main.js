$(document).ready(function () {

    var links = $('#navbar').find('li');
    
    links.click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var section = $this.find('a').attr('href').substring(1);
        $('.page-content').addClass('hide');
        $('#'+section).removeClass('hide');

        links.removeClass('active');
        $this.addClass('active');

        var hamburgerButton = $('.navbar-header > button');
        if (hamburgerButton.is(':visible'))
        	hamburgerButton.trigger('click');	// Close the dropdown
        scroll(0,0);
    });

    $.getScript('https://platform.twitter.com/widgets.js', function() {
        //calling method load
        twttr.widgets.load();
        
        // Get the latest tweet after the widget is loaded
        twttr.events.bind(
            'loaded',
            function (event) {
                getlatestTweetText();
            }); 
    });

    // Function to get the latest tweet using javascript
    function getlatestTweetText() {
        var twitterWidgetIframe = document.getElementById("twitter-widget-0").contentDocument;
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
        
        // latestTweetNoDirectLink = "\" " + latestTweetNoDirectLink + "\""

        $('#twitter-feed-latest').text(latestTweetNoDirectLink);
        $('#twitter-feed-latest').slideDown('slow');
        $('#twitter-feed-link').removeClass('hide');
    }
});