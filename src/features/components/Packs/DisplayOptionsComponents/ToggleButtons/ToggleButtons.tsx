import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import s from "./ToggleButtons.module.css"

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            className={s.toggleButtons}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton className={s.toggleButton} value="web">My</ToggleButton>
            <ToggleButton className={s.toggleButton} value="android">All</ToggleButton>
        </ToggleButtonGroup>
    );
}
