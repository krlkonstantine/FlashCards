import React from 'react'
import s from './Header.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import profileImg from "../../../common/assets/img/profile_pic.jpg"
import {useAppDispatch, useAppSelector} from "common/hooks";

import BasicMenu from "features/components/Menu/Menu";
import {PATH} from "features/components/Pages/Pages";
import {authThunks} from "features/auth/auth.slice";


export const Header = () => {
    const redirect = useNavigate()


    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userName = useAppSelector(state => state.auth.profile !== null ? state.auth.profile.name : "notLogged")


    const onProfileClickHandler = () => {
        redirect("/profile")
    }
    const onLoginClickHandler = () => {
        redirect("/log-in")
    }


    return (
        <div id={'hw5-header'} className={s.header}>
            <div className={s.headerContentContainer}>
                <span className={s.navigationContentContainer}>
                    <span className={s.navBarItem}>
                        {isLoggedIn === false
                            ? <span onClick={onLoginClickHandler}>Login</span>
                            : <span onClick={onProfileClickHandler}>Profile</span>}
                    </span>
                    <NavLink
                        to={PATH.PACKS}
                        className={s.navBarItem}>
                        Packs List
                    </NavLink>
                </span>

                <span className={s.basicMenuContainer}>
                    {isLoggedIn === false
                        ? <span onClick={onLoginClickHandler}>You are not authorised</span>
                        : <BasicMenu userName={userName}/>
                    }
                </span>
            </div>

        </div>

    )
}
