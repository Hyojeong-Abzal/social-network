import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileInfoDataType} from "../../../redux/state";


type profileInfoData = {}
type profileInfoType = {
    profileInfo: ProfileInfoDataType

}

function ProfileInfo(props: profileInfoType) {
    let info = props.profileInfo;
    return (
        <div className={s.profileinfo}>
            <div className={s.avatar}><img
                src="https://sun9-54.userapi.com/impg/c858532/v858532894/109aab/QgbYlClVvxk.jpg?size=1280x1280&quality=96&sign=0ffeb8dec673187ed8b61505eecf0cf0&type=album"/>
            </div>

            <div className={s.description}>
                <div className={s.descriptionOne}>
                    <div>
                        <div className={s.name}> {info.name} </div>
                        <div> { info.status} </div>
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.age}> Age: {info.age}</div>

                    <div className={s.isMarried}> Married: {info.isMarried}</div>
                    <div className={s.born}>Born: {info.born}</div>
                    <div className={s.live}>live: {info.live}</div>

                </div>


            </div>
        </div>
    )

}

export default ProfileInfo;
