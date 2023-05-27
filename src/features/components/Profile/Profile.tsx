import React, {useState} from 'react';
import s from "features/components/Profile/Profile.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import {Button} from "@mui/material";
import profileImg from "../../../common/assets/img/profile_pic.jpg"
import {displayedEmail} from "features/components/Login/Login";
import {EditableSpan} from "common/components/EditableSpan/EditableSpan";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppDispatch} from "common/hooks";
import {authThunks} from "features/auth/auth.slice";


export const Profile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onNameChangeHandler = (newValue: string) => {
        const valueToBeSent = {
            name: newValue
        }
        dispatch(authThunks.changeUserName(valueToBeSent));
        navigate(PATH.LOGIN);
    }

    const handleLogOut = () => {
        dispatch(authThunks.logOut({}));
        navigate(PATH.LOGIN);
    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <span className={s.mainTitle}>Personal Information</span>
                <img className={s.profilePic} src={profileImg} alt="email_logo"/>
                <div className={s.profileNameContainer}>
                    <EditableSpan
                        value={"Konstantine"}
                        onChange={onNameChangeHandler}/>
                </div>
                <div className={s.emailInfo}>{displayedEmail ? displayedEmail : "krlkonstatine@gmail.com"}</div>

                <Button onClick={handleLogOut}
                        className={s.redirectBtn}
                        variant="outlined" startIcon={<LogoutIcon/>}>
                    Log out
                </Button>
            </div>
        </div>
    );
    ;
};

