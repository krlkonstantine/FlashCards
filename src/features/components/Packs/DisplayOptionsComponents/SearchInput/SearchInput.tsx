import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import s from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput.module.css"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



export default function CustomizedInputBase() {
    return (
        <Paper className={s.inputBase}
               component="form"
               sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,height:36}}
        >
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <InputBase
                sx={{ml: 0, flex: 1, height: 80}}
                placeholder="Search packs"
                inputProps={{'aria-label': 'Search packs'}}
            />
        </Paper>
    );
}