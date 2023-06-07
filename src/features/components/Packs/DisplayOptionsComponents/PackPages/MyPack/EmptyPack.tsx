import React from 'react';
import s from "features/components/Packs/DisplayOptionsComponents/PackPages/PackPages.module.css";
import {Button} from "@mui/material";
import {RedirectBar} from "common/components/RedirectBar/RedirectBar";

export const EmptyPack = () => {
   const handleAddCard = () => {

   }

    return (
        <div className={s.mainContainer}>
            <RedirectBar/>
            <div className={s.mainTitle}>
                {"packName"}
            </div>
            <div className={s.pageContent}>
                <span className={s.emptyPackMsg}>
                    This pack is empty. Click add new card to fill this pack
                </span>
                <Button
                    onClick={handleAddCard}
                    className={s.addNewCard}
                    variant="contained"
                >Add new card</Button>
            </div>
        </div>
    );
    ;
};

