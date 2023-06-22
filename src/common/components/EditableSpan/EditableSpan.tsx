import React, {ChangeEvent, useState} from 'react';
import {IconButton, TextField} from '@mui/material';
import EditNoteIcon from "@mui/icons-material/EditNote";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    _id?:string
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <div>
            <TextField id="standard-basic" variant="standard" value={title}
                       onChange={changeTitle} autoFocus onBlur={activateViewMode}
            />
            <IconButton>
                <EditNoteIcon/>
            </IconButton>
        </div>
        : <span onDoubleClick={activateEditMode}>{props.value}
            <IconButton>
                <EditNoteIcon onClick={activateEditMode}/>
            </IconButton>
        </span>


});
