import React from 'react';
import Banner from "../../components/Banner/Banner";
import {Container} from '@mui/material'
import styles from './Services.module.scss'
import CardList from "../../components/CardList/CardList";

function Services(props) {
    return (
        <main className={styles.Services}>
            <Banner/>
            <Container maxWidth="xl">
                <CardList/>
            </Container>
        </main>
    );
}

export default Services;