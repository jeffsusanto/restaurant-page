function createP(text) {
    const p = document.createElement('p');
    p.innerText = text;
    return p;
}

function loadContact() {
    const middle = document.querySelector('.middle');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contact-title');
    const p1 = createP('CONTACT US');

    const contactPhones = document.createElement('div');
    contactPhones.classList.add('contact-phones');
    const p2 = createP('PHONES');
    const p3 = createP('0834832344');
    const p4 = createP('6679374293');

    const contactAddress = document.createElement('div');
    contactAddress.classList.add('contact-address');
    const p5 = createP('ADDRESS');
    const p6 = createP('sesame street');

    contactAddress.appendChild(p5);
    contactAddress.appendChild(p6);
    contactPhones.appendChild(p4);
    contactPhones.appendChild(p3);
    contactPhones.appendChild(p2);
    contactTitle.appendChild(p1);

    contact.appendChild(contactTitle);
    contact.appendChild(contactPhones);
    contact.appendChild(contactAddress);

    middle.appendChild(contact);
}

export default loadContact;