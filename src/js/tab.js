import $ from 'jquery';

/**
 * tab 切换功能
 * @param {string} btn - 按钮容器选择器
 * @param {string} con - 内容容器选择器
 * @param {string} [trigger='click'] - 触发方式，可选 'click' 或 'mouseenter'
 */
export function tab(btn, con, trigger = 'click') {
    const $btns = $(btn).children();
    const $conts = $(con).children();

    // 默认第一个加 cur
    $btns.eq(0).addClass('cur');
    $conts.eq(0).addClass('cur');

    const switchTo = (i) => {
        $btns.eq(i).addClass('cur').siblings().removeClass('cur');
        $conts.eq(i).addClass('cur').siblings().removeClass('cur');
    };

    // 根据 trigger 类型绑定事件
    $btns.on(trigger, function () {
        const i = $(this).index();
        switchTo(i);
    });
}