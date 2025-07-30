import $ from 'jquery';
import { tab } from './tab.js';
import './fancy.js';

$('.quote_require .b_item input').on('focus', function () {
    $(this).closest('.form_input').addClass('hint');
})

$('.quote_require .b_item input').on('mouseleave blur', function () {
    $(this).closest('.form_input').removeClass('hint');
})

$('.delete_this').on('click', function () {
    $(this).closest('.b_item').remove();
});

tab('.quote_2_Box .left .b_list', '.quote_2_Box .right .b_list', 'mouseenter');

$('.quote_2_Box .right .b_list p').on('click', function () {
    $(this).addClass('cur').siblings().removeClass('cur');

    // 添加点击记录
    var p_index = $(this).closest('.b_item').index();
    var hasCur = $(this).closest('.b_item').find('p.cur').length > 0;
    var $leftItem = $('.quote_2_Box .left .b_list .b_item').eq(p_index);
    if (hasCur) {
        $leftItem.addClass('choice_ietm');
    } else {
        $leftItem.removeClass('choice_ietm');
    }
})

$('.b_chouse p').on('click', function () {
    $(this).addClass('cur').siblings().removeClass('cur');
})

$('.zengjia_this').on('click', function () {
    const $stItem = $(this).closest('.st_item');     // 当前项
    const $stList = $(this).closest('.st_list');     // 所在列表
    const $clone = $stItem.clone(true);              // 克隆当前项，保留事件

    // 给当前项加类
    $stItem.addClass('added-before');

    // 重置克隆项的选择提示
    $clone.find('.select_name span').text('Please select');

    // 自动计算编号（已有 st_item 的数量 + 1）
    const newIndex = $stList.find('.st_item').length + 1;
    $clone.find('.bt span').text(newIndex); // 假设编号在 .bt 下的 <span> 中

    // 可选：清空 input、select、textarea 的值
    $clone.find('input, select, textarea').val('');

    // 插入到列表末尾
    $stList.append($clone);
});

$(document).on('click', '.shanchu_this', function () {
    $(this).closest('.st_item').remove();
});