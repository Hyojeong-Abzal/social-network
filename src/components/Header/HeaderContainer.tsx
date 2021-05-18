import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AythReducerType } from '../../redux/AuthReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';


type mapStateToPropsType = AythReducerType


export class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
            })
    }


    render() {
        return <Header />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(HeaderContainer)
