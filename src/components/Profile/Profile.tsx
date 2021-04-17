import React from 'react';
import s from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/redux-store';

type ProfilePropsType = {
    // store: StoreType;
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.wrapper}>
            <MyPostsContainer  />

        </div>
    )

}

export default Profile;


