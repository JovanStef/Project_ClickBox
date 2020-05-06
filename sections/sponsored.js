createSponsoredPopUp = (img,link)=>{
    console.log('createSponsoredPopUp')
    let popUpContainer = $('<div>').attr('class','flex popup-container');
    let popUpImgHolder = $('<div>').attr('class','flex popup-img-holder');
    let closeBtn = $('<img>').attr('class','close-popup').attr('src','./content/icons/close-icon.png')
    let popUpImage = $('<img>').attr('class','popup-img').attr('src','./content/logo/'+img);

    $(popUpImgHolder).append(closeBtn);  
    $(popUpImgHolder).append(popUpImage);  
    $(popUpContainer).append(popUpImgHolder);

$(master).append(popUpContainer);

$(closeBtn).click(()=>{
    $(popUpContainer).css({'display':'none'});
});

$(popUpImage).click(()=>{
    window.open(link,'_blank')
})
}