import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import s from './Slider.module.css';
import {useAppDispatch, useAppSelector} from "common/hooks";
import {packsActions} from "features/packs/packs.slice";
import {useEffect, useState} from "react";
import {useDebounce} from "common/hooks/Debounce";

const Input = styled(MuiInput)`

`;

function valuetext(value: number) {
    return `${value}°C`;
}

export function InputSlider() {

    const dispatch = useAppDispatch()
    const minCardsCount = useAppSelector((state) => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector((state) => state.packs.maxCardsCount)
    const [minAndMaxValues, setMinAndMaxValues] = useState<number[]>([
        minCardsCount, maxCardsCount
    ])
    const debouncedMinAndMax = useDebounce<number[]>(minAndMaxValues, 700)

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setMinAndMaxValues([(newValue as number),minAndMaxValues[1]])
        }
        if (Array.isArray(newValue)) {
            setMinAndMaxValues([newValue[0],newValue[1]])
        }
    };

    useEffect(() => {
        debugger
        setMinAndMaxValues([minCardsCount,maxCardsCount])
    },[maxCardsCount])

    const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinAndMaxValues([Number(event.target.value),minAndMaxValues[1]]);
    };
    const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinAndMaxValues([minAndMaxValues[0],Number(event.target.value)]);
    };

    const handleBlur = () => {
        if (minAndMaxValues[0] < 0) {
            setMinAndMaxValues([0,minAndMaxValues[1]]);
        } else if (minAndMaxValues[1] > maxCardsCount) {
            setMinAndMaxValues([minAndMaxValues[0],maxCardsCount]);
        }
    };

    useEffect(()=>{
        debugger
        dispatch(packsActions.setMinAndMaxCardsCount({
        min:minAndMaxValues[0],
        max:minAndMaxValues[1]
        }))
        /*dispatch(packsActions.setMinCardsCount({
            min:minAndMaxValues[0]
        }))*/
    },[debouncedMinAndMax])

    /* const handleChange = (event: Event, newValue: number | number[]) => {
           setValue(newValue as number[]);
       };
      const onChangeCommited = () => {
          //TODO
      }*/

    return (
        <Box sx={{width: 250}}>

            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Input
                        className={s.rangeInput}
                        disableUnderline={true}
                        value={minAndMaxValues[0]}
                        size="small"
                        onChange={handleMinInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 5,
                            min: 0,
                            max: 200,
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
                        value={[minAndMaxValues[0], minAndMaxValues[1]]}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        aria-labelledby="input-range-slider"
                        max={maxCardsCount}

                    />
                </Grid>
                <Grid item>
                    <Input
                        className={s.rangeInput}
                        disableUnderline={true}
                        value={minAndMaxValues[1]}
                        size="small"
                        onChange={handleMaxInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 5,
                            min: 0,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-range-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}