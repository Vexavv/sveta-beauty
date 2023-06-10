import React from 'react';
import styles from './DisinfectionSteps.module.scss'
import {disinfection} from "../../data/data";
import HTag from "../HTag/HTag";
function DisinfectionSteps(props) {
    return (
        <ul className={styles.Steps}>
            {disinfection.map(step => {
                return (
                    <li key={step.id} className={styles.StepsList}>
                        <img src={step.image} alt="step.title"/>
                        <div className={styles.StepsListContent}>
                           <HTag tag='h4'>{step.title}</HTag>
                            <p className={styles.StepsListText}>{step.text}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}

export default DisinfectionSteps;