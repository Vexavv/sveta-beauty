import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'
function Header(props) {
    return (
        <div className={styles.Header}>
            <NavLink to='/'>Про Нас</NavLink>
            <NavLink to='/services'>Послуги</NavLink>
            <NavLink to='/price'>Ціни</NavLink>
            <NavLink to='/contacts'>Контакти</NavLink>
        </div>
    );
}

export default Header;