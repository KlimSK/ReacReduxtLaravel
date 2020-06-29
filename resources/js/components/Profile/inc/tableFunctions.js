export const mainTableHeight = () => {

    var table = $('.main-table');
    if (table.length) {

        var sum = 0;

        table.siblings().each(function () {
            sum += parseFloat($(this).outerHeight());
        });


        if(!table.hasClass('statistics-table'))
            sum += $('header').outerHeight() + $('footer').outerHeight();

        $('.main-table').css('height', 'calc(100vh - ' + sum + 'px - 25px)');
    }
};

export const tableRowClick = () => {

    $('.main-table tbody tr').click(function (e) {
        // если курсор наведён на чекбокс
        //функция не вызывается

        console.log('test');

        //if (!checkboxBol) {
            if (e.shiftKey) {
                var start = $('.main-table tbody tr.active-row').eq(0);
                var end = $(this);

                $('.main-table tbody tr.active-row').removeClass('active-row');

                start.addClass('active-row');
                end.addClass('active-row');

                var direction = end.index() > start.index() ? 'forward' : 'back';

                // console.log(start.index());
                // console.log(end.index());

                if (direction === 'forward') {
                    start.nextUntil(end).addClass('active-row');
                }
                else {
                    end.nextUntil(start).addClass('active-row');
                }
            }
            else if (e.ctrlKey) {
                if (!$(this).hasClass('active-row')) {
                    $(this).addClass('active-row');
                }
                else {
                    $(this).removeClass('active-row');
                }
            }

            else {
                if (!$(this).hasClass('active-row')) {
                    $('.main-table tbody tr.active-row').removeClass('active-row');
                    $(this).addClass('active-row');
                } else {
                    if ($('.main-table tbody tr.active-row').length > 1) {
                        $('.main-table tbody tr.active-row').removeClass('active-row');
                        $(this).addClass('active-row');
                    } else {
                        $(this).removeClass('active-row');
                    }
                }
            }

            var selected = $('.main-table tbody tr.active-row').length;

            if (selected) {
                $('.selected-blocks').css('opacity', '1');
                $('.selected-blocks .detail').text(selected);
            }
            else {
                $('.selected-blocks').css('opacity', '0');
            }
        //}
    });
};



export const mainMenuHeight = () => {
    var nav = $('aside nav.main-menu');

    var logo = $('.header-logo').height();

    nav.css('max-height', 'calc(100vh - ' + logo + 'px)');
}

export const sidebarMenuControls = () => {
    $('.main-menu>ul.menu-list>li>span').click(function () {

        var elem = $(this).parent();


        if (elem.find('>ul').css('height') == '0px' && !elem.hasClass('no-submenu')) {


            $('.main-menu ul>li.active>ul').animate({height: '0'}, 400);
            $('.main-menu ul>li.active').removeClass('active');
            elem.addClass('active');
            elem.find('>ul').css('height', 'auto');

            // console.log(elem.position().top);
            elem.find('>ul').css('top', elem.position().top);
            var autoHeight = elem.find('>ul').css('height');
            elem.find('>ul').css('height', '0').animate({height: autoHeight}, 400);
        }

        if ($('aside').hasClass('min-menu') && elem.find('>ul').css('height') != '0px') {
            $('.main-menu ul>li.active>ul').animate({height: '0'}, 400);
        }
    });

    $('#burger .navBurger').click(function () {

        //если сайдбар свёрнут
        if ($(this).hasClass('active')) {

            var el = $(this);

            $(this).removeClass('active');

            $('aside').animate({width: '200px'}, 400);
            $('aside .header-logo .home-link').fadeIn();
            $('aside').removeClass('min-menu');
            $('.main-menu ul>li.active>ul').css('height', '0');

            setTimeout(function () {
                $('.main-menu ul>li.active>ul').css('height', 'auto');
                var autoHeight = $('.main-menu ul>li.active>ul').css('height');
                $('.main-menu ul>li.active>ul').css('height', '0').animate({height: autoHeight}, 400);

            }, 400);


        }
        // если сайдбар развёрнут
        else {

            var el = $(this);

            $('.main-menu ul>li.active>ul').animate({height: '0'}, 400);


            //
            if ($('.main-menu ul>li.active>ul').length) {
                setTimeout(function () {
                    el.addClass('active');
                    $('aside').addClass('min-menu');
                    $('aside').animate({width: '50px'}, 400);
                    $('aside .header-logo .home-link').fadeOut();
                }, 400);
            }
            else {
                el.addClass('active');
                $('aside').addClass('min-menu');
                $('aside').animate({width: '50px'}, 400);
                $('aside .header-logo .home-link').fadeOut();
            }


        }
    });
}