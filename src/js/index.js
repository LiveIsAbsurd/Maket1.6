import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

if (window.innerWidth < 500) {
    const swiper = new Swiper('.swiper', {
        modules: [Pagination],
        slidesPerView: 2,
        spaceBetween: 190,

        pagination: {
        el: '.swiper-pagination',
        },
    });
}

let menu = document.querySelector('.sidebar-main-menu');
let menuItem = menu.querySelectorAll('li');


for (let i = 0; i < menuItem.length; i++){
    menuItemHandler(i);
}
    
function menuItemHandler (item) {
    menuItem[item].addEventListener('click', function () {
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('sidebar-main-menu--active');
        }
        menuItem[item].classList.add('sidebar-main-menu--active');
    })
}