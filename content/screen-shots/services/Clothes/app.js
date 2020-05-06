
    $(window).on('scroll', function() {
        if($(window).scrollTop()){
            $('header').addClass("black");
        }
        else {
            $('header').removeClass("black");
        }
    });

    let left = $('.left-nav');
    let mainsection =$('.main-section');
    let section = $('section');

    const tl = new TimelineMax()

    tl.fromTo(
        left,
        1,
        {x:'-100%'},
        {x:"0%",ease:Power2.easeInOut})
        .fromTo(
            mainsection,
            0.5,
            {y:'-100%'},
            {y:"0%",ease:Power2.easeInOut}
        )
        .fromTo(
            section,
            1.2,
            {width:'0%'},
            {width:"100%",ease:Power2.easeInOut}
        )
