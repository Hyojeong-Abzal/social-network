import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../redux/authMeReducer';
import { AppStateType } from '../../App/redux-store';
import {logout} from '../../redux/authMeReducer';
import Header from './Header';


type HeaderPropsType = mapStateToPropsType & mapDispatchtoPropsType;

type mapDispatchtoPropsType = {
    authMe: () => void;
    logout: () => void
}

export class HeaderContainer extends React.Component<HeaderPropsType>  {
    componentDidMount() {
        this.props.authMe()
    }


    render() {
        return <Header login={this.props.login} logout={this.props.logout} isAuth={this.props.isAuth} />
    }
}
type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { authMe, logout })(HeaderContainer)
