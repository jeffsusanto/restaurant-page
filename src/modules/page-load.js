function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    const p = document.createElement('p');
    p.innerText = 'FOODHOUSE';

    title.appendChild(p);
    header.appendChild(title);
    return header;
}

function createBtn(text){
    const btn = document.createElement('button');
    btn.innerHTML = text;
    return btn;
}

function createNav(){
    const navi = document.createElement('nav');
    navi.classList.add('header-nav')

    const homebtn = createBtn('HOME');
    const menubtn = createBtn('MENU');
    const contactbtn = createBtn('CONTACT');

    navi.appendChild(homebtn);
    navi.appendChild(menubtn);
    navi.appendChild(contactbtn);

    return navi;
}

function createMiddle(){
    const middle = document.createElement('div');
    middle.classList.add('middle')
    return middle;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer')

    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info')
    const footerInfoP = document.createElement('p');
    footerInfoP.innerText = 'Made By FOODHOUSE team'
   
    const footerLinks = document.createElement('div');
    footerLinks.classList.add('footer-links')
    const footerLinksP = document.createElement('p');
    const link = document.createElement('a')
    link.textContent = 'THIS IS A LINK';

    footerLinksP.appendChild(link)
    footerLinks.appendChild(footerLinksP)
    footerInfo.appendChild(footerInfoP)

    footer.appendChild(footerInfo)
    footer.appendChild(footerLinks)
    return footer;
  }

function loadPage(){
    console.log('called loadPage');

    const content = document.getElementById('content');

    const header = createHeader('header','DOPE STUFF');
    content.appendChild(header);

    const nav = createNav();
    header.appendChild(nav);

    const middle = createMiddle();
    content.appendChild(middle);

    const footer = createFooter();
    content.appendChild(footer);
   
}
export default loadPage;