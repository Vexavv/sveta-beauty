import React from 'react';
import {Container} from '@mui/material'
import styles from './About.module.scss'
import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Banner/Banner";
import ServiceList from "../../components/ServiceList/ServiceList";


function About(props) {
    return (
        <main className={styles.About}>
            <Banner/>
            <Container maxWidth="xl">
                <AboutMe/>
                <ServiceList/>
            </Container>

            </main>
    );
}

export default About;