import loadPage from './loadPage';


const content = document.getElementById('content');

// menu
content.appendChild(createNav());

// Load Home as default
content.appendChild(loadPage('Home'));;


function createNav() {
    const navElement = document.createElement('nav');

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.innerText = 'Home';
    homeLink.addEventListener('click', (e) => {
        content.appendChild(loadPage('Home'));
    })
    navElement.appendChild(homeLink);

    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.innerText = 'Menu';
    menuLink.addEventListener('click', (e) => {
        content.appendChild(loadPage('Menu'));
    })
    navElement.appendChild(menuLink);

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.innerText = 'Contact';
    contactLink.addEventListener('click', (e) => {
        content.appendChild(loadPage('Contact'));
    })
    navElement.appendChild(contactLink);

    return navElement;
}
