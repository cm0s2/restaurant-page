

function loadContact() {
    const mainElement = document.createElement('main');

    const h1 = document.createElement('h1');
    h1.innerText = 'Contact us';
    mainElement.appendChild(h1);

    const divElement = document.createElement('div')
    divElement.innerText = 'Phone etc...';
    mainElement.appendChild(divElement);

    return mainElement;
}

export { loadContact as default };

