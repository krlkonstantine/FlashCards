import React from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "features/components/Pages/Pages";
import s from "features/components/Packs/DisplayOptionsComponents/PackPages/PackPages.module.css";
import {RedirectBar} from "common/components/RedirectBar/RedirectBar";
import {Button} from "@mui/material";
import CustomizedInputBase from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput";
import {CardsTable} from "features/components/Packs/DisplayOptionsComponents/CardsTable/CardsTable";

export const FriendsPack = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(PATH.LOGIN);
    }

    return (
        <div className={s.mainContainer}>
            <RedirectBar/>
            <div className={s.cardsTopPart}>
                    <span className={s.mainTitle}>
                   {"Friend'sPackTitle"}
                    </span>
                <Button style={{borderRadius: 20, width: 180}} variant="contained">Learn this pack</Button>
            </div>
            <div className={s.displayOptions}>
                <span className={s.sortOptionContainer}>
                    <span className={s.searchTitle}>Search</span>
                    <CustomizedInputBase/>
                </span>
            </div>
            <div className={s.cardsList}>
                <CardsTable/>
            </div>
        </div>
    );
};
