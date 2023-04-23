import React from 'react';
import {gallery} from "../../../data/data";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function AboutGallery(props) {
    return (
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
    );
}

export default AboutGallery;