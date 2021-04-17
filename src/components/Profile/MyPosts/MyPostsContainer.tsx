import React, { ChangeEvent } from "react";
import { AddPostAC, UpdatePostAC } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { StoreContext } from "../../../StoreContext";

type MyPostsPropsType = {
  // store: StoreType;

};

export function MyPostsContainer(props: MyPostsPropsType) {
  return <StoreContext.Consumer>
    {store => {
      const state = store.getState()
      const addPost = () => {
        store.dispatch(AddPostAC());
      };

      const updatePostText = (newValue: string) => {
        store.dispatch(UpdatePostAC(newValue));
      };
      return <MyPosts
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        addPost={addPost}
        updatePostText={updatePostText}
      />
    }}
  </StoreContext.Consumer>


}

