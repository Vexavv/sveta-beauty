import React from 'react';
import styles from "./List.module.scss";
import {brows, nails, permanent} from "../../data/data";
import HTag from "../HTag/HTag";
import cn from 'classnames'

function List({title,tag1,tag2,tag3,renderFunction}) {
    return (
        <div className={styles.List}>
            {title && <HTag tag='h2'>{title}</HTag>}
            <div className={styles.ListContent}>
                <div className={styles.ListContentDescription}>
                    <HTag tag='h3'>{tag1}</HTag>
                    {renderFunction(nails, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <HTag tag='h3'>{tag2}</HTag>
                    {renderFunction(permanent, styles.ListContentDescriptionList)}
                </div>
                <div className={styles.ListContentDescription}>
                    <HTag tag='h3'>{tag3}</HTag>
                    {renderFunction(brows, styles.ListContentDescriptionList)}
                </div>
            </div>
        </div>
    );
}

export default List;