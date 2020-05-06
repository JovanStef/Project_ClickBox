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

        

        
        var service = $('.service-link');
        $(service).on('click', (event) => {
            
            var targetID = $(event.target).text().toLowerCase();
            if (targetID != 'contact') {
                var sectionListInMain = $('.main section');
                for (var i = 0; i < sectionListInMain.length; i++) {
                    var match = $(sectionListInMain[i]).attr('id');
                    match == targetID ? $('#' + match).css({ 'display': 'block' }) : $('#' + match).css({ 'display': 'none' })
                }
            }
        });
    }
    
    
    
    
    function toggleServiceList() {
        $(".service-list-button").click(function () {
            $(".service-item").slideToggle(1000, 'linear');
        });
    }
    toggleServiceList();
    
    var colorCode = "#D32D27"
    $('.appointment').velocity({
        opacity: 0.8,
        backgroundColor: colorCode,
    },
    {
        duration: 1000,
        delay: 0,
        easing: "linear",
        loop: true
    });
    gallery();
    
    
    
    
    
    
    

});





