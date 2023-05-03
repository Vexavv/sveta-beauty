import React from 'react';
import styles from './ServiceList.module.scss'
import {nails, brows, permanent} from "../../data/data";
import {renderDataList} from "../../helpers/dataHelpers";

function ServiceList(props) {
    return (
        <div className={styles.List}>
            <h3 className={styles.ListTitle}>Наши послуги</h3>
            <div className={styles.ListContent}>
                <div className={styles.ListContentDescription}>
                    <h2 className={styles.ListContentDescriptionTitle}>Нігтьовий сервіс</h2>
                    {renderDataList(nails, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <h2 className={styles.ListContentDescriptionTitle}>Перманентний макіяж</h2>
                    {renderDataList(permanent, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <h2 className={styles.ListContentDescriptionTitle}>Макіяж брів</h2>
                    {renderDataList(brows, styles.ListContentDescriptionList)}
                </div>
            </div>
        </div>
    );
}

export default ServiceList;