import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../redux/AuthReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';


type HeaderPropsType = mapStateToPropsType & mapDispatchtoPropsType;

type mapDispatchtoPropsType = {
    authMe: () => void;
}

export class HeaderContainer extends React.Component<HeaderPropsType>  {
    componentDidMount() {
        this.props.authMe()
    }


    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />
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


export default connect(mapStateToProps, { authMe })(HeaderContainer)
