$(document).ready(function(){
    $("#hrs, #brs, #con").hide();
    $("#hrsbut").click(function(){
        $("#brs, #con").hide();
        $("#hrs").toggle();
    });
    $("#brbut").click(function(){
        $("#hrs, #con").hide();
        $("#brs").toggle();
    });
    $("#conbut").click(function(){
        $("#hrs, #brs").hide();
        $("#con").toggle();
    });
});