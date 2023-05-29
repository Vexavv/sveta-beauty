import React from 'react';
import Map from "../../components/Map/Map";
import styles from "./Contacts.module.scss";
import { FaArrowDown,FaInstagram, FaTelegram} from "react-icons/fa";
import HTag from '../../components/HTag/HTag'
function Contacts(props) {
    return (
        <div className={styles.Contacts}>
            <HTag tag='h1'>Контакти</HTag>
            <Map/>
            <HTag tag='h3'>Якщо у вас виникли питання, ви можете поставити їх тут!</HTag>
            <FaArrowDown/>
            <FaInstagram/>
            <FaTelegram/>


        </div>
    );
}

export default Contacts;