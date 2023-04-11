import React from 'react';
import styles from './Banner.module.scss'

function Banner(props) {
    return (
        <div className={styles.Banner}>
            <div className={styles.BannerDiscriptions}>
                <h1 className={styles.BannerDiscriptionsText}>
                     Що я можу сказати, краса це страшна сила!!!
                </h1>
            </div>

        </div>
    );
}

export default Banner;