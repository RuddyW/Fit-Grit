//Navbar Styling
const header = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 120);
});

//bar
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};