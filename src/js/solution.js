import $ from 'jquery';

$('.s6_item').on('mouseenter', function () {
    var index = $(this).index();
    $('.s6_showImg').children().eq(index).addClass('cur').siblings().removeClass('cur');
})

