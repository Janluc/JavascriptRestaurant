import MenuItem from './menuItemClass';
import products from './menuItems.json';

const menuContent = () => {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'menu');

  const menuTitle = document.createElement('h1');

  const appetizerSection = makeSectionDiv('Appetizers');

  const entreeSection = makeSectionDiv('Entrees');

  const beverageSection = makeSectionDiv('Beverages');

  menuTitle.textContent = 'Our Menu';

  contentDiv.appendChild(menuTitle);
  createMenuSection(appetizerSection, entreeSection, beverageSection);

  contentDiv.append(appetizerSection, entreeSection, beverageSection);
  return contentDiv;
};

const createMenuSection = (appetizerSection, entreeSection, beverageSection) => {
  for (let i = 0; i < products.length; i++) {
    if (i >= 0 && i <= 2) {
      appetizerSection.appendChild(makeMenuItem(products[i]));
    } else if (i > 2 && i <= 6) {
      entreeSection.appendChild(makeMenuItem(products[i]));
    } else {
      beverageSection.appendChild(makeMenuItem(products[i]));
    }
  }
};

const makeMenuItem = ({ name, price, description }) => {
  const item = new MenuItem(name, price, description);

  const content = document.createElement('div');
  const itemName = document.createElement('h4');
  const itemPrice = document.createElement('h5');
  const itemDescription = document.createElement('p');

  itemName.textContent = item.name;
  itemPrice.textContent = item.price;
  itemDescription.textContent = item.description;

  content.append(itemName, itemDescription, itemPrice);

  content.classList.add('menu-item');

  return content;
};

const makeSectionDiv = (sectionTitle) => {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('menu-section', 'center-page');
  const title = document.createElement('h2');
  title.textContent = sectionTitle;
  div.appendChild(title);
  section.appendChild(div);

  return section;
};

export default menuContent;