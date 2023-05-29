import React from 'react';
import styles from './ServiceList.module.scss'
import {nails, brows, permanent} from "../../data/data";
import {renderDataList} from "../../helpers/dataHelpers";

function ServiceList(props) {
    return (
        <div className={styles.List}>
            <h2 className={styles.ListTitle}>Наши послуги</h2>
            <div className={styles.ListContent}>
                <div className={styles.ListContentDescription}>
                    <h3 className={styles.ListContentDescriptionTitle}>Нігтьовий сервіс</h3>
                    {renderDataList(nails, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <h3 className={styles.ListContentDescriptionTitle}>Перманентний макіяж</h3>
                    {renderDataList(permanent, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <h3 className={styles.ListContentDescriptionTitle}>Макіяж брів</h3>
                    {renderDataList(brows, styles.ListContentDescriptionList)}
                </div>
            </div>
        </div>
    );
}

export default ServiceList;