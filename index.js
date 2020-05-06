let graphics = loadGraphic();

createLangBtn(graphics.icons);

$(document).ready(function () {
    let master = $('#master');
let content = loadText();
let graphics = loadGraphic();
main=(content,graphics)=>{

    createVideo(graphics);
    createMenu(content,graphics);
    createHeaderBanner(content,graphics);
    createSections(content,graphics);
    addSocialLinks(graphics);


    let mobMenuIcon= $('.mob-icon-menu');
    let mobMenuIconDesk = $('.main-menu-desk');
    let sectionService = $('#services');
    let leftSectionHeaderServices = $('#services-header');
    let sectionAbout = $('#about');
    let rightSectionHeaderAbout = $('#about-header');
    let sectionContact = $('#contact');
    let leftSectionHeaderContact = $('#contact-header')
    
    window.onscroll = () =>{
    addClassStickeyMenu(mobMenuIcon,'<img src=./content/logo/'+graphics.logos.cWithBox+'>','<img src=./content/logo/'+graphics.logos.onlyBox+'>',"stickeyMenu")
    addClassStickeyMenuDesktop(mobMenuIconDesk,'./content/logo/'+graphics.logos.cWithBoxBlue,'./content/logo/'+graphics.logos.fullWhiteLogo,"stickeyDesk")
    addClassAnimateSection(sectionService,leftSectionHeaderServices,'left-section-animate');
    addClassAnimateSection(sectionContact,leftSectionHeaderContact,'left-section-animate');
    addClassAnimateSection(sectionAbout,rightSectionHeaderAbout,'right-section-animate')

};
 
}

main(content.en,graphics);
setTimeout(()=>createSponsoredPopUp('MediCrops.png','https://medicrops.ch/en/production-site/'),10000)
setInterval(()=>createSponsoredPopUp('MediCrops.png','https://medicrops.ch/en/production-site/'),300000)

                    $('#mk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.mk,graphics)
                    });
                    $('#uk-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.en,graphics)
                    });
                    $('#al-btn').on('click',()=>{
                        $(master).html(' ');
                        main(content.al,graphics)
                    });

                    $('.designs-btn').on('click',()=>{
                        window.open('designs/designs.html','_self');

                    })
});