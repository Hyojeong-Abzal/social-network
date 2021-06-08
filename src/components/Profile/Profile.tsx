import React from 'react';
import s from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/redux-store';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../redux/profilePageReducer';
import { Redirect } from 'react-router';

type ProfilePropsType = {
    profile: ProfileType | null
}

function Profile(props: ProfilePropsType) {
    
    return (
        <div className={s.wrapper}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

        </div>
    )

}

export default Profile;


