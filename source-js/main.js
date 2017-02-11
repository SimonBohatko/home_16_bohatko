$(document).ready(function () {
    //----------------------------------------------------------------------------Accordion
    function close_accordion() {
        $('.accordion-section-title').removeClass('active');
        $('.accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function (e) {
        var currentAttr = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion();
        }
        else {
            close_accordion();
            $(this).addClass('active');
            $('.accordion ' + currentAttr).slideDown(300).addClass('open')
        }
        e.preventDefault();

    });
//---------------------------------------------------------------------------------Responsive menu
    function close_menu() {
        $('.menu-responsive').slideUp(300).removeClass('open');
    }

    $('.hamb-menu').click(function (e) {

        if ($('.menu-responsive').is('.open')) {
            close_menu();
        }
        else {
            $('.menu-responsive ').slideDown(300).addClass('open')
        }
    });
//---------------------------------------------------------------------------------PopUp
    $(function () {
        $('[data-popup-open]').on('click', function (e) {
            var popup_target = $(this).attr('data-popup-open');
            $('[data-popup="' + popup_target + '"]').fadeIn(350);

            e.preventDefault();
        });

        $('[data-popup-close]').on('click', function (e) {
            var popup_target = $(this).attr('data-popup-close');
            $('[data-popup="' + popup_target + '"]').fadeOut(350);

            e.preventDefault();
        });
    });
//--------------------------------------------------------------------------------Smooth Scrolling
    $(function () {
        $('a').click(function (e) {
            if (this.hash !== "#accordion-3" && this.hash !== "#accordion-2" && this.hash !== "#accordion-1" && this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    window.location.hash = hash;
                });
            }
        });
    });
    //-----------------------------------------------------------------------------Tabs

    $(function () {
        $('.tab-list li').click(function () {
            var currentTab = $(this).attr('data-tab');

            $('.tab-list li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $('#' + currentTab).addClass('current');
        })
    });

});


