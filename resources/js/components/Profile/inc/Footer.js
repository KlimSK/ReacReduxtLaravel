import React, {Component} from 'react';

export default class Footer extends Component {
    constructor() {
        super();
    }


    render(){
        return(
            <footer>
                <div></div>

                <div className="copyright">
                    <a href="">BA-WEB®Engine</a>
                    2012 - 2019 © All Rights Reserved
                </div>

                <div className="footer-settings">


                    <div className="language">
                        Язык интерфейса: <b><img src="/img/flags/RU.ico" alt="" /> ru</b>
                    </div>
                    <div className="ws">
                        WS:
                        <a className="ui blue label mini">OK</a>
                    </div>
                </div>
            </footer>
        )
    }

}