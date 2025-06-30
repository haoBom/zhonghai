import $ from 'jquery';
import "./all_fancyapps.js"
import "./all_swipers.js"
import "./all_gsaps.js"
import "./technology.js"
import "./solution.js"
import "./faq.js"
import "./form/form.js"
import "./member.js"

$('.mob_ico').on('click', function () {
    $('.nav').toggleClass('header_active')
})

$('.nav_children_arrow').on('click', function () {
    $(this).closest('.nav_item').find('.nav_children').toggleClass('arrow_active')
})

$('.nav_children').on('click', function (e) {
    // 如果点击的目标就是当前的 .nav_children，而不是里面的 container 或其子元素
    if ($(e.target).is('.nav_children')) {
        $(this).removeClass('arrow_active');
    }
});