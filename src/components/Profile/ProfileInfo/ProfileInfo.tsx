import React from 'react';
import { Preloader } from '../../common/preloader/Preloader';
import { ProfileStatus } from './ProfieStatus/ProfileStatus';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
}

export function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={"Yo Yo Yo"} />
        </div>
    )

}



