import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

// import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyBkIBGID1zRhWxdbAbnkV3-Q2mB2QybDfQ",
    authDomain: "projects-page-65b11.firebaseapp.com",
    databaseURL: "https://projects-page-65b11.firebaseio.com",
    projectId: "projects-page-65b11",
    storageBucket: "projects-page-65b11.appspot.com",
    messagingSenderId: "898372922382",
    appId: "1:898372922382:web:a6dca94cf247a68807605f",
    measurementId: "G-K7L0K8SZZ2"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// "site": "https://master.d3l4gvldg7aa9z.amplifyapp.com/"
// serviceWorker.unregister();
