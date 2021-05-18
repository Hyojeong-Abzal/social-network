import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AythReducerType, setLogin } from '../../redux/AuthReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';


type HeaderPropsType = mapStateToPropsType & mapDispatchtoPropsType;

type mapDispatchtoPropsType = {
    setLogin: (id: number, login: string, email: string) => void;
}

export class HeaderContainer extends React.Component<HeaderPropsType>  {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setLogin(id, email, login)
                }
            })
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


export default connect(mapStateToProps, { setLogin })(HeaderContainer)
