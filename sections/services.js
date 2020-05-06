createDisclamer=(content)=>{
    let disclamer = content.servicesInfo.disclaimer;
    disclaimer = disclamer.split('|');

    let disclaimerHolder = $('<ul>').attr('class','disclaimer-holder-basic');
    disclaimer.forEach((elem,index)=>{
        let item = $('<li>').attr('class','disclaimer-item-'+index).text(elem);
        $(disclaimerHolder).append(item);
    });
    return disclaimerHolder
};




createServices=(content,graphics)=>{
    //prv disclaimer
let disclaimer = createDisclamer(content);
let offers = createOffers(content.servicesInfo.offers);
let templateGalery = createTemplateGalery(content.servicesInfo.templates,graphics.templates);
let designsBtn = createViewDesignsBtn(content)
    let wrapper = $('<section>').attr('id','services').attr('class','flex logo-background');
    let headerHolderBack = $('<div>').attr('class','flex header-holder clippy-right-back');
    let header = $('<h1>').attr('class','flex section-header-left').attr('id','services-header').text(content.servicesHeader);
     let infoHolder = $('<div>').attr('class','flex info-holder clippy-right-info');
     let info = $('<div>').attr('class','flex info-right');

     let smallHeaderWrapper = $('<div>').attr('class','flex small-header-wrapper');
     let smallHeader = $('<h3>').attr('class','flex small-header').text(content.servicesHeader);
     
     let infoDisclaimerWrapper = $('<div>').attr('class','flex info-disclaimer-wrapper');
    
    let disclaimerMaterials = $('<p>').attr('class','disclaimer-materials').text(content.servicesInfo.maintain)



     $(smallHeaderWrapper).append(smallHeader);
     
     $(infoDisclaimerWrapper).append(disclaimer);

     $(info).append(smallHeaderWrapper);
     $(info).append(infoDisclaimerWrapper);
     $(info).append(offers);
     $(info).append(disclaimerMaterials);
     $(info).append(templateGalery);




     $(infoHolder).append(info);
     $(wrapper).append(header);
     $(headerHolderBack).append(infoHolder);
     
    return $(wrapper).append(headerHolderBack)
}
