import pageLoad from './page-load.js';
import descTab from './descTab.js';
import menuTab from './menuTab.js';
import contactTab from './contactTab.js';

(function () {
    // Preloads website base elements
    pageLoad();
    // Cache
    let description = document.querySelector('#desc-tab');
    let menu = document.querySelector('#menu-tab');
    let contact = document.querySelector('#contact-tab');
    let tabContent = document.querySelector('#tab-content');
    // Binds
    description.addEventListener('click', () => {
        loadTab(descTab);
    });
    menu.addEventListener('click', function () {
        loadTab(menuTab);
    });
    contact.addEventListener('click', function () {
        loadTab(contactTab);
    });
    // Functions
    function loadTab(tabFunction) {
        tabContent.innerHTML = ''; // Deletes current contect
        tabFunction();
    }
})();
