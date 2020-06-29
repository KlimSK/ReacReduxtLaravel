import React, {Component, Fragment} from 'react';
import {Button, Popup} from 'semantic-ui-react';
import copy from "copy-to-clipboard";

let Connection = props => {

    let copyScript = () => copy(props.connection.script);

    let onDoubleClick = () => props.editConnectionModal(props.connection);

    return <tr className="row-white" onDoubleClick={onDoubleClick}>

        <td><p>{props.connection.id}</p></td>
        <td>
            <p>
                <i className="ui icon globe"></i>
                {props.connection.website}
            </p>
        </td>
        <td>
            <p>
                <Button size="tiny" onClick={copyScript} title="Copy script to clipboard" icon="copy" />
                {props.connection.script}
            </p>
        </td>

        <td>
            <p>
                {props.connection.product_name}
            </p>
        </td>
        <td>
            <p>
                {props.connection.price} {props.connection.currency_symbol}
            </p>
        </td>

        <td><p>{props.connection.additional_field_1}</p></td>
        <td><p>{props.connection.additional_field_2}</p></td>
        <td><p>{props.connection.additional_field_3}</p></td>
        <td><p>{props.connection.additional_field_4}</p></td>
    </tr>

};

export default Connection;