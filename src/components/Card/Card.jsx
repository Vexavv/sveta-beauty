import React, {useState} from 'react';
import styles from './Card.module.scss'
import {getElement, toggleModal} from "../../store/mainSlice";
import {useDispatch} from "react-redux";
import {FaRegEye} from 'react-icons/fa';
import HTag from "../HTag/HTag";

function Card({title, minPrice, maxPrice, minTime, maxTime, description, imageUrl, id, item}) {
    const dispatch = useDispatch();

    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(toggleModal(true))
    }

    const [hovered, setHovered] = useState(null);
    return (
        <div className={styles.Card}>
            <div className={styles.CardImage}>
                <img src={
                    hovered === id && imageUrl.length > 1
                        ? imageUrl[1]
                        : imageUrl[0]
                }
                     onMouseLeave={() => setHovered(null)}
                     onMouseEnter={() => setHovered(id)}
                     alt={title}/>
            </div>
            <div className={styles.CardInfo}>
                <HTag tag='h4'>{title}</HTag>
                <p className={styles.CardInfoPrice}>Ціна: {minPrice} гривень</p>
                <p className={styles.CardInfoTime}>Час виконання: {minTime} хвилин</p>
                <FaRegEye className={styles.CardInfoIcon} onClick={() => handleProductClick(item)}/>
                <div><p className={styles.CardInfoDescription}>{description}</p></div>
            </div>
        </div>
    );
}

export default Card;