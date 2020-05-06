$('.ham-menu').click(()=>{
    $('.menu-holder ul').css('display')=='none'?$('.menu-holder ul').css({'display':'block'}):$('.menu-holder ul').css({'display':'none'});
});
addClassStickeyToMenu=()=>{
    let element = $('.menu-holder');
    
    if (window.pageYOffset > element.offset().top) {
        element.addClass('sticky-menu-holder');
    } else if (window.pageYOffset == 0) {
        element.removeClass('sticky-menu-holder');
        
    }
}

addClassApearToScrollTop=()=>{
    let elementToView = $('.section-services');
    let elementToAnimate = $('.to-top');
    if (window.pageYOffset > elementToView.offset().top-20) {
      elementToAnimate.addClass('to-top-apear');
    } if ( window.pageYOffset < elementToView.offset().top) {
        elementToAnimate.removeClass('to-top-apear');
    }
}

changeParalaxBackg=()=>{
    let elementToView = $('.section-services');
    let elementToAnimate = $('.master');
    if (window.pageYOffset > elementToView.offset().top) {
      elementToAnimate.css({'background-image':'url(./images/buba.jpg)'});
    } if ( window.pageYOffset < elementToView.offset().top) {
        elementToAnimate.css({'background-image':'url(./images/header-bckg.jpg)'});
    }
}