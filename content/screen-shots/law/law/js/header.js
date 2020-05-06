
$('.inner-header-item').hover((event) => {
    let elemId = $(event.target).attr('id');
    if (!$(event.target).is('h1')) {
        $(event.target).css({ 'z-index': '1' });
        $(event.target).addClass('expand');
        $('.logo-law').addClass('logo-law-'+elemId);
    }
    else{
        let element=$(event.target).parent()[0];
        $(element).css({ 'z-index': '1' });
        $(element).addClass('expand');
        $('.logo-law').addClass('logo-law-'+$(element).attr('id'));

        console.log($(element).attr('id'));
    }
}, () => {
    let elemId = $(event.target).attr('id');
    $(event.target).removeClass('expand');
    $(event.target).css({ 'z-index': '0' });
    $('.logo-law').removeClass('logo-law-'+elemId);

});