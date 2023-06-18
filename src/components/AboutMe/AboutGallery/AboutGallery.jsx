import React, {useEffect, useState} from 'react';
import styles from './AboutGallery.module.scss'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HTag from "../../HTag/HTag";

function AboutGallery(props) {
    const [gallery, setGallery] = useState(null);
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('./data/gallery.json');
                const jsonData = await response.json();
                setGallery(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGallery();
    }, []);

    if (!gallery) {
        return <div>Loading...</div>;
    }

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