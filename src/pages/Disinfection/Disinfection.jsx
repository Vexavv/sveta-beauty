import React from 'react';
import styles from './Disinfection.module.scss'
import HTag from "../../components/HTag/HTag";
import {Container} from "@mui/material";
import DisinfectionSteps from "../../components/DisinfectionSteps/DisinfectionSteps";
function Disinfection(props) {
    return (
        <div className={styles.Disinfection}>
            <Container maxWidth="xl">
                <div className={styles.DisinfectionContent}>
                    <HTag tag='h1'>Як у нас проводиться дезінфекція та стерилізація інструментів.</HTag>
                    <DisinfectionSteps/>
                </div>
            </Container>
        </div>
    );
}

export default Disinfection;