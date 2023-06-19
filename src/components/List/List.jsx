import React, {useEffect} from 'react';
import styles from "./List.module.scss";
import HTag from "../HTag/HTag";
import {useDispatch, useSelector} from "react-redux";
import { fetchAsyncNails, fetchAsyncBrows, fetchAsyncPermanent } from "../../store/mainSlice";

import Loader from "../Loader/Loader";
import Error from '../Error/Error'

function List({title, tag1, tag2, tag3, renderFunction}) {
    const dispatch = useDispatch()
    const {nails, brows, permanent, status, error} = useSelector(state => state.main)

    useEffect(() => {
        dispatch(fetchAsyncNails());
        dispatch(fetchAsyncBrows());
        dispatch(fetchAsyncPermanent());
    }, [dispatch]);

    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
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
        default:
            return <Error error={error}/>
    }

}

export default List;