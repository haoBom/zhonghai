import $ from 'jquery';

$('.uploadInput').on('change', function () {
    const fileName = this.files.length ? this.files[0].name : '未上传';
    $('.p_fileName')
        .addClass('upload_ed')
        .children('.p_name')
        .text(fileName);
});

$('.file_upload').on('click', function () {
    $('.uploadInput').trigger('click');
});

$('.p_close').on('click', function () {
    $('.uploadInput').val('');
    $('.p_fileName')
        .removeClass('upload_ed')
        .children('.p_name')
        .text('未上传');
});