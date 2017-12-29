$(document).ready(function(){
    $("#hrs, #brs").hide();
    $("#hrsbut").click(function(){
        $("#brs").hide();
        $("#hrs").toggle();
    });
    $("brbut").click(function(){
        $("#hrs").hide();
        $("#brs").toggle();
    });
});