import React from 'react'
import s from './Header.module.css'
import {useNavigate} from 'react-router-dom'
import profileImg from "../../../common/assets/img/profile_pic.jpg"
import {useAppSelector} from "common/hooks";

import BasicMenu from "features/components/Menu/Menu";


export const Header = () => {
    const redirect = useNavigate()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)


    const onProfileClickHandler = () => {
        redirect("/profile")
    }
    const onLoginClickHandler = () => {
        redirect("/log-in")
    }


    return (
        <div id={'hw5-header'} className={s.header}>
                <span className={s.loginContentContainer}>
                    <span className={s.navBarLoginInfo}>
                        {isLoggedIn === false
                            ? <span onClick={onLoginClickHandler}>Login</span>
                            : <span onClick={onProfileClickHandler}>Profile</span>}
                    </span>
                </span>
            <div className={s.profileMenu}>
                <span className={s.navBarUserName}><BasicMenu  userName={"fdgdgdgdgdgdfgfd"}/></span>

            </div>
        </div>

    )
}
