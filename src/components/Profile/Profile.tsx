import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo profileInfo={props.profilePage.profileInfoData[0]}/>
            <MyPosts postData={props.profilePage.postData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
         />

        </div>
    )

}

export default Profile;


