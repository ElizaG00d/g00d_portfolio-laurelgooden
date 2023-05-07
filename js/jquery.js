//ADVANCED JS ADDITIONS

//onload settings for panels
$(document).ready(function(){
    $("div.info").hide();
    $("div.panel.side").hide();
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

$(".open-btn").on("click", function(){
    $(".popup").css("display", "block");
    $(".open-btn").css("display", "none");
});

$(".cancel").on("click", function(){
    $(".popup").css("display", "none");
    $(".open-btn").css("display", "block");
});