import React from 'react';
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";
import {FaInstagram, FaTelegram} from "react-icons/fa";
import {Container} from '@mui/material'
import {format} from 'date-fns'
function Footer(props) {
    return (
        <div className={styles.Footer}>
            {/*<div className={styles.FooterContainer}>*/}
                <Container maxWidth="xl">
                    <div className={styles.FooterContent}>
                        <h3>НАШІ КОНТАКТИ</h3>
                        <span className={styles.FooterContentText}>
                       <Link to='/'>Sveta Beauty</Link> <br/> Знаходимось ми на Позняках неподалік від станції метро, а само:<br/> м.Київ вул.Анни Ахматової, 13Г<br/><Link to='/contacts'><span>На мапі</span> </Link>
                    </span>
                        <span className={styles.FooterContentPhone}>
                        Phone:
                        <a href='tel:+380501899094'><span>+3 8(050) 189 90 94</span></a>
                        <a href='tel:+380982941708'><span>+3 8(098) 294 17 08</span></a>
                    </span>
                        <div>
                            <a href='https://instagram.com/tsveta_beauty?utm_medium=copy_link' target='_blank' rel='noreferrer'><FaInstagram className={styles.FooterContentIcon}/></a>
                            <a href='http://t.me/sveta_beauty1' target='_blank' rel='noreferrer'><FaTelegram className={styles.FooterContentIcon}/></a>
                        </div>
                    </div>
                </Container>

            {/*</div>*/}
<div className={styles.FooterBanner}>
   <p>Sveta Beauty © 2020 - {format(new Date(), 'yyyy')} Всі права захищені </p>
</div>
        </div>
    );
}

export default Footer;