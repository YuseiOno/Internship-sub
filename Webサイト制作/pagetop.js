$(function() {
    var topBtn = $('.pagetop');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
        //�{�^���̕\�����@
            topBtn.fadeIn();
        } else {
        //�{�^���̔�\�����@
            topBtn.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   500);
        return false;
    });
});