import $ from 'jquery';
import { _if_Exists, isMo } from './tools.js';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);
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
                spaceBetween: 60,
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
        navigation: {
            nextEl: '.te2 .arr_prev',
            prevEl: '.te2 .arr_next',
        },
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
    const container = $el[0];
    const slideCount = container.querySelectorAll('.swiper-slide').length;

    // 如果 slide 数量 ≤ 4，就给 history_list 容器加类
    if (slideCount <= 4) {
        container.classList.add('few-slides');
        $('.a5_mouse').hide();
    }

    const swiper = new Swiper(container, {
        slidesPerView: 1.4,
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
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
        autoplay: {
            delay: 3000,            // 每隔 3 秒切换一次
            disableOnInteraction: true, // 用户操作后继续自动播放
            pauseOnMouseEnter: true      // 鼠标移入时暂停（可选）
        },
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
        slidesPerView: 2.4,
        spaceBetween: 10,
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
            el: '.homeBanner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.homeBanner .swiper-button-next',
            prevEl: '.homeBanner .swiper-button-prev',
        },
    });
});

// 首页幻灯片左侧内容幻灯片
_if_Exists('.homeBanner_right_swiper', ($el) => {
    new Swiper('.homeBanner_right_swiper .swiper', {
        slidesPerView: 3,
        speed: 400,
        spaceBetween : 30,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    });
});