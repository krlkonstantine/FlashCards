import React from 'react';
import {EditableSpan} from "common/components/EditableSpan/EditableSpan";

 type ProfileTilPropsType = {
     title:string
 }

const ProfileTitle = (props:ProfileTilPropsType) => {
    return (
        <div>
            <EditableSpan value={props.title} onChange={()=>{}}/>
        </div>
    );
};

export default ProfileTitle;