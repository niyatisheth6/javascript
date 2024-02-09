$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");

});
$('.feat-btn').click(function(){
 $('nav ul .feat-show').toggleClass("show");
//  $('nav ul .first').toggleClass("rorate");
});
$('.feat-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
    // $('nav ul .second').toggleClass("rorate");
   });

$('nav ul li').clicl(function(){
    $('this').addClass("active").siblings().removeClass("active");
});