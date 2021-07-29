import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/authMeReducer';
import { AppStateType } from '../../redux/redux-store';
import { required } from '../../utils/validators';
import { Input } from '../common/FormControls/FormControls';

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)

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
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    placeholder={"Login"}
                    name={"email"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={Input} /> remember me
            </div>
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