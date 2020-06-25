import {
    changeSelectedProductsCreator,
    changeStatisticsProductsCurrencyCreator, changeStatisticsProductsInfoCreator,
    changeStatisticsProductsTypeCreator, loadStatisticsCurrenciesCreator,
    loadStatisticsProductsCreator, toggleListOpenCreator
} from "../../../../redux/statisticsProductsReducer";
import React from "react";
import {connect} from "react-redux";
import StatisticsProducts from "./StatisticsProducts";
import {mainTableHeight} from "../../inc/tableFunctions";
import {getCurrencies} from "../../../../src/currenciesFunctions";
import {getProductsByCurrency} from "../../../../src/productsFunctions";
import {getProductsStatistics} from "../../../../src/statisticsFunctions";
import {errors} from "../../../../src/notifications";

class StatisticsProductsContainer extends React.Component {
    constructor() {
        super();

        this.onCurrencyChange = this.onCurrencyChange.bind(this);
        this.onFilterSubmit = this.onFilterSubmit.bind(this);
    }


    componentDidMount() {

        getCurrencies().then(res => {
            this.props.loadCurrencies(res);

            getProductsByCurrency(this.props.currency).then(res => {
                this.props.loadProducts(res);
            });
        });


        mainTableHeight();
    }

    onCurrencyChange(currency) {
        this.props.changeCurrency(currency);

        this.props.changeInfo('selectedProducts', []);

        getProductsByCurrency(currency).then(res => {
            this.props.loadProducts(res);
        });
    }


    onFilterSubmit() {
        let params = {
            type: this.props.type,
            currency_id: this.props.currency,
            products: this.props.selectedProducts
        };

        let productsList = this.props.products;
        let changeInfo = this.props.changeInfo;

        getProductsStatistics(params).then(res => {
            if (res.status !== 244) {
                let result = res.data.flat(1);

                let data = [];

                params.products.forEach(id => {

                    let product = result.filter(prod => id === prod.product_id);

                    let sum = 0;
                    if(params.type === 'amount')
                        sum = product.reduce((a, b) => a + (Number(b.amount) || 0),0);
                    else
                        sum = product.reduce((a, b) => a + (Number(b.price) || 0),0);

                    let productName = productsList.find(prod => id === prod.id)['name'];

                    data = [...data, {x: productName, y: sum, label: sum}]
                });

                changeInfo('chartData', data);
            }
            else
                errors(res)
        });
    }

    render() {
        return <StatisticsProducts products={this.props.products}
                                   currencies={this.props.currencies}
                                   currency={this.props.currency}
                                   type={this.props.type}
                                   lists={this.props.lists}
                                   chartData={this.props.chartData}
                                   selectedProducts={this.props.selectedProducts}
                                   hintValues={this.props.hintValues}
                                   loadProducts={this.props.loadProducts}
                                   changeType={this.props.changeType}
                                   toggleListOpen={this.props.toggleListOpen}
                                   onCurrencyChange={this.onCurrencyChange}
                                   changeInfo={this.props.changeInfo}
                                   onFilterSubmit={this.onFilterSubmit}
                                   changeSelectedProducts={this.props.changeSelectedProduct}/>
    }
}

let mapStateToProps = state => {
    return {
        products: state.statisticsProductsPage.products,
        currencies: state.statisticsProductsPage.currencies,
        type: state.statisticsProductsPage.type,
        currency: state.statisticsProductsPage.currency,
        lists: state.statisticsProductsPage.lists,
        chartData: state.statisticsProductsPage.chartData,
        selectedProducts: state.statisticsProductsPage.selectedProducts,
        hintValues: state.statisticsProductsPage.hintValues
    }
};


let mapDispatchToProps = dispatch => {
    return {
        loadProducts: (products) => {
            dispatch(loadStatisticsProductsCreator(products));
        },

        loadCurrencies: (currencies) => {
            dispatch(loadStatisticsCurrenciesCreator(currencies))
        },

        changeType: (statistics_type) => {
            dispatch(changeStatisticsProductsTypeCreator(statistics_type));
        },

        changeCurrency: (currency) => {
            dispatch(changeStatisticsProductsCurrencyCreator(currency));
        },

        changeSelectedProduct: (products) => {
            dispatch(changeSelectedProductsCreator(products));
        },

        changeInfo: (name, value) => {
            dispatch(changeStatisticsProductsInfoCreator(name, value));
        },

        toggleListOpen: (name) => {
            dispatch(toggleListOpenCreator(name));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatisticsProductsContainer);
