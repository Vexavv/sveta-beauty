import React from 'react';
import styles from './Disinfection.module.scss'
import {Container} from "@mui/material";
import DisinfectionSteps from "../../components/DisinfectionSteps/DisinfectionSteps";
import Banner from "../../components/Banner/Banner";
function Disinfection(props) {
    return (
        <div className={styles.Disinfection}>
            <Banner title="Як у нас проводиться дезінфекція та стерилізація інструментів."/>
            <Container maxWidth="xl">
                <div className={styles.DisinfectionContent}>
                    <DisinfectionSteps/>
                </div>
            </Container>
        </div>
    );
}

export default Disinfection;