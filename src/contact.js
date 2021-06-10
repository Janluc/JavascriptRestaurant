const makeContactPage = () => {
  const content = document.createElement('div')
  content.classList.add('center-page')
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us'

  const contactName = document.createElement('h3');
  const contactEmail = document.createElement('h3');
  const contactNumber = document.createElement('h3');

  contactName.textContent = 'Mickey';
  contactEmail.textContent = 'MickeyBurgers@MickeysBurgerShack.com';
  contactNumber.textContent = '800-252-2000';

  content.append(contactTitle, contactName, contactEmail, contactNumber);
  return content;
}

export default makeContactPage;