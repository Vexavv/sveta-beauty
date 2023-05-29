import {FaInstagram, FaTelegram, FaPhoneAlt, FaRegEnvelope} from "react-icons/fa";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
// import {Link} from "react-router-dom";
import styles from './HeaderBanner.module.scss'
import '../../../styles/variables.module.scss'

const HeaderToolbar = () => {
    return (
        <Box  sx={{backgroundColor: 'var(--secondary-color)'}}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: {xs: "flex", sm: "flex", md: "flex",},
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: {xs: "center", sm: "space-between", md: "space-between"},
                        alignItems: 'center',
                        textAlign: 'center',
                        color: "#1A1A1A",
                        fontFamily: 'var(--font-family)',
                        padding: {xs: "20px 5px", sm: "5px 5px"}
                    }}>
                    <Box sx={{
                        display: {xs: 'flex', sm: 'flex', md: 'flex'},
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: "2 rem",
                        fontSize: '14px',
                        fontFamily: 'var(--font-family)'
                    }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <FaPhoneAlt className={styles.IconPhone}/>
                             <Typography sx={{
                                color: "#1A1A1A",
                                fontSize: {xs: '20px', md: '16px'},
                                fontFamily: 'var(--font-family)',
                                '&:hover, active': {
                                    textDecoration: 'underline'
                                }
                            }}>
                                 <a href="tel:+380501899094"> +3 8(050) 189 90 94</a>
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: {xs: 'none', sm: 'none', md: 'flex'}
                        }}>
                            <FaRegEnvelope className={styles.IconPhone}/>

                            <Typography sx={{
                                color: "#1A1A1A",
                                fontSize: {xs: '20px', md: '16px'},
                                fontFamily: 'var(--font-family)',
                                '&:hover, active': {
                                    textDecoration: 'underline'
                                }
                            }}>
                                <a href="mailto:svetatsys@gmail.com">   e-mail: svetatsys@gmail.com</a>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: {xs: 'flex', sm: 'flex', md: 'flex'},
                        justifyContent: {xs: 'center'},
                        gap: "10px",
                        alignItems: 'center',
                        paddingTop: '10px'
                    }}>
                        <Box width={1} height={0.5}>
                           <a href="https://instagram.com/tsveta_beauty?utm_medium=copy_link" target='_blank' rel='noreferrer'><FaInstagram className={styles.Icon}/></a>
                        </Box>
                        <Box width={1} height={0.5}>
                           <a href="http://t.me/sveta_beauty1" target='_blank' rel='noreferrer'><FaTelegram className={styles.Icon}/></a>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default HeaderToolbar