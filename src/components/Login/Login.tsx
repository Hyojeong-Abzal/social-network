import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export const Login: React.FC = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
        
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
}
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
                    </div>
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