import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type mstpType = {
    isAuth: boolean
}
const mstp = (state: AppStateType): mstpType => {

    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mstpType) => {
        let { isAuth, ...resProps } = props

        if (!isAuth) return <Redirect to={"/Login"} />
        return <Component {...resProps as T} />
    }


    let ConnectedRedirectComponent = connect(mstp)(RedirectComponent)
    return ConnectedRedirectComponent
}