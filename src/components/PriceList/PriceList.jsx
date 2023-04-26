import React from 'react';
import styles from './PriceList.module.scss'
import {renderPriceList} from "../../helpers/dataHelpers";
import {nails, brows, permanent} from "../../data/data";

function PriceList(props) {
    return (
        <div className={styles.Price}>
            <div className={styles.PriceContent}>
                <h3 className={styles.PriceContentTitle}>Ціни на послуги нігтьового сервісу</h3>
                {renderPriceList(nails, styles.PriceContentList)}
            </div>
            <div className={styles.PriceContent}>
                <h3 className={styles.PriceContentTitle}>Ціни на послуги макіяжу брів</h3>
                {renderPriceList(brows, styles.PriceContentList)}
            </div>
            <div className={styles.PriceContent}>
                <h3 className={styles.PriceContentTitle}>Ціни на послуги перманентного макіяжу</h3>
                {renderPriceList(permanent, styles.PriceContentList)}
            </div>


        </div>
    );
}

export default PriceList;