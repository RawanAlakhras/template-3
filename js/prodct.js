//quick view slaider
//calculat width of sub img 
var number_img = $('.sub-img').children().length;
var sub_img_width=100/number_img;
$('.sub-img img').css({
    'width': sub_img_width +'%'

});
//add border to selected img 
$('.sub-img img').on('click',function(){
    
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(500);
});
//right and left button in slider
$('.master-img .fa-chevron-right').on('click',function(){
    if($('.sub-img .selected').is(':first-child'))
    {
        $('.sub-img img').eq(2).click();
       
    }
    else{
        $('.sub-img .selected').prev().click();
        //$('.sub-img .selected').next().click();
    }
    

});
$('.master-img .fa-chevron-left').on('click',function(){
    if ($('.sub-img .selected').is(':last-child')){
        $('.sub-img img').eq(0).click();
    }
    else{
        
        $('.sub-img .selected').next().click();
    }
    

});
