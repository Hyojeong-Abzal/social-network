import React, { useState } from "react"
import { createField } from "../../../../utils/validators"
import { ProfileType } from "../../profilePageReducer"
import { EditProfile } from "../ProfieStatus/EditProfile"

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    updateProfile: (profileData: ProfileType) => void
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, updateProfile }) => {
    const [editMode, setEditMode] = useState(false)
    
    return (
        <div>
            {
                editMode
                    ? <div>
                        <EditProfile profile={profile} setEditMode={() => setEditMode(false)} updateProfile={updateProfile} />
                    </div>
                    : <div>
                        <div>
                            <b>Full name: </b> {profile?.fullName}
                        </div>
                        <div>
                            <b>About me: </b> {profile?.aboutMe}
                        </div>
                        <div>
                            <b>Looking for a job: </b> {profile?.lookingForAJob ? <p>yes</p> : <p>no</p>}
                        </div>
                        <div>
                            {profile?.lookingForAJob && profile.lookingForAJobDescription}
                        </div>
                        <div>
                            {/* @ts-ignore*/}
                            <b>Contacts:  </b> {Object.keys(profile.contacts).map(key => {
                                {/* @ts-ignore*/ }
                                return <Contact key={key} contactTitle={key} contactValue={profile?.contacts[key]} />
                            })}
                        </div>
                        {isOwner && <button onClick={() => setEditMode(true)}>Edit profile info</button>}
                    </div>
            }

        </div>
    )
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string | null
}
const Contact: React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
    return <div> <b>{contactTitle}: </b> {contactValue} </div>
}