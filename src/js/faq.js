import $ from 'jquery';

$('.f_left > ul > li').on('click', function () {
    $(this).addClass('cur').siblings().removeClass('cur');
});