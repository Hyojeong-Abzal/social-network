import React, { ChangeEvent, useEffect } from 'react';
import { Preloader } from '../../../components/preloader/Preloader';
import { getProfile, ProfileType } from '../profilePageReducer';
import { ProfileStatus } from './ProfieStatus/ProfileStatus';
import userPhoto from "../../../assets/images/user.png"
import s from './ProfileInfo.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../App/redux-store';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
    savePhoto: (photo: any) => void // fix any
}


export function ProfileInfo(props: ProfileInfoPropsType) {
    const dispatch = useDispatch();
    useEffect(() => {
        
    }, [props.profile]);

    if (!props.profile) {
        return <Preloader />
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    


    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large || userPhoto} className={s.profilePhoto} />
            {props.isOwner && <input type="file" onChange={onChangeHandler} />}

            <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC} />
        </div>
    )

}



