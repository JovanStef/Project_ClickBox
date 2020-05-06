createLocationInputForm = (content)=>{
    let placeholder = content.contactInfo.inputHead
    let locationInputWrapper = $('<div>').attr('class','flex location-input-wrapper');

    let mapHolder= $('<div>').attr('class','flex map-holder').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.0415742172722!2d-74.32931478517295!3d40.56275915467019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b77057b16a45%3A0xeb6f30dd7fc2231f!2sMicrosoft%20Office%20NJ!5e0!3m2!1sen!2smk!4v1580558066344!5m2!1sen!2smk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');

    let inputHolder = $('<div>').attr('class','flex input-holder');
    let email = $('<div>').attr('class','flex input').html('<input type="text" name="email" placeholder="'+placeholder.email+'"/>');
    let subject = $('<div>').attr('class','flex input').html('<input type="text" name="subject" placeholder="'+placeholder.sub+'"/>');
    let message = $('<div>').attr('class','flex input').html('<input type="text" name="message" placeholder="'+placeholder.message+'"/>');
    let sendBtn = $('<button>').attr('class', 'send-btn').text('Send');

    $(inputHolder).append(email);
    $(inputHolder).append(subject);
    $(inputHolder).append(message);
    $(inputHolder).append(sendBtn);
    
    $(locationInputWrapper).append(mapHolder)
    $(locationInputWrapper).append(inputHolder)

    return locationInputWrapper 
}

createSocialContactInfo=(content,graphic)=>{
    let social =  graphic.icons.social
    let socialList = Object.keys(social)

let contact = content.contactInfo.info
let contactList = Object.keys(contact)
let contactIcons = graphic.icons.contact
let contactIconList = Object.keys(contactIcons)

let socialContactInfoWrapper = $('<div>').attr('class','flex social-contact-info-wrapper');

let socialWrapper = $('<div>').attr('class','flex social-wrapper');
let socialIconHolder = $('<div>').attr('class','flex social-icon-holder');
    socialList.forEach((elem,index)=>{
        let item = $('<div>').attr('class','social-'+elem).html(social[elem]);
        $(socialIconHolder).append(item);
    });

let infoListWrapper = $('<div>').attr('class','flex info-list-wrapper');
let contactContainer = $('<ul>').attr('class','flex');
contactList.forEach((elem,index)=>{
    let item = $('<li>').attr('class','flex contact-'+elem).html(contactIcons[contactIconList[index]]).append($('<p>').text(contact[elem]))
    $(contactContainer).append(item);
});
    $(infoListWrapper).append(contactContainer)
    $(socialWrapper).append(socialIconHolder);
    $(socialContactInfoWrapper).append(socialWrapper);
    $(socialContactInfoWrapper).append(infoListWrapper);

    return socialContactInfoWrapper
}



createContact=(content,graphics)=>{
    let socialContact = createSocialContactInfo(content,graphics);
    let locationInput = createLocationInputForm(content);
    let wrapper = $('<section>').attr('id','contact').attr('class','flex logo-background');
    let headerHolderBack = $('<div>').attr('class','flex header-holder clippy-right-back');
    let header = $('<h1>').attr('class','flex section-header-left').attr('id','contact-header').text(content.contactHeader);
     let infoHolder = $('<div>').attr('class','flex info-holder clippy-right-info');
     
     let info = $('<div>').attr('class','flex info-right')
     let smallHeaderWrapper = $('<div>').attr('class','flex small-header-wrapper');
     let smallHeader = $('<h3>').attr('class','flex small-header').text(content.contactHeader);
     

     let infoContentWrapper = $('<div>').attr('class','flex info-content-wrapper');

     $(smallHeaderWrapper).append(smallHeader);
     
    $(infoContentWrapper).append(socialContact);
    $(infoContentWrapper).append(locationInput)

     $(info).append(smallHeaderWrapper);
     $(info).append(infoContentWrapper);
     
     $(infoHolder).append(info);
     $(wrapper).append(header);
     $(headerHolderBack).append(infoHolder);
    return $(wrapper).append(headerHolderBack)
};

addSocialLinks=(graphic)=>{
    let links = graphic.icons.contact.links
    let Alllinks = Object.keys(links)
    $('div[class^="social-"]').click((event)=>{
        let elemClass = $(event.target).attr('class').split('-'); 
        let linkObjKey = Alllinks.filter((elem)=>{
            let cssClass = new RegExp(elem);
            let linkKeyWord = cssClass.test(elemClass);
            return linkKeyWord
        });
        window.open(links[linkObjKey[0]],'_blank')
    })
}