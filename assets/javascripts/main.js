var summer = (function ($) {

    // post animations on homepage
    postAnimate = function () {
        if ($('.post-list .post').length) {
            $('.post-list .post').each(function () {
            var postPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop(),
                windowHeight = $(window).height();
                if (postPos < topOfWindow + (windowHeight/ 1.4)) {
                    $(this).addClass('fadeInDown');
                }
            });
        }
    },

    // summer javascripts initialization
    init = function () {
        postAnimate();
        $(window).on('scroll', function() {
            postAnimate();
        });
        $('p:has(> img)').addClass('with-image');
    };

    return {
        init: init
    };

})(jQuery);

$(function(){
  summer.init();
});
