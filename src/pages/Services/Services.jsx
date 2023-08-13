import React from 'react';
import Banner from "../../components/Banner/Banner";
import {Container} from '@mui/material'
import styles from './Services.module.scss'
import List from "../../components/List/List";
import {renderCard} from "../../helpers/dataHelpers";
import Modal from "../../components/Modal/Modal";

function Services(props) {
    return (
        <div className={styles.Services}>
            <Banner title='Ознайомтеся з нашими послугами!!!'/>
            <Container maxWidth="xl">
                <List renderFunction={renderCard} tag1='Послуги нігтьового сервісу' tag2='Послуги перманентного макіяжу' tag3='Послуги макіяжу брів'/>
            </Container>
          <Modal/>
        </div>
    );
}

export default Services;