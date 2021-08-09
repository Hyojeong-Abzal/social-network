import React, { ChangeEvent, useEffect, useState } from 'react';
import { Preloader } from '../../../components/preloader/Preloader';
import { ProfileType } from '../profilePageReducer';
import { ProfileStatus } from './ProfieStatus/ProfileStatus';
import userPhoto from "../../../assets/images/user.png"
import s from './ProfileInfo.module.css'
import { useDispatch } from 'react-redux';
import { ProfileData } from './ProfieData/ProfileData';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
    savePhoto: (photo: any) => void // fix any
    updateProfile: (profileData: ProfileType) => void
}


export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
    profile,
    status,
    isOwner,
    updateStatusTC,
    savePhoto,
    updateProfile
}) => {
    const dispatch = useDispatch();
    useEffect(() => {

    }, [profile]);

    if (!profile) {
        return <Preloader />
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }




    return (
        <div className={s.wrapper}>
            <img src={ profile.photos.large || userPhoto} className={s.profilePhoto} />
            {isOwner && <input type="file" onChange={onChangeHandler} />}

            <ProfileStatus status={status} updateStatusTC={updateStatusTC} />

            <ProfileData profile={profile} isOwner={isOwner} updateProfile={updateProfile} />
        </div>
    )

}



