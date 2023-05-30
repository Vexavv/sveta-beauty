import React,{useState} from 'react';
import styles from './Card.module.scss'
import {getElement, toggleModal} from "../../../store/mainSlice";
import {useSelector, useDispatch} from "react-redux";
function Card({title, minPrice, maxPrice, minTime, maxTime, description, imageUrl, id, item}) {
    const dispatch = useDispatch();
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(toggleModal(true))
        console.log(product)
    }
    const [hovered, setHovered] = useState(null);
    return (
        <div className={styles.Card}  onClick={() => handleProductClick(item)}>
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
                <h3 className={styles.CardInfoTitle}>{title}</h3>
                <p className={styles.CardInfoPrice}>Ціна: {minPrice} гривень</p>
                <p className={styles.CardInfoTime}>Час виконання: {minTime} хвилин</p>
                <div><p className={styles.CardInfoDescription}>{description}</p></div>

            </div>


        </div>
    );
}

export default Card;