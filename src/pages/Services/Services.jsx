import React from 'react';
import Banner from "../../components/Banner/Banner";
import {Container} from '@mui/material'
import styles from './Services.module.scss'
import CardList from "../../components/CardList/CardList";
import List from "../../components/List/List";
import {renderCard} from "../../helpers/dataHelpers";

function Services(props) {
    return (
        <div className={styles.Services}>
            <Banner/>
            <Container maxWidth="xl">
                <List renderFunction={renderCard} tag1='Послуги нігтьового сервісу' tag2='Послуги перманентного макіяжу' tag3='Послуги макіяжу брів'/>
                <CardList/>
            </Container>
        </div>
    );
}

export default Services;