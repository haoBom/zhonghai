import $ from 'jquery';
import { _if_Exists, isMo } from './tools.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// 关于我们 - te2
_if_Exists('.history_list', ($el) => {
    const swiper = new Swiper($el[0], {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
        },
        on: {
            init: function () {
                updateVisibleSlides(this);
            },
            slideChange: function () {
                updateVisibleSlides(this);
            },
            resize: function () {
                updateVisibleSlides(this);
            }
        }
    });

    function updateVisibleSlides(swiper) {
        // 清除所有 slide 上的 is-visible 类
        swiper.slides.forEach(slide => {
            slide.classList.remove('is-visible');
        });

        const current = swiper.activeIndex;
        let count = swiper.params.slidesPerView;

        // 如果 slidesPerView 是字符串（如 'auto'），强制设为 1
        if (typeof count === 'string') {
            count = 1;
        }

        for (let i = 0; i < count; i++) {
            // 计算索引，处理 loop 模式下的循环
            const idx = (current + i) % swiper.slides.length;
            swiper.slides[idx].classList.add('is-visible');
        }
    }

});

// 荣誉 - a6
_if_Exists('.a6 .swiper', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 2,
        spaceBetween: "2%",
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 6,
            },
        }
    });
});

// 关于我们 - a4-5
_if_Exists('.a4-5_list', ($el) => {
    if (isMo()) {
        new Swiper('.a4-5_list', {
            slidesPerView: 1.3,
            spaceBetween: "2%",
            speed: 800,
        })
    }
});

// 工艺技术 - s1
_if_Exists('.s1 .swiper', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 1.4,
        spaceBetween: "3%",
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
        }
    });
});

// 解决方案 - s7
_if_Exists('.s7 .swiper', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 1.4,
        spaceBetween: "3%",
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
        }
    });
});

// 首页幻灯片
_if_Exists('.index_banner', ($el) => {
    new Swiper($el[0], {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination: {
            el: '.index_banner .swiper-pagination',
        },
        navigation: {
            nextEl: '.index_banner .swiper-button-next',
            prevEl: '.index_banner .swiper-button-prev',
        },
    });
});