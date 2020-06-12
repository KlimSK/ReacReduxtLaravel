import React, {Component} from "react";


export default class StatusTableHeader extends Component {

    render() {
        return (
            <thead>
            <tr>
                <th width="1">id</th>
                <th width="25">Preview</th>
                <th width="160">Name</th>
                <th width="1">Color</th>
                <th width="1">Text color</th>
            </tr>
            </thead>
        )
    }
}