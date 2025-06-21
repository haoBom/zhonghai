import $ from 'jquery';
import { _if_Exists } from './tools.js';
import Swiper from 'swiper';
import 'swiper/css';

// 分类
_if_Exists('.c_sort_swiper', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 'auto',
        spaceBetween: "10%",
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                spaceBetween: "5%",
            },
        }
    });
});

// 工艺技术 - te2
_if_Exists('.te2 .swiper', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 2,
        spaceBetween: "3%",
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
            1440: {
                slidesPerView: 8,
            },
        }
    });
});