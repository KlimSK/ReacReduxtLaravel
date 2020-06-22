import React, {Component} from "react";
import {Form, Input, Label, Modal, Select, TransitionablePortal} from "semantic-ui-react";
import {getCategories} from "../../../src/categoriesFunctions";
import {getProductsFromCat} from "../../../src/productsFunctions";
import {notification} from "../../../src/notifications";

export default class OrderProductModal extends Component {

    constructor(props) {
        super(props);


        this.onChange = this.onChange.bind(this);
        this.onProductChange = this.onProductChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getProductsFromCat = this.getProductsFromCat.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
    }


    getProductInfo() {
        let prod;
        prod = this.props.orderProductInfo.products.find(prod => {
            return prod.id === this.props.orderProductInfo.product;
        });

        this.props.updateOrderProductInfo("left", prod.left);
        this.props.updateOrderProductInfo("currency", prod.currency);

        if(this.props.orderProductInfo.orderProductModalType === "add" || this.props.orderProductInfo.isLoaded)
            this.props.updateOrderProductInfo("price", prod.price);
    }

    getProductsFromCat(categoryID) {
        getProductsFromCat(categoryID).then(res => {
            let products = [];

            res.map((product, key) => {

                if (key === 0 && !this.props.orderProductInfo.product ){
                    this.props.updateOrderProductInfo("product", product.id);
                    this.props.updateOrderProductInfo("productName", product.name);
                }

                products = [
                    ...products,
                    {
                        id: product.id,
                        value: product.id,
                        text: product.name,
                        left: product.amount,
                        price: product.price,
                        currency: product.currency_symbol
                    }
                ]
            });

            this.props.loadProducts(products);

            if (products.length) this.getProductInfo();

            this.props.updateOrderProductInfo("isLoaded", true);
        });
    }

    componentDidUpdate() {
        if (!this.props.orderProductInfo.categories.length && this.props.modalOpened) {
            let getProducts = this.getProductsFromCat;


            getCategories().then(res => {
                let categories = [
                    {id: 0, value: 0, text: "No category"}
                ];

                res.map((cat, key) => {
                    categories = [
                        ...categories,
                        {
                            id: cat.id,
                            value: cat.id,
                            text: cat.name
                        }
                    ]
                });

                this.props.loadCategories(categories);

                getProducts(this.props.orderProductInfo.category);
            });
        }

    }


    onProductChange(e, data) {
        e.persist();

        this.props.updateOrderProductInfo(data.name, data.value);
        this.props.updateOrderProductInfo('productName', e.target.textContent);

        setTimeout(this.getProductInfo, 1);
    }

    onCategoryChange(e, data) {
        e.persist();

        this.props.updateOrderProductInfo(data.name, data.value);
        this.props.updateOrderProductInfo('categoryName', e.target.textContent);
        this.props.updateOrderProductInfo("product", 0);
        this.props.updateOrderProductInfo("currency", "");
        this.props.updateOrderProductInfo("left", 0);
        this.props.updateOrderProductInfo("price", 0);
        this.getProductsFromCat(data.value);
    }

    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateOrderProductInfo(e.target.name, e.target.value);
        else
            this.props.updateOrderProductInfo(data.name, data.value);
    }


    onSubmit() {
        let orderProduct = this.props.orderProductInfo;

        let orderProductInfo = {
            id: orderProduct.product,
            product: orderProduct.product,
            product_id: orderProduct.product,
            name: orderProduct.productName,
            category: orderProduct.category,
            currency: orderProduct.currency,
            categoryName: orderProduct.categoryName,
            amount: orderProduct.amount,
            price: orderProduct.price,
            left: orderProduct.left,
            total: orderProduct.price * orderProduct.amount,
        };

        if (orderProduct.orderProductModalType === 'add') {
            this.props.addProductToOrder(orderProductInfo);
            this.props.closeOrderProductModal();
            notification('success', 'checkmark', 'Success!', 'Product ' + orderProductInfo.name + ' successfully added to order!');
        }
        else if(orderProduct.orderProductModalType === 'edit'){
            this.props.updateProductInOrder(orderProduct.editProductID, orderProductInfo);
            this.props.closeOrderProductModal();
            notification('success', 'checkmark', 'Success!', 'Product successfully updated!');

        }
    }

    render() {
        return (


            <Modal size="tiny" closeIcon onClose={this.props.closeOrderProductModal} open={this.props.modalOpened}
                   className="modal-currency">

                <Modal.Header>
                    <div className="modal-head">
                        <h2 className="modal-title">
                            Add product to order
                        </h2>
                    </div>
                </Modal.Header>

                <Modal.Content>

                    <div className="order-container">
                        <div className="ui one column stackable grid container">
                            <div className="column">
                                <div className="order-setting-row">
                                    <label>Categories</label>
                                    <div className="order-setting">
                                        <Select
                                            placeholder='Select category'
                                            onChange={this.onCategoryChange}
                                            name="category"
                                            value={this.props.orderProductInfo.category}
                                            fluid
                                            search
                                            selection
                                            options={this.props.orderProductInfo.categories}
                                        />
                                    </div>
                                </div>
                                <div className="order-setting-row">
                                    <label htmlFor="modal-currency__symbol">Product</label>
                                    <div className="order-setting">
                                        <Select
                                            placeholder='Select product'
                                            onChange={this.onProductChange}
                                            name="product"
                                            value={this.props.orderProductInfo.product}
                                            fluid
                                            search
                                            selection
                                            options={this.props.orderProductInfo.products}
                                        />
                                    </div>
                                </div>


                                <div className="order-setting-row">
                                    <label htmlFor="modal-currency__symbol">Left</label>
                                    <div className="order-setting">
                                        <Input name="left"
                                               readOnly={true}
                                               value={this.props.orderProductInfo.left}
                                               onChange={this.onChange}/>
                                    </div>
                                </div>


                                <div className="order-setting-row">
                                    <label htmlFor="modal-currency__symbol">Amount</label>
                                    <div className="order-setting">
                                        <Input name="amount"
                                               value={this.props.orderProductInfo.amount}
                                               onChange={this.onChange}/>
                                    </div>
                                </div>

                                <div className="order-setting-row">
                                    <label htmlFor="modal-currency__symbol">Price</label>
                                    <div className="order-setting">
                                        <Input name="price"
                                               value={this.props.orderProductInfo.price}
                                               onChange={this.onChange}>
                                            <input />
                                            <Label size="tiny" basic>
                                                {this.props.orderProductInfo.currency}
                                            </Label>
                                        </Input>
                                    </div>
                                </div>


                                <div className="column pt-3 text-align-center">
                                    <button
                                        onClick={this.onSubmit}
                                        className="ui primary button modal-manufacturers__button">
                                        Save to order
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal.Content>
            </Modal>

        )
    }
}