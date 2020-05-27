import React, {Component} from "react";

import {DatesRangeInput} from 'semantic-ui-calendar-react';


export default class OrdersTableHeader extends Component {
    constructor() {
        super();

        this.state = {
            sent: '',
            added: '',
            updated: '',
            passed: ''
        };
    }

    /*handleChange (event, {name, value})  {
        if (this.state.hasOwnProperty(name)) {
            this.setState({[name]: value});
        }
    }*/

    render() {
        const handleChange = (event, {name, value}) => {
            if (this.state.hasOwnProperty(name)) {
                this.setState({ [name]: value });
            }
        };

        return (
            <thead>
            <tr>
                <th width="110">Статус</th>
                <th width="65">id</th>
                <th width="85">order_id</th>
                <th width="200">Покупатель</th>
                <th width="130">Локализация</th>
                <th width="140">Телефон</th>
                <th width="200">Комментарий</th>
                <th width="110">Сумма</th>
                <th width="230">Товар</th>
                <th width="110">Оплата</th>
                <th width="100">Тип доставки</th>
                <th width="200">Адрес доставки</th>
                <th width="130">ТТН</th>
                <th width="230">Отправлено</th>
                <th width="200">ТТН статус</th>
                <th width="230">Добавлено</th>
                <th width="150">Сотрудник</th>
                <th width="170">Отдел</th>
                <th width="220">Обновлено</th>
                <th width="180">Сайт</th>
                <th width="110">Статус</th>
                <th width="220">Сдано</th>
                <th width="100">utm_source</th>
                <th width="200">utm_medium</th>
                <th width="125">utm_term</th>
                <th width="140">utm_content</th>
                <th width="145">utm_campaign</th>
                <th width="130">IP</th>
                <th width="170">Доп. поле 1</th>
                <th width="100">Доп. поле 2</th>
                <th width="100">Доп. поле 3</th>
                <th width="100">Доп. поле 4</th>
            </tr>


            <tr>
                <td></td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown" id="table-localization">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Арабские эмираты</div>
                                <div className="item" data-value="announcement">Афганистан</div>
                                <div className="item" data-value="cannotfix">Венгрия</div>
                                <div className="item" data-value="news">Украина</div>
                                <div className="item" data-value="enhancement">Казахстан</div>
                                <div className="item" data-value="off-topic">Беларусь</div>
                                <div className="item" data-value="interesting">Молдова</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">test product 1</div>
                                <div className="item" data-value="announcement">test product 2</div>
                                <div className="item" data-value="cannotfix">test product 3</div>
                                <div className="item" data-value="news">test product 4</div>
                                <div className="item" data-value="enhancement">test product 5</div>
                                <div className="item" data-value="off-topic">test product 6</div>
                                <div className="item" data-value="interesting">test product 7</div>
                            </div>
                        </div>
                    </div>


                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Оплачено</div>
                                <div className="item" data-value="announcement">Предоплата</div>
                                <div className="item" data-value="cannotfix">Отказ</div>
                                <div className="item" data-value="news">Налож. платеж</div>
                                <div className="item" data-value="enhancement">Обмен</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Новая Почта</div>
                                <div className="item" data-value="announcement">Самовывоз</div>
                                <div className="item" data-value="cannotfix">Укрпочта</div>
                                <div className="item" data-value="news">Интайм</div>
                                <div className="item" data-value="enhancement">Автолюкс</div>
                                <div className="item" data-value="off-topic">Деливери</div>
                                <div className="item" data-value="interesting">Почта России</div>
                                <div className="item" data-value="interesting">Казпочта</div>
                                <div className="item" data-value="interesting">СДЭК</div>
                                <div className="item" data-value="interesting">Fetchr</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="sent"
                            placeholder="From - To"
                            value={this.state.sent}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="added"
                            placeholder="From - To"
                            value={this.state.added}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Админ</div>
                                <div className="item" data-value="announcement">Менеджер</div>
                                <div className="item" data-value="cannotfix">Гость</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Оптовый</div>
                                <div className="item" data-value="announcement">Розничный</div>
                                <div className="item" data-value="cannotfix">Отдел ОАЭ</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="updated"
                            placeholder="From - To"
                            value={this.state.updated}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td></td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="passed"
                            placeholder="From - To"
                            value={this.state.passed}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
            </tr>


            </thead>
        )
    }
}