import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  ActionsTypes,
  PostDatatype,
} from "../../../redux/state";
import { AddPostAC, UpdatePostAC } from "../../../redux/profilePageReducer";

type MyPostsPropsType = {
  postData: PostDatatype[];
  dispatch: (action: ActionsTypes) => void;
  newPostText: string;
};

function MyPosts(props: MyPostsPropsType) {
  let postData = props.postData.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const addPost = () => {
    props.dispatch(AddPostAC());
  };

  const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(UpdatePostAC(e.currentTarget.value));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.addPost}>
        <textarea onChange={updatePostText} value={props.newPostText} />
        <button onClick={addPost}>add post</button>
      </div>
      {postData}
    </div>
  );
}

export default MyPosts;
