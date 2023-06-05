import React from 'react';
import s from "./Packs.module.css";
import {Button} from "@mui/material";
import CustomizedInputBase from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput";
import ToggleButtons from 'features/components/Packs/DisplayOptionsComponents/ToggleButtons/ToggleButtons';
import {InputSlider} from "features/components/Packs/DisplayOptionsComponents/Slider/Slider";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import IconButton from "@mui/material/IconButton";

export const Packs = () => {
    return (
        <div className={s.packsContainer}>
            <div className={s.packsTopPart}>
                <span className={s.packList}>
                    Packs list
                </span>
                <Button style={{borderRadius: 20, width: 180}} variant="contained">Add new pack</Button>
            </div>
            <div className={s.displayOptions}>
                <span className={s.sortOptionContainer}>
                    <span className={s.searchTitle}>Search</span>
                    <CustomizedInputBase/>
                </span>
                <span className={s.sortOptionContainer}>
                    <span className={s.toggleTitle}>Show card packs</span>
                    <ToggleButtons/>
                </span>
                <span className={s.sortOptionContainer}>
                    <span className={s.toggleTitle}>Cards per pack</span>
                    <InputSlider/>
                </span>
                <span className={s.filterClearBtn}>
                     <IconButton aria-label="delete" size="small">
                        <FilterListOffIcon/>
                     </IconButton>
                </span>

            </div>
            <div className={s.packsList}>
                df
            </div>
            <div className={s.packsPages}>
                df
            </div>
        </div>
    );
};

