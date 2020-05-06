// let body = $('body');
// let master = $('#master');
// kreiranje kopcinja za jazici
createLangBtn = (icons) => {
    let langBtnHolder = $('<div>').attr('class', 'btn-holder flex');
    let enBtn = $('<img>').attr('src', "../content/icons/"+ icons.ukFlag).attr('id', 'uk-btn').attr('class', 'lang-btn');
    let mkBtn = $('<img>').attr('src', "../content/icons/"+ icons.mkFlag).attr('id', 'mk-btn').attr('class', 'lang-btn');
    let alBtn = $('<img>').attr('src', "../content/icons/"+ icons.alFlag).attr('id', 'al-btn').attr('class', 'lang-btn');

    $(langBtnHolder).append(enBtn);
    $(langBtnHolder).append(mkBtn);
    $(langBtnHolder).append(alBtn);

    $('body').prepend(langBtnHolder);
};

// kreiranje meni
createMenu = (content,graphic) => {
    mainMenuDesk(content,graphic);
    mainMenuMob(content,graphic);

}

// kreiranje video holder
createVideo = (graphic) => {
    let htmlForVideo
    onWinChange = (mediaSize) => {
        if (mediaSize.matches) {
            htmlForVideo = '<video autoplay muted loop id="myVideo">\
        <source src="./content/images/head-back-desktop.mp4" type="video/mp4">\
        Your browser does not support HTML5 video.\
      </video>';
        } else {
            htmlForVideo = '<img src=../content/images/head-bckg-mobile.jpg>'
        }
    };
    var mediaSize = window.matchMedia("(min-width: 768px)");
    onWinChange(mediaSize);
    mediaSize.addListener(onWinChange);
    let videoHolder = $('<div>').html(htmlForVideo).attr('id', 'video-holder')
    $(master).append(videoHolder)
}

// kreiranje baner koj ke bide vrz video
createHeaderBanner = (content) => {
    let banerHolder = $('<div>').attr('class', 'baner-holder flex');
    let banerScreen = $('<div>').attr('class', 'banner-screen flex');
    let banerHeading = $('<h1>').attr('class', 'baner-heading').text(content.mainHeading);
    let banerInfo = $('<p>').attr('class', 'baner-info').text(content.banerInfo);

    $(banerScreen).append(banerHeading);
    $(banerScreen).append(banerInfo);
    $(banerHolder).append(banerScreen);
    $(master).append(banerHolder);
}