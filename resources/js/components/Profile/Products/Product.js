import React, {Component} from 'react';
import noPhoto from "../../../../img/no_foto-120x100.png";


export default class Product extends Component {

    constructor(props){
        super(props);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }



    onDoubleClick(){
        this.props.editProductModal(this.props.product.id);
    }

    render(){
        return(
            <tr onDoubleClick={this.onDoubleClick}>
                <td><p>{this.props.product.id}</p></td>
                <td className="product-photo">
                    <img src={this.props.product.photo ? "/images/products/" + this.props.product.photo : noPhoto} alt=""/>
                </td>
                <td><p>{this.props.product.name}</p></td>
                <td>
                    {this.props.product.model}
                </td>
                <td>
                    {this.props.product['category_name']}
                </td>
                <td className="order-sum"><p>{this.props.product.price}</p></td>
                <td>
                    <p>
                        {this.props.product['currency_name']}
                    </p>
                </td>
                <td className="order-sum">
                    {this.props.product.amount < 1 ?
                        <p className="red-text">{this.props.product.amount}</p>
                        :
                        <p>{this.props.product.amount}</p>
                    }
                </td>
                <td className="order-sum">
                    <p className="blue-text">3</p>
                </td>
            </tr>
        )
    }
}