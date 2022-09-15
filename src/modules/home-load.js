function loadHome() {
    const middle = document.querySelector('.middle');

    const home = document.createElement('div')
    home.classList.add('home')
    const homeTitle = document.createElement('p')
    homeTitle.classList.add('home-title')
    homeTitle.innerText = 'WHY FOODHOUSE'
    const homeContent = document.createElement('p')
    homeContent.classList.add('home-content')
    homeContent.innerText = `anyanyanyanytextt
    exttexttextanyanyanyanytexttexttexttex
    tanyanyanyanytexttexttexttextanyanyanyanytexttexttexttextanyanyanyanytexttexttexttextanyanyanyanytexttexttexttextanyanyanyanytexttexttexttext`

    home.appendChild(homeTitle)
    home.appendChild(homeContent)

    middle.appendChild(home)
}

export default loadHome;