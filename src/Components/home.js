const content = document.querySelector('div#content');
const buildHomePage = () => {
    const title = document.createElement('h1');
    title.innerText = 'Home';
    content.append(title);

    // look at this component we can call it a card component and use a factory function
    // to do our design this will save us a lot of time
    const pageBody = document.createElement('div');
    const drink = document.createElement('div');
    const drinkName = document.createElement('h3');
    drinkName.innerText = 'About';
    const drinkDescription = document.createElement('p');
    drinkDescription.innerText = "We are the best";
    drink.append(drinkName);
    drink.append(drinkDescription);
    content.append(drink);

    const sandwich = document.createElement('div');
    const sandwichName = document.createElement('h3');
    sandwichName.innerText = 'location';
    const sandwichDescription = document.createElement('p');
    sandwichDescription.innerText = "Amman, Jordan";
    sandwich.append(sandwichName);
    sandwich.append(sandwichDescription);
    content.append(sandwich);


    const snack = document.createElement('div');
    const snackName = document.createElement('h3');
    snackName.innerText = 'Careers';
    const snackDescription = document.createElement('p');
    snackDescription.innerText = "Work with us!!";
    snack.append(snackName);
    snack.append(snackDescription);
    content.append(snack);

};

const loadHomePage = () => {
    content.replaceChildren();
    buildHomePage();
};

export default loadHomePage;