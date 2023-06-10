import React from 'react';
import styles from './AboutGallery.module.scss'
import {gallery} from "../../../data/data";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HTag from "../../HTag/HTag";

function AboutGallery(props) {
    return (
        <div className={styles.Gallery}>
            <HTag tag='h2'> Наши роботи</HTag>
            <Box sx={{ width: '80%', height: 600, overflowY: 'scroll', margin: "0 auto" }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {gallery.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>

    );
}

export default AboutGallery;