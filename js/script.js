const hamburger = document.querySelector(`.hamburger`);

hamburger.addEventListener(`click`, (e) => {
    e.target.closest(`.hamburger`).classList.toggle(`hamburger--active`);
    
    const menulist = e.target.closest(`.menu`).querySelector(`.menu__list`);
    
    if (menulist.classList.contains(`menu__list--active`)) {   
        menulist.classList.add(`menu__list--no-active`);
    } else {
        menulist.classList.remove(`menu__list--no-active`);
    }

    if (menulist.classList.contains(`menu__list--no-active`)) {
        setTimeout(() => {
            menulist.classList.toggle(`menu__list--active`);
        }, 500); 
    } else {
        menulist.classList.toggle(`menu__list--active`);
    }
});

jQuery(document).ready(function($) {
    
    // $(window).load(windowSize); // при загрузке
    // $(window).resize(windowSize); // при изменении размеров
    // или "два-в-одном", вместо двух последних строк:
    $(window).on('load resize',windowSize);
});

function windowSize(){
 
    removeAttr($(".news__subtitle"));
    
    if ($(window).width() > '560'){
        setEqualHeight($(".news__subtitle"));
    }
}

function removeAttr(elements) {
    
    if (elements.is("[style]")) {
        elements.removeAttr("style");
    }
}

function setEqualHeight(columns) {
    
    let tallestcolumn = 0;
    let currentHeight = 0;

    columns.each( function() {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
        }
    });
    columns.height(tallestcolumn);
}