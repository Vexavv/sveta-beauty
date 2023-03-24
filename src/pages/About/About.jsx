import React from 'react';
import {Container} from '@mui/material'
import styles from './About.module.scss'
import AboutMe from "../../components/AboutMe/AboutMe";


function About(props) {
    return (
        <main className={styles.About}>
            <Container maxWidth="xl">
                <h1>Про нас</h1>
                <AboutMe/>
            </Container>

            </main>
    );
}

export default About;