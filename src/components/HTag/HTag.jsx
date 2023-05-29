import React from 'react';
import styles from './HTag.module.scss'
function HTag({tag, children}) {
    switch (tag){
        case 'h1':
            return <h1 className={styles.H1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.H2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.H3}>{children}</h3>;
        default:
            return <></>
    }
}

export default HTag;