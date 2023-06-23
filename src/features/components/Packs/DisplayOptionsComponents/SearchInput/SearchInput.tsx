import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import s from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput.module.css"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useAppDispatch, useAppSelector} from "common/hooks";
import {ChangeEvent, useEffect, useState} from "react";
import {packsActions} from "features/packs/packs.slice";
import {useDebounce} from "common/hooks/Debounce";


export default function CustomizedInputBase() {
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState<string>("")
    const debouncedValue = useDebounce<string>(searchValue,700)

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    useEffect(()=>{
        dispatch(packsActions.setSearchByName({packName: searchValue}))
    },[debouncedValue])

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
                value={searchValue}
                onChange={onInputChange}
            />
        </Paper>
    );
}