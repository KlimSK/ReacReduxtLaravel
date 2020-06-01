import React, {Component} from 'react';
import {TransitionablePortal, Modal, Dropdown, Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProductModal extends Component {

    onChange(e, data) {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(data.name);
        console.log(data.value);
    }

    render() {
        return (

            <TransitionablePortal open={this.props.productModalOpened} transition={{animation: 'scale', duration: 600}}>
                <Modal size="large" onClose={this.props.closeProductModal} open={this.props.productModalOpened}
                       className="modal-product" closeOnDimmerClick={true} closeOnEscape={true}>
                    <Modal.Header>
                        <i className="close icon" onClick={this.props.closeProductModal}>&nbsp;</i>

                        <div className="modal-head">
                            <h2 className="modal-title">
                                Изменение товара [2403] : (RU) Косметический набор Lamiton *5073*
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
                                                    <Input name="productName" onChange={this.onChange}/>
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Категория <i className="ui icon sitemap"></i>
                                                </label>
                                                <div className="order-setting">
                                                    <Dropdown
                                                        onChange={this.onChange}
                                                        name="category"
                                                        placeholder='Select category'
                                                        fluid
                                                        search
                                                        selection
                                                        options={this.props.productInfo.categories}
                                                    />
                                                </div>
                                            </div>

                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Модель <i className="ui icon registered outline">&nbsp;</i>
                                                </label>
                                                <div className="order-setting">
                                                    <Input name="model" />
                                                </div>
                                            </div>


                                            <div className="order-setting-row">
                                                <label htmlFor="">
                                                    Валюта <i
                                                    className="ui icon money bill alternate outline">&nbsp;</i>
                                                </label>

                                                <div className="order-setting">
                                                    <Dropdown
                                                        placeholder='Select currency'
                                                        fluid
                                                        search
                                                        selection
                                                        options={this.props.productInfo.currencies}
                                                    />
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
                                                        <input className="weight-input" type="text"
                                                               defaultValue="1.00"/>
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
