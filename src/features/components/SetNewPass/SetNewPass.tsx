import React from 'react';
import s from "features/components/ForgotPass/ForgotPass.module.css";
import {Controller, useForm} from "react-hook-form";
import {Button, Input} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";


export const SetNewPass = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(PATH.LOGIN);
    }

    const {register, control, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onSubmit"
    })


    const onSubmit = (data: any) => {
        //TODO
        alert(JSON.stringify(data))
        if (data.password === data.confirmedPass) {
            dispatch(authThunks.setNewPass(data,))
            alert("done")
            reset()
            handleRedirect()
        } else alert("passwords don't match")
    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <span className={s.formTitle}>Create a new password</span>
                <form style={{width: 420}} onSubmit={handleSubmit(onSubmit)}>
                    <label style={{paddingTop: 20}}>
                        <label style={{paddingTop: 20, color: 'black', opacity: 0.5}}>New password:</label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: "Please enter a new password"}}
                            render={({field}) => <Input
                                {...register('password')}
                                type="password"
                                style={{width: 420}} {...field}
                            />}
                        />

                        <div style={{height: 40}}>
                            {errors?.password && <p className={s.error}>*Error!</p>}
                        </div>
                    </label>
                    <label>
                        <label style={{margin: 0, color: 'black', opacity: 0.5}}>Confirm password:</label>
                        <Controller
                            name="confirmedPass"
                            control={control}
                            rules={{required: "Please confirm the password"}}
                            render={({field}) => <Input
                                {...register('confirmedPass')}
                                type="password"
                                style={{width: 420}} {...field}
                            />}
                        />

                        <div style={{height: 40}}>
                            {errors?.password && <p className={s.error}>*Error!</p>}
                        </div>
                        <div className={s.donthaveAcc + " " + s.secondaryTxt}>Create a new password and we will send
                            you further instructions to your email
                        </div>
                    </label>
                    <Button
                        className={s.signInBtn}
                        style={{width: 420, textAlign: "center", borderRadius: 20}}
                        disabled={!isValid}
                        title="Register" type="submit"
                        variant="contained"
                        endIcon={<SendIcon/>}>
                        Send instructions
                    </Button>
                    <div className={s.donthaveAcc}>Did you remember your password?</div>
                    <div className={s.signUpRedirect}>
                        <NavLink
                            to={PATH.LOGIN}
                            className={s.active}
                        >
                            Try logging in
                        </NavLink></div>
                </form>
            </div>
        </div>
    );
};

