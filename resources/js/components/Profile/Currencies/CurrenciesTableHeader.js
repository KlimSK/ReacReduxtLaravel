import React, {Component} from 'react';


export default class CurrenciesTableHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead>
            <tr>
                <th width="10">id</th>
                <th width="90">Название</th>
                <th width="30">Символ</th>
                <th width="15">Abbreviation</th>
                <th width="10">Rate (USD)</th>
            </tr>

            </thead>
        )
    }
}