import './style.css';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const content = document.getElementById('content');

const navBar = document.createElement('nav');
const homBtn = document.createElement('button');
homBtn.textContent = 'Home';
homBtn.onclick = () => setActivePage(homePage);


const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.onclick = () => setActivePage(menuPage);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.onclick = () => setActivePage(contactPage);

navBar.appendChild(homBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);
document.body.insertBefore(navBar, content);

function setActivePage(page){
    content.innerHTML = '';
    content.appendChild(page());
}
setActivePage(homePage);