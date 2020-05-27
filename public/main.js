/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/all.js":
/*!**************************!*\
  !*** ./public/js/all.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  /*mainMenuHeight();
  mainTableHeight();
  $(window).on('resize', mainTableHeight());*/
  sidebarMenuControls();
  /*headerDefinitions();
  statusScroll();
  //tableDefinitions();
  orderModalSendCalendar($('#order-modal-send'));
  orderModalSendCalendar($('#notification-date'));
  modalDefinitions();
   // Подключаем табы
  tabs();*/
}); // Табы

function tabs() {
  // Табы на шаблоне "clients"
  $('.custom-tabs .item').tab();
}

function sidebarMenuControls() {
  $('.main-menu>ul.menu-list>li>span').click(function () {
    var elem = $(this).parent();

    if (elem.find('>ul').css('height') == '0px' && !elem.hasClass('no-submenu')) {
      $('.main-menu ul>li.active>ul').animate({
        height: '0'
      }, 400);
      $('.main-menu ul>li.active').removeClass('active');
      elem.addClass('active');
      elem.find('>ul').css('height', 'auto'); // console.log(elem.position().top);

      elem.find('>ul').css('top', elem.position().top);
      var autoHeight = elem.find('>ul').css('height');
      elem.find('>ul').css('height', '0').animate({
        height: autoHeight
      }, 400);
    }

    if ($('aside').hasClass('min-menu') && elem.find('>ul').css('height') != '0px') {
      $('.main-menu ul>li.active>ul').animate({
        height: '0'
      }, 400);
    }
  });
  $('#burger .navBurger').click(function () {
    //если сайдбар свёрнут
    if ($(this).hasClass('active')) {
      var el = $(this);
      $(this).removeClass('active');
      $('aside').animate({
        width: '200px'
      }, 400);
      $('aside .header-logo .home-link').fadeIn();
      $('aside').removeClass('min-menu');
      $('.main-menu ul>li.active>ul').css('height', '0');
      setTimeout(function () {
        $('.main-menu ul>li.active>ul').css('height', 'auto');
        var autoHeight = $('.main-menu ul>li.active>ul').css('height');
        $('.main-menu ul>li.active>ul').css('height', '0').animate({
          height: autoHeight
        }, 400);
      }, 400);
    } // если сайдбар развёрнут
    else {
        var el = $(this);
        $('.main-menu ul>li.active>ul').animate({
          height: '0'
        }, 400); //

        if ($('.main-menu ul>li.active>ul').length) {
          setTimeout(function () {
            el.addClass('active');
            $('aside').addClass('min-menu');
            $('aside').animate({
              width: '50px'
            }, 400);
            $('aside .header-logo .home-link').fadeOut();
          }, 400);
        } else {
          el.addClass('active');
          $('aside').addClass('min-menu');
          $('aside').animate({
            width: '50px'
          }, 400);
          $('aside .header-logo .home-link').fadeOut();
        }
      }
  });
}

function headerDefinitions() {
  //tariff info popup
  $('header .header-tariff .tariff-popup-info').popup({
    variation: 'small inverted'
  });
  $('header .header-controls .control-block a').popup({
    variation: 'mini'
  });
  $('.content-section .content-controls .refresh-button').popup({
    variation: 'mini'
  });
  $('header .header-controls .user-controls').popup({
    variation: 'mini',
    on: 'click'
  }); // Контакты кнопки навигации , "Выбрать все поля"

  $('.call-popup-js-mini').popup({
    variation: 'mini'
  });
  $('.ui.dropdown').each(function () {
    $(this).dropdown({
      fullTextSearch: true
    });
  });
}

function modalDefinitions() {
  /*$('.modal-about-site.modal')
      .modal('attach events', '#about-site', 'show');
   $('.modal-tariffs.modal')
      .modal('attach events', '#all-tariffs', 'show');
   $('.modal-contacts.modal')
      .modal('attach events', '#header-contacts', 'show');*/
  $('[data-modal-target]').click(function () {
    $('#' + $(this).attr('data-modal-target')).modal('show');
  });
}

function tableDefinitions() {
  $('.order-products').each(function () {
    $(this).find('.products-counter').popup({
      popup: $(this).find('.ui.popup'),
      variation: 'tiny inverted',
      position: 'bottom center'
    });
  });
  initSemanticCalendar($('#send-from'), $('#send-to'));
  initSemanticCalendar($('#added-from'), $('#added-to'));
  initSemanticCalendar($('#updated-from'), $('#updated-to'));
  initSemanticCalendar($('#passed-from'), $('#passed-to'));
  tableRowClick();
  orderModal();
  productModal();
  categoryModal();
  manufacturersModal();
} //Модальное окно заказа


