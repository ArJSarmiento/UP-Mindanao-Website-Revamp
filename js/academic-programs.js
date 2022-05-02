//waits for html to load before running the script
$(document).ready(function () {
  $(function () {
    //initialization of jquery accrodion
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content"
    });
  });
})