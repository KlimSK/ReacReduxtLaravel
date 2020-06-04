import React, {Component} from 'react';
import {TransitionablePortal, Modal, Dropdown, Input, TextArea, Form} from 'semantic-ui-react';
import noPhoto from "../../../../img/no_foto-120x100.png";
import {addProduct} from "../../../src/productsFunctions";

class ProductModal extends Component {

    constructor(props) {
        super(props);

        this.previewPhoto = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onFileLoad = this.onFileLoad.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }




    onSubmit(){

        let product = this.props.productInfo;

        let productInfo = {
            name: product.productName,
            category_id: product.category,
            model: product.model,
            photo: product.photo,
            price: product.price,
            description: product.description,
            weight: product.weight,
            height: product.height,
            length: product.length,
            width: product.width,
            currency_id: product.currency,
            amount: product.amount
        };

        addProduct(productInfo).then(res => {
            console.log(res);
        });
    }

    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateProductInfo(e.target.name, e.target.value);
        else
            this.props.updateProductInfo(data.name, data.value);
    }

    onFileLoad(files) {
        if (files && files[0]) {
            var reader = new FileReader();
            let preview = this.previewPhoto.current;
            let update = this.props.updateProductInfo;

            reader.onload = function (e) {
                let newPhoto = e.target.result;
                update('photo', e.target.result);
                preview.style.backgroundImage = "url(" + newPhoto + ")";
            };

            reader.readAsDataURL(files[0]);
        }
    }

    render() {
        return (

            <TransitionablePortal open={this.props.productModalOpened} transition={{animation: 'scale', duration: 600}}>
                <Modal closeIcon onClose={this.props.closeProductModal} open={this.props.productModalOpened}
                       className="modal-product" closeOnDimmerClick={true} closeOnEscape={true}>
                    <Modal.Header>

                        <div className="modal-head">
                            <h2 className="modal-title">
                                Изменение товара [2403] : (RU) Косметический набор Lamiton *5073*
                            </h2>
                        </div>
                    </Modal.Header>

                    <Modal.Content>
                        <Form>
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
                                                        <Input name="productName"
                                                               value={this.props.productInfo.productName}
                                                               onChange={this.onChange}/>
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
                                                            value={this.props.productInfo.category}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="order-setting-row">
                                                    <label htmlFor="">
                                                        Модель <i className="ui icon registered outline">&nbsp;</i>
                                                    </label>
                                                    <div className="order-setting">
                                                        <Input name="model"
                                                               value={this.props.productInfo.model}
                                                               onChange={this.onChange}/>
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
                                                            onChange={this.onChange}
                                                            name="currency"
                                                            value={this.props.productInfo.currency}
                                                            fluid
                                                            search
                                                            selection
                                                            options={this.props.productInfo.currencies}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="order-setting-row">
                                                    <label htmlFor="">
                                                        Price <i className="icon shopping basket">&nbsp;</i>
                                                    </label>
                                                    <div className="order-setting">
                                                        <Input name="price"
                                                               value={this.props.productInfo.price}
                                                               onChange={this.onChange}/>
                                                    </div>

                                                </div>

                                                <div className="order-setting-row">
                                                    <label htmlFor="">
                                                        Amount <i className="icon shopping basket">&nbsp;</i>
                                                    </label>
                                                    <div className="order-setting">
                                                        <Input name="amount"
                                                               value={this.props.productInfo.amount}
                                                               onChange={this.onChange}/>
                                                    </div>
                                                </div>



                                                <div className="order-setting-row product-description-wrap">
                                                    <label htmlFor="">
                                                        Описание <i className="icon align justify">&nbsp;</i>
                                                    </label>
                                                    <div className="order-setting">
                                                        <div className="ui input">
                                                    <TextArea
                                                        name="description"
                                                        onChange={this.onChange}
                                                        value={this.props.productInfo.description}
                                                        rows={3}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="column">

                                        <div className="column">

                                            <div className="ui horizontal divider">Выбрать фото</div>

                                            <div className="chose-photo">

                                                <label htmlFor="chose-photo__input" ref={this.previewPhoto}
                                                       style={{backgroundImage: `url(${noPhoto})`}}
                                                       className="chose-photo__label">&nbsp;</label>
                                                <input type="file"
                                                       onChange={(e) => {
                                                           this.onFileLoad(e.target.files)
                                                       }}
                                                       id="chose-photo__input"
                                                       data-class="chose-photo"
                                                       className="photo-input_js"/>

                                            </div>

                                        </div>

                                        <div className="column">


                                            <div className="order-setting-row">

                                                <label htmlFor="">
                                                    Вес <i className="arrows alternate icon"></i>
                                                </label>

                                                <div className="order-setting">

                                                    <div className="input-container">
                                                        <Input name="weight"
                                                               className="weight-input"
                                                               value={this.props.productInfo.weight}
                                                               onChange={this.onChange}/>
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
                                                                    <Input name="length"
                                                                           value={this.props.productInfo.length}
                                                                           onChange={this.onChange}/>
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
                                                                    <Input name="height"
                                                                           value={this.props.productInfo.height}
                                                                           onChange={this.onChange}/>
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
                                                                    <Input name="width"
                                                                           value={this.props.productInfo.width}
                                                                           onChange={this.onChange}/>
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
                                    <button className="ui primary button" onClick={this.onSubmit}>
                                        Сохранить
                                    </button>
                                </div>

                            </div>
                        </Form>
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