function orderModal() {
  $('.main-table.orders-table tbody tr').dblclick(function () {
    $('.modal-order.modal').modal({}).modal('show');
  });
  var secondaryModal = $('.secondary-modal');
  $('.open-secondary-modal').click(function () {
    var id = $(this).attr('data-modal-target');
    $('#' + id).modal({
      allowMultiple: true,
      closable: true,
      centered: true,
      onShow: function onShow() {
        $('.modal-order').dimmer('show');
      },
      onHide: function onHide() {
        $('.modal-order').dimmer('hide');
      }
    }).modal('show');
  });
  closeModalByDimmer(secondaryModal);
} //Модальное окно товара


function productModal() {
  $('.main-table.products-table tbody tr').dblclick(function () {
    $('.modal-product.modal').modal({}).modal('show');
  });
} //Модальное окно категории


function categoryModal() {
  $('.main-table.category-table tbody tr').dblclick(function () {
    $('.modal-category.modal').modal({}).modal('show');
  });
} //Модальное окно производителей


function manufacturersModal() {
  $('.main-table.manufacturers-table tbody tr').dblclick(function () {
    $('.modal-manufacturers.modal').modal({}).modal('show');
  });
} //Вызов модального окна


$('.main-table tbody tr').dblclick(function () {
  var dataAttrForCallModal = $(this).closest('.main-table').attr('data-modal');
  $('.modal-' + dataAttrForCallModal + '.modal').modal({}).modal('show');
}); //Закрыть модальное окно

function closeModalByDimmer(modal) {
  $(document).mouseup(function (e) {
    var container = modal;
    var alert = $('.ui-alert-content'); // if the target of the click isn't the container nor a descendant of the container

    if (!container.is(e.target) && container.has(e.target).length === 0 && !alert.is(e.target) && alert.has(e.target).length === 0) {
      modal.modal('hide');
    }
  });
} // проверка наведения на чекбокс


var checkboxBol = false;
$("tr .checkbox").mouseover(function () {
  checkboxBol = true;
});
$("tr .checkbox").mouseleave(function () {
  checkboxBol = false;
}); //Клик на строку в таблице

function tableRowClick() {
  $('.main-table tbody tr').click(function (e) {
    // если курсор наведён на чекбокс
    //функция не вызывается
    if (!checkboxBol) {
      if (e.shiftKey) {
        var start = $('.main-table tbody tr.active-row').eq(0);
        var end = $(this);
        $('.main-table tbody tr.active-row').removeClass('active-row');
        start.addClass('active-row');
        end.addClass('active-row');
        var direction = end.index() > start.index() ? 'forward' : 'back'; // console.log(start.index());
        // console.log(end.index());

        if (direction === 'forward') {
          start.nextUntil(end).addClass('active-row');
        } else {
          end.nextUntil(start).addClass('active-row');
        }
      } else if (e.ctrlKey) {
        if (!$(this).hasClass('active-row')) {
          $(this).addClass('active-row');
        } else {
          $(this).removeClass('active-row');
        }
      } else {
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
      } else {
        $('.selected-blocks').css('opacity', '0');
      }
    }
  });
} //Скрипт скролла статусов на странице заказов


function statusScroll() {
  $('#tabs-panel-statusy .tabs-arrow').click(function () {
    var tabs = $(this).siblings('#ul-statusy');
    var leftPos = tabs.scrollLeft();

    if ($(this).attr('id') === 'button-arrow-left-tabs') {
      tabs.animate({
        scrollLeft: leftPos - 250
      }, 300);
    } else if ($(this).attr('id') === 'button-arrow-right-tabs') {
      tabs.animate({
        scrollLeft: leftPos + 250
      }, 300);
    }
  });
}

