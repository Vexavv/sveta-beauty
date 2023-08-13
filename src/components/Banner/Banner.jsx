import React from 'react';
import styles from './Banner.module.scss'
import HTag from "../HTag/HTag";
function Banner({title}) {
    return (
        <div className={styles.Banner} >
            <div className={styles.BannerContent}>
                <HTag tag='h1'>{title}</HTag>
            </div>
        </div>
    );
}

export default Banner;