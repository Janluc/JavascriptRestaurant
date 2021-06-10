import createHomeContent from './home';
import './style.css';

const content = document.querySelector('#content');

const makeNav = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');

  navList.classList.add('nav-list')

  navHome.textContent = 'Home';
  
  navMenu.textContent = 'Menu';
  
  navContact.textContent = 'Contact';


  navList.append(navHome, navMenu, navContact);
  nav.append(navList);
  header.appendChild(nav);

  return header
}

document.body.prepend(makeNav());

content.append(createHomeContent());