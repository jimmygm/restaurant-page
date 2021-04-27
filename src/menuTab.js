function menuTab() {
    let menuList = ['Lasagna', 'Hamburger', 'Chocolate Ice Cream', 'Brownie', 'Rice and Beans'];

    let container = document.querySelector('#tab-content');
    let tab = document.createElement('div');
    tab.setAttribute('class', 'tab');
    let menu = document.createElement('ul');

    menuList.forEach((dish) => {
        let li = document.createElement('li');
        li.textContent = dish;
        menu.append(li);
    });

    tab.append(menu);
    container.append(tab);
}

export default menuTab;
