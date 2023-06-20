import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import s from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput.module.css"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useAppDispatch, useAppSelector} from "common/hooks";
import {ChangeEvent, useState} from "react";
import {packsActions} from "features/packs/packs.slice";


export default function CustomizedInputBase() {
    const dispatch = useAppDispatch()
    const packName = useAppSelector((state) => state.packs.queryParams.packName)
    const [searchValue, setSearchValue] = useState<string>("")

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(event.currentTarget.value)
        dispatch(packsActions.setFilterByAuthor(searchValue))
    }

    return (
        <Paper className={s.inputBase}
               component="form"
               sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 36}}
        >
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <InputBase
                sx={{ml: 0, flex: 1, height: 80}}
                placeholder="Search packs"
                inputProps={{'aria-label': 'Search packs'}}
                value={packName}
                onChange={onInputChange}
            />
        </Paper>
    );
}