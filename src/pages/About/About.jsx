import React from 'react';
import {Container} from '@mui/material'
import styles from './About.module.scss'
import AboutMe from "../../components/AboutMe/AboutMe";
import BannerAbout from "../../components/BannerAbout/BannerAbout";

import AboutGallery from "../../components/AboutMe/AboutGallery/AboutGallery";
import List from "../../components/List/List";
import {renderDataList} from "../../helpers/dataHelpers";

function About(props) {
    return (
        <div className={styles.About}>
            <BannerAbout/>
            <Container maxWidth="xl">
                <AboutMe/>
                <List title='Послуги' tag1='Нігтьовий сервіс' tag2='Перманентний макіяж' tag3='Макіяж брів' renderFunction={renderDataList}/>
                <AboutGallery/>
            </Container>

        </div>
    );
}

export default About;