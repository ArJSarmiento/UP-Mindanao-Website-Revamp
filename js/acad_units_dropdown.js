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

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

$(document).ready(function() {
    $("[value='hss']").click(function() {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(document).ready(function() {
                $(".hss").css('display', 'block');
            })
        }
        $(".hss").css('display', 'block');
        $(".csm").css('display', 'none');
        $(".som").css('display', 'none');
    });
    $("[value='csm']").click(function() {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(".csm").css('display', 'block');
        }
        $(".hss").css('display', 'none');
        $(".csm").css('display', 'block');
        $(".som").css('display', 'none');
    });
    $("[value='som']").click(function() {
        if (page !== "acad_units.html") {
            window.location.href = "acad_units.html";
            $(".som").css('display', 'block');
        }
        $(".hss").css('display', 'none');
        $(".csm").css('display', 'none');
        $(".som").css('display', 'block');
    });
})