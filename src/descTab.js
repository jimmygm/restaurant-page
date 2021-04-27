function descTab() {
    let container = document.querySelector('#tab-content');
    let tab = document.createElement('div');
    tab.setAttribute('class', 'tab');
    let description = document.createElement('p');
    description.textContent =
        "Hi and welcome to my honest restaurant website Le Siugpla e Distos, we're a proud team of over 20 chefs and 10 maids in our endeaver to satisfy your tongue.";
    tab.append(description);
    container.append(tab);
}

export default descTab;
