import React, {Component, Fragment} from 'react';
import {Popup} from 'semantic-ui-react';
import {logout} from "../../Auth/UserFunctions";


export default class Header extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const imageBox = {
            position: "relative",
            border: "3px dashed #EEE",
            padding: "2px",
            height: '60px',
            width: '65px',
            textAlign: "center",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '98%',
            backgroundColor: '#FFF',
            backgroundImage: "url(img/empty_avatar_40x40.png)"
        };

        return (

            <header>
                <div className="header-info">
                    <div className="header-tariff">
                        Тариф: <span className="tariff-type">Тестовый</span>
                        <i className="fas fa-info-circle ui tariff-popup-info" data-inverted=""></i>

                        <div className="ui popup tariff-popup flowing bottom left transition hidden">
                            Тариф: <b>Тестовый</b><br/>
                            Оплачен до: <b>07.08.2019</b> (Осталось: <b>5</b> дней)<br/>
                            Цена/месяц:<b>0.00</b> грн. (~<b>0.00</b> руб.) ~<b>0.00</b> $
                        </div>

                        <span className="all-tariffs" id="all-tariffs" data-modal-target="modal-tariffs">
                        тарифы
                    </span>

                        <span className="header-contacts" id="header-contacts" data-modal-target="modal-contacts">
                        КОНТАКТЫ
                    </span>
                    </div>

                    <div className="header-additional-info">
                        <div className="info-block">
                            <i className="far fa-calendar-times"></i>
                            5 дней
                        </div>
                        <div className="info-block">
                            <i className="fas fa-shopping-cart"></i>
                            1/1000
                        </div>
                        <div className="info-block">
                            <i className="fas fa-users"></i>
                            5/5
                        </div>
                    </div>

                </div>

                <div className="header-controls">

                    <Fragment>
                        <Popup
                            trigger={<div className="user-controls control-block ui">
                                <i className="fas fa-user-circle">&nbsp;</i>
                                <span>{this.props.username}</span>
                            </div>}
                            on="click"
                            className="header-user-info"
                        >
                            <table align="center" border="0">
                                <tbody>
                                <tr>
                                    <td>Логин</td>
                                    <td>&nbsp;<b>admin</b></td>
                                    <td rowSpan="3" align="center" valign="top">
                                        <div id="image-box" style={imageBox}>&nbsp;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Группа</td>
                                    <td>&nbsp;{this.props.username}</td>
                                </tr>
                                <tr>
                                    <td>Направл.</td>
                                    <td>&nbsp;<img src="/img/flags/UA.ico"
                                                   style={{margin: "3px 0px -3px"}}/> Украина
                                    </td>
                                </tr>
                                <tr>
                                    <td>Отдел</td>
                                    <td colSpan="2">
                                        Офис №1, Офис №2, Офис №3
                                    </td>
                                </tr>
                                <tr>
                                    <td>Браузер</td>
                                    <td colSpan="2"><img className="img-icon-browser"
                                                         src="/img/icons/browser/chrome.ico"
                                                         title="Chrome 75.0.3770.142"/> Chrome 75.0.3770.142
                                    </td>
                                </tr>
                                <tr>
                                    <td>ОС</td>
                                    <td colSpan="2"> Windows NT 4.0</td>
                                </tr>
                                <tr>
                                    <td>IP-адрес</td>
                                    <td colSpan="2"> &nbsp;178.213.0.225<img className="img-ip-country" title="Украина"
                                                                             src="/img/flags/UA.ico"/>
                                        Украина
                                    </td>
                                </tr>
                                <tr>
                                    <td>Язык интерф.</td>
                                    <td colSpan="2"> &nbsp;<img src="/img/flags/RU.ico"
                                                                style={{height: "16px"}}/> RU (Русский)
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" style={{padding: "0px"}}>
                                        <hr/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="user-info-settings"><a href="#"><i
                                        className="fas fa-cog"></i> Настройки</a></td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="user-info-logout"><a href="" onClick={logout}><i
                                        className="fas fa-power-off"></i> Выйти</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </Popup>
                    </Fragment>

                    {/*<div className="ui popup header-user-info flowing transition hidden">

                    </div>*/}

                    <div className="control-block">
                        <a href="#" className="icon link ui" data-content="Техподдержка" data-position="bottom center">
                            <i className="fas fa-headphones-alt"></i>
                        </a>
                    </div>

                    <div className="control-block">
                        <a href="#" className="icon link ui" data-content="Новые заказы" data-position="bottom center">
                            <i className="fas fa-shopping-cart"></i>

                            <span className="control-count">2</span>
                        </a>
                    </div>

                    <div className="control-block">
                        <a href="#" className="icon link ui" data-content="Уведомления" data-position="bottom center">
                            <i className="fas fa-bell"></i>
                        </a>

                    </div>

                    <div className="control-block">
                        <a href="#" id="about-site" data-modal-target="modal-about-site">
                            <i className="fas fa-info-circle"></i>
                        </a>
                    </div>
                </div>
            </header>

        )
    }
};