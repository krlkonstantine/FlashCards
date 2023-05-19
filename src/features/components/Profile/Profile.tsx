import React, {useState} from 'react';
import s from "features/components/Profile/Profile.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import {Button} from "@mui/material";
import profileImg from "../../../common/img/profile_pic.jpg"
import {emailToBeShown} from "features/components/ForgotPass/ForgotPass";
import {displayedEmail} from "features/components/Login/Login";
import ProfileTitle from "features/components/Profile/ProfileTitle";
import {EditableSpan} from "common/components/EditableSpan/EditableSpan";
import LogoutIcon from '@mui/icons-material/Logout';


export const Profile = () => {
    const [editName, setEditName] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(PATH.LOGIN);
    }
    const handleLogOut = () => {

    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <span className={s.mainTitle}>Personal Information</span>
                <img className={s.profilePic} src={profileImg} alt="email_logo"/>
                <div className={s.profileNameContainer}>
                    <EditableSpan value={"Konstantine"} onChange={() => {
                    }}/>
                </div>
                <div className={s.emailInfo}>{displayedEmail ? displayedEmail : "krlkonstatine@gmail.com"}</div>

                <Button onClick={handleLogOut}
                        className={s.redirectBtn}
                    variant="outlined" startIcon={<LogoutIcon />}>
                    Log out
                </Button>
            </div>
        </div>
    );
    ;
};

