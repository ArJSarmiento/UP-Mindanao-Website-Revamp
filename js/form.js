$(document).ready(function () {
    $(function () {
        $(".gender input").checkboxradio();
    });
    $(function () {
        $("#datepicker").datepicker();
        $("#anim").on("change", function () {
            $("#datepicker").datepicker("option", "showAnim", $(this).val());
        });
    });
    $(function () {
        let availableTags = [
            "Agusan del Norte",
            "Agusan del Sur",
            "Alabel      ",
            "Basilan",
            "Bukidnon",
            "Camiguin",
            "Compostela Valley",
            "Davao del Norte",
            "Davao del Sur",
            "Davao Occidental",
            "Davao Oriental",
            "Dinagat Islands",
            "Lanao del Norte    ",
            "Lanao del Sur",
            "Maguindanao    ",
            "Misamis Occidental ",
            "Misamis Oriental   ",
            "North Cotabato    ",
            "South Cotabato    ",
            "Sultan Kudarat    ",
            "Sulu",
            "Surigao del Norte",
            "Surigao del Sur   ",
            "Tawi - Tawi ",
            "Zamboanga del Norte",
            "Zamboanga del Sur ",
            "Zamboanga Sibugay"
        ];
        $("#provinces").autocomplete({
            source: availableTags
        });
    });
    let spinner = $("#yearLevel").spinner();


    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    // Start file download.

    $("#submitBtn").on("click", function () {
        let firstName = $("#firstName").val();
        let middleName = $("#middleName").val();
        let lastName = $("#lastName").val();
        let gender = $('input[name="gender"]:checked').val();
        let datepicker = $('#datepicker').val();
        let provinces = $('#provinces').val();
        let yearLevel = $("#yearLevel").val();
        download("signUp.txt",
            "Sign-up Summary" + "\n" +
            "First Name: " + firstName + "\n" +
            "Middle Name: " + middleName + "\n" +
            "Last Name: " + lastName + "\n" +
            "Gender: " + gender + "\n" +
            "Date of Birth: " + datepicker + "\n" +
            "Province: " + provinces + "\n" +
            "Year Level: " + yearLevel + "\n"
        );
    })
});