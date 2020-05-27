import React, {Component} from 'react';


export default class Statuses extends Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div id="tabs-panel-statusy">
                <button className="tabs-arrow ui icon button compact blue" id="button-arrow-left-tabs">
                    <i className="ui icon arrow left">&nbsp;</i>
                </button>
                <ul id="ul-statusy">
                    <li><a id="tab-status-all"
                           className="tab-status-active button ui mini">ВСЕ (<b id="count_all_z">382</b>)</a></li>
                    <li><a id="tab-status-3"
                           className="button ui mini basic grey">Новый (<b>150</b>)</a></li>
                    <li><a id="tab-status-14"
                           className="button ui mini yellow">Отправлено (<b>62</b>)</a></li>
                    <li><a id="tab-status-18"
                           className="button ui mini green">Завершено (<b>34</b>)</a></li>
                    <li><a id="tab-status-31"
                           className="button ui mini red">Возрат товара (склад) (<b>9</b>)</a></li>
                    <li><a id="tab-status-13"
                           className="button ui mini pink">Отказ (<b>23</b>)</a></li>
                    <li><a id="tab-status-43"
                           className="button ui mini teal">Успешно выполнено (<b>1</b>)</a></li>
                    <li><a className="button ui mini brown"
                           id="tab-status-45"> Не подтвержденные (<b>1</b>)</a></li>
                    <li><a  className="button ui mini purple"
                           id="tab-status-44"> Успешно не выполнено (<b>0</b>)</a></li>
                    <li><a  id="tab-status-36"
                            className="button ui mini red">Возврат товара в пути (<b>2</b>)</a></li>
                    <li><a id="tab-status-40"
                            className="button ui mini">Одесса (<b>1</b>)</a></li>
                    <li><a id="tab-status-37"
                           className="button ui mini green">В пути деньги (<b>4</b>)</a></li>
                    <li><a id="tab-status-39"
                           className="button ui mini violet">На контроле (<b>2</b>)</a></li>
                    <li><a id="tab-status-41"
                           className="button ui mini brown">Утилизация (<b>1</b>)</a></li>
                </ul>
                <button className="tabs-arrow button ui icon compact blue" id="button-arrow-right-tabs">
                    <i className="icon arrow ui right">&nbsp;</i>
                </button>
            </div>
        )
    }
}