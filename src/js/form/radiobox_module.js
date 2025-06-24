import $ from 'jquery';

$('.radiobox').on('click', function () {
    $(this).addClass('radiobox_active').closest('.radiobox_Item').siblings().find('.radiobox').removeClass('radiobox_active');
});