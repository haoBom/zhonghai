import $ from 'jquery';

export const _if_Exists = (selector, callback) => {
    const $el = $(selector);
    return $el.length && typeof callback === 'function' && callback($el);
};

export const isMo = function () {
    return $(window).width() <= 768;
};