import React from 'react';
import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import {Controller, useForm} from "react-hook-form";
import s from "features/components/Login/Login.module.css";
import {Button, Checkbox, FormControlLabel, Input} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {NavLink} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";

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

    const {register, control, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    })

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        dispatch(authThunks.login(data))
        reset()
    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <span className={s.formTitle}>Sign in</span>
                <form style={{width: 420}} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <label style={{margin: 0, color: 'black', opacity: 0.5}}>Email:</label>
                        <Controller

                            name="email"
                            control={control}
                            rules={{required: "Please fill in the email field"}}
                            render={({field}) => <Input {...register('email')} style={{width: 420}} {...field} />}
                        />

                        <div style={{height: 40}}>
                            {errors?.login && <p>*Error!</p>}
                        </div>
                    </label>
                    <label>
                        <label style={{margin: 0, color: 'black', opacity: 0.5}}>Password:</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: "Please fill in the password field"}}
                            render={({field}) => <Input
                                {...register('password')}
                                type="password"
                                style={{width: 420}} {...field} />}
                        />
                    </label>
                    <FormControlLabel
                        style={{color: "black", marginBottom: 0}}
                        control={<Checkbox defaultChecked/>} label="Remember me"/>
                    <div className={s.forgotPassText}>
                        <NavLink
                            to={PATH.FORGOT_PASS}
                            className={s.active}
                        >
                            Forgot Password?
                        </NavLink></div>
                    <Button
                        className={s.signInBtn}
                        style={{width: 420, textAlign: "center",borderRadius:20}}
                        disabled={!isValid}
                        title="Register" type="submit"
                        variant="contained"
                        endIcon={<SendIcon/>}>
                        Sign in
                    </Button>
                    <div className={s.donthaveAcc}>Don't have an account?</div>
                    <div className={s.signUpRedirect}>
                        <NavLink
                            to={PATH.REGISTER}
                            className={s.active}
                        >
                            Sign Up
                        </NavLink></div>
                </form>
            </div>
        </div>
    );
};
