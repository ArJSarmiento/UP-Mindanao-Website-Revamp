$(document).ready(function () {
    $(".drop-down").hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub', this).slideUp(300);
        }
    );

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);

    $("[value='hss']").click(function () {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(document).ready(function () {
                $(".hss").css('display', 'block');
            })
        }
        $(".hss").css('display', 'block');
        $(".csm").css('display', 'none');
        $(".som").css('display', 'none');
        $(".gradient-background").css('background-image', 'linear-gradient(#0A3A3A, #fff)')
    });

    $("[value='csm']").click(function () {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(".csm").css('display', 'block');
        }
        $(".hss").css('display', 'none');
        $(".csm").css('display', 'block');
        $(".som").css('display', 'none');
        $(".gradient-background").css('background-image', 'linear-gradient(#7C0000, #fff)')
    });
    $("[value='som']").click(function () {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(".som").css('display', 'block');
        }
        $(".hss").css('display', 'none');
        $(".csm").css('display', 'none');
        $(".som").css('display', 'block');
        $(".gradient-background").css('background-image', 'linear-gradient(#F3BD25, #fff)')
    });
})