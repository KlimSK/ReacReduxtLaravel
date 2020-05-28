import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import Dev from "./components/Dev";
import {Router} from "react-router-dom";
import history from "./history";
import {Provider} from "react-redux";


if (document.getElementById('dev')) {
    ReactDOM.render(
        <Router history={history}>
            <Provider store={store}>
                <Dev/>
            </Provider>
        </Router>, document.getElementById('dev'));
}

