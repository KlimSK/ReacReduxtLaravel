import React from "react";
import {Accordion, Checkbox, Form, Grid, Header, Menu, Segment} from "semantic-ui-react";
import {
    ChartLabel,
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis, LineMarkSeries
} from "react-vis";


let StatisticsCustomers = props => {

    let onTypeChange = (e, {value}) => props.changeInfo('type', value);
    let onCustomerChange = (e, {value}) => {
        let customers = [...props.selectedCustomers];
        if (!props.selectedCustomers.find(prod => prod === value))
            customers = [...props.selectedCustomers, value];
        else
            customers = props.selectedCustomers.filter(prod => prod !== value);

        props.changeInfo("selectedCustomers", customers);
    };


    let customers = props.customers.map(customer => {
        return <Form.Checkbox key={customer.id} label={`${customer.name} \n(${customer.phone})`} name='customer'
                              checked={!!props.selectedCustomers.find(prod => prod === customer.id)}
                              onChange={onCustomerChange}
                              type='checkbox' value={customer.id}/>
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
                                text="Customers"
                                includeMargin={true}
                                xPercent={0.5}
                                yPercent={0.88}
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }}
                            />
                            <ChartLabel
                                text={props.type === "income" ? `Price in USD` : "Amount of orders"}
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

                            <LineMarkSeries
                                className="linemark-series-example" animation="gentle" data={props.chartData} />


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
                                        active={props.lists.customers}
                                        onClick={() => props.toggleListOpen('customers')}
                                        content='Customers'
                                    />
                                    <Accordion.Content active={props.lists.customers}>
                                        <Form.Group grouped>
                                            {customers}
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


export default StatisticsCustomers;