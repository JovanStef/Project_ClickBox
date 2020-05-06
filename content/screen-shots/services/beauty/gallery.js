var hairstyleGallery = [
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/hair/1.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/hair/3.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/hair/4.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/hair/6.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/hair/7.jpg'
];

var facialGallery = [
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/facial/1.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/facial/2.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/facial/3.jpeg',
];

var makeupGallery = [
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/makeup/1.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/makeup/2.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/makeup/3.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/makeup/4.jpeg'
];

var waxingGallery = [
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/waxing/1.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/waxing/2.jpg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/waxing/3.jpg',
];

var massageGallery = [
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/massage/1.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/massage/2.jpeg',
    'https://raw.githubusercontent.com/ClickBox-sudo/beatySalon/master/images/massage/3.jpg',
];



var galleryArray = hairstyleGallery.concat(makeupGallery, facialGallery, waxingGallery, massageGallery)

function gallery() {
    var overlay = $('<div>').attr('class', 'prelayImage');
    for (var i = 0; i < galleryArray.length; i++) {
        var imageHolder = $('<div>').attr('class', 'imageHolder');
        imageHolder.append($('<img>').attr('src', galleryArray[i]).attr('class', 'picsForGallery-' + i));
        $(overlay).append(imageHolder);
    };
    var popupImgDiv = $('<div>').attr('class', 'popupImgDiv');
    var previousDiv = $('<div>').attr('class', 'previousDiv');
    var previousArrow = $('<p>').attr('class', 'previousArrow').html('<i class="fas fa-chevron-left"></i>');
    var nextDiv = $('<div>').attr('class', 'nextDiv');
    var nextArrow = $('<p>').attr('class', 'nextArrow').html('<i class="fas fa-chevron-right"></i>');
    var exit = $('<p>').attr('class','exit').html('<i class="far fa-times-circle"></i>')
    var popUpImg = $('<img>');

    $(popupImgDiv).append(previousDiv);
    $(popupImgDiv).append(exit);
    $(previousDiv).append(previousArrow);

    $(popupImgDiv).append(popUpImg);
    $(popupImgDiv).append(nextDiv);
    $(nextDiv).append(nextArrow);

    $(overlay).append(imageHolder);

    $('#gallery').append(overlay)
    $('#gallery').append(popupImgDiv);


    function popUp() {


        var popUpActive = $('.imageHolder').children('img');

        $(popUpActive).on('click', event => {
            $('.popupImgDiv').css('display','flex');
            var popupImageSrc = $(event.target).attr('src');
            popUpImg.attr('src', popupImageSrc).attr('class', $(event.target).attr('class'));
            console.log(popUpImg);
        });

        $(previousArrow).on('click', () => {
            var picture = popupImgDiv.children('img').attr('class');
            var picture1 = picture.split('-');
            var index = parseInt(picture1[1]) - 1;
            if (index < 0) {
                index = 5;
            }
            popupImgDiv.children('img').attr('src', $('.picsForGallery-' + index).attr('src')).attr('class', 'picsForPopup-' + index);
        });
        $(nextArrow).on('click', () => {
            var picture = popupImgDiv.children('img').attr('class');
            var picture1 = picture.split('-');
            var index = parseInt(picture1[1]) + 1;
            if (index > 30) {
                index = 0;
            }
            popupImgDiv.children('img').attr('src', $('.picsForGallery-' + index).attr('src')).attr('class', 'picsForPopup-' + index);
        })
    }
    popUp();
    $('.exit').on('click',()=>{
        $('.popupImgDiv').css('display','none')
    })
}



