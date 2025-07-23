import $ from 'jquery';

$('.s6_item').on('mouseenter', function () {
    var index = $(this).index();
    $('.s6_showImg').children().eq(index).addClass('cur').siblings().removeClass('cur');
})

const s_list = $('.s5_list');
if (s_list.children().length > 9) {
    $('.loadmore').addClass('active');
}

if ($('.s5 .s5_list a').length > 12) {
    $('.s5 #pageBox').addClass('active');
}