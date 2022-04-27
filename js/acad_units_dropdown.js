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

// Function for showing/hiding forms
// function next(a) {
//     // if next is inserted with a specific integer, it will hide a specific form and show another one
//     if (a == 1) {
//         document.getElementById("hss").style.display = "block";
//         document.getElementById("csm").style.display = "none";
//         document.getElementById("som").style.display = "none";
//     }
//     if (a == 2) {
//         document.getElementById("csm").style.display = "block";
//         document.getElementById("hss").style.display = "none";
//         document.getElementById("som").style.display = "none";
//     }
//     if (a == 3) {
//         document.getElementById("som").style.display = "block";
//         document.getElementById("hss").style.display = "none";
//         document.getElementById("csm").style.display = "none";
//     }
// }


// function open_page() {
//     var path = window.location.pathname;
//     var page = path.split("/").pop();

//     if (page !== "acad_units.html") {
//         window.location.href = "acad_units.html";
//     }
// }

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