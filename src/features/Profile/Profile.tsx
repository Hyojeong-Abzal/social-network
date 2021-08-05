import React from 'react';
import s from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../redux/profilePageReducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatusTC: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} />
            <MyPostsContainer />

        </div>
    )

}

export default Profile;


