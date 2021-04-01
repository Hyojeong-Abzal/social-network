import React from 'react';
import s from './Music.module.css';
import {MusicsPageType} from "../../../redux/state";

type musicPropsType = {
    musicsPage: MusicsPageType
}

const Music: React.FC <musicPropsType> = (props) => {

   let musicMap = props.musicsPage.musicData.map( m => < OneMusic key={m.id} text={m.text} author={m.author} />)
    return (
     <div>
         {musicMap}
        </div>
    )
}


type OneMusicPropsType = {
    text: string
    author: string
}
function OneMusic(props: OneMusicPropsType) {
        return (
            <div className={s.OneMusic}>
                <img className={s.musicSign} src="http://pngimg.com/uploads/music_notes/music_notes_PNG37.png" />
                <div>
                    <h3>{ props.text}</h3>
                    <p>{props.author}</p>
                </div>

            </div>
        )

}
export default Music;