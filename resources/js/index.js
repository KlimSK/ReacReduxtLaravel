import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import Dev from "./components/Dev";

let rerenderEntireTree = (state) => {
    if (document.getElementById('dev')) {
        ReactDOM.render(<Dev state={state} store={store} />, document.getElementById('dev'));
    }
};

rerenderEntireTree(store);

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});