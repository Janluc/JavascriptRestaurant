import icon from './restaurant-banner.jpg';


const createHomeContent = () => {
  const homeDiv = document.createElement('div');
  
  homeDiv.append(createHomeBanner());
  homeDiv.append(homeDescription());
  homeDiv.append(homeLocation());
  homeDiv.append(homeHours());

  return homeDiv;
}

// Private
const createHomeBanner = () => {
  const bannerDiv = document.createElement('div');

  bannerDiv.style.backgroundImage = `url(\'${icon}\')`
  bannerDiv.classList.add('banner')

  const bannerText = document.createElement('h1');
  bannerText.textContent = 'Mickey\'s Burger Shack';

  bannerDiv.appendChild(bannerText);

  return bannerDiv;
}

const homeDescription = () => {
  const homeDescDiv = document.createElement('div');
  const homeDescTitle = document.createElement('h3');
  homeDescDiv.setAttribute('id', 'about-us')
  homeDescDiv.classList.add('main-page-display')
  homeDescTitle.textContent = 'About us!'
  
  const homeDescText = document.createElement('p');
  homeDescText.textContent = 'We strive to make the best food available.'

  homeDescDiv.append(homeDescTitle, homeDescText);

  return homeDescDiv;
}

const homeLocation = () => {
  const homeLocationDiv = document.createElement('div');
  homeLocationDiv.classList.add('main-page-display')
  const homeLocationTitle = document.createElement('h3');
  const homeLocationText = document.createElement('p')

  homeLocationTitle.textContent = 'Location';
  homeLocationText.textContent = '789 Main Street, Reading, PA'

  homeLocationDiv.append(homeLocationTitle, homeLocationText);

  return homeLocationDiv;
}

const homeHours = () => {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const homeHoursDiv = document.createElement('div');
  homeHoursDiv.classList.add('main-page-display')
  const homeHoursTitle = document.createElement('h3');
  
  homeHoursTitle.textContent = 'Schedule';
  homeHoursDiv.appendChild(homeHoursTitle);

  for(let i = 0; i < week.length; i++){
    const weekDay = document.createElement('p');
    const closingTime = i > 2 && i < 6 ? '12AM' : '10PM'
    weekDay.textContent = `${week[i]}: 9AM - ${closingTime}`

    homeHoursDiv.appendChild(weekDay);
  }
  return homeHoursDiv;
}

export default createHomeContent;