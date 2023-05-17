import React from 'react';
import s from "features/components/CheckEmail/CheckEmail.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import {Button} from "@mui/material";
import emailImg from "../../../common/img/email_logo.svg"
import {emailToBeShown} from "features/components/ForgotPass/ForgotPass";


export const CheckEmail = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(PATH.LOGIN);
    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <span className={s.formTitle}>Check your Email</span>
                    <img className={s.emailImg} src={emailImg} alt="email_logo"/>
                <div className={s.emailInfo}>We've sent an Email with instructions to {emailToBeShown}</div>
                <Button
                    onClick={handleClick}
                    className={s.redirectBtn}
                    style={{width: 420, textAlign: "center"}}
                    variant="contained"
                >Back to login</Button>
            </div>
        </div>
    );
    ;
};

