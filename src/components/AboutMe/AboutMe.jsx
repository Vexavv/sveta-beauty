import React from 'react';
import styles from './AboutMe.module.scss'


function AboutMe(props) {
    return (
        <div className={styles.About}>
            <div className={styles.AboutImg}>
                {/*<img src="img/aboutMe/DSC_4167.jpg" alt="Me photo"/>*/}
            </div>
            <div className={styles.AboutText}>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea enim esse excepturi laboriosam, magnam nulla reprehenderit rerum tenetur. Atque iste iure minus pariatur quas quis rerum saepe sint, velit. Ab ad alias aperiam architecto consequatur distinctio dolore, eaque expedita in ipsa laborum nobis nostrum numquam officiis pariatur possimus quia quibusdam quis rem reprehenderit, sapiente sed sint tempora tenetur voluptate! Aspernatur aut autem cumque cupiditate error, id placeat quo velit voluptate voluptatum! Ad aspernatur consectetur corporis dolorem enim facilis hic itaque laborum, laudantium libero maxime minus, natus odio optio porro quia rerum sapiente sunt suscipit tempore vero vitae voluptas voluptatum.
                </p>
            </div>

        </div>
    );
}

export default AboutMe;