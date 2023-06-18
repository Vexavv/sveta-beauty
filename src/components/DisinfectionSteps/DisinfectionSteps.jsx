import React, {useEffect, useState} from 'react';
import styles from './DisinfectionSteps.module.scss'
import HTag from "../HTag/HTag";
function DisinfectionSteps(props) {
    const [disinfection, setDisinfection] = useState(null)

    useEffect(() => {
        const fetchDisinfection = async () => {
            try {
                const response = await fetch('./data/disinfection.json');
                const jsonData = await response.json();
                setDisinfection(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDisinfection();
    }, []);

    if (!disinfection) {
        return <div>Loading...</div>;
    }
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