createPopUpGalery = (category) => {

    let icon = category.icons[1];
    let heading = icon.split('-');
    let folder = heading[0];
    heading = heading[0].toUpperCase()
    let screenshots = category.screenShots
    let popupGaleryWrapper = $('<div>').attr('class', 'flex popup-galery-wrapper');

    let popupGaleryHeaderWrapper = $('<div>').attr('class', 'flex popup-galery-header-wrapper');
    let popupHeader = $('<img>').attr('class', 'flex popup-header').attr('src','./content/icons/'+icon);
    let backButton = $('<img>').attr('src', './content/icons/close-icon.png').attr('class', 'flex popup-back-btn');
    let screenShotHeader = $('<h4>').attr('class', 'flex popup-screenshot-header').text(heading);

    let popupGalerySlideWrapper = $('<div>').attr('class', 'flex popup-galery-slide-wrapper');
    let leftArrow = $('<img>').attr('class', 'flex popup-galery-btn-left').attr('src','./content/icons/btn-left.png');
    let pictureHolder = $('<div>').attr('class', 'flex popup-galery-picture-holder');
    let picture = $('<img>').attr('class','popup-galery-picture').attr('src','./content/screen-shots/'+folder+'/'+screenshots[0]);
    let rightArrow = $('<img>').attr('class', 'flex popup-galery-btn-right').attr('src','./content/icons/btn-right.png');
    
    $(popupGaleryHeaderWrapper).append(popupHeader);
    $(popupGaleryHeaderWrapper).append(backButton);
    $(popupGaleryHeaderWrapper).append(screenShotHeader);

    $(pictureHolder).append(picture)
    
    $(popupGalerySlideWrapper).append(leftArrow)
    $(popupGalerySlideWrapper).append(pictureHolder)
    $(popupGalerySlideWrapper).append(rightArrow)
    
    $(popupGaleryWrapper).append(popupGaleryHeaderWrapper)
    $(popupGaleryWrapper).append(popupGalerySlideWrapper);

    $(backButton).click(()=>{
        $('.popup-galery-wrapper').css({'display':'none'})
    });
let counter=0;
carusel=()=>{
    counter<0?counter=screenshots.length-1:null
    counter>screenshots.length-1?counter=0:null;
    $(picture).attr('src','./content/screen-shots/'+folder+'/'+screenshots[counter]);
    $(screenShotHeader).text(heading+'-'+counter)
}
    $(leftArrow).click(()=>{
        counter-=1;
        carusel()
    });
    $(rightArrow).click(()=>{
        counter+=1;
        carusel()
    });

    return popupGaleryWrapper;
}

createListPanel = (content, graphic) => {
    let idNames = Object.keys(graphic)
    let contentList = content.list;
    let listHolder = $('<div>').attr('class', 'template-list-holder');
    let list = $('<ul>').attr('class', 'template-list-panel');
    contentList.forEach((elem, index) => {
        let item = $('<li>').attr('class', 'template-galery-list-item-' + idNames[index]).text(elem);
        $(list).append(item)
    })

    $(listHolder).append(list);


    return listHolder
};

createPictureItem = (category, heading) => {
    let thumbnailHolder = $('<div>').attr('class', 'flex galery-thumbnail-' + heading);
    let thumbnail = $('<img>').attr('src', './content/images/' + category.thumbnails);

    let thumbnailOverlay = $('<div>').attr('class', 'flex thumbnail-overlay-' + heading);
    let thumbnailIcon = $('<img>').attr('class', 'thumbnail-icon-' + heading).attr('src', './content/icons/' + category.icons[0]);
    let thumbnailHeading = $('<p>').attr('class', 'thumbnail-heading-' + heading).text(heading);

    $(thumbnailOverlay).append(thumbnailIcon);
    $(thumbnailOverlay).append(thumbnailHeading);

    $(thumbnailHolder).append(thumbnailOverlay);
    $(thumbnailHolder).append(thumbnail);

    $(thumbnailHolder).hover(() => {
        $(thumbnailOverlay).css({ 'display': 'flex' })
    },
        () => {
            $(thumbnailOverlay).css({ 'display': 'none' })

        });

        $(thumbnailOverlay).click(()=>{
            let popUp = createPopUpGalery(category);
            $('body').append(popUp)
        })

    return thumbnailHolder

}
createPicturePanel = (content, graphic) => {
    let allGraphic = graphic;
    let categories = Object.keys(allGraphic);

    let picturePanelWrapper = $('<div>').attr('class', 'flex picture-panel-wrapper');

    categories.forEach((elem, index) => {
        let item = createPictureItem(allGraphic[elem], elem);
        $(picturePanelWrapper).append(item)
    });


    return picturePanelWrapper

}
createViewDesignsBtn = (content)=>{
    console.log('createViewDesignsBtn')
     let btn = $('<button>').attr('class','designs-btn').text(content.headerBtn);
     return btn
}
createTemplateGalery = (content, graphic) => {
    let picturePanel = createPicturePanel(content, graphic)
    let templateList = createListPanel(content, graphic);
    let designsBtn = createViewDesignsBtn(content);
    console.log('createViewDesignsBtn')

    let templateGaleryWrapper = $('<div>').attr('class', 'flex template-galery-wrapper');
    let templateGaleryListWrapper = $('<div>').attr('class', 'flex template-galery-list-wrapper');

    let templateGaleryHeader = $('<h3>').attr('class', 'template-galery-header').text(content.header);

    $(templateGaleryWrapper).append(templateGaleryHeader);
    $(templateGaleryListWrapper).append(templateList);
    $(templateGaleryListWrapper).append(designsBtn);
    
    $(templateGaleryWrapper).append(templateGaleryListWrapper);
    $(templateGaleryWrapper).append(picturePanel);

    

    return templateGaleryWrapper
}
