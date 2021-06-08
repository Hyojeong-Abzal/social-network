import React from 'react';
import { ProfileType } from '../../../redux/profilePageReducer';
import { Preloader } from '../../common/preloader/Preloader';
import { ProfileStatus } from './ProfieStatus/ProfileStatus';
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
            <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC} />
        </div>
    )

}



