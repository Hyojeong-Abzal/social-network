import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { profileType, setUserProfileAC } from '../../redux/profilePageReducer'
import { RouteComponentProps, withRouter } from 'react-router';



type ProfilePropsType = mapStatePropsType & mapDispatchPropsType;

type mapStatePropsType = {
    profile: profileType | null
}

type mapDispatchPropsType = {
    setUserProfileAC: (profile: profileType | null) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
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

export default connect(mapStateToProps, { setUserProfileAC })(WithURLDataContainerCompanent)