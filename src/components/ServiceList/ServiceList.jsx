import React from 'react';
import styles from './ServiceList.module.scss'

function ServiceList(props) {
    return (
        <div className={styles.List}>
            <h3 className={styles.ListTitle}>Наши послуги</h3>
        </div>
    );
}

export default ServiceList;