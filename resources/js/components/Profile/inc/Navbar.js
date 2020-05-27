import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Navbar extends Component{
    constructor(){
        super();
    }


    componentDidMount(){
        this.sidebarMenuControls();
        this.mainMenuHeight();
    }

    mainMenuHeight() {
        var nav = $('aside nav.main-menu');

        var logo = $('.header-logo').height();

        nav.css('max-height', 'calc(100vh - ' + logo + 'px)');
    }

    sidebarMenuControls() {
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

    render(){
        return(
            <aside>
                <div className="header-logo">
                    <div id="burger">
                        <div className="navBurger"></div>
                    </div>

                    <a href="#" className="home-link" data-modal-target="modal-ttn-status">
                        <img src="img/CRM-logo_small.png" alt="" />
                            LP-CRM
                    </a>
                </div>


                <nav className="main-menu">
                    <ul className="menu-list">
                        <li className="no-submenu" title="Рабочий стол">
                    <span>
                    <i className="fas fa-desktop"></i>
                    <NavLink to="/">Рабочий стол</NavLink>
                    </span>
                        </li>
                        <li title="Контакты" className="active">
                    <span>
                    <i className="fas fa-users"></i>
                    Контакты
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Контакты</li>

                                <li title="Группы пользователей" className="active"><a
                                    href="/build/tabs/contacts/user_groups.php">Группы пользователей </a></li>
                                <li title="Пользователи"><a href="#">Пользователи </a></li>
                                <li title="Отделы"><a href="/build/tabs/contacts/offices.php">Отделы </a></li>
                                <li title="Группы клиентов"><a href="/build/tabs/contacts/clients_groups.php">Группы
                                    клиентов </a></li>
                                <li title="Клиенты"><a href="/build/tabs/contacts/clients.php">Клиенты </a></li>
                            </ul>
                        </li>
                        <li title="Заказы">
                    <span>
                        <i className="far fa-money-bill-alt"></i>
                        Заказы <b className="count-info">2</b>
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Заказы</li>

                                <li title="Статусы заказов"><a href="#">Статусы заказов </a></li>
                                <li title="Способы оплаты"><a href="#">Способы оплаты </a></li>
                                <li className="active" title="Перечень заказов"><a href="#">Перечень заказов <span
                                    className="count-info">2</span></a>
                                </li>
                                <li title="Способы доставки"><a href="#">Способы доставки </a></li>
                            </ul>
                        </li>
                        <li title="Каталог">
                    <span>
                        <i className="fas fa-inbox"></i>
                        Каталог
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Каталог</li>

                                <li title="Категории товаров"><a href="/build/tabs/catalog/categories.php">Категории
                                    товаров </a></li>
                                <li title="Товары"><NavLink to="/products">Товары </NavLink></li>
                                <li title="Производители"><a
                                    href="/build/tabs/catalog/manufacturers.php">Производители </a></li>
                                <li title="Валюта"><a href="/build/tabs/catalog/currency.php">Валюта </a></li>
                                <li title="Сайты (лендинги)"><a href="/build/tabs/catalog/landings.php">Сайты
                                    (лендинги) </a></li>
                                <li title="Категории атрибутов"><a href="/build/tabs/catalog/attributes_categories.php">Категории
                                    атрибутов </a></li>
                                <li title="Атрибуты (Sub-ID)"><a href="/build/tabs/catalog/attributes.php">Атрибуты
                                    (Sub-ID) </a></li>
                                <li title="Цвета товаров"><a href="/build/tabs/catalog/colors.php">Цвета товаров </a>
                                </li>
                                <li title="Страны"><a href="/build/tabs/catalog/countries.php">Страны </a></li>
                            </ul>
                        </li>
                        <li title="Отправка товара">
                    <span>
                    <i className="fas fa-truck"></i>
                    Отправка товара
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Отправка товара</li>

                                <li title="Список для курьера">
                                    <a href="/build/tabs/send_products/shipment.php">Список для курьера </a>
                                </li>
                                <li title="Реестры НП"><a href="#">Реестры НП </a></li>
                            </ul>
                        </li>
                        <li title="Склад">
                    <span>
                    <i className="fas fa-archive"></i>
                    Склад
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Склад</li>

                                <li title="Поставщики"><a href="#">Поставщики </a></li>
                                <li title="Приход товара"><a href="#">Приход товара </a></li>
                                <li title="Движение товаров"><a href="#">Движение товаров </a></li>
                                <li title="Списание товара"><a href="#">Списание товара </a></li>
                            </ul>
                        </li>
                        <li title="Шаблоны">
                    <span>
                        <i className="fas fa-file-alt"></i>
                        Шаблоны
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Шаблоны</li>

                                <li title="SMS-шаблоны"><a href="#">SMS-шаблоны </a></li>
                            </ul>
                        </li>
                        <li title="Модули">
                    <span>
                        <i className="fas fa-puzzle-piece"></i>
                        Модули
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Модули</li>

                                <li title="Список модулей"><a href="#">Список модулей </a></li>
                            </ul>
                        </li>
                        <li title="Статистика">
                    <span>
                    <i className="fas fa-chart-line"></i>
                    Статистика
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Статистика</li>

                                <li title="Статистика (Заказы)"><a href="#">Статистика (Заказы) </a></li>
                            </ul>
                        </li>
                        <li title="Рассылка">
                    <span>
                    <i className="fas fa-bullhorn"></i>
                    Рассылка
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Рассылка</li>

                                <li title="SMS рассылка"><a href="#">SMS рассылка </a></li>
                            </ul>
                        </li>

                        <li title="Настройки">
                    <span>
                    <i className="fas fa-cog"></i>
                    Настройки
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Настройки</li>

                                <li title="Система"><a href="#">Система </a></li>
                                <li title="История"><a href="#">История </a></li>
                                <li title="Блокировка IP"><a href="#">Блокировка IP </a></li>
                            </ul>
                        </li>

                        <li title="Корзина">
                    <span>
                    <i className="fas fa-trash-alt"></i>
                    Корзина
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">Корзина</li>

                                <li title="Заказы (удалённые)"><a href="#">Заказы (удалённые) </a></li>
                            </ul>
                        </li>

                        <li title="FAQ">
                    <span>
                    <i className="fas fa-info-circle"></i>
                    FAQ
                    </span>
                            <ul>
                                <li className="min-menu-title no-hover">FAQ</li>

                                <li title="Вопросы-ответы"><a href="#">Вопросы-ответы </a></li>
                                <li title="Инструкции (видео)"><a href="#">Инструкция (видео) </a></li>
                                <li title="Документация API"><a href="#">Документация API </a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }

}