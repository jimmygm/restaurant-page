function pageLoad() {
    let container = document.querySelector('#content');
    let img = document.createElement('img');
    let title = document.createElement('h1');
    let tabContainer = document.createElement('div');
    let descTab = document.createElement('span');
    let menuTab = document.createElement('span');
    let contactTab = document.createElement('span');
    let tabContent = document.createElement('div');

    descTab.textContent = 'Description';
    descTab.setAttribute('id', 'desc-tab');
    menuTab.textContent = 'Menu';
    menuTab.setAttribute('id', 'menu-tab');
    contactTab.textContent = 'Contact';
    contactTab.setAttribute('id', 'contact-tab');
    tabContent.setAttribute('id', 'tab-content');
    img.setAttribute(
        'src',
        'https://50graphics.com/wp-content/uploads/2019/04/Different-logo-designs-for-Arabian-restaurant.jpg'
    );
    img.setAttribute('width', '200px');
    title.textContent = 'Le Siugpla e Distos';

    tabContainer.setAttribute('id', 'tab-container');
    tabContainer.append(descTab, menuTab, contactTab);

    container.append(img);
    container.append(title);
    container.append(tabContainer);
    container.append(tabContent);
}

export default pageLoad;
