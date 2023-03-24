import {FaInstagram, FaTelegram, FaPhoneAlt, FaRegEnvelope} from "react-icons/fa";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Link} from "react-router-dom";
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
                            <Link
                                to="tel:+380501899094"> <Typography sx={{
                                color: "#1A1A1A",
                                fontSize: {xs: '20px', md: '16px'},
                                fontFamily: 'var(--font-family)',
                                '&:hover, active': {
                                    textDecoration: 'underline'
                                }
                            }}>
                                +3 8(050) 189 90 94
                            </Typography></Link>
                        </Box>
                        <Box sx={{
                            display: {xs: 'none', sm: 'none', md: 'flex'}
                        }}>
                            <FaRegEnvelope className={styles.IconPhone}/>

                            <Link to="mailto:svetatsys@gmail.com"><Typography sx={{
                                color: "#1A1A1A",
                                fontSize: {xs: '20px', md: '16px'},
                                fontFamily: 'var(--font-family)',
                                '&:hover, active': {
                                    textDecoration: 'underline'
                                }
                            }}>
                                e-mail: svetatsys@gmail.com
                            </Typography></Link>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: {xs: 'flex', sm: 'flex', md: 'flex'},
                        justifyContent: {xs: 'center'},
                        gap: "10px",
                        alignItems: 'center',
                        paddingTop: '10px'
                    }}>
                        <Box width={1} height={0.5} component={Link}
                             to={'https://instagram.com/tsveta_beauty?utm_medium=copy_link'} sx={{
                            color: "#1A1A1A",
                        }}>

                            <FaInstagram className={styles.Icon}/>
                        </Box>
                        <Box width={1} height={0.5}
                             component={Link} to={'http://t.me/sveta_beauty1'} sx={{
                            color: "#1A1A1A",
                        }}>
                            <FaTelegram className={styles.Icon}/>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default HeaderToolbar