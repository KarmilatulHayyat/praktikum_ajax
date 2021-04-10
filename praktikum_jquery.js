document.getElementById('nama').innerHTML = 'Karmilatul Hayyat';


$('#nim').html('20190140060');

$(function(){
    console.log("Hay");
})

$("#hide").on("click",function(){
    $("#nama").hide();
});


$("#show").on("click",function(){
    $("#nama").show();
});

$("#toggle").on("click",function(){
    $("#image").toggle();
});

$("fadeIn").on("click",function(){
    $("#tanggal").fadeIn();
});

$("#fadeOut").on("click",function(){
    $("#tanggal").fadeOut();
});

$("#fadeToggle").on("click",function(){
    $("#tanggal").fadeToggle();
});

$("#slideUp").on("click",function(){
    $("#image").slideUp();

});

$("#slideDown").on("click",function(){
    $("#img").slideDown();
});

$("#slideToggle").on("click",function image() {
    $('#image').slideToggle();   
});