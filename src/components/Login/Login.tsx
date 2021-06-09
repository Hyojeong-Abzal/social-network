import React from 'react'

export const Login: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />

        </div>
    )
}

export const LoginForm: React.FC<any> = (props) => {
    return (
        <form >
            <div>
                <input placeholder={"Login"} />
            </div>
            <div>
                <input placeholder={"password"} />
            </div>
            <div>
                <input type={"checkbox"} /> remember me
                    </div>
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}