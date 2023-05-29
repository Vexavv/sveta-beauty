import React from 'react';
import {Container} from '@mui/material'
import PriceList from "../../components/PriceList/PriceList";
import styles from './Price.module.scss'
import List from "../../components/List/List";
import {renderPriceList} from "../../helpers/dataHelpers";

function Price(props) {
    return (
        <main className={styles.Price}>
            <Container maxWidth="xl">
                <List tag1='Ціни на послуги нігтьового сервісу' tag3='Ціни на послуги перманентного макіяжу' tag2='Ціни на послуги макіяжу брів' renderFunction={renderPriceList}/>
            <PriceList/>
            </Container>
        </main>
    );
}

export default Price;