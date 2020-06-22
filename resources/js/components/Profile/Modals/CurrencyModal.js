import React, {Component} from "react";
import {Form, Input, Modal, TransitionablePortal} from "semantic-ui-react";
import {addProduct, loadProductInfo, updateProduct} from "../../../src/productsFunctions";
import {errors, notification} from "../../../src/notifications";
import {addCurrency, loadCurrencyInfo, updateCurrency} from "../../../src/currenciesFunctions";

export default class CurrencyModal extends Component {

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidUpdate() {


        if (this.props.currencyInfo.currencyModalType === 'edit' &&
            !this.props.currencyInfo.isLoaded) {

            let loadCurrencyInfoToState = this.props.loadCurrencyInfo;
            let updateCurrencyInfo = this.props.updateCurrencyInfo;

            loadCurrencyInfo(this.props.currencyInfo.currencyID)
                .then(res => {
                    updateCurrencyInfo('isLoaded', true);

                    let currency = res[0];
                    loadCurrencyInfoToState({
                        name: currency.name,
                        symbol: currency.symbol,
                        shortName: currency.shortName,
                    });

                });
        }
    }



    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateCurrencyInfo(e.target.name, e.target.value);
        else
            this.props.updateCurrencyInfo(data.name, data.value);
    }


    onSubmit() {
        let currency = this.props.currencyInfo;

        let currencyInfo = {
            name: currency.currencyName,
            symbol: currency.symbol,
            shortName: currency.shortName,
        };


        let closeModal = this.props.closeCurrencyModal;
        let addCurrencyToState = this.props.addCurrencyToState;
        let updateProductInState = this.props.updateCurrencyInState;

        if (this.props.currencyInfo.currencyModalType === 'add') {
            addCurrency(currencyInfo)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        currencyInfo.id = res.data.id;
                        addCurrencyToState(currencyInfo);
                        notification('success', 'checkmark', 'Success!', 'Currency ' + currencyInfo.name + ' successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
        else if (this.props.currencyInfo.currencyModalType === 'edit') {
            updateCurrency(currencyInfo, this.props.currencyInfo.currencyID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        currencyInfo.id = res.data.id;

                        updateProductInState(currencyInfo);

                        notification('success', 'checkmark', 'Success!', 'Currency ' + currencyInfo.name + ' successfully updated!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
    }

    render() {
        return (

            <TransitionablePortal open={this.props.modalOpened}
                                  transition={{animation: 'scale', duration: 600}}>
                <Modal size="tiny" closeIcon onClose={this.props.closeCurrencyModal} open={this.props.modalOpened}
                       className="modal-currency" closeOnDimmerClick={true} closeOnEscape={true}>

                    <Modal.Header>
                        <div className="modal-head">
                            <h2 className="modal-title">
                                Currency
                            </h2>
                        </div>
                    </Modal.Header>

                    <Modal.Content>

                        <div className="order-container">
                            <div className="ui one column stackable grid container">
                                <div className="column">
                                    <div className="order-setting-row">
                                        <label>Name</label>
                                        <div className="order-setting">
                                            <Input name="currencyName"
                                                   value={this.props.currencyInfo.currencyName}
                                                   onChange={this.onChange}/>


                                        </div>
                                    </div>
                                    <div className="order-setting-row">
                                        <label htmlFor="modal-currency__symbol">Symbol</label>
                                        <div className="order-setting">

                                            <Input name="symbol"
                                                   value={this.props.currencyInfo.symbol}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="modal-currency__symbol">Short name</label>
                                        <div className="order-setting">
                                            <Input name="shortName"
                                                   value={this.props.currencyInfo.shortName}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>


                                    <div className="column pt-3 text-align-center">
                                        <button
                                            onClick={this.onSubmit}
                                            className="ui primary button modal-manufacturers__button">
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Modal.Content>
                </Modal>
            </TransitionablePortal>
        )
    }
}