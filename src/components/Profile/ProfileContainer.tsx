import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { setUserProfileAC } from '../../redux/profilePageReducer'



type ProfilePropsType = {
    profile: string | null
    setUserProfileAC: (profile: string) => void
}


export class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(response => {
            this.props.setUserProfileAC(response.data)
        })
    }

    render() {

        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfileAC })(ProfileContainer)