import React, {useEffect, useState} from 'react';
import s from "features/components/Profile/Profile.module.css";
import {useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import {Button} from "@mui/material";
import profileImg from "../../../common/assets/img/profile_pic.jpg"
import {EditableSpan} from "common/components/EditableSpan/EditableSpan";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppDispatch, useAppSelector} from "common/hooks";
import {authThunks} from "features/auth/auth.slice";
import {packsThunks} from "features/packs/packs.slice";


export const Profile = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userName = useAppSelector(state => state.auth.profile !== null ? state.auth.profile.name : "notLogged")
    const userEmail = useAppSelector(state => state.auth.profile !== null ? state.auth.profile.email : "notLogged")
    const packs = useAppSelector(state => state.packs.packState !== null ? state.packs.packState.cardPacks : "no packs found")

    const onNameChangeHandler = (newValue: string) => {
        const valueToBeSent = {
            name: newValue
        }
        dispatch(authThunks.changeUserName(valueToBeSent));
    }

    const handleLogOut = () => {
        dispatch(authThunks.logOut({}));
        navigate(PATH.LOGIN);
    }

    const getPacksHandler = () => {
        dispatch(packsThunks.getPacks({}))
        console.log(packs)
    }

    return (
        <div className={s.container}>
            <div className={s.profileContainer}>
                <span className={s.mainTitle}>Personal Information</span>
                <img className={s.profilePic} src={profileImg} alt="email_logo"/>
                <div className={s.profileNameContainer}>
                    <EditableSpan
                        value={userName}
                        onChange={onNameChangeHandler}/>
                </div>
                <div className={s.emailInfo}>{userEmail}</div>

                <Button onClick={handleLogOut}
                        className={s.redirectBtn}
                        variant="outlined" startIcon={<LogoutIcon/>}>
                    Log out
                </Button>
                <Button onClick={getPacksHandler}
                        className={s.redirectBtn}
                        variant="outlined" startIcon={<LogoutIcon/>}>
                    Get Packs BABY!
                </Button>
            </div>
        </div>
    );
};

