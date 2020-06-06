export const mainTableHeight = () => {

    var table = $('.main-table');
    if (table.length) {

        var sum = 0;

        table.siblings().each(function () {
            sum += parseFloat($(this).outerHeight());
        });

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