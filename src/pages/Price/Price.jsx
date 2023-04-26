import React from 'react';
import {Container} from '@mui/material'
import PriceList from "../../components/PriceList/PriceList";
import styles from './Price.module.scss'
function Price(props) {
    return (
        <main className={styles.Price}>
            <h1>Ціни</h1>
            <Container maxWidth="xl">
            <PriceList/>
            </Container>
        </main>
    );
}

export default Price;