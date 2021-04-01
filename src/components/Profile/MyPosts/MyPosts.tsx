import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostDatatype} from "../../../redux/state";


type MyPostsPropsType = {
    postData: PostDatatype[]
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
}


function MyPosts(props: MyPostsPropsType) {

    let postData = props.postData.map(post => <Post key={post.id} post={post}/>)

    const addPost = () => {

        props.addPost()
    }

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText( e.currentTarget.value)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.addPost}>
                <textarea onChange={updatePostText}
                          value={props.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
            {
                postData
            }
        </div>
    )
}

export default MyPosts;
