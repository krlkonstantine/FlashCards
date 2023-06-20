import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import s from "./ToggleButtons.module.css"
import {useAppDispatch, useAppSelector} from "common/hooks";
import {packsActions} from "features/packs/packs.slice";


export default function ColorToggleButton() {
    const dispatch = useAppDispatch()
    const myUserId = useAppSelector((state) => state.auth.profile?._id)
    const [alignment, setAlignment] = React.useState<"my" | "all">("all");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: "my" | "all",
    ) => {
        console.log(event)
        setAlignment(newAlignment);
        alert(myUserId)
        dispatch(packsActions.setFilterByAuthor(newAlignment === "my"
            ? {user_id: myUserId}
            : {user_id: ""})
        )
    }

    return (
        <ToggleButtonGroup
            className={s.toggleButtons}
            color='primary'
            value={alignment}
            exclusive={true}
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton className={s.toggleButton} value="my">My</ToggleButton>
            <ToggleButton className={s.toggleButton} value="all">All</ToggleButton>
        </ToggleButtonGroup>
    );
}
