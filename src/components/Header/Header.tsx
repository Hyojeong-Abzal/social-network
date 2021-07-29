import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    login: string | null
    logout: () => void
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div>
                <img src="https://seeklogo.com/images/F/for-family-sign-logo-570FC31D35-seeklogo.com.png" />
                <h2>FamilyTalk</h2>
            </div>
            <div className={s.loginBlok}>
                {
                    props.isAuth ?
                     <div>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                     </div> 
                     : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}
export default Header;