import React from 'react';
import styles from './CardList.module.scss'
import {renderPriceList} from "../../helpers/dataHelpers";
import {nails} from "../../data/data";
import Card from './Card/Card'

function CardList(props) {
    return (
        <div className={styles.List}>
            <h3 className={styles.ListTitle}> Послуги нігтьового сервісу</h3>
            <div className={styles.ListContent}>

                {nails.map((item) => {
                   return <Card key={item.id} {...item}/>
                })}
            </div>

        </div>
    );
}

export default CardList;