import React from 'react';
import {Container} from '@mui/material'
import styles from './Price.module.scss'
import List from "../../components/List/List";
import {renderPriceList} from "../../helpers/dataHelpers";

function Price(props) {
    return (
        <div className={styles.Price}>
            <Container maxWidth="xl">
                <List tag1='Ціни на послуги нігтьового сервісу' tag2='Ціни на послуги перманентного макіяжу' tag3='Ціни на послуги макіяжу брів' renderFunction={renderPriceList}/>
            </Container>
        </div>
    );
}

export default Price;