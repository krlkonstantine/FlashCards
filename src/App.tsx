import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import {Login} from "features/components/Login/Login";
import {Profile} from "features/components/Profile/Profile";
import {ForgotPass} from "features/components/ForgotPass/ForgotPass";
import {CheckEmail} from "features/components/CheckEmail/CheckEmail";
import {Register} from "features/components/Register/Register";
import {Packs} from "features/components/Packs/Packs";
import {Cards} from "features/components/Cards/Cards";
import {Learn} from "features/components/Learn/Learn";
import {Error} from "features/components/Error/Error";
import {SetNewPass} from "features/components/SetNewPass/SetNewPass";
import {Pages} from "features/components/Pages/Pages";



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Counter/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
          <span>Learn </span>
          <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
            </header>
            <Pages/>
        </div>
    );
}

export default App;
