import React, {Component, Fragment} from 'react';
import {Popup} from 'semantic-ui-react';

export default class OrdersTableRow extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <tr className="row-white" >
                <td className="status-cell">
                    <div className="ui button tiny red status blink">
                        Новый
                    </div>
                </td>
                <td><p>262474</p></td>
                <td className="order-id">
                    <p>5215215125215152</p>
                </td>
                <td><p>Админ</p></td>
                <td>
                    <p className="flex-block align-items-center">
                        <img src="img/flags/UA.ico" alt=""/> Украина
                    </p>
                </td>
                <td><p><i className="ui icon phone"></i> 35287523875</p></td>
                <td><p><i className="ui icon info"></i> test</p></td>
                <td className="order-sum"><p>500.00</p></td>
                <td className="order-products">
                    <p>
                        <Fragment>
                            <Popup trigger={
                                <span className="products-counter ui">2</span>
                            }
                                   on="hover"
                                   inverted
                                   size="tiny"
                                   position="bottom center">
                                <ul style={{padding: "0 0 0 12px", margin: "0", listStyle: 'disc'}}>
                                    <li>мышь (1шт. x 10.00 = 10.00)~</li>
                                    <li>блендер (1шт. x 10.00 = 10.00)~</li>
                                </ul>
                            </Popup>
                        </Fragment>
                        &nbsp; мышь (1шт. x 10.00 = 10.00)~
                    </p>
                </td>
                <td>
                    <p className="flex-block align-items-center">
                        <img src="img/money.ico" alt=""/>
                        Оплачено
                    </p>

                </td>
                <td>
                    <p className="flex-block align-items-center">
                        <img src="img/delivery/ico-new-post.ico" alt=""/>
                        Нова Почта
                    </p>
                </td>
                <td><p>Єлизаветівка, Відділення №1: пров. 1-й Калиновий, 7б</p></td>
                <td>
                    <p>20400132255366</p>
                </td>
                <td>
                    <p>
                        2019-05-08 <span
                        style={{fontSize: "11px", opacity: "0.7"}}> &nbsp; 00:00:00</span>
                    </p>
                </td>

                <td>
                    <p>
                        <i className="ui icon clock outline"></i> Нова пошта очікує надходження від
                        відправника
                    </p>
                </td>
                <td>
                    <p>
                        2019-05-08 <span
                        style={{fontSize: "11px", opacity: "0.7"}}> &nbsp; 00:00:00</span>
                    </p>
                </td>
                <td>
                    <p>
                        Админ
                    </p>
                </td>
                <td>
                    <p>
                        Розничный магазин
                    </p>
                </td>
                <td>
                    <p>
                        2019-05-08 <span
                        style={{fontSize: "11px", opacity: "0.7"}}> &nbsp; 00:00:00</span>
                    </p>
                </td>
                <td>
                    <p>
                        <i className="ui icon globe"></i>
                        project1515603.tilda.ws/
                    </p>
                </td>
                <td><p>Новый</p></td>
                <td></td>
                <td><p>instagram</p></td>
                <td><p>lenta</p></td>
                <td><p>video</p></td>
                <td><p>insta|interes-gadget|all</p></td>
                <td><p>Аэромышь видео</p></td>
                <td><p><i className="ui icon desktop"></i> 92.63.110.179</p></td>
                <td><p>stagery-test.ukraine-shop.top/yulia/samsung</p></td>
                <td><p></p></td>
                <td><p></p></td>
                <td><p></p></td>
            </tr>

        )
    }
}