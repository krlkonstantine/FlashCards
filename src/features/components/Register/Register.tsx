import React, {useState} from 'react';
import {authThunks} from "features/auth/auth.slice";
import {useAppDispatch} from "app/hooks";
import s from "./Register.module.css"
import {useForm, Controller} from "react-hook-form";
import {Checkbox, Input, Button, InputAdornment, IconButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const dispatch = useAppDispatch();

    const registerHandler = () => {
        const payload = {
            email: "kornitsel.dev@nya.nya",
            password: "123qazxcvBG"
        }
        dispatch(authThunks.register(payload));
    };

    const {register, control, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    })

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        console.log(data)
        if (data.password == data.cofirmedPass) {
            dispatch(authThunks.register(data))
            alert("done")
            reset()
        } else alert("passwords don't match")
    }

    return (
        <div className={s.container}>
            <h1>Create a new profile</h1>
            <form style={{width: 420}} className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <label style={{margin: 0, color: 'black', opacity: 0.5}}>Login:</label>
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
                            type={showPassword ? "text" : "password"}
                            style={{width: 420}} {...field} />}
                    />

                    <div style={{height: 40}}>
                        {errors?.password && <p>*Error!</p>}
                    </div>
                </label>
                <label>
                <label style={{margin: 0, color: 'black', opacity: 0.5}}>Confirm password:</label>
                <Controller
                    name="cofirmedPass"
                    control={control}
                    rules={{required: "Please confirm the password"}}
                    render={({field}) => <Input
                        {...register('cofirmedPass')}
                        type={showPassword ? "text" : "password"}
                        style={{width: 420}} {...field}
                    />}
                />

                <div style={{height: 40}}>
                    {errors?.password && <p>*Error!</p>}
                </div>
            </label>
                <Button
                    className={s.sendNewProfileButton}
                    style={{width: 420, textAlign: "center"}}
                    disabled={!isValid}
                    title="Register" type="submit"
                    variant="contained"
                    endIcon={<SendIcon/>}>
                    Sign Up
                </Button>
                <div className={s.alreadyHaveAcc}>Already have an account?</div>
                <div className={s.forgotPassText}>
                    <NavLink
                        to={PATH.LOGIN}
                        className={({isActive}) => isActive ? s.active : ""}
                    >
                        Sign In
                    </NavLink></div>
            </form>
        </div>
    );
};

