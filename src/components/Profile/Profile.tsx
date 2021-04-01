import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updatePostText: (newText: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileInfo profileInfo={props.profilePage.profileInfoData[0]}/>
            <MyPosts postData={props.profilePage.postData}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updatePostText={props.updatePostText}/>

        </div>
    )

}

export default Profile;


