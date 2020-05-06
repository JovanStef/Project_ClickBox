let master = $('#master');
// stiki klasa za mob meni
addClassStickeyMenu = (element, newPic, oldPic, cssClass) => {
    element = $(element)
    if (window.pageYOffset > element.offset().top) {
        element.html(' ');
        element.html(newPic);
        element.addClass(cssClass);
    } else if (window.pageYOffset == 0) {
        element.html(' ');
        element.html(oldPic);
        element.removeClass(cssClass);

    }
};
// stiki klasa za desk meni
addClassStickeyMenuDesktop = (element, newPic, oldPic, cssClass) => {
    let imgToChange = $(element).children().children()[2];
    imgToChange = $(imgToChange).children()
    element = $(element)

    if (window.pageYOffset > element.offset().top) {
        imgToChange.attr('src', ' ');
        imgToChange.attr('src', newPic);
        element.addClass(cssClass);
    } else if (window.pageYOffset == 0) {
        imgToChange.attr('src', ' ');
        imgToChange.attr('src', oldPic);
        element.removeClass(cssClass);

    }
};

scrollToTop = (target) => {
    var elmnt = document.getElementById(target);
    elmnt.scrollIntoView();
}
scrollToTarget = (target) => {
    $('body').scrollTo(target);
}
mainMenuDesk = (menuList, graphic) => {
    let mainMenu = $('<div>').attr('class', 'main-menu-desk flex');
    let menuItems = $('<ul>').attr('class', 'desk-menu-list flex');
    let item;
    let idList = ['home-mob', 'services-mob', 'about-mob', 'contact-mob']
    menuList.menu.forEach((elem, index) => {
        if (index == 2) {
            item = $('<li>').attr('class', 'flex desk-menu-icon').html('<img src=../content/logo/' + graphics.logos.fullWhiteLogo + '>');
            $(menuItems).append(item);
        }
        item = $('<li>').attr('id', idList[index]).attr('class', 'flex desk-menu-' + index).text(elem);
        $(menuItems).append(item);

    });
    $(mainMenu).append(menuItems);
    $(master).append(mainMenu);

    $('.main-menu-desk li').on('click', (event) => {
        let path = '../index.html';
        window.open(path,'_self');
        
        let className = $(event.target).attr('class').split(' ');
        let idName = $(event.target).attr('id').split('-');

        className = className[className.length - 1]
        if (className == 'desk-menu-0') {
            scrollToTop('master');
        } else {
            scrollToTop(idName[0]);
        }

    });

}

mainMenuMob = (menuList, graphic) => {
    let idList = ['home-desk', 'services-desk', 'about-desk', 'contact-desk']

    let mobIcon = $('<div>').attr('class', 'mob-icon flex').html('<img src=../content/logo/' + graphic.logos.fullWhiteLogo + '>');
    let mobMenuIcon = $('<div>').attr('class', 'mob-icon-menu flex').html('<img src=../content/logo/' + graphic.logos.onlyBox + '>');
    let mainMenu = $('<div>').attr('class', ' flex main-menu-mob');
    let menuItems = $('<ul>').attr('class', 'mob-menu-list flex');
    menuList.menu.forEach((elem, index) => {
        item = $('<li>').attr('id', idList[index]).attr('class', 'flex mob-menu-' + index).text(elem);
        $(menuItems).append(item);

    });
    $(master).append(mobMenuIcon);
    $(mainMenu).append(menuItems);
    $(master).append(mainMenu);
    $(master).append(mobIcon);

    // pojavuvnje na mob meni
    showHideMobMenu = () => {
        $('.mob-menu-list').css({ 'display': 'block' })
        let menuListByClass = $('.mob-menu-list').children()
        var factor = 165;
        var time = 500;
        $(menuListByClass[0]).css('bottom') === `${factor}px` ? factor = -55 : null;

        for (var i = 0; i < menuListByClass.length; i++) {
            $(menuListByClass[i]).velocity({ bottom: factor }, {
                duration: time,
                easing: "ease-in"
            });
            factor -= 55;
            time = time + 250;
            if (factor < -55) {
                setTimeout(() => {
                    $('.mob-menu-list').css({ 'display': 'none' })
                }, 1000);
            }
        }
    }

    //klik za pojavuvanje na meni na mob
    $(mobMenuIcon).on('click', () => {
        showHideMobMenu();
    });

    $('.main-menu-mob li').on('click', (event) => {
        let path = '../index.html';
        window.open(path,'_self');

        let className = $(event.target).attr('class').split(' ');
        let idName = $(event.target).attr('id').split('-');

        className = className[className.length - 1]
        if (className == 'mob-menu-0') {
            scrollToTop('master');
            showHideMobMenu();

        } else {
            scrollToTop(idName[0]);
            showHideMobMenu();

        }

    });

}