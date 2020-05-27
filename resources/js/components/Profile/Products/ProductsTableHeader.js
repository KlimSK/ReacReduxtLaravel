import React, {Component} from 'react';

export default class ProductsTableHeader extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <thead>
            <tr>
                <th width="65">id</th>
                <th width="90">Фото</th>
                <th width="340">Название</th>
                <th width="90">Модель</th>
                <th width="90">Артикул</th>
                <th width="150">Категория</th>
                <th width="150">Цена (база)</th>
                <th width="75">Валюта</th>
                <th width="80">Статус</th>
                <th width="100">Цена (закуп.)</th>
                <th width="100">Кол-во</th>
                <th width="80">В заказах</th>
                <th width="160">Производитель</th>
                <th width="120">Сумма (закуп.)</th>
            </tr>


            <tr>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>

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
                        <span className="text">Не указано</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="ui icon search input">
                                <i className="search icon"></i>
                                <input type="text" placeholder="Поиск..."/>
                            </div>
                            <div className="divider"></div>
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Не указано</div>
                                <div className="item" data-value="announcement">ТВ шоп</div>
                                <div className="item" data-value="cannotfix">Для дома</div>
                                <div className="item" data-value="news">Для сада</div>
                                <div className="item" data-value="enhancement">Для кухни</div>
                                <div className="item" data-value="off-topic">Автотовар</div>
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

                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Все</div>
                                <div className="item" data-value="important">Включен</div>
                                <div className="item" data-value="announcement">Отключен</div>
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
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Все</div>
                                <div className="item" data-value="important">(+) Есть</div>
                                <div className="item" data-value="announcement">(0) Нет</div>
                                <div className="item" data-value="announcement">(-) Минус</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>

                </td>
                <td>
                    <div className="ui dropdown mini main-table-dropdown">
                        <input type="hidden" name="filters"/>
                        <span className="text">Все</span> <i className="ui icon caret down"></i>
                        <div className="menu">
                            <div className="scrolling menu">
                                <div className="item" data-value="important">Все</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>

                </td>

            </tr>


            </thead>
        )
    }
};