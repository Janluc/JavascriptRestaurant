/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const content = document.querySelector('#content');

const makeNav = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');

  navHome.textContent = 'Home';
  
  navMenu.textContent = 'Menu';
  
  navContact.textContent = 'Contact';


  navList.append(navHome, navMenu, navContact);
  nav.append(navList);
  header.appendChild(nav);

  return header
}

document.body.prepend(makeNav());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuY29uc3QgbWFrZU5hdiA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBuYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgbmF2SG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBcclxuICBuYXZNZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gIFxyXG4gIG5hdkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG5cclxuICBuYXZMaXN0LmFwcGVuZChuYXZIb21lLCBuYXZNZW51LCBuYXZDb250YWN0KTtcclxuICBuYXYuYXBwZW5kKG5hdkxpc3QpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyXHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkucHJlcGVuZChtYWtlTmF2KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=