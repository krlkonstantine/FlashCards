import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import s from './Slider.module.css';

const Input = styled(MuiInput)`
    
`;

function valuetext(value: number) {
    return `${value}°C`;
}

export function InputSlider() {
    /*const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );*/
    const [value1, setValue1] = React.useState<number>(0);
    const [value2, setValue2] = React.useState<number>(100);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
        if (typeof newValue === 'number') {
            setValue1(newValue as number)
        }
    };

    /* const handleChange = (event: Event, newValue: number | number[]) => {
         setValue(newValue as number[]);
     };*/
    const onChangeCommited = () =>{
        //TODO
    }

    const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(Number(event.target.value));
    };
    const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(Number(event.target.value));
    };

    const handleBlur = () => {
        if (value1 < 0) {
            setValue1(0);
        } else if (value2 > 100) {
            setValue2(100);
        }
    };

    return (
        <Box sx={{width: 250}}>

            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Input
                        className={s.rangeInput}
                        disableUnderline={true}
                    value={value1}
                        size="small"
                        onChange={handleMinInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 5,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs>
                    {/*<Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />*/}
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={[value1, value2]}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        aria-labelledby="input-range-slider"

                    />
                </Grid>
                <Grid item>
                    <Input
                        className={s.rangeInput}
                        disableUnderline={true}
                        value={value2}
                        size="small"
                        onChange={handleMaxInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 5,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-range-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}