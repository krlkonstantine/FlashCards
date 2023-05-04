import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import {Login} from "features/components/Login/Login";
import {Profile} from "features/components/Profile/Profile";
import {ForgotPass} from "features/components/ForgotPass/ForgotPass";
import {CheckEmail} from "features/components/CheckEmail/CheckEmail";
import {Register} from "features/components/Register/Register";
import {Packs} from "features/components/Packs/Packs";
import {Cards} from "features/components/Cards/Cards";
import {Learn} from "features/components/Learn/Learn";
import {SetNewPass} from "features/components/SetNewPass/SetNewPass";

export const PATH = {
    REGISTER: '/register',
    LOGIN: '/log-in',
    CHECK_EMAIL: '/check-email',
    ERROR: '/404',
    SET_NEW_PASS: '/set-new-password',
    FORGOT_PASS: '/forgot-my-password',
    PROFILE: '/profile',
    PACKS: '/packs',
    CARDS: '/cards',
    LEARN: '/learn',
}

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
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.FORGOT_PASS} element={<ForgotPass/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PACKS} element={<Packs/>}/>
                <Route path={PATH.CARDS} element={<Cards/>}/>
                <Route path={PATH.LEARN} element={<Learn/>}/>
                <Route path={PATH.SET_NEW_PASS} element={<SetNewPass/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/404'} element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default App;
