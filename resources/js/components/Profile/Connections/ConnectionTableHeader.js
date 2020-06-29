import React, {Component} from "react";

import {DatesRangeInput} from 'semantic-ui-calendar-react';


let ConnectionTableHeader = props => {


    return (
        <thead>
        <tr>
            <th width="65">ID</th>
            <th width="180">Website</th>
            <th width="180">Script</th>
            <th width="230">Product</th>
            <th width="110">Price</th>
            <th width="170">Additional field 1</th>
            <th width="150">Additional field 2</th>
            <th width="150">Additional field 3</th>
            <th width="150">Additional field 4</th>
        </tr>

        </thead>
    )
};

export default ConnectionTableHeader;

