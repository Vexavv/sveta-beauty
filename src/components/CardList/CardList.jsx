import React from 'react';
import styles from './CardList.module.scss'
// import {renderPriceList} from "../../helpers/dataHelpers";
import {nails, brows, permanent} from "../../data/data";
import {useSelector, useDispatch} from "react-redux";
import Card from './Card/Card'
import Modal from '../Modal/Modal'
function CardList(props) {
    // const n = useSelector((state) => state.main.nails);
    // console.log(n)
    return (
        <>
            <Modal/>
            <div className={styles.List}>
                <h3 className={styles.ListTitle}> Послуги нігтьового сервісу</h3>
                <div className={styles.ListContent}>
                    {nails.map((item) => {
                        return <Card key={item.id} {...item} item={item}/>
                    })}
                </div>
                <h3 className={styles.ListTitle}>Послуги макіяжу брів</h3>
                <div className={styles.ListContent}>
                    {brows.map((item) => {
                        return <Card key={item.id} {...item} item={item}/>
                    })}
                </div>
                <h3 className={styles.ListTitle}>Послуги перманентного макіяжу</h3>
                <div className={styles.ListContent}>
                    {permanent.map((item) => {
                        return <Card key={item.id} {...item} item={item}/>
                    })}
                </div>
            </div>
        </>

    );
}

export default CardList;