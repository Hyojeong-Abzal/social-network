import React from 'react';
import s from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileType } from './profilePageReducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
    savePhoto: (photo: any) => void // fix any
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo 
            isOwner={props.isOwner} 
            profile={props.profile} 
            status={props.status} 
            updateStatusTC={props.updateStatusTC}
            savePhoto={props.savePhoto}
             />
            <MyPostsContainer />

        </div>
    )

}

export default Profile;


