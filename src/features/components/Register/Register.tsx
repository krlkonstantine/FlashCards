import React from 'react';
import {authThunks} from "features/auth/auth.slice";
import {useAppDispatch} from "app/hooks";
import s from "./Register.module.css"


export const Register = () => {
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        const payload = {
            email: "nya-admin@nya.nya",
            password: "1qazxcvBG"
        }
        dispatch(authThunks.register(payload));
    };

    return (
        <div className={s.container}>
            <h1>Register</h1>
            <button onClick={registerHandler}>register</button>
        </div>
    );
};

