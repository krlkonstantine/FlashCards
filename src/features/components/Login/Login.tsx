import React from 'react';
import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from "features/components/Register/Register.module.css";

export const Login = () => {
    const dispatch = useAppDispatch();

    const loginHandler = () => {
        const payload = {
            email: "kornitsel.dev@nya.nya",
            password: "123qazxcvBG",
            rememberMe: false
        }
        dispatch(authThunks.login(payload));
    };

    return (
        <div className={s.container}>
            <h1>Log in</h1>
            <button onClick={loginHandler}>get logged in</button>
        </div>
    );
};
