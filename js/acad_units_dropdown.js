$(document).ready(function() {
    $(".drop-down").hover(
        function() {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function() {
            $('>ul.sub', this).slideUp(300);
        }
    );
});