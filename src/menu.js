

function loadMenu() {
    const mainElement = document.createElement('main');

    const h1 = document.createElement('h1');
    h1.innerText = 'Menu';
    mainElement.appendChild(h1);

    const divElement = document.createElement('div')
    divElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum accusantium vero molestias nesciunt excepturi quos voluptatibus ullam minus. Aperiam rem dolorem assumenda delectus aut sapiente earum temporibus soluta, inventore natus?';
    mainElement.appendChild(divElement);

    return mainElement;
}

export { loadMenu as default };

