import axios from 'axios';
import React, { Props, ReactComponentElement, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { ProfileType, setUserProfileAC, getProfile } from '../../redux/profilePageReducer'
import { RouteComponentProps, withRouter } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { setStatusTC, updateStatusTC } from '../../redux/profilePageReducer'


type ProfilePropsType = mapStatePropsType & mapDispatchPropsType;

type mapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type mapDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType | null) => void
    getProfile: (userId: number | string) => void
    setStatusTC: (userId: number | string) => void
    updateStatusTC: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;
        this.props.getProfile(userId)
        this.props.setStatusTC(userId)

    }


    render() {

        return (
            <div >
                <Profile {...this.props} />
            </div>
        )
    }
}


// export const ProfileContainer: React.FC<PropsType> = (props) => {

//     const dispatch = useDispatch()

//     useEffect(() => {
//         let userId = !props.match.params.userId ? 2 : props.match.params.userId;
//         dispatch(setStatusTC(userId))
//     }, [])

//     return (
//         <div >
//             <Profile {...props} />
//         </div>
//     )
// }


let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// export default withAuthRedirect(withRouter(connect(mapStateToProps, { setUserProfileAC, getProfile })(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, { setUserProfileAC, getProfile, setStatusTC, updateStatusTC }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)