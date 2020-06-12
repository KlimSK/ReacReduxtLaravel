import React, {Component} from 'react';


export default class TableControls extends Component {
    constructor() {
        super();

        this.addButton = this.addButton.bind(this);
    }

    addButton(){
        if(this.props.page === 'products'){
            this.props.addProductModal();
        }
        else if(this.props.page === 'currencies'){
            this.props.addCurrencyModal();
        }
        else if(this.props.page === 'categories'){
            this.props.addCategoryModal();
        }
        else if(this.props.page === 'statuses'){
            this.props.addStatusModal();
        }
    }

    render(){
        return(
            <div className="content-section">
                <div className="content-controls">
                    <div className="selected-blocks">
                        <div className="ui teal label"><i className="info icon"></i> Выделено
                            <div className="detail">1</div>
                        </div>
                    </div>

                    <div className="content-control-buttons">
                        <div className="refresh-button ui" data-content="Автоперезагрузка текущего статуса">
                            <i className="refresh icon"></i>
                        </div>

                        <div className="ui mini right labeled input refresh-time">
                            <input type="text" defaultValue={60}/>
                            <div className="ui basic label">сек</div>
                        </div>

                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="refresh"/>
                            <label htmlFor=""></label>
                        </div>

                        <button className="ui compact icon button blue basic">
                            <i className="search icon"></i>
                        </button>

                        <div className="ui compact icon button basic dropdown left "
                             id="controls-settings-dropdown">
                            <i className="settings icon"></i>

                            <div className="menu">
                                <div className="item"><i className="print icon"></i>Печать таблицы</div>
                                <div className="divider"></div>
                                <div className="item"><i className="mobile alternate icon"></i>Отправить SMS
                                </div>
                                <div className="item"><i className="copy alternate icon"></i>Копировать
                                </div>
                                <div className="item"><i className="edit alternate icon"></i>Редактировать
                                </div>
                                <div className="item disabled"><i className="random alternate icon"></i>Сменить
                                    статусы
                                </div>
                                <div className="divider"></div>
                                <div className="item"><i className="phone square icon"></i> VoIPtime
                                    (обзвон)
                                </div>
                                <div className="divider"></div>
                                <div className="item"><i className="file excel icon"></i> Экспорт Excel
                                    (Lite)
                                </div>
                                <div className="item"><i className="file excel icon"></i> Экспорт Excel
                                    (Pro)
                                </div>
                                <div className="divider"></div>
                                <div className="item"><i className="file excel icon"></i>Импорт ТТН по ID
                                </div>
                                <div className="divider"></div>
                                <div className="item"><i className="trash icon"></i>Удалить</div>

                            </div>
                        </div>

                        <button
                            onClick={this.addButton}
                            className="ui labeled icon button tiny green">
                            <i className="plus icon"></i> Добавить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}