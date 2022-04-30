$(document).ready(function() {

    $("#dropdown").selectmenu();

    $('.label-acad-u').click(function() {
        $('.sub1').toggle()
    });

    $('#dropdown').on('selectmenuchange', function() {
        var option = $(this).find('option:selected');
        window.location.href = option.data("url");
    });
})