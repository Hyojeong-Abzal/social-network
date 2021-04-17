import React, { ChangeEvent } from "react";
import { AddPostAC, UpdatePostAC } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { StoreType } from "../../../redux/redux-store";

type MyPostsPropsType = {
  store: StoreType;

};

export function MyPostsContainer(props: MyPostsPropsType) {

  const state = props.store.getState()
  const addPost = () => {
    props.store.dispatch(AddPostAC());
  };

  const updatePostText = (newValue: string) => {
    props.store.dispatch(UpdatePostAC(newValue));
  };
  return <MyPosts
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
    addPost={addPost}
    updatePostText={updatePostText}
  />
}

