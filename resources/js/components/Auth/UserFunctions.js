import axios from 'axios';
import history from "../../history";


export const register = newUser =>{
    return axios
        .post('/api/register', newUser, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
};


export const login = user =>{
    return axios
        .post('/api/login', {
            email: user.email,
            password: user.password
        }, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            setLocalStorage('usertoken', response.data.token, 12);
            return response.data.token;
        })
        .catch(err => {
            console.log(err);
        })
};

export const getProfile = () => {
    return axios
        .get('/api/profile', {
            headers: { Authorization: `Bearer ${getLocalStorage('usertoken')}` }
        })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
            history.push('/welcome');
        })
};

export const logout = (event) => {
    event.preventDefault();
    return axios
        .post('/api/logout', {
            token: getLocalStorage('usertoken')
        })
        .then(response => {
            console.log(response);
            if(response){
                localStorage.removeItem('usertoken');
                history.push('/welcome');
            }
        })
        .catch(err => {
            console.log(err);
        })
};


export const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};

export const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
};


export function setLocalStorage(key, value, ttl) {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl * 3600000
    };
    localStorage.setItem(key, JSON.stringify(item));
}


export function getLocalStorage(key) {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr);

    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null
    }

    return item.value
}