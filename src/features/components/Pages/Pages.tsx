import React from 'react';
import {HashRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import {Login} from "features/components/Login/Login";
import {Profile} from "features/components/Profile/Profile";
import {ForgotPass} from "features/components/ForgotPass/ForgotPass";
import {CheckEmail} from "features/components/CheckEmail/CheckEmail";
import {Register} from "features/components/Register/Register";
import {Packs} from "features/Packs/Packs";
import {Cards} from "features/Cards/Cards";
import {Learn} from "features/components/Learn/Learn";
import {SetNewPass} from "features/components/SetNewPass/SetNewPass";
import {Error} from "features/components/Error/Error";
import {NavLink} from 'react-router-dom'
import s from "./Pages.module.css"
import {Counter} from "features/counter/Counter";

export const PATH = {
    REGISTER: '/register',
    LOGIN: '/log-in',
    CHECK_EMAIL: '/check-email',
    ERROR: '/404',
    SET_NEW_PASS: '/set-new-password/:resetPasswordToken',
    FORGOT_PASS: '/forgot-my-password',
    PROFILE: '/profile',
    PACKS: '/packs',
    CARDS: '/cards',
    LEARN: '/learn',
    COUNTER: '/counter',
}

export const Pages = () => {
    const { token } = useParams<{ token: string }>()

    return (
        <HashRouter>
            <div>
                <Routes>
                    {/*<Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                    <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>
*/}
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.FORGOT_PASS} element={<ForgotPass/>}/>
                    <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                    <Route path={PATH.REGISTER} element={<Register/>}/>
                    <Route path={PATH.PACKS} element={<Packs/>}/>
                    <Route path={PATH.CARDS} element={<Cards/>}/>
                    <Route path={PATH.LEARN} element={<Learn/>}/>
                    <Route path={PATH.COUNTER} element={<Counter/>}/>
                    <Route path={PATH.SET_NEW_PASS} element={<SetNewPass/>}/>
                    {/*<Route path={"/set-new-password/:resetPasswordToken"} element={<SetNewPass/>}/>*/}
                    <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>

                    {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                    <Route path={'/404'} element={<Error/>}/>
                </Routes>
                <NavLink className={s.navlinks}
                         to={PATH.PROFILE}
                >Profile</NavLink>
                <NavLink className={s.navlinks}
                         to={PATH.CARDS}
                >Cards</NavLink>
                <NavLink className={s.navlinks}
                         to={PATH.PACKS}
                >Packs</NavLink>
                <NavLink className={s.navlinks}
                         to={PATH.LOGIN}
                >Log in</NavLink>
                <NavLink className={s.navlinks}
                         to={PATH.REGISTER}
                >Register</NavLink>
            </div>
        </HashRouter>

    );
};

