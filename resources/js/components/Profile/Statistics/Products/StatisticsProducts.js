import React from "react";
import {Accordion, Checkbox, Form, Grid, Header, Menu, Segment} from "semantic-ui-react";
import {
    ChartLabel,
    FlexibleXYPlot, Crosshair,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalGridLines,
    XAxis,
    YAxis
} from "react-vis";


let StatisticsProducts = props => {

    let onTypeChange = (e, {value}) => props.changeType(value);
    let onCurrencyChange = (e, {value}) => props.onCurrencyChange(value);
    let onProductChange = (e, {value}) => {
        let products = [...props.selectedProducts];
        if (!props.selectedProducts.find(prod => prod === value))
            products = [...props.selectedProducts, value];
        else
            products = props.selectedProducts.filter(prod => prod !== value);

        props.changeSelectedProducts(products);
    };


    let currencyShortName = props.currencies.length ? props.currencies.find(cur => cur.id === props.currency)['shortName'] : '';

    let currencies = props.currencies.map(currency => {
        return <Form.Radio key={currency.id} label={currency.name} name='currency'
                           checked={props.currency === currency.id}
                           onChange={onCurrencyChange}
                           type='radio' value={currency.id}/>
    });


    let products = props.products.map(product => {
        return <Form.Checkbox key={product.id} label={product.name} name='product'
                              checked={!!props.selectedProducts.find(prod => prod === product.id)}
                              onChange={onProductChange}
                              type='checkbox' value={product.id}/>
    });


    return <div className="main-table statistics-table">
        <Grid container>
            <Grid.Row>
                <Grid.Column width={12}>
                    <div className="flex-block align-items-center justify-center">
                        <FlexibleXYPlot xType="ordinal" margin={{left: 60}} height={500}
                                        onMouseLeave={() => props.changeInfo('hintValues', [])}>
                            <HorizontalGridLines/>
                            <VerticalGridLines/>
                            <XAxis/>
                            <YAxis/>
                            <ChartLabel
                                text="Products"
                                includeMargin={true}
                                xPercent={0.5}
                                yPercent={0.88}
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }}
                            />
                            <ChartLabel
                                text={props.type === "income" ? `Price in ${currencyShortName}` : "Amount of orders"}
                                includeMargin={true}
                                xPercent={0.02}
                                yPercent={0.3}
                                style={{
                                    transform: 'rotate(-90)',
                                    textAnchor: 'end',
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }}
                            />

                            <VerticalBarSeries animation="gentle" data={props.chartData} />


                            {/*<LabelSeries
                                animation
                                allowOffsetToBeReversed
                                data={data} />*/}
                        </FlexibleXYPlot>
                    </div>
                </Grid.Column>

                <Grid.Column width={4}>
                    <Segment style={{maxHeight: "500px", overflowY: "auto", paddingBottom: 0}}>
                        <Header as='h5' icon='filter' content='Filter'/>
                        <Form style={{position: "relative"}}>

                            <Accordion as={Menu} style={{border: "none", boxShadow: "none"}}
                                       vertical>

                                <Menu.Item>
                                    <Accordion.Title
                                        active={props.lists.types}
                                        onClick={() => props.toggleListOpen('types')}
                                        content='Type'
                                    />
                                    <Accordion.Content active={props.lists.types}>
                                        <Form.Group grouped>
                                            <Form.Radio
                                                checked={props.type === 'amount'}
                                                onChange={onTypeChange}
                                                label='Amount' name='type'
                                                type='radio' value='amount'/>

                                            <Form.Radio
                                                checked={props.type === 'income'}
                                                onChange={onTypeChange}
                                                label='Income' name='type'
                                                type='radio' value='income'/>
                                        </Form.Group>

                                    </Accordion.Content>
                                </Menu.Item>

                                <Menu.Item>
                                    <Accordion.Title
                                        active={props.lists.currencies}
                                        onClick={() => props.toggleListOpen('currencies')}
                                        content='Currency'
                                    />
                                    <Accordion.Content active={props.lists.currencies}>
                                        <Form.Group grouped>
                                            {currencies}
                                        </Form.Group>

                                    </Accordion.Content>
                                </Menu.Item>

                                <Menu.Item>
                                    <Accordion.Title
                                        active={props.lists.products}
                                        onClick={() => props.toggleListOpen('products')}
                                        content='Products'
                                    />
                                    <Accordion.Content active={props.lists.products}>
                                        <Form.Group grouped>
                                            {products}
                                        </Form.Group>

                                    </Accordion.Content>
                                </Menu.Item>

                            </Accordion>

                        </Form>
                        <div className="flex-block justify-center filter-button">
                            <Form.Button
                                onClick={props.onFilterSubmit} primary>
                                Filter
                            </Form.Button>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
};


export default StatisticsProducts;