$(document).ready(function(){
    $("#hrs, #brs, #con, #mns").hide();
    $("#hrsbut").click(function(){
        $("#brs, #con, #mns").hide();
        $("#hrs").toggle();
    });
    $("#brbut").click(function(){
        $("#hrs, #con, #mns").hide();
        $("#brs").toggle();
    });
    $("#conbut").click(function(){
        $("#hrs, #brs, #mns").hide();
        $("#con").toggle();
    });
    $("#mnbut").click(function(){
        $("#hrs, #brs, #con").hide();
        $("#mns").toggle();
    });
});