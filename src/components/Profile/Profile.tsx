import React from 'react';
import s from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/redux-store';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
}

function Profile(props: any) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />

        </div>
    )

}

export default Profile;


