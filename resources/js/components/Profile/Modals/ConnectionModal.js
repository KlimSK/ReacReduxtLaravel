import React from 'react';
import {TransitionablePortal, Modal, Input, Select, Form, TextArea, Icon, Label} from 'semantic-ui-react';
//import {ConnectionProductModalContainer} from "./ConnectionProductModalContainer";
//import {addConnection, updateConnection} from "../../../src/connectionsFunctions";

const ConnectionModal = (props) => {


    let onChange = (e, data) => {
        if (e.target.name && e.target.value)
            props.updateConnectionInfo(e.target.name, e.target.value);
        else
            props.updateConnectionInfo(data.name, data.value);
    };


    return <Modal size="tiny" closeIcon
                  onClose={props.closeConnectionModal}
                  open={props.modalOpened} className="modal-currency"
                  closeOnDimmerClick={true} closeOnEscape={true}>
        <Modal.Header>

            <div className="modal-head">
                <h2 className="modal-title">
                    API connection to website
                </h2>

            </div>

        </Modal.Header>
        <Modal.Content>
            <div className="order-container">
                <div className="ui one column stackable grid container">

                    <div className="column">
                        <div className="order-setting-row">
                            <label htmlFor="">
                                Website <i className="icon globe"></i>
                            </label>
                            <div className="order-setting">
                                <Input name="website"
                                       value={props.connectionInfo.website}
                                       onChange={onChange}/>
                            </div>
                        </div>

                        <div className="order-setting-row">
                            <label>Categories</label>
                            <div className="order-setting">
                                <Select
                                    placeholder='Select category'
                                    onChange={props.onCategoryChange}
                                    name="category_id"
                                    value={props.connectionInfo.category_id}
                                    fluid
                                    search
                                    selection
                                    options={props.connectionInfo.categories}
                                />
                            </div>
                        </div>
                        <div className="order-setting-row">
                            <label htmlFor="modal-currency__symbol">Product</label>
                            <div className="order-setting">
                                <Select
                                    placeholder='Select product'
                                    onChange={props.onProductChange}
                                    name="product_id"
                                    value={props.connectionInfo.product_id}
                                    fluid
                                    search
                                    selection
                                    options={props.connectionInfo.products}
                                />
                            </div>
                        </div>

                        <div className="order-setting-row">
                            <label htmlFor="modal-currency__symbol">Price</label>
                            <div className="order-setting">
                                <Input name="price"
                                       value={props.connectionInfo.price}
                                       onChange={onChange}>
                                    <input/>
                                    <Label size="tiny" basic>
                                        {props.connectionInfo.currency_symbol}
                                    </Label>
                                </Input>
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
                                           value={props.connectionInfo.additional_field_1}
                                           onChange={onChange}/>
                                </div>
                            </div>
                            <div className="order-setting-row">
                                <label htmlFor="">
                                    Additional field 2 <i className="icon plus"></i>
                                </label>
                                <div className="order-setting">
                                    <Input name="additional_field_2"
                                           value={props.connectionInfo.additional_field_2}
                                           onChange={onChange}/>
                                </div>
                            </div>
                            <div className="order-setting-row">
                                <label htmlFor="">
                                    Additional field 3 <i className="icon plus"></i>
                                </label>
                                <div className="order-setting">
                                    <Input name="additional_field_3"
                                           value={props.connectionInfo.additional_field_3}
                                           onChange={onChange}/>
                                </div>
                            </div>
                            <div className="order-setting-row">
                                <label htmlFor="">
                                    Additional field 4 <i className="icon plus"></i>
                                </label>
                                <div className="order-setting">
                                    <Input name="additional_field_4"
                                           value={props.connectionInfo.additional_field_4}
                                           onChange={onChange}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Modal.Content>


        <div className="modal-foot">
            <div className="modal-save">
                <button className="ui labeled icon button blue"
                        onClick={props.onSubmit}>
                    <i className="save icon"></i>
                    Save and close
                </button>
            </div>
        </div>

    </Modal>
};

export default ConnectionModal;