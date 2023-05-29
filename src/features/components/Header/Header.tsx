import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation, useNavigate} from 'react-router-dom'
import profileImg from "../../../common/assets/img/profile_pic.jpg"
import {useAppSelector} from "common/hooks";
import {useSelector} from "react-redux";


export const Header = () => {
    const redirect = useNavigate()
    const location = useLocation()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)



    const onProfileClickHandler = () => {
        redirect("/profile")
    }
    const onLoginClickHandler = () => {
        redirect("/log-in")
    }

    return (
        <>

            <div id={'hw5-header'} className={s.header}>
                <div className={s.loginContentContainer}>

                    <span className={s.navBarUserName}>
                        {isLoggedIn === false
                            ? <span onClick={onLoginClickHandler}>Login</span>
                            : <span onClick={onProfileClickHandler}>Profile</span>}
                    </span>
                </div>
                <img
                    src={profileImg}
                    id={'hw5-burger-menu'}
                    className={s.navBarProfileImg}
                    alt={'profile picture'}
                />
            </div>
        </>
    )
}
