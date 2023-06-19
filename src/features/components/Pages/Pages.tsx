import React from 'react';
import {HashRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import {Login} from "features/components/Login/Login";
import {Profile} from "features/components/Profile/Profile";
import {ForgotPass} from "features/components/ForgotPass/ForgotPass";
import {CheckEmail} from "features/components/CheckEmail/CheckEmail";
import {Register} from "features/components/Register/Register";
import {PacksPage} from "features/components/Packs/PacksPage";
import {Cards} from "features/components/Cards/Cards";
import {Learn} from "features/components/Learn/Learn";
import {SetNewPass} from "features/components/SetNewPass/SetNewPass";
import {Error} from "features/components/Error/Error";
import {Counter} from "features/counter/Counter";
import {Header} from "features/components/Header/Header";
import {EmptyPack} from "features/components/Packs/DisplayOptionsComponents/PackPages/MyPack/EmptyPack";
import {MyPack} from "features/components/Packs/DisplayOptionsComponents/PackPages/MyPack/MyPack";
import {FriendsPack} from "features/components/Packs/DisplayOptionsComponents/PackPages/FriendsPack/FriendsPack";
import {PrivateRoutes} from "app/hoc/PrivateRoutes";

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
    EMPTY_PACK: '/empty-pack',
    MY_PACK: '/my-pack',
    FRIENDS_PACK: '/friends-pack',
}

export const Pages = () => {

    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.FORGOT_PASS} element={<ForgotPass/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.SET_NEW_PASS} element={<SetNewPass/>}/>
                <Route element={ <PrivateRoutes />}>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.PACKS} element={<PacksPage/>}/>
                    <Route path={PATH.CARDS} element={<Cards/>}/>
                    <Route path={PATH.LEARN} element={<Learn/>}/>
                    <Route path={PATH.COUNTER} element={<Counter/>}/>
                    <Route path={PATH.EMPTY_PACK} element={<EmptyPack/>}/>
                    <Route path={PATH.MY_PACK} element={<MyPack/>}/>
                    <Route path={PATH.FRIENDS_PACK} element={<FriendsPack/>}/>
                </Route>
                <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>
                <Route path={'/404'} element={<Error/>}/>
            </Routes>
        </HashRouter>

    );
};

