$(document).ready(function () {
    scrollToTop=()=> { 
        window.scrollTo(0, 0); 
    } 
    scrollToTop();


    
    
    window.onscroll = () =>{
        addClassApearToScrollTop();
        addClassStickeyToMenu();
        changeParalaxBackg();
    }
                    $('li[id*="desk-"]').click((event)=>{
                        let elemId=$(event.target).attr('id').split('-');
                        elemId = elemId[1];
                        if(elemId=='home'){
                            scrollToTop();
                        }
                        let targetElement = document.getElementById(elemId)
                        targetElement.scrollIntoView(true);
                    });

                    $('.to-top').click(()=>{
                        scrollToTop();
                    });

});