function initSemanticCalendar(start, end) {
  start.calendar({
    type: 'date',
    endCalendar: end,
    monthFirst: false,
    firstDayOfWeek: 1,
    ampm: false,
    text: {
      days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      today: 'Сегодня',
      now: 'Сейчас',
      am: 'AM',
      pm: 'PM'
    },
    formatter: {
      date: function date(_date, settings) {
        if (!_date) return '';

        var day = _date.getDate();

        var month = _date.getMonth() + 1;

        var year = _date.getFullYear();

        return day + '/' + month + '/' + year;
      }
    },
    popupOptions: {
      position: 'bottom left'
    }
  });
  end.calendar({
    type: 'date',
    startCalendar: start,
    monthFirst: false,
    ampm: false,
    text: {
      days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      today: 'Сегодня',
      now: 'Сейчас',
      am: 'AM',
      pm: 'PM'
    },
    formatter: {
      date: function date(_date2, settings) {
        if (!_date2) return '';

        var day = _date2.getDate();

        var month = _date2.getMonth() + 1;

        var year = _date2.getFullYear();

        return day + '/' + month + '/' + year;
      }
    },
    popupOptions: {
      position: 'bottom left'
    }
  });
}

function orderModalSendCalendar(modal) {
  modal.calendar({
    type: 'datetime',
    monthFirst: false,
    ampm: false,
    text: {
      days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      today: 'Сегодня',
      now: 'Сейчас',
      am: 'AM',
      pm: 'PM'
    },
    firstDayOfWeek: 1,
    formatter: {
      date: function date(_date3, settings) {
        if (!_date3) return '';

        var day = _date3.getDate();

        var month = _date3.getMonth() + 1;

        var year = _date3.getFullYear();

        return day + '/' + month + '/' + year;
      }
    },
    popupOptions: {
      position: 'bottom left'
    }
  });
} //Автовысота таблицы


function mainTableHeight() {
  var table = $('.main-table');

  if (table.length) {
    var sum = 0;
    table.siblings().each(function () {
      sum += parseFloat($(this).outerHeight());
    });
    sum += $('header').outerHeight() + $('footer').outerHeight();
    $('.main-table').css('height', 'calc(100vh - ' + sum + 'px - 25px)');
  }
} //Автовысота меню


function mainMenuHeight() {
  var nav = $('aside nav.main-menu');
  var logo = $('.header-logo').height();
  nav.css('max-height', 'calc(100vh - ' + logo + 'px)');
}

function alertMessage(type, head, text, time) {
  var bgColor = '#55a9ee';
  var alertIcon = 'info circle';

  if (type == "danger") {
    bgColor = "#DB2828";
    alertIcon = 'times box';
  } else if (type == "warning") {
    bgColor = "#F2711C";
    alertIcon = 'warning sign icon';
  } else if (type == "success") {
    bgColor = "#21ba45";
    alertIcon = 'checkmark box';
  } else if (type == "info") {
    bgColor = "#55a9ee";
    alertIcon = 'info circle';
  }

  if (type && head && text) {
    $.uiAlert({
      textHead: head,
      // header
      text: text,
      // Text
      bgcolor: bgColor,
      // background-color
      textcolor: '#fff',
      // color
      position: 'top-right',
      // position . top And bottom ||  left / center / right
      icon: alertIcon,
      // icon in semantic-UI
      time: time ? time : 5 // time

    });
  }
} // стрелки сортировки


$(".table_sort_js").click(function () {
  var up = $(".sort_up");
  var down = $(".sort_down");
  var active;

  if (up.hasClass('d-none')) {
    up.removeClass('d-none');
    down.addClass("d-none");
    active = 'ASC';
  } else {
    down.removeClass('d-none');
    up.addClass('d-none');
    active = 'DESC';
  } // do something
  // with var active

}); // Загрузка картинки

$(".photo-input_js").change(function () {
  var $i = $(this),
      // Файл инпута
  className = $i.attr("data-class"),
      // атрибут инпута
  parent = $i.parent(),
      // получаем родителя
  input = $i[0]; // Получаем елемент

  if (input.files && input.files[0]) {
    file = input.files[0]; // Файл

    fr = new FileReader(); // Читаем файл

    fr.onload = function () {
      // додавляем в бекграунд
      parent.find("." + className + "__label").css({
        "background-image": "url('" + fr.result + "')"
      });
    };

    fr.readAsDataURL(file);
  } else {
    // тут понятно
    console.log("File not selected or browser incompatible.");
  }
}); // Задаём первым елементам таблицы бекграунд
// родительского элемента

(function () {
  $('.setBackgroundColorForTd tr').each(function (i, item) {
    var parentBacgroundColor = $(this).attr("class");
    $(this).find("td").first().addClass(parentBacgroundColor);
  });
})();

/***/ })

/******/ });