import React from 'react';

import { Link } from "react-router-dom";
import styles from './Logo.module.scss'
function Logo(props) {
    return (
        <div className={styles.Logo}>
           <Link to='/'><img src="img/22197889.svg" alt="Logo"/></Link>
        </div>

    );
}

export default Logo;