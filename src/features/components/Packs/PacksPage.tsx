import React, {useEffect} from 'react';
import s from "./Packs.module.css";
import {Button} from "@mui/material";
import CustomizedInputBase from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput";
import ToggleButtons from 'features/components/Packs/DisplayOptionsComponents/ToggleButtons/ToggleButtons';
import {InputSlider} from "features/components/Packs/DisplayOptionsComponents/Slider/Slider";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import IconButton from "@mui/material/IconButton";
import {PacksTable} from "features/components/Packs/DisplayOptionsComponents/PackTable/PacksTable";
import {packsThunks} from "features/packs/packs.slice";
import {useAppDispatch, useAppSelector} from "common/hooks";


export const PacksPage = () => {
    const dispatch = useAppDispatch()
    const packs = useAppSelector((state) => state.packs.packs)

    useEffect(() => {
        dispatch(packsThunks.getPacks({}));
    }, [dispatch]);



    /*useEffect(()=>{
        dispatch(packsThunks.getPacks({}))
        console.log("tried to get the packs in packs page")
    },[])*/

    return (
        <div className={s.packsContainer}>
            <div className={s.packsTopPart}>
                <span className={s.packList}>
                    Packs list
                </span>
                <Button style={{borderRadius: 20, width: 180}} variant="contained">Add new pack</Button>
            </div>
            <div className={s.displayOptionsContainer}>
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
                {packs && <PacksTable/>}
            </div>

        </div>
    );
};

