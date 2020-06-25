import React, {Component} from "react";
import {mainTableHeight} from "../inc/tableFunctions";
import {NavLink} from "react-router-dom";
import {Card, Grid, Icon, Image} from "semantic-ui-react";
import {
    AreaSeries,
    ChartLabel,
    FlexibleXYPlot, HorizontalBarSeries,
    HorizontalGridLines, LineMarkSeries, LineSeries,
    VerticalBarSeries,
    VerticalGridLines,
    XAxis, XYPlot,
    YAxis
} from "react-vis";
import '../../../../../node_modules/react-vis/dist/style.css';

export default class Statistics extends Component {

    componentDidMount() {
        mainTableHeight();
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className="main-table" >
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <NavLink to="statistics/products">
                                        <Card fluid className="mt-1">
                                            <Card.Content>
                                                <div className="flex-block justify-center">
                                                    <FlexibleXYPlot height={200} xType="ordinal">
                                                        <HorizontalGridLines/>
                                                        <VerticalGridLines/>
                                                        <XAxis/>
                                                        <YAxis/>
                                                        <ChartLabel
                                                            text="Products"
                                                            includeMargin={true}
                                                            xPercent={0.5}
                                                            yPercent={0.8}
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <ChartLabel
                                                            text="Price in USD"
                                                            includeMargin={true}
                                                            xPercent={0.02}
                                                            yPercent={0}
                                                            style={{
                                                                transform: 'rotate(-90)',
                                                                textAnchor: 'end',
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />

                                                        <VerticalBarSeries  data={this.props.preview.products}/>
                                                    </FlexibleXYPlot>
                                                </div>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Header>Sales of products</Card.Header>
                                                <Card.Description>
                                                    Shows statistics about your products and their sales.
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </NavLink>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <NavLink to="statistics/period">
                                        <Card fluid className="mt-1">
                                            <Card.Content>
                                                <div className="flex-block justify-center">
                                                    <FlexibleXYPlot height={200} xType="ordinal">
                                                        <HorizontalGridLines/>
                                                        <VerticalGridLines/>
                                                        <XAxis/>
                                                        <YAxis/>
                                                        <ChartLabel
                                                            text="Date"
                                                            includeMargin={true}
                                                            xPercent={0.5}
                                                            yPercent={0.8}
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <ChartLabel
                                                            text="Orders"
                                                            includeMargin={true}
                                                            xPercent={0.02}
                                                            yPercent={0}
                                                            style={{
                                                                transform: 'rotate(-90)',
                                                                textAnchor: 'end',
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <AreaSeries
                                                            className="area-series-example"
                                                            curve="curveNatural"
                                                            data={this.props.preview.period}
                                                        />
                                                    </FlexibleXYPlot>
                                                </div>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Header>Sales for the period</Card.Header>
                                                <Card.Description>
                                                    Shows a statistics about sales and for some period.
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </NavLink>
                                </Grid.Column>
                            </Grid.Row>


                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <NavLink to="statistics/customers">
                                        <Card fluid className="mt-1">
                                            <Card.Content>
                                                <div className="flex-block justify-center">
                                                    <FlexibleXYPlot height={200} xType="ordinal">
                                                        <HorizontalGridLines/>
                                                        <VerticalGridLines/>
                                                        <XAxis/>
                                                        <YAxis/>
                                                        <ChartLabel
                                                            text="Customers"
                                                            includeMargin={true}
                                                            xPercent={0.45}
                                                            yPercent={0.8}
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <ChartLabel
                                                            text="Orders"
                                                            includeMargin={true}
                                                            xPercent={0.02}
                                                            yPercent={0}
                                                            style={{
                                                                transform: 'rotate(-90)',
                                                                textAnchor: 'end',
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <LineMarkSeries
                                                            className="linemark-series-example"

                                                            data={this.props.preview.customers}/>
                                                    </FlexibleXYPlot>
                                                </div>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Header>Sales to customers</Card.Header>
                                                <Card.Description>
                                                    Shows statistics about sales to specific customers.
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </NavLink>
                                </Grid.Column>

                                <Grid.Column width={8}>

                                    <NavLink to="statistics/comparing">
                                        <Card fluid className="mt-1">
                                            <Card.Content>
                                                <div className="flex-block justify-center">
                                                    <FlexibleXYPlot height={200}
                                                            margin={{left: 80}}
                                                            yType="ordinal">
                                                        <HorizontalGridLines/>
                                                        <VerticalGridLines/>
                                                        <ChartLabel
                                                            text="Income"
                                                            includeMargin={true}
                                                            xPercent={0.45}
                                                            yPercent={0.6}
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <ChartLabel
                                                            text="Months"
                                                            includeMargin={true}
                                                            xPercent={0.02}
                                                            yPercent={0}
                                                            style={{
                                                                transform: 'rotate(-90)',
                                                                textAnchor: 'end',
                                                                fontSize: "15px",
                                                                fontWeight: "bold"
                                                            }}
                                                        />
                                                        <XAxis/>
                                                        <YAxis/>
                                                        <HorizontalBarSeries
                                                            data={this.props.preview.compare}
                                                        />
                                                    </FlexibleXYPlot>
                                                </div>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Header>Comparing of income for different months</Card.Header>
                                                <Card.Description>
                                                    Shows difference of your income for months.
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </NavLink>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}