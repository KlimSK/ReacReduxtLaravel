import React from "react";
import {Accordion, Checkbox, Form, Grid, Header, Menu, Segment} from "semantic-ui-react";
import {
    ChartLabel,
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis, LineMarkSeries, AreaSeries
} from "react-vis";
import {DatesRangeInput} from "semantic-ui-calendar-react";


let StatisticsPeriod = props => {

    let onTypeChange = (e, {value}) => {
        props.changeInfo('type', value);
        if(value === 'income')
            props.changeInfo('status', 4);
        else
            props.changeInfo('status', 9999);
    };
    let onDateChange = (e, {value}) => props.changeInfo('dates', value);
    let onStatusChange = (e, {value}) => props.changeInfo('status', value);

    let statuses = props.statuses.map(status => {
        return <Form.Radio key={status.id}
                           disabled={props.type === 'income'}
                           checked={props.status === status.id}
                           onChange={onStatusChange}
                           label={status.name} name='status'
                           type='radio' value={status.id}/>
    });

    return <div className="main-table statistics-table">

        <Grid container>
            <Grid.Row>
                <Grid.Column width={12}>
                    <div className="flex-block align-items-center justify-center">
                        <FlexibleXYPlot yBaseValue={0} xType="ordinal" margin={{left: 60}} height={500}
                                        onMouseLeave={() => props.changeInfo('hintValues', [])}>
                            <HorizontalGridLines/>
                            <VerticalGridLines/>
                            <XAxis/>
                            <YAxis/>
                            <ChartLabel
                                text="Dates"
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

                            <AreaSeries
                                animation="gentle"
                                className="area-series-example"
                                curve="curveNatural"
                                data={props.chartData}
                            />

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
                                        active={props.lists.dates}
                                        onClick={() => props.toggleListOpen('dates')}
                                        content='Dates'
                                    />
                                    <Accordion.Content active={props.lists.dates}>
                                        <Form.Group grouped>
                                            <DatesRangeInput
                                                dateFormat="DD.MM.YYYY"
                                                animation="none"
                                                popupPosition="bottom center"
                                                name="dates"
                                                placeholder="Dates range"
                                                value={props.dates}
                                                iconPosition="left"
                                                onChange={onDateChange}
                                            />
                                        </Form.Group>

                                    </Accordion.Content>
                                </Menu.Item>

                                <Menu.Item>
                                    <Accordion.Title
                                        active={props.lists.types}
                                        onClick={() => props.toggleListOpen('statuses')}
                                        content='Status'
                                    />
                                    <Accordion.Content active={props.lists.statuses}>
                                        <Form.Group grouped>
                                            <Form.Radio
                                                disabled={props.type === 'income'}
                                                checked={props.status === 9999}
                                                onChange={onStatusChange}
                                                label='All' name='status'
                                                type='radio' value={9999}/>

                                            {statuses}
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


export default StatisticsPeriod;



