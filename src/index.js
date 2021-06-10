import createHomeContent from './home';
import './style.css';

const content = document.querySelector('#content');
let currentContent = createHomeContent();

let selectedTab;

const makeNav = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');

  selectedTab = navHome;

  navList.classList.add('nav-list')

  navHome.textContent = 'Home';
  navHome.addEventListener('click', () => updateCurrentPage('home', navHome));
  
  navMenu.textContent = 'Menu';
  navMenu.addEventListener('click', () => updateCurrentPage('menu', navMenu));
  
  navContact.textContent = 'Contact';
  navContact.addEventListener('click', () => updateCurrentPage('contact', navContact));

  navList.append(navHome, navMenu, navContact);
  nav.append(navList);
  header.appendChild(nav);

  return header
}

const removeContent = () => {
  content.removeChild(currentContent);
}

const updateCurrentPage = (newPage, newTab) => {
  
  let updatedPage;
  if (selectedTab != newTab) {
    if(newPage === 'menu') updatedPage = makeMenuPage()
    else if(newPage === 'contact' ) updatedPage = makeContactPage();
    else if(newPage === 'home') updatedPage = createHomeContent();
  }

  if(!!updatedPage) {
    removeContent();
    selectedTab.classList.remove('selected-nav');
    selectedTab = newTab;
    selectedTab.classList.add('selected-nav')

    currentContent = updatedPage
    
    content.appendChild(currentContent);
  }
}

document.body.prepend(makeNav());

content.append(currentContent);