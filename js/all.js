//add active class to navbar
$( '.navbar' ).find( 'li.active' ) 
.removeClass( 'active' ); 
var url = window.location;
   $('.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
   $('.navbar-nav a').filter(function() {
        return this.href == url;
   }).parent().addClass('active').siblings().removeClass('active');
//end
var nav_scroll= document.querySelector(".upper-header").offsetHeight;
$(window).scroll( function() {
    if ($(window).scrollTop() > nav_scroll) {
       
        document.querySelector('.navbar-light').classList.add('fixed-top');
       
    }
    else{
        document.querySelector('.navbar-light').classList.remove('fixed-top');
    }
   

});