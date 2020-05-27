import React, {Component} from 'react';
import {TransitionablePortal, Modal} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProductModal extends Component {
    render() {
        return (

            <TransitionablePortal  open={this.props.productModalOpened} transition={{animation: 'scale', duration: 600}}>
                <Modal size="large" onClose={this.props.closeProductModal} open={this.props.productModalOpened} className="modal-product" closeOnDimmerClick={true} closeOnEscape={true}>
                    <Modal.Header>
                        <i className="close icon" onClick={this.props.closeProductModal}>&nbsp;</i>

                        <div className="modal-head">
                            <h2 className="modal-title">
                                {this.props.productValue} Изменение товара [2403] : (RU) Косметический набор Lamiton *5073*
                            </h2>
                        </div>
                    </Modal.Header>

                    <Modal.Content>
                        <div className="order-container">

                            <div className="ui two column stackable grid container">

                                <div className="column">

                                    <div className="ui stackable grid">

                                        <div className="sixteen wide column">

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Название <i className="ui icon tag"></i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Полное название (title) <i className="ui icon tag"></i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Категория <i className="ui icon sitemap"></i>
                                                </label>
                                                <div className="order-setting">
                                                    <select className="ui search dropdown">
                                                        <option>Не указано</option>
                                                        <option>ТВ шоп</option>
                                                        <option>Для дома</option>
                                                        <option>Для сада</option>
                                                        <option>Для кухни</option>
                                                        <option>Автотовар</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Локализация <i className="ui icon globe"></i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="country"/>
                                                        <i className="dropdown icon"></i>
                                                        <div className="default text">Выберите страну</div>
                                                        <div className="menu">

                                                            <div className="item" data-value="af"><img
                                                                src="../../build/img/flags/no_icon.ico" alt=""/>Не
                                                                указано
                                                            </div>
                                                            <div className="item" data-value="af"><i
                                                                className="af flag">&nbsp;</i>Афганистан
                                                            </div>
                                                            <div className="item" data-value="af"><i
                                                                className="ui icon globe">&nbsp;</i>Все
                                                            </div>
                                                            <div className="item" data-value="by"><i
                                                                className="by flag">&nbsp;</i>Беларусь
                                                            </div>
                                                            <div className="item" data-value="md"><i
                                                                className="md flag">&nbsp;</i>Молдова
                                                            </div>
                                                            <div className="item" data-value="ae"><i
                                                                className="ae flag">&nbsp;</i>Арабские Эмираты
                                                            </div>
                                                            <div className="item" data-value="hu"><i
                                                                className="hu flag">&nbsp;</i>Венгрия
                                                            </div>
                                                            <div className="item" data-value="kz"><i
                                                                className="kz flag">&nbsp;</i>Казахстан
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Модель <i className="ui icon registered outline">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Артикул <i className="ui icon sticky note outline">&nbsp;</i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Валюта <i
                                                    className="ui icon money bill alternate outline">&nbsp;</i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="status"/>
                                                        <i className="dropdown icon">&nbsp;</i>
                                                        <div className="default text">Украинская гривна (грн.)</div>
                                                        <div className="menu">

                                                            <div className="item" data-value="af">
                                                                Украинская гривна (грн.)
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Русский рубль (руб.)
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Доллар ($)
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Евро (€)
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Венгерский форинт (HUF)
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Производитель <i className="icon trademark">&nbsp;</i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="status"/>
                                                        <i className="dropdown icon">&nbsp;</i>
                                                        <div className="default text"> Не указано</div>
                                                        <div className="menu">

                                                            <div className="item" data-value="af"><img
                                                                src="../../build/img/flags/no_icon.ico" alt=""/>Не
                                                                указано
                                                            </div>

                                                            <div className="item" data-value="af">

                                                                LG
                                                            </div>

                                                            <div className="item" data-value="af">

                                                                Samsung
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Falcon
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Tenex
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Gazer
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Globex
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Kenwood
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Palmann
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                Pioneer
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Отдел <i className="icon building">&nbsp;</i>
                                                </label>

                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="office"/>
                                                        <i className="dropdown icon">&nbsp;</i>
                                                        <div className="default text">Розничный магазин</div>
                                                        <div className="menu">

                                                            <div className="item" data-value="af">Розничный магазин
                                                            </div>
                                                            <div className="item" data-value="af">Оптовый отдел</div>
                                                            <div className="item" data-value="af">Отдел ОАЭ</div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Цвет <i className="icon eye dropper">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="office"/>
                                                        <i className="dropdown icon">&nbsp;</i>
                                                        <div className="default text">Не указано</div>
                                                        <div className="menu">
                                                            <div className="item" data-value="af">
                                                                <img src="../../build/img/flags/no_icon.ico" alt=""/>
                                                                Не указано
                                                            </div>

                                                            <div className="item" data-value="af">Белый</div>
                                                            <div className="item" data-value="af">Чёрный</div>
                                                            <div className="item" data-value="af">Синий</div>
                                                            <div className="item" data-value="af">Красный</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Сайт <i className="icon flag checkered">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui fluid selection dropdown">
                                                        <input type="hidden" name="office"/>
                                                        <i className="dropdown icon">&nbsp;</i>
                                                        <div className="default text">Не указано</div>
                                                        <div className="menu">
                                                            <div className="item" data-value="af">
                                                                <img src="../../build/img/flags/no_icon.ico" alt=""/>
                                                                Не указано
                                                            </div>

                                                            <div className="item" data-value="af">
                                                                <i className="icon globe">&nbsp;</i>
                                                                test.com
                                                            </div>
                                                            <div className="item" data-value="af">
                                                                <i className="icon globe">&nbsp;</i>
                                                                lorem.ru
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Цена продажи <i className="icon shopping basket">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Цена закупки <i className="icon shopping basket">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Цена акционная <i className="icon percent">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <div className="ui input">
                                                        <input type="text" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-setting-row product-description-wrap">
                                                <label htmlFor="">
                                                    Описание <i className="icon align justify">&nbsp;</i>
                                                </label>
                                                <div className="ui input">
                                                    <textarea rows="3" placeholder=""></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="column">

                                    <div className="column">

                                        <div className="ui horizontal divider">Выбрать фото</div>

                                        <div className="chose-photo">

                                            <label htmlFor="chose-photo__input" className="chose-photo__label"></label>
                                            <input type="file"
                                                   id="chose-photo__input"
                                                   data-class="chose-photo"
                                                   className="photo-input_js"/>

                                        </div>

                                    </div>

                                    <div className="column">

                                        <div className="ui horizontal divider">Нова почта</div>

                                        <div className="order-setting-row">
                                            <label htmlFor="">
                                                Опис вантажу <i className="arrows alternate icon"></i>
                                            </label>
                                            <div className="order-setting">
                                                <select className="ui search dropdown">
                                                    <option>Не указано</option>
                                                    <option>ТВ шоп</option>
                                                    <option>Для дома</option>
                                                    <option>Для сада</option>
                                                    <option>Для кухни</option>
                                                    <option>Автотовар</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="order-setting-row">

                                            <label htmlFor="">
                                                Вес <i className="arrows alternate icon"></i>
                                            </label>

                                            <div className="order-setting">

                                                <div className="input-container">
                                                    <div className="ui input">
                                                        <input className="weight-input" type="text" defaultValue="1.00"/>
                                                    </div>
                                                </div>

                                                <span>кг.</span>

                                            </div>

                                        </div>

                                        <div className="ui grid">

                                            <div className="three column row">

                                                <div className="column input-row">
                                                    <div className="order-setting-row">

                                                        <label htmlFor="">
                                                            Длина
                                                        </label>

                                                        <div className="order-setting">

                                                            <div className="input-container">
                                                                <div className="ui input">
                                                                    <input type="text" defaultValue="0.00"/>
                                                                </div>
                                                            </div>

                                                            <span>см.</span>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="column input-row">

                                                    <div className="order-setting-row">

                                                        <label htmlFor="">
                                                            Высота
                                                        </label>

                                                        <div className="order-setting">

                                                            <div className="input-container">
                                                                <div className="ui input">
                                                                    <input type="text" defaultValue="0.00"/>
                                                                </div>
                                                            </div>

                                                            <span>см.</span>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="column input-row">

                                                    <div className="order-setting-row">

                                                        <label htmlFor="">
                                                            Глубина
                                                        </label>

                                                        <div className="order-setting">

                                                            <div className="input-container">
                                                                <div className="ui input">
                                                                    <input type="text" defaultValue="0.00"/>
                                                                </div>
                                                            </div>

                                                            <span>см.</span>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="column">

                                        <div className="ui horizontal divider">Sub id</div>

                                        <ol className="ui list sub-id-list">

                                            <li>

                                                <div className="list-item">

                                                    <div className="left-item">8Gb</div>

                                                    <div className="right-item">

                                                        <span className="item__count">5</span>

                                                        <span className="item__unit">шт.</span>

                                                    </div>

                                                </div>

                                            </li>

                                            <li>
                                                <div className="list-item">

                                                    <div className="left-item">8Gb</div>

                                                    <div className="right-item">

                                                        <span className="item__count">5</span>

                                                        <span className="item__unit">шт.</span>

                                                    </div>

                                                </div>

                                            </li>

                                            <li>
                                                <div className="list-item">

                                                    <div className="left-item">Всего</div>

                                                    <div className="right-item">

                                                        <span className="item__count">10</span>

                                                        <span className="item__unit">шт.</span>

                                                    </div>

                                                </div>

                                            </li>

                                        </ol>

                                        <div className="sub-id__not-found text-align-center">
                                            <p>Нет Sub-ID для этого товара.</p>
                                        </div>

                                    </div>

                                    <div className="column">

                                        <div className="ui horizontal divider">Количество на складе</div>

                                        <div className="quantity">

                                            <div className="quantity__item">

                                                <p>Общее количество:</p>

                                            </div>

                                            <div className="quantity__item">
                                                <div className="item-count">0</div>

                                                <div className="item-unit">шт.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column pt-3 text-align-center">
                                <button className="ui primary button">
                                    Сохранить
                                </button>
                            </div>

                        </div>
                    </Modal.Content>
                </Modal>
            </TransitionablePortal>
        )
    }
}

/*
ProductModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    productValue: PropTypes.string.isRequired
};
*/

export default ProductModal;
