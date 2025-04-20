import Swiper from 'swiper';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './style.css';

const mainMenu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon')

hamburgerIcon.addEventListener('click', () =>{
    mainMenu.classList.remove('hidden');
    closeIcon.classList.remove('hidden');
    hamburgerIcon.classList.add('hidden')
})
closeIcon.addEventListener('click', () =>{
    mainMenu.classList.add('hidden');
    hamburgerIcon.classList.remove('hidden')
    closeIcon.classList.add('hidden')
})


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    spaceBetween: 30,
    
    autoplay: {
        delay: 200,
        
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    loop: true,
  });
