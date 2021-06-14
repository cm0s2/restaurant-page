
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';


function loadPage(page) {
    const main = document.querySelector('main');
    if (main) {
        console.log('Remove main...');
        main.remove();
    }
    

    // Home
    switch (page) {
        case 'Home':
            return loadHome();
        case 'Menu':
            return loadMenu();
        case 'Contact':
            return loadContact();
    }

}




export { loadPage as default };