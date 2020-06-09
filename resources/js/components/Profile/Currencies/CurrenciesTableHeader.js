import React, {Component} from 'react';


export default class CurrenciesTableHeader extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <thead>
            <tr>
                <th width="10">id</th>
                <th width="90">Название</th>
                <th width="30">Символ</th>
                <th width="10">Sort</th>
            </tr>

            <tr>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="table_sort table_sort_js text-align-center cursor-pointer">
                        <div className="column sort_down">
                            <i className="angle down icon"></i>
                        </div>
                        <div className="column sort_up d-none">
                            <i className="angle up icon"></i>
                        </div>
                    </div>
                </td>
                <td></td>
            </tr>
            </thead>
        )
    }
}