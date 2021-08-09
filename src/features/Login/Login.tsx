import React from 'react'
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { AppStateType } from '../../App/redux-store';
import { Input } from '../../components/FormControls/FormControls';
import { createField, required } from '../../utils/validators';
import { login } from './authMeReducer';

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
}
const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    const isAuth = props.isAuth && <Redirect to="/Profile" />
    return (
        <div>
            {isAuth}
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />

        </div>
    )
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const captchaURL = useSelector<AppStateType, string | null>(state => state.auth.captchaURL)

    let captcha = () => {
        debugger
        if (captchaURL !== null) {
            return <div>
                <div>
                    <img src={captchaURL} alt="" />
                </div>
                {createField("captcha", "captcha", Input, [required],)}
            </div>
        }
    }
    return (
        <form onSubmit={props.handleSubmit} >
            {createField("Login", "email", Input, [required],)}
            {createField("password", "password", Input, [required], { type: "password" })}
            {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
            {
                captcha()
            }

            {
                props.error && <div style={{ color: 'red' }}>
                    {props.error}
                </div>
            }
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)



const mstp = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mstp, { login })(Login)