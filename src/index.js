import './style.css';
import loadContactPage from './Components/contact';
import loadHomePage from './Components/home';
import loadMenuPage from './Components/menu';
import background from './resources/falafel.jpg'
const navigation = document.querySelector('nav');


const contactPage = document.createElement('button');
contactPage.classList.add('contact');
contactPage.innerText = 'Contact Us';
contactPage.addEventListener('click', loadContactPage);

const homePage = document.createElement('button');
homePage.classList.add('home');
homePage.innerText = 'Home';
homePage.addEventListener('click', loadHomePage);


const menuPage = document.createElement('button');
menuPage.classList.add('menu');
menuPage.innerText= 'Menu';
menuPage.addEventListener('click', loadMenuPage);


navigation.append(contactPage);
navigation.append(homePage);
navigation.append(menuPage);

loadHomePage();
