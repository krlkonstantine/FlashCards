import React from 'react';
import s from "./Packs.module.css";
import {Button} from "@mui/material";
import CustomizedInputBase from "features/components/Packs/DisplayOptionsComponents/SearchInput/SearchInput";
import ToggleButtons from 'features/components/Packs/DisplayOptionsComponents/ToggleButtons/ToggleButtons';
import {InputSlider} from "features/components/Packs/DisplayOptionsComponents/Slider/Slider";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import IconButton from "@mui/material/IconButton";
import {PacksTable} from "features/components/Packs/DisplayOptionsComponents/PackTable/PacksTable";

type TempPackType = {
    packName: string,
    cardsQuantity: number,
    lastUpdated: string,
    createdBy: string,
    actions: boolean,
    cards: TempCardsType[]
}
type TempCardsType = {
    question: string,
    answer: string,
    lastUpdated: string,
    grade: number,
}


const tempCardsPack: TempPackType[] = [
    {
        packName: "English",
        cardsQuantity: 25,
        lastUpdated: "05.06.2023",
        createdBy: "KonstantineK",
        actions: true,
        cards: [
            {
                question: "How do you translate DOG",
                answer: "собака",
                lastUpdated: "01.06.2023",
                grade: 2,
            }, {
                question: "How do you translate CAT",
                answer: "кошка",
                lastUpdated: "01.06.2023",
                grade: 2,
            }, {
                question: "How do you translate FROG",
                answer: "лягушка",
                lastUpdated: "02.06.2023",
                grade: 2,
            },
        ]
    },
    {
        packName: "German",
        cardsQuantity: 12,
        lastUpdated: "12.11.2021",
        createdBy: "Anatoly",
        actions: false,
        cards: []
    },
    {
        packName: "React",
        cardsQuantity: 56,
        lastUpdated: "02.12.2012",
        createdBy: "Mathew",
        actions: false,
        cards: []
    },
    {
        packName: "Redux",
        cardsQuantity: 24,
        lastUpdated: "03.03.2022",
        createdBy: "Nadezhda",
        actions: false,
        cards: [{
            question: "How do you translate DOG",
            answer: "собака",
            lastUpdated: "01.06.2023",
            grade: 2,
        }, {
            question: "How do you translate CAT",
            answer: "кошка",
            lastUpdated: "01.06.2023",
            grade: 2,
        }, {
            question: "How do you translate FROG",
            answer: "лягушка",
            lastUpdated: "02.06.2023",
            grade: 2,
        },]
    },
    {
        packName: "Typescript",
        cardsQuantity: 18,
        lastUpdated: "05.06.2023",
        createdBy: "KonstantineK",
        actions: true,
        cards: []
    },
]
export const PacksPage = () => {
    return (
        <div className={s.packsContainer}>
            <div className={s.packsTopPart}>
                <span className={s.packList}>
                    Packs list
                </span>
                <Button style={{borderRadius: 20, width: 180}} variant="contained">Add new pack</Button>
            </div>
            <div className={s.displayOptions}>
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
                <PacksTable/>
            </div>
        </div>
    );
};

