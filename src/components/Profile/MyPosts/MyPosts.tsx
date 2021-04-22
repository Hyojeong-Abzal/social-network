import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostsType } from "../../../redux/store";

type MyPostsPropsType = {
  newPostText: string;
  posts: PostsType[];
  addPost: () => void
  updatePostText: (newValue: string) => void
};

function MyPosts(props: MyPostsPropsType) {
  let postData = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const addPost = () => {
    alert("I am trying!")
    props.addPost();
  };

  const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let NewValue = e.currentTarget.value;
    props.updatePostText(NewValue);
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
