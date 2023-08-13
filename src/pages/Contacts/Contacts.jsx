import React from 'react';
import Map from "../../components/Map/Map";
import styles from "./Contacts.module.scss";
import HTag from '../../components/HTag/HTag'
import Banner from "../../components/Banner/Banner";
function Contacts(props) {
    return (
        <div className={styles.Contacts}>
            <Banner title="Наше місцезнаходження!!!"/>
            <HTag tag='h3'>Якщо у вас виникли труднощі з пошуку нас, ви можете подивитись наше місце знаходження на мапі!</HTag>
            <Map/>
        </div>
    );
}

export default Contacts;