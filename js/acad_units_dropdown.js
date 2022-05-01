//waits for html to load before running the script
$(document).ready(function () {
    //select menu initialization
    $("#dropdown").selectmenu();

    //togles select menu is nav button is clicked
    $('.label-acad-u').click(function () {
        $('.sub1').toggle()
    });

    //redirects to the url of the select option
    $('#dropdown').on('selectmenuchange', function () {
        let option = $(this).find('option:selected');
        window.location.href = option.data("url");
    });
})