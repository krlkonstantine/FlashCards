import React from 'react';
import {authThunks} from "features/auth/auth.slice";
import {useAppDispatch} from "app/hooks";
import s from "./Register.module.css"
import {useForm,Controller} from "react-hook-form";
import {Checkbox, Input,Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';



export const Register = () => {
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        const payload = {
            email: "kornitsel.dev@nya.nya",
            password: "123qazxcvBG"
        }
        dispatch(authThunks.register(payload));
    };

    const {register, control,formState: {errors,isValid}, handleSubmit,reset} = useForm({
        mode: "onSubmit"
    })

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        dispatch(authThunks.login(data))
        reset()
    }

    return (
        <div className={s.container}>
            <h1>Create a new profile</h1>
            <form style={{width:420}} className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <label style={{margin: 0, color:'black',opacity: 0.5}}>Login:</label>
                    <Controller

                        name="email"
                        control={control}
                        rules={{ required: "Please fill in the email field" }}
                        render={({ field }) => <Input {...register('email')} style={{width:420}} {...field} />}
                    />

                    <div style={{height: 40}}>
                        {errors?.login && <p>*Error!</p>}
                    </div>
                </label>
                <label>
                    <label style={{margin: 0, color:'black',opacity: 0.5}}>Password:</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Please fill in the password field" }}
                        render={({ field }) => <Input
                            {...register('password')}
                            type="password"
                            style={{width:420}} {...field} />}
                    />

                    <div style={{height: 40}}>
                        {errors?.password && <p>*Error!</p>}
                    </div>
                </label> <label>
                    <label style={{margin: 0, color:'black',opacity: 0.5}}>Confirm password:</label>
                    <Controller
                        name="confirmed password"
                        control={control}
                        rules={{ required: "Please confirm the password" }}
                        render={({ field }) => <Input
                            {...register('cofirmedPass')}
                            type="password"
                            style={{width:420}} {...field} />}
                    />

                    <div style={{height: 40}}>
                        {errors?.password && <p>*Error!</p>}
                    </div>
                </label>
                {/*<label>
                    <span>Password</span>
                    <input type="password"
                           {...register('password')}
                    />
                </label>

                <input disabled={!isValid} title="Register" type="submit"/>*/}
                <Button
                    style={{width: 420,textAlign:"center"}}
                    disabled={!isValid}
                    title="Register" type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}>
                    Create Profile
                </Button>
            </form>
        </div>
    );
};

