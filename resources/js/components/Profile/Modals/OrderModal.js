import React, {Component} from 'react';
import {TransitionablePortal, Modal, Input, Select, Form, TextArea, Icon} from 'semantic-ui-react';
import {getStatuses} from "../../../src/statusesFunctions";
import {OrderProductModalContainer} from "./OrderProductModalContainer";
import {addOrder, updateOrder} from "../../../src/ordersFunctions";
import {errors, notification} from "../../../src/notifications";

class OrderModal extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getTotalAmount = this.getTotalAmount.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
    }

    onSubmit() {
        let order = this.props.orderInfo;

        let orderInfo = {
            products: order.products,
            total_price: this.getTotalPrice(),
            customer: order.customer,
            phone: order.phone,
            email: order.email,
            status: order.status,
            comment: order.comment,
            utm_source: order.utm_source,
            utm_medium: order.utm_medium,
            utm_term: order.utm_term,
            utm_content: order.utm_content,
            utm_campaign: order.utm_campaign,
            delivery_id: order.delivery_id,
            waybill: order.waybill,
            address: order.address,
            ip: order.ip,
            website: order.website,
            additional_field_1: order.additional_field_1,
            additional_field_2: order.additional_field_2,
            additional_field_3: order.additional_field_3,
            additional_field_4: order.additional_field_4,
        };

        let closeModal = this.props.closeOrderModal;
        let addOrderToState = this.props.addOrderToState;
        let updateOrderInState = this.props.updateOrderInState;

        if (this.props.orderInfo.orderModalType === "add") {
            addOrder(orderInfo)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();

                        orderInfo.products = order.products.map(prod => {
                            return {
                                product_id: prod.id,
                                amount: prod.amount,
                                price: prod.price,
                                order_id: res.data.id,
                                name: prod.name,
                                category: prod.category,
                                currency: prod.currency
                            }
                        });
                        orderInfo.status_id = orderInfo.status;
                        orderInfo.id = res.data.id;
                        addOrderToState(orderInfo);
                        notification('success', 'checkmark', 'Success!', 'Order successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }

        else if (this.props.orderInfo.orderModalType === "edit") {
            orderInfo.previousProducts = this.props.orderInfo.previousProducts;
            updateOrder(orderInfo, this.props.orderInfo.orderID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();

                        console.log(res);

                        orderInfo.products = order.products.map(prod => {
                            return {
                                product_id: prod.product_id,
                                amount: prod.amount,
                                price: prod.price,
                                order_id: res.data.id,
                                name: prod.name,
                                category: prod.category,
                                currency: prod.currency
                            }
                        });
                        orderInfo.status_id = orderInfo.status;
                        orderInfo.id = res.data.id;
                        updateOrderInState(orderInfo);
                        notification('success', 'checkmark', 'Success!', 'Order successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
    }

    getTotalAmount() {
        return this.props.orderInfo.products.reduce((a, b) => a + (parseInt(b['amount']) || 0), 0);
    }

    getTotalPrice() {
        return this.props.orderInfo.products.reduce((a, b) => a + (parseFloat(b['price']) * parseInt(b['amount']) || 0), 0);
    }

    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateOrderInfo(e.target.name, e.target.value);
        else
            this.props.updateOrderInfo(data.name, data.value);
    }


    render() {

        let products = this.props.orderInfo.products.map((product, key) => {
            return <tr key={key}>
                <td>{product.product_id}</td>
                <td><a href="#"
                       onClick={() => {
                           this.props.editOrderProductModal(product)
                       }}>
                    {product.name}
                </a></td>
                <td className="num-cell">{product.price} {product.currency}</td>
                <td className="num-cell">{product.amount}</td>
                <td className="num-cell">
                    {parseFloat(product.price) * parseInt(product.amount)} {product.currency}
                </td>
                <td><a href="#"
                       onClick={() => {
                           this.props.removeProduct(product.id)
                       }}
                       className="remove-item"><Icon name="times"/></a>
                </td>
            </tr>
        });


        return (

            <Modal size="fullscreen" closeIcon
                   onClose={this.props.closeOrderModal}
                   open={this.props.modalOpened} className="modal-order modal-novaposhta"
                   closeOnDimmerClick={true} closeOnEscape={true}>
                <Modal.Header>

                    <div className="modal-head">
                        <h2 className="modal-title">
                            Order
                        </h2>

                    </div>

                </Modal.Header>
                <Modal.Content>
                    <Form>
                        <div className="ui grid">
                            <div className="five wide column">

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Contact information</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Customer <i className="ui icon male"></i>
                                        </label>
                                        <div className="order-setting">

                                            <Input name="customer"
                                                   value={this.props.orderInfo.customer}
                                                   onChange={this.onChange}/>


                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Phone <i className="ui icon phone"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="phone"
                                                   value={this.props.orderInfo.phone}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Email <i className="ui icon mail outline"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="email"
                                                   value={this.props.orderInfo.email}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Status <i className="ui icon star outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Select
                                                placeholder='Select status'
                                                onChange={this.onChange}
                                                name="status"
                                                value={this.props.orderInfo.status}
                                                fluid
                                                search
                                                selection
                                                options={this.props.orderInfo.statuses}
                                            />

                                        </div>
                                    </div>


                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Comment <i className="icon"></i>
                                        </label>
                                        <div className="order-setting">
                                            <div className="ui input">
                                                <TextArea
                                                    name="comment"
                                                    onChange={this.onChange}
                                                    value={this.props.orderInfo.comment}
                                                    rows={3}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">UTM parameters</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_source <i className="icon crosshairs"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Input name="utm_source"
                                                   value={this.props.orderInfo.utm_source}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_medium <i className="icon crosshairs"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Input name="utm_medium"
                                                   value={this.props.orderInfo.utm_medium}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_term <i className="icon crosshairs"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="utm_term"
                                                   value={this.props.orderInfo.utm_term}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_content <i className="icon crosshairs"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Input name="utm_content"
                                                   value={this.props.orderInfo.utm_content}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            utm_campaign <i className="icon crosshairs"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Input name="utm_campaign"
                                                   value={this.props.orderInfo.utm_campaign}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="five wide column">
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Delivery</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Type<i className="icon truck"></i>
                                        </label>

                                        <div className="order-setting">
                                            <Select
                                                placeholder='Select delivery type'
                                                onChange={this.onChange}
                                                name="delivery_id"
                                                value={this.props.orderInfo.delivery_id}
                                                fluid
                                                search
                                                selection
                                                options={this.props.orderInfo.deliveries}
                                            />
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Waybill <i className="icon file alternate outline"></i>

                                        </label>
                                        <div className="order-setting">
                                            <Input name="waybill"
                                                   value={this.props.orderInfo.waybill}
                                                   onChange={this.onChange}/>
                                            {/*<a href="#" className="input-setting open-secondary-modal"
                                               data-modal-target="modal-create-ttn">
                                                create
                                            </a>*/}

                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Address <i className="icon map marker alternate"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="address"
                                                   value={this.props.orderInfo.address}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Sent <i className="icon calendar check outline"></i>
                                        </label>

                                        <div className="order-setting">
                                            <div className="ui calendar" id="order-modal-send">
                                                <div className="ui input">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Service information</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            IP <i className="icon desktop"></i>
                                        </label>
                                        <div className="order-setting">
                                            <p className="setting-info">
                                                {this.props.orderInfo.ip}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Website <i className="icon globe"></i>
                                        </label>
                                        <div className="order-setting">
                                            <p className="setting-info grey">
                                                {this.props.orderInfo.website}
                                                <a href={this.props.orderInfo.website}>
                                                    <i className="icon linkify"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Extra</div>

                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Additional field 1 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="additional_field_1"
                                                   value={this.props.orderInfo.additional_field_1}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Additional field 2 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="additional_field_2"
                                                   value={this.props.orderInfo.additional_field_2}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Additional field 3 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="additional_field_3"
                                                   value={this.props.orderInfo.additional_field_3}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="">
                                            Additional field 4 <i className="icon plus"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="additional_field_4"
                                                   value={this.props.orderInfo.additional_field_4}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="six wide column">
                                <div className="order-setting-block">
                                    <div className="ui horizontal divider">Products</div>

                                    <table className="ui table modal-order-products">
                                        <thead>
                                        <tr>
                                            <th>Id</th>

                                            <th width="150px">Product</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {products}

                                        </tbody>

                                        <tfoot>
                                        <tr>
                                            <td colSpan="3">
                                                <a href="#" onClick={this.props.addOrderProductModal}>
                                                    <i className="icon plus circle"></i> Add product
                                                </a>

                                                <span>Total:</span>
                                            </td>
                                            <td>
                                                <b>
                                                    {this.getTotalAmount()}
                                                </b>
                                            </td>
                                            <td>
                                                <b className="sum">
                                                    {this.getTotalPrice()}
                                                </b>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </Form>
                </Modal.Content>

                <Modal.Actions>
                    <div className="modal-foot">
                        <div className="total-sum">
                            <p>Order price: <span>{this.getTotalPrice()}</span></p>
                        </div>

                        <div className="modal-save">
                            <button className="ui labeled icon button blue"
                                    onClick={this.onSubmit}>
                                <i className="save icon"></i>
                                Save and close
                            </button>
                        </div>
                    </div>


                    <OrderProductModalContainer/>

                </Modal.Actions>

            </Modal>

        )
    }

}

export default OrderModal;