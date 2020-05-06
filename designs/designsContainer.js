createThumbnail = (content,image,icon)=>{
    let folder = icon.split('-');
    let thumbnailWrapper = $('<div>').attr('class','flex thumbnail-wrapper').attr('id',content);

    let thumbImageHolder = $('<div>').attr('class','flex thumbnail-image-container');
    let thumbnailImage = $('<img>').attr('src','../content/screen-shots/'+folder[0]+'/'+image).attr('class',image);

    let thumbnailinfo = $('<div>').attr('class','flex thumbnail-info');
    let thumbnailCategoryIcon = $('<img>').attr('src','../content/icons/'+icon)
    let thumbnailCatInfo = $('<p>').text(content)

    $(thumbImageHolder).append(thumbnailImage);
    $(thumbnailinfo).append(thumbnailCategoryIcon);
    $(thumbnailinfo).append(thumbnailCatInfo);

    $(thumbnailWrapper).append(thumbImageHolder);
    $(thumbnailWrapper).append(thumbnailinfo);

    $('.designs-container').append(thumbnailWrapper);
    $(thumbnailWrapper).click((event)=>{
        let path = $(event.target).attr('src')
        path = path.split('/');
        path.splice(path.length-1,1,'index.html');
       path=path.join('/');
       console.log(path)
       window.open(path,'_blank');
    });

};
createAllThumbnails=(category,graphics)=>{
    let cat = category.toLowerCase()
    // let category = content.servicesInfo.templates.list[0];
    let images = graphics.templates[cat].screenShots;
    let iconImg = graphics.templates[cat].icons[1];
    images.forEach((elem,index)=>{
        createThumbnail(category+'-'+index,elem,iconImg)
     });

}

createDesignsContainer = (content,graphics)=>{
    let designsContainer = $('<div>').attr('class', 'flex designs-container');
    
    $(master).append(designsContainer);
    createAllThumbnails('Food',graphics);
    createAllThumbnails('Art',graphics);
    createAllThumbnails('law',graphics);
    createAllThumbnails('Service',graphics);


}
