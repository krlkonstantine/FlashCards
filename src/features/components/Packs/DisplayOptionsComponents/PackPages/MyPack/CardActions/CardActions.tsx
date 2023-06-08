import React from 'react';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import s from "./CardActions.module.css"


export const CardActions = () => {

    const editCardHandler = () => {

    }
    const deleteCardHandler = () => {

    }


    return (
        <span className={s.cardActionsContainer}>
            <BorderColorIcon onClick={editCardHandler} fontSize="small"/>
            <DeleteForeverIcon onClick={deleteCardHandler} fontSize="small"/>
        </span>
    );
};
