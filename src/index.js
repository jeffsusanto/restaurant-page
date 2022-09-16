import loadPage from './modules/page-load';
import loadHome from './modules/home-load';
import loadMenu from './modules/menu-load';
import loadContact from './modules/contact-load';

init();

function init() {
    loadPage();
    loadMenu();
    loadContact();
}