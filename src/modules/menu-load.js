function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    const menuTitleP = document.createElement('p');
    menuTitleP.innerText = 'MENUS';

    menuTitle.appendChild(menuTitleP);
    menu.appendChild(menuTitle);

    return menu;
}

function createImage(src) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.setAttribute('src', src);

    imgContainer.appendChild(img);
    return imgContainer;
}

function loadMenu() {
    const middle = document.querySelector('.middle');
    const menuImages = document.createElement('div');
    menuImages.classList.add('menu-images');

    const menu = createMenu();
    const img1 = createImage('imgs/food1.jpg');
    const img2 = createImage('imgs/food2.jpg');
    const img3 = createImage('imgs/food4.jpg');
    const img4 = createImage('imgs/food5.jpg');

    menuImages.appendChild(img1);
    menuImages.appendChild(img2);
    menuImages.appendChild(img3);
    menuImages.appendChild(img4);

    middle.appendChild(menu);
    middle.appendChild(menuImages);
    console.log('loaded menu')
}

export default loadMenu;