import React, {Component} from "react";


export default class CategoriesTableHeader extends Component{


    render(){
        return(
            <thead>
            <tr>
                <th width="65">id</th>
                <th width="90">Название</th>
                <th width="40">Статус</th>
                <th width="30">Добавлено</th>
                <th width="90">Sort</th>
            </tr>

            </thead>
        )
    }
}