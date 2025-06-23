import $ from 'jquery';

export function select() {
    // 点击 select 外层，展开/收起
    $(document).on('click', '.select', function (e) {
        e.stopPropagation(); // 阻止冒泡，避免后面的 document click 提前触发
        const $this = $(this);
        $('.select').not($this).removeClass('cur'); // 关闭其他打开的 select
        $this.toggleClass('cur');
    });

    // 选择某个选项
    $(document).on('click', '.select_options li', function (e) {
        e.stopPropagation();
        const $li = $(this);
        const $box = $li.closest('.select');
        const $name = $box.find('.select_name span');
        const $select = $box.find('select');
        const txt = $li.text();
        const val = $li.data('val');

        $name.text(txt);
        $select.val(val).trigger('change'); // 如果有监听 change 事件
        $box.removeClass('cur');
    });

    // 点击空白区域，关闭所有 select
    $(document).on('click', function () {
        $('.select').removeClass('cur');
    });
}

// 初始化调用
select();
