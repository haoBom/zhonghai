import $ from 'jquery';

$('.f_left svg').on('click', function () {
    $(this).closest('li').addClass('cur').siblings().removeClass('cur');
});