
var header_scroll= document.querySelector(".allcontain").offsetHeight -200;
var featured_scroll= header_scroll+document.querySelector(".featured").offsetHeight -100;

$(window).scroll( function() {
   
    if ($(window).scrollTop() > header_scroll) {
       
        document.querySelector('.featured').classList.add('slideUp');
    }
    if ($(window).scrollTop() > featured_scroll) {
       
        document.querySelector('.grid').classList.add('slideUp');
    }

});
