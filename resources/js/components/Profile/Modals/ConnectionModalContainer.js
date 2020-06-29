import React from "react";
import {connect} from "react-redux";
import ConnectionModal from "./ConnectionModal";
import {
    closeConnectionModalCreator, loadConnectionInfoCreator,
    updateConnectionInfoCreator
} from "../../../redux/connectionModalReducer";
import {addConnectionCreator, updateConnectionCreator} from "../../../redux/connectionReducer";
import {errors, notification} from "../../../src/notifications";
import {getCategories} from "../../../src/categoriesFunctions";
import {getProductsFromCat} from "../../../src/productsFunctions";
import {addConnection, updateConnection} from "../../../src/connectionFunctions";


class ConnectionModalContainer extends React.Component {
    constructor(props) {
        super(props);

        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getProductsFromCat = this.getProductsFromCat.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.onProductChange = this.onProductChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);

    }

    onProductChange(e, data) {
        e.persist();

        this.props.updateConnectionInfo(data.name, data.value);

        setTimeout(this.getProductInfo, 1);
    }

    onCategoryChange(e, data) {
        e.persist();

        this.props.updateConnectionInfo(data.name, data.value);
        this.props.updateConnectionInfo("product_id", 0);
        this.props.updateConnectionInfo("currency_symbol", "");
        this.props.updateConnectionInfo("price", 0);
        this.getProductsFromCat(data.value);
    }


    getProductInfo() {
        let prod;
        prod = this.props.connectionInfo.products.find(prod => {
            return prod.id === this.props.connectionInfo.product_id;
        });

        this.props.updateConnectionInfo("currency_symbol", prod.currency);

        this.props.updateConnectionInfo("price", prod.price);
    }

    getProductsFromCat(categoryID) {
        getProductsFromCat(categoryID).then(res => {
            let products = [];

            res.map((product, key) => {

                if (key === 0 && !this.props.connectionInfo.product_id) {
                    this.props.updateConnectionInfo("product_id", product.id);
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

            this.props.updateConnectionInfo("products", products);

            if (products.length) this.getProductInfo();

        });
    }

    componentDidUpdate() {
        if (!this.props.connectionInfo.categories.length && this.props.modalOpened) {
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

                this.props.updateConnectionInfo('categories', categories);

                getProducts(this.props.connectionInfo.category_id);
            });
        }
    }


    onSubmit() {
        let connection = this.props.connectionInfo;

        let connectionInfo = {
            product_id: connection.product_id,
            category_id: connection.category_id,
            currency_symbol: connection.currency_symbol,
            website: connection.website,
            price: connection.price,
            additional_field_1: connection.additional_field_1,
            additional_field_2: connection.additional_field_2,
            additional_field_3: connection.additional_field_3,
            additional_field_4: connection.additional_field_4,
        };

        let closeModal = this.props.closeConnectionModal;
        let addConnectionToState = this.props.addConnectionToState;
        let updateConnectionInState = this.props.updateConnectionInState;

        if (this.props.connectionInfo.connectionModalType === "add") {
            addConnection(connectionInfo)
                .then(res => {
                    console.log(res);
                    if (res.status !== 244) {
                        closeModal();

                        connectionInfo.id = res.data.id;
                        connectionInfo.script = res.data.script;
                        connectionInfo.product_name = res.data.product_name;
                        addConnectionToState(connectionInfo);
                        notification('success', 'checkmark', 'Success!', 'API connection successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }

        else if (this.props.connectionInfo.connectionModalType === "edit") {
            updateConnection(connectionInfo, this.props.connectionInfo.connectionID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();

                        console.log(res);

                        connectionInfo.id = res.data.id;
                        connectionInfo.script = res.data.script;
                        connectionInfo.product_name = res.data.product_name;
                        updateConnectionInState(connectionInfo);
                        notification('success', 'checkmark', 'Success!', 'API connection successfully updated!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
    }


    render() {
        return <ConnectionModal connectionInfo={this.props.connectionInfo}
                                modalOpened={this.props.modalOpened}
                                onProductChange={this.onProductChange}
                                onCategoryChange={this.onCategoryChange}
                                closeConnectionModal={this.props.closeConnectionModal}
                                updateConnectionInfo={this.props.updateConnectionInfo}
                                onSubmit={this.onSubmit}/>
    }
}


let mapStateToProps = (state) => {
    return {
        connectionInfo: state.connectionModal,
        modalOpened: state.connectionModal.connectionModalOpened
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        closeConnectionModal: () => {
            dispatch(closeConnectionModalCreator());
        },

        updateConnectionInfo: (name, value) => {
            dispatch(updateConnectionInfoCreator(name, value));
        },

        addConnectionToState: (connection) => {
            dispatch(addConnectionCreator(connection));
        },

        loadConnectionInfo: (connection) => {
            dispatch(loadConnectionInfoCreator(connection));
        },

        updateConnectionInState: (connection) => {
            dispatch(updateConnectionCreator(connection));
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectionModalContainer);