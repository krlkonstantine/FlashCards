import React from 'react';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SchoolIcon from '@mui/icons-material/School';
import s from "features/components/Packs/DisplayOptionsComponents/PackOptions/PackOptions.module.css"
import {useAppDispatch} from "common/hooks";

export type PackOptionsPropsType = {
    isAuthor: boolean
}
export const PackOptions = (props: PackOptionsPropsType) => {

const dispatch = useAppDispatch()

    const learnPackHandler = () => {

    }
    const editCardHandler = () => {

    }
    const deleteCardHandler = () => {

    }


    return (
        <span className={s.cardActionsContainer}>
            {props.isAuthor
                ? <>
                    <SchoolIcon onClick={learnPackHandler} fontSize="small"/>
                    <BorderColorIcon onClick={editCardHandler} fontSize="small"/>
                    <DeleteForeverIcon onClick={deleteCardHandler} fontSize="small"/>
                </>
                : <SchoolIcon onClick={learnPackHandler} fontSize="small"/>}

        </span>
    );
};
