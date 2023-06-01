import React from 'react';
import s from "./Packs.module.css";
import {Button} from "@mui/material";

export const Packs = () => {
    return (
        <div className={s.packsContainer}>
            <div className={s.packsTopPart}>
                <span className={s.packList}>
                    Packs list
                </span>
                <Button className={s.addPack} variant="contained">Add new pack</Button>
            </div>
            <div className={s.displayOptions}>

            </div>
            <div className={s.packsList}>

            </div>
            <div className={s.packsPages}>

            </div>
        </div>
    );
};

