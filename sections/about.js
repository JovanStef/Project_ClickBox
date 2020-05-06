createAbout = (content, graphic) => {
    let wrapper = $('<section>').attr('id', 'about').attr('class', 'flex logo-background');
    let headerHolderBack = $('<div>').attr('class', 'flex header-holder clippy-left-back');
    let header = $('<h1>').attr('class', 'flex section-header-right').attr('id', 'about-header').text(content.aboutHeader);
    let infoHolder = $('<div>').attr('class', 'flex info-holder clippy-left-info');

    let info = $('<div>').attr('class', 'flex info-left');

    let smallHeaderWrapper = $('<div>').attr('class', 'flex small-header-wrapper');
    let smallHeader = $('<h3>').attr('class', 'flex small-header').text(content.aboutHeader);

    let infoContentWrapper = $('<div>').attr('class', 'flex info-content-wrapper');
    let infoContent = $('<p>').attr('class', 'flex info-content').text(content.aboutInfo);

    let decoImageContainer = $('<div>').attr('class', 'flex about-image-deco-holder');
    let decoImage = $('<img>').attr('src', './content/images/' + graphic.images.programmer);


    $(smallHeaderWrapper).append(smallHeader);

    $(infoContentWrapper).append(infoContent);

    $(decoImageContainer).append(decoImage);

    $(info).append(smallHeaderWrapper);
    $(info).append(infoContentWrapper);
    $(info).append(decoImageContainer);


    $(infoHolder).append(info);
    $(wrapper).append(header);
    $(headerHolderBack).append(infoHolder);
    return $(wrapper).append(headerHolderBack);

}