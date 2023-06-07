import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import s from "./RedirectBar.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";


export const RedirectBar = React.memo(function () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(PATH.PACKS);
    }

    return (
        <div className={s.redirectContainer}>
            <KeyboardBackspaceIcon onClick={handleClick} className={s.arrowIcon}/>
            <NavLink
                to={PATH.PACKS}
                className={s.navlink}>
                Back to Packs List
            </NavLink>
        </div>
    )


});
