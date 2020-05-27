import React, {Component} from 'react';
import {TransitionablePortal, Modal} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class OrderModal extends Component {
    render() {
        return (
            <TransitionablePortal open={this.props.modalOpen} transition={{animation: 'scale', duration: 600}}>
                <Modal size="fullscreen" onClose={this.props.handleClose} open={this.props.modalOpen} className="modal-order" closeOnDimmerClick={true} closeOnEscape={true}>
                    <Modal.Header>
                        <i className="close icon" onClick={this.props.handleClose}></i>

                        <div className="modal-head">
                            <h2 className="modal-title">
                                {this.props.productValue} Заказ № 262469 [15586024052] от 2019-05-23 12:06:45 (Изменено: 2019-06-10 20:19:07)
                            </h2>

                            <div className="order-passed">

                                <div className="ui toggle checkbox">

                                    <input type="checkbox" name="order-passed" id="order-passed"/>
                                    <label htmlFor="order-passed"><i className="ui icon flag checkered"></i> Сдано в
                                        заказ</label>
                                </div>
                            </div>
                        </div>


                        <div className="modal-order-buttons">
                            <button id="create-notification"
                                    className="ui labeled icon button mini open-secondary-modal"
                                    data-modal-target="modal-order-notification"><i className="bell icon"></i> Напомнить
                            </button>
                            <button className="ui labeled icon button mini"><i className="envelope icon"></i> SMS
                            </button>
                            <div className="ui floating dropdown labeled icon button mini">
                                <i className="phone icon"></i>
                                <span className="text">Позвонить</span>
                                <div className="menu">
                                    <div className="item">SIP ТЕЛЕФОН</div>
                                    <div className="item">BINOTEL</div>
                                </div>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="ui grid">
                            <div className="five wide column">

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Контактная информация</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Страна <i className="ui icon"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown">
                                                <input type="hidden" name="country"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text">Выберите страну</div>
                                                <div className="menu">

                                                    <div className="item" data-value="af"><img
                                                        src="img/flags/no_icon.ico"
                                                        alt=""/>Не
                                                        указано
                                                    </div>
                                                    <div className="item" data-value="af"><i className="af flag"></i>Афганистан
                                                    </div>
                                                    <div className="item" data-value="af"><i
                                                        className="ui icon globe"></i>Все
                                                    </div>
                                                    <div className="item" data-value="by"><i className="by flag"></i>Беларусь
                                                    </div>
                                                    <div className="item" data-value="md"><i className="md flag"></i>Молдова
                                                    </div>
                                                    <div className="item" data-value="ae"><i className="ae flag"></i>Арабские
                                                        Эмираты
                                                    </div>
                                                    <div className="item" data-value="hu"><i className="hu flag"></i>Венгрия
                                                    </div>
                                                    <div className="item" data-value="kz"><i className="kz flag"></i>Казахстан
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Покупатель <i className="ui icon male"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Телефон <i className="ui icon phone"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Email <i className="ui icon mail outline"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Отдел <i className="ui icon building"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown">
                                                <input type="hidden" name="office"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text">Розничный магазин</div>
                                                <div className="menu">

                                                    <div className="item" data-value="af">Розничный магазин</div>
                                                    <div className="item" data-value="af">Оптовый отдел</div>
                                                    <div className="item" data-value="af">Отдел ОАЭ</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Статус заказа <i className="ui icon star outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown">
                                                <input type="hidden" name="status"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text"><a
                                                    className="ui green empty circular label"></a>Завершено
                                                </div>
                                                <div className="menu">

                                                    <div className="item" data-value="af"><img
                                                        src="img/flags/no_icon.ico"
                                                        alt=""/>Не
                                                        указано
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui grey empty circular label"></a>
                                                        Новый
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui green empty circular label"></a>
                                                        Завершено
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui yellow empty circular label"></a>
                                                        Отправлено
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui red empty circular label"></a>
                                                        Возврат товара (склад)
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui pink empty circular label"></a>
                                                        Отказ
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui teal empty circular label"></a>
                                                        Успешно выполнено
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui brown empty circular label"></a>
                                                        Не подтверждённо
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui purple empty circular label"></a>
                                                        Успешно не выполнено
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui red empty circular label"></a>
                                                        Возврат товара в пути
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui grey empty circular label"></a>
                                                        Одесса
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui green empty circular label"></a>
                                                        В пути деньги
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui violet empty circular label"></a>
                                                        На контроле
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <a className="ui brown empty circular label"></a>
                                                        Утилизация
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Причина отказа <i className="ui icon info"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown disabled">
                                                <input type="hidden" name="status"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text">Не указано</div>
                                                <div className="menu">

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Статус заказа <i className="ui icon star outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown">
                                                <input type="hidden" name="status"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text"> Не указано</div>
                                                <div className="menu">

                                                    <div className="item" data-value="af"><img
                                                        src="img/flags/no_icon.ico"
                                                        alt=""/>Не
                                                        указано
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <i className="ui icon money"></i>
                                                        Оплачено
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <i className="icon credit card outline"></i>
                                                        Предоплата
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <i className="ui icon times"></i>
                                                        Отказ
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <i className="ui icon envelope "></i>
                                                        Налож. платеж
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <i className="ui icon refresh"></i>
                                                        Обмен
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Комментарий <i className="icon"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <textarea type="text" rows="3" placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">UTM метки</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_source <i className="icon crosshairs"></i>
                                        </label>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_medium <i className="icon crosshairs"></i>
                                        </label>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_term <i className="icon crosshairs"></i>
                                        </label>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_content <i className="icon crosshairs"></i>
                                        </label>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_campaign <i className="icon crosshairs"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="five wide column">
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Доставка</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Способ<i className="icon truck"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid selection dropdown">
                                                <input type="hidden" name="delivery_type"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text">
                                                    <img src="img/delivery/ico-new-post.ico" alt=""/>
                                                    Новая Почта
                                                </div>
                                                <div className="menu">

                                                    <div className="item" data-value="af">
                                                        <img src="img/flags/no_icon.ico" alt=""/>
                                                        Нет значения
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-new-post.ico" alt=""/>
                                                        Новая Почта
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-self.ico" alt=""/>
                                                        Самовывоз
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-post-ua.ico" alt=""/>
                                                        Укрпочта
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/intime.ico" alt=""/>
                                                        Интайм
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-autolux.ico" alt=""/>
                                                        Автолюкс
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-delivery-auto.ico" alt=""/>
                                                        Деливери
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-post-ru.ico" alt=""/>
                                                        Почта России
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-kazpost.ico" alt=""/>
                                                        Каз почта
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/cdek.ico" alt=""/>
                                                        СДЭК
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/fetchr.ico" alt=""/>
                                                        Fetchr
                                                    </div>

                                                    <div className="item" data-value="af">
                                                        <img src="img/delivery/ico-post-ru.ico" alt=""/>
                                                        Почта России
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            ТТН <i className="icon file alternate outline"></i>

                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                            <a href="#" className="input-setting open-secondary-modal"
                                               data-modal-target="modal-create-ttn">
                                                создать
                                            </a>

                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Адрес <i className="icon map marker alternate"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Отправлено <i className="icon calendar check outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui calendar" id="order-modal-send">
                                                <div className="ui input">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Служебная информация</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Сотрудник<i className="icon user circle"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui fluid search selection dropdown">
                                                <input type="hidden" name="delivery_type"/>
                                                <i className="dropdown icon"></i>
                                                <div className="default text">
                                                    Админ
                                                </div>
                                                <div className="menu">

                                                    <div className="item" data-value="af">
                                                        Админ
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        Менеджер
                                                    </div>
                                                    <div className="item" data-value="af">
                                                        Гость
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            IP <i className="icon desktop"></i>
                                        </label>
                                        <div className="order-setting">
                                            <p className="setting-info">
                                                178.213.2.40
                                                <i className="icon angle double right"></i>
                                                <a href="#">блокировать</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Сайт <i className="icon globe"></i>
                                        </label>
                                        <div className="order-setting">
                                            <p className="setting-info grey">
                                                stagery-test.ukraine-shop.top

                                                <a href="#"><i className="icon linkify"></i></a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            order_id <i className="icon calendar check outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <p className="setting-info">
                                                15559154267
                                                <a href="#"><i className="icon info circle"></i></a>
                                                <span>от 2019-04-22 09:43:46</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Дополнительно</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Доп. поле 1 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui  input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Доп. поле 2 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui  input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Доп. поле 3 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui  input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Доп. поле 4 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui  input">
                                                <input type="text" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="six wide column">
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Товар</div>

                                    <table className="ui table modal-order-products">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>sub_id</th>
                                            <th>sub_name</th>
                                            <th width="150px">Товар</th>
                                            <th>Цена</th>
                                            <th>Кол-во</th>
                                            <th>Итого</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1680</td>
                                            <td>0</td>
                                            <td></td>
                                            <td><a href="#">Рубашка Espirit</a></td>
                                            <td className="num-cell">599.00</td>
                                            <td className="num-cell">1</td>
                                            <td className="num-cell">599.00</td>
                                            <td><a href="#" className="remove-item"><i className="icon times"></i></a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1678</td>
                                            <td>0</td>
                                            <td></td>
                                            <td><a href="#">Кроссовки Nike</a></td>
                                            <td className="num-cell">1399.00</td>
                                            <td className="num-cell">1</td>
                                            <td className="num-cell">1399.00</td>
                                            <td><a href="#" className="remove-item"><i className="icon times"></i></a>
                                            </td>
                                        </tr>

                                        </tbody>

                                        <tfoot>
                                        <tr>
                                            <td colSpan="5">
                                                <a href="#">
                                                    <i className="icon plus circle"></i> Добавить товар
                                                </a>

                                                <span>Всего:</span>
                                            </td>
                                            <td>
                                                <b>2</b>
                                            </td>
                                            <td>
                                                <b className="sum">
                                                    1998.00
                                                </b>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">
                                        <div className="ui toggle checkbox">
                                            <input type="checkbox" name="refresh"/>
                                            <label htmlFor=""></label>
                                        </div>
                                        Допродажа
                                    </div>

                                    <table className="ui table modal-order-products">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>sub_id</th>
                                            <th>sub_name</th>
                                            <th width="150px">Товар</th>
                                            <th>Цена</th>
                                            <th>Кол-во</th>
                                            <th>Итого</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <tr>
                                            <td>1678</td>
                                            <td>0</td>
                                            <td></td>
                                            <td><a href="#">Кроссовки Nike</a></td>
                                            <td className="num-cell">1399.00</td>
                                            <td className="num-cell">1</td>
                                            <td className="num-cell">1399.00</td>
                                            <td><a href="#" className="remove-item"><i className="icon times"></i></a>
                                            </td>
                                        </tr>

                                        </tbody>

                                        <tfoot>
                                        <tr>
                                            <td colSpan="5">
                                                <a href="#">
                                                    <i className="icon plus circle"></i> Добавить товар
                                                </a>

                                                <span>Всего:</span>
                                            </td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                            <td>
                                                <b className="sum">
                                                    1998.00
                                                </b>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>

                    <Modal.Actions>
                        <div className="modal-foot">
                            <div className="total-sum">
                                <p>Сумма заказа: <span>1038</span></p>
                            </div>

                            <div className="modal-save">
                                <button className="ui labeled icon button blue"><i className="save icon"></i> Сохранить
                                    и
                                    закрыть
                                </button>
                            </div>
                        </div>
                    </Modal.Actions>
                </Modal>
            </TransitionablePortal>
        )
    }

}

OrderModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    productValue: PropTypes.string.isRequired
};

export default OrderModal;