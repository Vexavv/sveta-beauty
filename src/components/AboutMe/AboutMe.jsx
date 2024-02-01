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
                    Привіт! Я - майстер краси Світлана! Вже понад 15 років я працюю в індустрії краси, у нашої студії
                    ми надаємо послуги, такі як перманентний макіяж, оформлення брів, манікюр. З задоволенням допоможу
                    вам підкреслити вашу природну красу: підберу і зроблю гарну форму брів, доведу до досконалості форму
                    ваших чудових губ, надам догляд і красу вашим рукам! У нашій студії тепло, світло і затишно, тут ви
                    можете випити чашку ароматної кави і смачного чаю!
                </p>
            </div>
        
        </div>
    );
}

export default AboutMe;