import React from 'react';
import {useAppDispatch} from "common/hooks";
import {authThunks} from "features/auth/auth.slice";
import {Controller, useForm} from "react-hook-form";
import s from "features/components/ForgotPass/ForgotPass.module.css";
import {Button, Input} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";

export let emailToBeShown: string

export const ForgotPass = () => {
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const {token} = useParams<{ token: string }>()

        const handleRedirect = () => {
            navigate(PATH.CHECK_EMAIL);
        }


        const {register, control, formState: {errors, isValid}, handleSubmit, reset} = useForm({
            mode: "onSubmit"
        })

        const passTheEmail = (data: any) => {
            emailToBeShown = data.email
        }

        const onSubmit = (data: any) => {
            //TODO
            alert(JSON.stringify(data))
            dispatch(authThunks.forgotPass(data))
            reset()
            passTheEmail(data)
            //handleRedirect()
        }

        return (
            <div className={s.container}>
                <div className={s.formContainer}>
                    <span className={s.formTitle}>Forgot your password?</span>
                    <form style={{width: 420}} onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{required: "Please fill in the email field"}}
                                render={({field}) => <Input {...register('email')} placeholder={"Email"}
                                                            style={{width: 420}} {...field} />}
                            />
                            <div className={s.donthaveAcc + " " + s.secondaryTxt}>Enter your email address and we will send
                                you
                                further instructions
                            </div>
                            <div style={{height: 40}}>
                                {errors?.login && <p>*Error!</p>}
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
    }
;
