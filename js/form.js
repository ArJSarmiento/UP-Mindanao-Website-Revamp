//waits for html to load before running the script
$(document).ready(function () {
    //checkbox radio initialization
    $(function () {
        $(".gender input").checkboxradio();
    });

    //datepicker initialization
    $(function () {
        $(function () {
            $("#datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: '1920:2022'
            });
        });
        $("#anim").on("change", function () {
            $("#datepicker").datepicker("option", "showAnim", $(this).val());
        });
    });

    //autocomplete initialization
    $(function () {
        //list of all the provinces in Mindanao
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

    //spinner initialization
    $("#yearLevel").spinner();

    //function for file write and download
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    $("#submitBtn").on("click", function () {
        //get the values of the form
        let firstName = $("#firstName").val();
        let middleName = $("#middleName").val();
        let lastName = $("#lastName").val();
        let gender = $('input[name="gender"]:checked').val();
        let datepicker = $('#datepicker').val();
        let provinces = $('#provinces').val();
        let yearLevel = $("#yearLevel").val();

        // Start file download.
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