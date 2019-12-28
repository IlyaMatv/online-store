$('#btnUp').click(function(){
    $('html, body').animate({scrollTop:$('#top').position().top}, 1500);
});

$('#search__btn').click(function() {
    $('.search__window--wrap').fadeIn(700);
});
$('#btn--close').click(function() {
    $('.search__window--wrap').fadeOut(700);
});


$('.burger-menu').click(function() {
    $('.aside__menu').fadeIn(700);
});

$('#menu__btn--close').click(function() {
    $('.aside__menu').fadeOut(700);
    $(".burger-menu").toggleClass("menu-on");
});



$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
});





// const burgerBtn = document.querySelector('.burger-menu');

// burgerBtn.addEventListener('click', function() {
//     this.classList.toggle('active')
// });