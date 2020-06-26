import React from "react";
import {Accordion, Checkbox, Form, Grid, Header, Menu, Segment} from "semantic-ui-react";
import {
    ChartLabel,
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis, LineMarkSeries, AreaSeries, HorizontalBarSeries
} from "react-vis";
import {DatesRangeInput, MonthRangeInput} from "semantic-ui-calendar-react";


let StatisticsCompare = props => {

    let onTypeChange = (e, {value}) => props.changeInfo('type', value);
    let onDateChange = (e, {value}) => props.changeInfo('months', value);


    return <div className="main-table statistics-table">

        <Grid container>
            <Grid.Row>
                <Grid.Column width={12}>
                    <div className="flex-block align-items-center justify-center">
                        <FlexibleXYPlot yType="ordinal" margin={{left: 60}} height={500}
                                        onMouseLeave={() => props.changeInfo('hintValues', [])}>
                            <HorizontalGridLines/>
                            <VerticalGridLines/>
                            <XAxis/>
                            <YAxis/>
                            <ChartLabel
                                text={props.type === "income" ? `Income in USD` : "Amount of orders"}
                                includeMargin={true}
                                xPercent={0.5}
                                yPercent={0.88}
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }}
                            />
                            <ChartLabel
                                text="Months"
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

                            <HorizontalBarSeries
                                animation="gentle"
                                data={props.chartData}
                            />

                            {/*<LabelSeries
                                animation
                                allowOffsetToBeReversed
                                data={data} />*/}
                        </FlexibleXYPlot >
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
                                        active={props.lists.dates}
                                        onClick={() => props.toggleListOpen('dates')}
                                        content='Months'
                                    />
                                    <Accordion.Content active={props.lists.dates}>
                                        <Form.Group grouped>
                                            <MonthRangeInput
                                                animation="none"
                                                dateFormat="MM.YYYY"
                                                popupPosition="bottom center"
                                                name="months"
                                                placeholder="Months range"
                                                value={props.months}
                                                iconPosition="left"
                                                onChange={onDateChange}
                                            />
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


export default StatisticsCompare;



