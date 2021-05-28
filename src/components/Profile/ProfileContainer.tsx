import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { ProfileType, setUserProfileAC, getProfile } from '../../redux/profilePageReducer'
import { RouteComponentProps, withRouter } from 'react-router';



type ProfilePropsType = mapStatePropsType & mapDispatchPropsType;

type mapStatePropsType = {
    profile: ProfileType | null
}

type mapDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType | null) => void
    getProfile: (userId: number | string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;
        this.props.getProfile(userId)
    }


    render() {

        return (
            <div >
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let WithURLDataContainerCompanent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfileAC, getProfile })(WithURLDataContainerCompanent)