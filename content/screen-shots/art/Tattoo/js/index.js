$(document).ready(function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 768) {
        function menu() {
            if ($(".menu #bars").css('display') != 'none') {
                $(".fa-bars").on('click', () => {
                    if ($('.menu-list').css('display') === 'flex') {
                        $('.menu-list').css('display', 'none')
                    } else {
                        $('.menu-list').css('display', 'flex')
                    }
                });
                $(".menu-list a").on('click', () => {
                    if ($('.menu-list').css('display') === 'flex') {
                        $('.menu-list').css('display', 'none')
                    } else {
                        $('.menu-list').css('display', 'flex')
                    }
                })
            };
        }
        menu();




    }
























    // showMenu = () => {
    //     $('.menu-list').css({ 'display': 'flex' })
    //     let menuList = $('.menu-list').children()
    //     var factor = 190;
    //     time = 500
    //     $(menuList[0]).css('bottom') === `${factor}px` ? factor = -35 : null;

    //     for (var i = 0; i < menuList.length; i++) {
    //         $(menuList[i]).velocity({ bottom: factor }, {
    //             duration: time,
    //             easing: "ease-in"
    //         });
    //         factor -= 35;
    //         time = time + 250;
    //         if (factor < -35) {
    //             setTimeout(() => {
    //                 $('.menu-list').css({ 'display': 'none' })
    //             }, 800);
    //         }
    //     }
    // }
    // $("#bars").on('click', () => {
    //     showMenu();
    // })






});


