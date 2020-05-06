createSingleOffer = (content,graphic)=>{
    let offerInfoItems = content.content
 
    let offerWrapper = $('<div>').attr('class','flex offer-wrapper');
    let offerHeaderHolder = $('<div>').attr('class','flex offer-header-holder');
    let offerHeader = $('<h3>').attr('class', 'offer-header').text(content.header);
    let offerPrice = $('<h3>').attr('class', 'offer-header').text(content.price);
    let offerInfo= $('<ul>').attr('class','offer-info');

    offerInfoItems.forEach((elem,index)=>{
        let item = $('<li>').attr('class','info-item-'+content.header+'-'+index).text(elem);
        $(offerInfo).append(item);
    });

    $(offerHeaderHolder).append(offerHeader)
    $(offerHeaderHolder).append(offerPrice);
    $(offerWrapper).append(offerHeaderHolder);
    $(offerWrapper).append(offerInfo);

    return offerWrapper

}

createOffers = (content, graphic)=>{
    let offersHolder = $('<div>').attr('class','flex offers-holder');

    let basic= createSingleOffer(content.basic);
    let pro= createSingleOffer(content.pro);
    let premium= createSingleOffer(content.premium);

    let offers = [basic,pro,premium];

    offers.forEach((elem,index)=>{
        $(offersHolder).append(elem)
    })
    
    
    return offersHolder
}