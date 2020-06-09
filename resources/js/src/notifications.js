import {toast} from "react-semantic-toasts";
import React from "react";

export let notification = (type, icon, title, description) => {
    toast({
        type: type,
        icon: icon,
        title: title,
        description: description,
        animation: 'fade left',
        time: 6500
    });
};


export let errors = (res) => {
    let errors = JSON.parse(res.data);
    let errorsList = '';

    Object.values(errors).map((value, key) => {
        errorsList += "- " + value + "\n";
    });

    notification('error', 'times circle', 'Error!', <p
        style={{whiteSpace: "pre-line"}}>{errorsList}</p>);
};