import React, {Component} from "react";


export default class CategoriesTableHeader extends Component{


    render(){
        return(
            <thead>
            <tr>
                <th width="1">id</th>
                <th width="190">Name</th>
                <th width="30">Added</th>
            </tr>

            </thead>
        )
    }
}