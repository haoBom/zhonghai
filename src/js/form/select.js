import $ from 'jquery';
export function select() {
    $('.select').each((__, box) => {
        let $box = $(box),
            name = $box.find('.select_name p'),
            list = $box.find('.select_options'),
            options = list.find('li'),
            select = $box.find('select');

        $box.on('click', () => $box.toggleClass('cur'));
        options.on('click', function () {
            const txt = $(this).text();
            const val = $(this).data('val');
            name.text(txt);
            select.val(val);
            $box.removeClass('cur');
        });
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select').removeClass('cur');
        }
    });
}
