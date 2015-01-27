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
    });
});