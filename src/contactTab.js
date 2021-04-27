function contactTab() {
    let container = document.querySelector('#tab-content');
    let tab = document.createElement('div');
    tab.setAttribute('class', 'tab');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    phone.textContent = 'Phone: 2222 4444 / 800 800 FOOD';
    email.textContent = 'Email: le_siugpla_e_distos@gmail.com';
    tab.append(phone);
    tab.append(email);
    container.append(tab);
}

export default contactTab;
