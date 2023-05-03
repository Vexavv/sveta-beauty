import React,{useState} from 'react';
import styles from './Card.module.scss'
function Card({title, minPrice, maxPrice, minTime, maxTime, description, imageUrl, id}) {
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
                <h3 className={styles.CardInfoTitle}>{title}</h3>
                <p className={styles.CardInfoPrice}>Ціна: <span>{minPrice} </span>гривень</p>
                <p className={styles.CardInfoTime}>Час виконання: <span>{minTime}</span> хвилин</p>
                <div><p className={styles.CardInfoDescription}>{description}</p></div>
                {/*<button>Більше</button>*/}
            </div>


        </div>
    );
}

export default Card;