import React, {Component} from 'react';
import {TransitionablePortal, Modal, Dropdown, Input, TextArea, Form, Select} from 'semantic-ui-react';
import noPhoto from "../../../../img/no_foto-120x100.png";
import {addProduct, loadProductInfo, updateProduct} from "../../../src/productsFunctions";
import {errors, notification} from "../../../src/notifications";

class ProductModal extends Component {

    constructor(props) {
        super(props);

        this.previewPhoto = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onFileLoad = this.onFileLoad.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidUpdate() {
        if (this.props.productInfo.productModalType === 'edit' &&
            !this.props.productInfo.name &&
            !this.props.productInfo.currency_id &&
            !this.props.productInfo.price) {

            let loadProductInfoToState = this.props.loadProductInfo;
            loadProductInfo(this.props.productInfo.productID)
                .then(res => {
                    let product = res[0];
                    loadProductInfoToState({
                        name: product.name,
                        category: product.category_id,
                        currency: product.currency_id,
                        model: product.model,
                        price: product.price,
                        photo: product.photo,
                        description: product.description,
                        amount: product.amount,
                        length: product.length,
                        width: product.width,
                        height: product.height,
                        weight: product.weight
                    });
                });
        }
    }


    onSubmit() {
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


        let closeModal = this.props.closeProductModal;
        let addProductToState = this.props.addProductToState;
        let updateProductInState = this.props.updateProductInState;

        if (this.props.productInfo.productModalType === 'add') {
            addProduct(productInfo)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        productInfo.id = res.data.id;
                        productInfo.photo = res.data.photo;
                        addProductToState(productInfo);
                        notification('success', 'checkmark', 'Success!', 'Product ' + productInfo.name + ' successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
        else if (this.props.productInfo.productModalType === 'edit') {
            updateProduct(productInfo, this.props.productInfo.productID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        productInfo.id = res.data.id;
                        productInfo.photo = res.data.photo;

                        updateProductInState(productInfo);

                        notification('success', 'checkmark', 'Success!', 'Product ' + productInfo.name + ' successfully updated!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
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

        let title = '';
        let previewPhoto = noPhoto;

        if (this.props.productInfo.productModalType === 'edit'){
            title = 'Update product [' + this.props.productInfo.productID + ']: ' + this.props.productInfo.productName;
            if(this.props.productInfo.photo)
                previewPhoto = "/images/products/" + this.props.productInfo.photo;
        }
        else if (this.props.productInfo.productModalType === 'add')
            title = 'Add new product';
        return (
            <>
                <TransitionablePortal open={this.props.productModalOpened}
                                      transition={{animation: 'scale', duration: 600}}>
                    <Modal closeIcon onClose={this.props.closeProductModal} open={this.props.productModalOpened}
                           className="modal-product" closeOnDimmerClick={true} closeOnEscape={true}>
                        <Modal.Header>

                            <div className="modal-head">
                                <h2 className="modal-title">
                                    {title}
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
                                                            <Select
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
                                                            <Select
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
                                                           style={{backgroundImage: `url(${previewPhoto})`}}
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

            </>
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
