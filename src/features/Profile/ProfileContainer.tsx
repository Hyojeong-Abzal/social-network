import axios from 'axios';
import React, { Props, ReactComponentElement, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { AppStateType } from '../../App/redux-store';
import Profile from './Profile';
import { ProfileType, setUserProfileAC, getProfile, setStatusTC, updateStatusTC, savePhoto } from '../Profile/profilePageReducer'
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../components/HOC/withAuthRedirect';


type ProfilePropsType = mapStatePropsType & mapDispatchPropsType;

type mapStatePropsType = {
    profile: ProfileType | null
    status: string
    userId: null | number
}

type mapDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
    getProfile: (userId: number | string) => void
    setStatusTC: (userId: number | string) => void
    updateStatusTC: (status: string) => void
    savePhoto: (photo: any) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


export class ProfileContainer extends React.Component<PropsType> {
    refreshProfileIfo() {
        let userIds = this.props.match.params.userId;
        let userId = parseInt(userIds)
        if (!userId) {
            if (this.props.userId === null) {
                this.props.history.push("/login")
            } else (
                userId = this.props.userId
            )
        }
        this.props.getProfile(userId)
        this.props.setStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfileIfo()
    }
    componentDidUpdate(prevProps: PropsType) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfileIfo()
        }
    }
    render() {

        return (
            <div >
                <Profile isOwner={!this.props.match.params.userId} {...this.props} />
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
    status: state.profilePage.status,
    userId: state.auth.data.id
})

// export default withAuthRedirect(withRouter(connect(mapStateToProps, { setUserProfileAC, getProfile })(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, { setUserProfileAC, getProfile, setStatusTC, updateStatusTC, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)