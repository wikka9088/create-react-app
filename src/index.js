import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './components/HelloWorld';
import * as serviceWorker from './serviceWorker';
import User from "./components/User";
import Clock from "./components/Clock";

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<HelloWorld name="123"/>, document.getElementById('helloWorld'));


const userInfo = {
    name: 'Tom',
    age: 18,
    isActivated: true,
    interests: ['basketball', 'music'],
    address: { city: 'Beijing', road: 'BeiWuHuan' }
};
// ReactDOM.render(<User {...userInfo}/>, document.getElementById('userDemo'));


ReactDOM.render(<Clock/>, document.getElementById('clock'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
