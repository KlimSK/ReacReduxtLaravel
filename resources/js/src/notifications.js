import {toast} from "react-semantic-toasts";

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