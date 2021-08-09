import React from "react"
import { useSelector } from "react-redux"
import { InjectedFormProps, reduxForm } from "redux-form"
import { AppStateType } from "../../../../App/redux-store"
import { Input, Textarea } from "../../../../components/FormControls/FormControls"
import { createField, required } from "../../../../utils/validators"
import { ProfileType } from "../../profilePageReducer"







type EditProfilePropsType = {
    profile: ProfileType
    setEditMode: () => void
    updateProfile: (profileData: ProfileType) => void
}

export const EditProfile: React.FC<EditProfilePropsType> = ({ profile, setEditMode, updateProfile }) => {
    const handleSummit = (form: EditProfileFormDataType) => {
        // setEditMode()
        let profileData = {
            ...form
        } as ProfileType
        updateProfile(profileData)

    }
    return <div>
        <EditProfileFormRedux initialValues={profile} onSubmit={handleSummit} />
    </div>
}

export type EditProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
}
export const EditProfileForm: React.FC<InjectedFormProps<EditProfileFormDataType>> = (props) => {
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)
    return (
        <form onSubmit={props.handleSubmit} >
            <b>Full name: </b> {createField("Full name", "fullName", Input, [],)}
            <b>About me: </b> {createField("About me", "aboutMe", Textarea, [])}
            <b>Looking for a job: </b>{createField("Looking for a job", "lookingForAJob", Input, [], { type: "checkbox" })}
            <b>Looling for a jop description: </b>
            {
                createField("Looling for a jop description",
                    "lookingForAJobDescription",
                    Textarea, [required])
            }
            <div>
                {/* @ts-ignore*/}
                <b>Contacts: </b> {Object.keys(profile?.contacts).map(key => {
                    return <div key={key} >
                        <b>{key}:</b> {createField(key, "contacts." + key, Input, [],)}
                    </div>
                })}
            </div>
            {
                props.error && <div style={{ color: 'red' }}>
                    {props.error}
                </div>
            }
            <div>
                <button>save</button>
            </div>
        </form>
    )
}
export const EditProfileFormRedux = reduxForm<EditProfileFormDataType>({
    // a unique name for the form
    form: 'editProfile'
})(EditProfileForm)


