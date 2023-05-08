import React from 'react';
import {Container} from '@mui/material'
import PriceList from "../../components/PriceList/PriceList";
import styles from './Price.module.scss'
function Price(props) {
    return (
        <main className={styles.Price}>
            <Container maxWidth="xl">
            <PriceList/>
            </Container>
        </main>
    );
}

export default Price;