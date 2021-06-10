const makeContactPage = () => {
  const container = document.createElement('div');
  const content = document.createElement('div');
  container.classList.add('contact-page');
  content.classList.add('center-page');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';

  const contactName = document.createElement('h3');
  const contactEmail = document.createElement('h3');
  const contactNumber = document.createElement('h3');

  contactName.textContent = 'Mickey';
  contactEmail.textContent = 'E-mail: MickeyBurgers@MickeysBurgerShack.com';
  contactNumber.textContent = 'Phone: 800-252-2000';

  content.append(contactTitle, contactName, contactEmail, contactNumber);
  container.append(content);
  return container;
}

export default makeContactPage;