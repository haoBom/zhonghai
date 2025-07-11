import $ from 'jquery';
import { tab } from './tab.js'
import "./all_fancyapps.js"
import "./all_swipers.js"
import "./all_gsaps.js"
import "./technology.js"
import "./solution.js"
import "./faq.js"
import "./form/form.js"
import "./member.js"

$('.mob_ico').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('header_active');

    if ($('.nav').hasClass('header_active')) {
        $('body').addClass('no-scroll');
    } else {
        $('body').removeClass('no-scroll');
    }
});

$('.nav_children_arrow').on('click', function () {
    $(this).closest('.nav_item').find('.nav_children').toggleClass('arrow_active')
})

$('.nav_children').on('click', function (e) {
    // 如果点击的目标就是当前的 .nav_children，而不是里面的 container 或其子元素
    if ($(e.target).is('.nav_children')) {
        $(this).removeClass('arrow_active');
    }
});

let lastScrollTop = 0;

$(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const headerHeight = $('header').outerHeight();

    // 判断 header 显隐
    if (scrollTop > headerHeight) {
        $('header').addClass('scroll_down');
    } else {
        $('header').removeClass('scroll_down');
    }

    // 判断滚动方向，添加 body 类名
    if (scrollTop > lastScrollTop) {
        $('body').addClass('down').removeClass('up');
    } else if (scrollTop < lastScrollTop) {
        $('body').addClass('up').removeClass('down');
    }

    lastScrollTop = scrollTop;
});


tab('.nav_children_tab', '.nav_children_right > div', 'mouseenter')