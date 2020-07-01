import React, {Component} from "react";



export default class Category extends Component{
    constructor(props){
        super(props);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }


    onDoubleClick(){
        this.props.editCategoryModal(this.props.category.id);
    }

    render(){
        return(
            <tr onDoubleClick={this.onDoubleClick}>
                <td>
                    <p>{this.props.category.id}</p>
                </td>
                <td>
                    <i className="folder outline icon"></i>
                    <span className="item">{this.props.category.name}</span>
                </td>
                <td>
                    <div className="item">{this.props.category['created_at'].split("T")[0]}</div>
                </td>
            </tr>
        )
    }
}