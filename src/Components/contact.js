const content = document.querySelector('div#content');
const buildContactPage = () => {
    const title = document.createElement('h1');
    title.innerText = 'Contact';
    content.append(title);

    const pageBody = document.createElement('div');
    const drink = document.createElement('div');
    const drinkName = document.createElement('h3');
    drinkName.innerText = 'We CANNOT be contacted';
    const drinkDescription = document.createElement('p');
    drinkDescription.innerText = "Thank you";
    drink.append(drinkName);
    drink.append(drinkDescription);
    content.append(drink);



};

const loadContactPage = () => {
    content.replaceChildren();
    buildContactPage();
};

export default loadContactPage;