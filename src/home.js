

function loadHome() {
    const mainElement = document.createElement('main');

    const h1 = document.createElement('h1');
    h1.innerText = 'Welcome to my restaurant';
    mainElement.appendChild(h1);

    const imgElement = document.createElement('img');
    imgElement.src = 'restaurant.jpeg';
    mainElement.appendChild(imgElement);

    const divElement = document.createElement('div')
    divElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum accusantium vero molestias nesciunt excepturi quos voluptatibus ullam minus. Aperiam rem dolorem assumenda delectus aut sapiente earum temporibus soluta, inventore natus?';
    mainElement.appendChild(divElement);

    return mainElement;
}

export { loadHome as default };

