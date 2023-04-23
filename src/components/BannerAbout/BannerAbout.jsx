import React from 'react';
import styles from './BannerAbout.module.scss'

function BannerAbout(props) {
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

export default BannerAbout;