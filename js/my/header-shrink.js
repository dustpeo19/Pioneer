var $window=$(window), $mainheader=$('#main-header');

$window.scroll(function(){
    if($(this).scrollTop()>100){
        if(!$mainheader.hasClass('shrink')){
            $mainheader.addClass('shrink');
        }
    }else{
        if($mainheader.hasClass('shrink')){
            $mainheader.removeClass('shrink');
        }
    }
});