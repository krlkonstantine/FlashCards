import React, {useEffect, useMemo} from 'react';
import {useState} from "react";

export function useDebounce<T>(value:T,timerValue?:number):T{
    const [debouncedValue,setDebouncedValue] = useState<T>(value)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(value)
        },timerValue || 700)

        clearTimeout(timer)

    },[value,timerValue])

    return debouncedValue
}

