import React from 'react';
import { Preloader } from '../../../components/preloader/Preloader';
import { ProfileType } from '../profilePageReducer';
import { ProfileStatus } from './ProfieStatus/ProfileStatus';
import userPhoto from "../../../assets/images/user.png"
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatusTC: (status: string) => void
}


export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large || userPhoto} className={s.profilePhoto}/>
            <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC} />
        </div>
    )

}



