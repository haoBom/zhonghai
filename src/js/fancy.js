import $ from 'jquery';

$('[data-gofancy]').on('click', function () {
    var fancyName = $(this).data('gofancy');
    var getFancy = $('.fancy[data-fancy="' + fancyName + '"]');
    var nocan = $(this).hasClass('nocan');

    if (getFancy.length) {
        if(nocan){
            return false;
        }
        getFancy.addClass('fancy-show');
    }
});

$('.fancy_close').on('click', function () {
    $(this).closest('.fancy').removeClass('fancy-show');
});
