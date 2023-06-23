import React, {useState} from 'react';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SchoolIcon from '@mui/icons-material/School';
import s from "features/components/Packs/DisplayOptionsComponents/PackOptions/PackOptions.module.css"
import {useAppDispatch} from "common/hooks";
import {packsActions, packsThunks} from "features/packs/packs.slice";

export type PackOptionsPropsType = {
    isAuthor: boolean
    packId:string
    hasCards: boolean
}
export const PackOptions = (props: PackOptionsPropsType) => {

    const dispatch = useAppDispatch()
    const [toggleBtnColor, setToggleBtnColor] = useState<'inherit' | 'success'>('inherit')

    const learnPackHandler = () => {
        setToggleBtnColor(toggleBtnColor === 'inherit' ? 'success' : 'inherit')
    }

    const editCardHandler = () => {
        dispatch(packsThunks.changePack({_id:props.packId,name:"This one was renamed..."}))
    }

    const deleteCardHandler = () => {
        dispatch(packsThunks.deletePack({id:props.packId}))
    }


    return (
        <span className={s.cardActionsContainer}>
            {props.isAuthor
                ? <>
                    <SchoolIcon  onClick={learnPackHandler} color={props.hasCards ? toggleBtnColor : 'disabled'} fontSize="small"/>
                    <BorderColorIcon onClick={editCardHandler} fontSize="small"/>
                    <DeleteForeverIcon onClick={deleteCardHandler} fontSize="small"/>
                </>
                : <SchoolIcon onClick={learnPackHandler} color={props.hasCards ? toggleBtnColor : 'disabled'} fontSize="small"/>}

        </span>
    );
};
