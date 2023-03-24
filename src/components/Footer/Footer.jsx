import React from 'react';
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";
import {FaInstagram, FaTelegram} from "react-icons/fa";
import {Container} from '@mui/material'
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
                        <Link to='tel:+380501899094'><span>+3 8(050) 189 90 94</span></Link>
                        <Link to='tel:+380982941708'><span>+3 8(098) 294 17 08</span></Link>
                    </span>
                        <div>
                            <Link to='https://instagram.com/tsveta_beauty?utm_medium=copy_link'><FaInstagram className={styles.FooterContentIcon}/></Link>
                            <Link to='http://t.me/sveta_beauty1'><FaTelegram className={styles.FooterContentIcon}/></Link>
                        </div>
                    </div>
                </Container>

            {/*</div>*/}
<div className={styles.FooterBanner}></div>
        </div>
    );
}

export default Footer;