//ADVANCED JS ADDITIONS

//onload settings for panels
//$(document).ready(function(){
    //$("div.info").hide();
    //$("div.panel.side").hide();
});

//hide and show panels
$("#about, .about").on("click", function(){
    $("div.about-txt").slideToggle();
});

$("#projects, .projects").on("click", function(){
    $("div.projects-txt").slideToggle();
});

$("#contact, .contact").on("click", function(){
    $("div.form-div").slideToggle();
});

//side panel toggle
//$(".panel").on("click", function(){
    //$(".panel.side").sidebar().trigger("sidebar:open");
//});

//$(".panel.side").sidebar({
    //side:"left",
    //isClosed: false,
    //close: true
//});

//$(".panel.side").sidebar().trigger("sidebar:open");
//$(".panel.side").sidebar().trigger("sidebar:close");
//$(".panel.side").sidebar().trigger("sidebar:toggle");