import React, {useEffect, useState} from 'react';
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
import {TablePaginations} from "features/components/Packs/DisplayOptionsComponents/Pagination/TablePagination";


export const PacksPage = () => {
    const dispatch = useAppDispatch()
    const packs = useAppSelector((state) => state.packs.packs)
    const userId = useAppSelector((state) => state.auth.profile?._id)
    const filterQueryParams = useAppSelector((state) => state.packs.queryParams)
    const packsCount = useAppSelector((state) => state.packs.cardPacksTotalCount)

    useEffect(() => {
        dispatch(packsThunks.getPacks(filterQueryParams));
    }, [
        filterQueryParams.packName,
        filterQueryParams.min,
        filterQueryParams.max,
        filterQueryParams.user_id,
        filterQueryParams.page,
        filterQueryParams.pageCount,
    ]);

//прописать аждую отдельно
    const addPackArgs = {
        name: "WOW! That's a brand new pack"
    }

    const addNewPackHandler = () => {
        dispatch(packsThunks.addNewPack(addPackArgs))
    }

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
                <Button
                    style={{borderRadius: 20, width: 180, textTransform: "none"}}
                    variant="contained" onClick={addNewPackHandler}
                >Add new pack</Button>
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
                {packs && packsCount && packsCount > 0
                    ? <PacksTable/>
                    : <div>
                        <h3>No packs with such name found. Please try another name or</h3>
                        <Button
                            style={{borderRadius: 20, width: 180, textTransform: "none"}}
                            variant="contained" onClick={addNewPackHandler}
                        >Add new pack</Button>
                    </div>}
            </div>
            <div>
                <TablePaginations/>
            </div>

        </div>
    );
};

