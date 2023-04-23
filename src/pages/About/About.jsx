import React from 'react';
import {Container} from '@mui/material'
import styles from './About.module.scss'
import AboutMe from "../../components/AboutMe/AboutMe";
import BannerAbout from "../../components/BannerAbout/BannerAbout";
import ServiceList from "../../components/ServiceList/ServiceList";
import AboutGallery from "../../components/AboutMe/AboutGallery/AboutGallery";


function About(props) {
    return (
        <main className={styles.About}>
            <BannerAbout/>
            <Container maxWidth="xl">
                <AboutMe/>
                <ServiceList/>
                <AboutGallery/>
            </Container>

            </main>
    );
}

export default About;