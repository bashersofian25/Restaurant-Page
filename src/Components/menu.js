const content = document.querySelector('div#content');
const buildMenuPagePage = () => {
    const title = document.createElement('h1');
    title.innerText = 'Simple But Delicious';
    content.append(title);

    const pageBody = document.createElement('div');
    const drink = document.createElement('div');
    const drinkName = document.createElement('h3');
    drinkName.innerText = 'Shai';
    const drinkDescription = document.createElement('p');
    drinkDescription.innerText = "Very delicious hot drink";
    drink.append(drinkName);
    drink.append(drinkDescription);
    content.append(drink);

    const sandwich = document.createElement('div');
    const sandwichName = document.createElement('h3');
    sandwichName.innerText = 'Falafel Wrap';
    const sandwichDescription = document.createElement('p');
    sandwichDescription.innerText = "Very delicious sandwich";
    sandwich.append(sandwichName);
    sandwich.append(sandwichDescription);
    content.append(sandwich);


    const snack = document.createElement('div');
    const snackName = document.createElement('h3');
    snackName.innerText = 'Falafel Wrap';
    const snackDescription = document.createElement('p');
    snackDescription.innerText = "Very delicious snack";
    snack.append(snackName);
    snack.append(snackDescription);
    content.append(snack);
};

const loadMenuPage = () => {
    content.replaceChildren();
    buildMenuPagePage();
};

export default loadMenuPage;