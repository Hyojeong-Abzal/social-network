import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>

            <img src="https://seeklogo.com/images/F/for-family-sign-logo-570FC31D35-seeklogo.com.png"/>
            <h2>FamilyTalk</h2>
        </header>
    )
}
export default Header;