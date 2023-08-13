import React,{useState} from 'react';
import { AppBar, Box, Toolbar, ButtonGroup, IconButton, Drawer, Divider, Container} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderBanner from './HeaderBanner/HeaderBannerr';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo'

const navItems = [
    {
        title: 'Послуги',
        path: '/services'
    },
    {
        title: 'Ціни',
        path: '/price'
    },
    {
        title: 'Дезінфекція',
        path: '/disinfection'
    },
    {
        title: 'Контакти',
        path: '/contacts'
    }

    ]
function Header(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)



    const mobileMenuToggle = () => {
        setIsMobileMenuOpen(current => !current)

    }



    return (
        <>
            <AppBar position="static"
                    // mt={3}
                    sx={{backgroundColor: 'rgba(255, 192, 203)',
                        boxShadow: 'none',
                    }}>
                <HeaderBanner />
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        justifyContent:'space-between',
                    }} >

                        {/*burger for mobile adaptive */}
                        <Box sx={{
                            flexGrow: { xs: 0, sm: 0 },
                            display: { xs: 'flex', sm: 'none', md: 'none' },
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                            <ButtonGroup variant="text" aria-label="text button group">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={mobileMenuToggle}
                                    color="black"

                                >
                                    {!isMobileMenuOpen && <MenuIcon />}
                                </IconButton>
                            </ButtonGroup>
                        </Box>

                        {/*burger for tabs adaptive */}
                        <Box sx={{
                            flexGrow: { xs: 1, sm: 1 },
                            display: { xs: 'none', sm: 'flex', md: 'none' },
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={mobileMenuToggle}
                                color="black"
                            >
                                {!isMobileMenuOpen && <MenuIcon />}
                            </IconButton>
                        </Box>

                        {/* drop navigation for mobile */}
                        <Drawer
                            anchor="left"
                            component="div"
                            variant="temporary"
                            open={isMobileMenuOpen}
                            onClose={mobileMenuToggle}
                            ModalProps={{ keepMounted: true }}
                            SlideProps={{ timeout: 400 }}
                            sx={{
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box',
                                    width: { xs: '70%', sm: '50%', md: 'none' },
                                    overflow: 'hidden',
                                    color: "#1A1A1A",
                                    '&:active': { color: '#BA933E' }
                                }
                            }}
                        >

                            <Box
                                sx={{
                                    p: 2,
                                    height: 1,
                                    backgroundColor: "white"
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={mobileMenuToggle}
                                    color="black" sx={{ mb: 2 }} >
                                    <CloseIcon />
                                </IconButton>

                                <Divider sx={{ mb: 2 }} />
                                <Navigation onClick={() => {mobileMenuToggle()}} navItems={navItems}/>

                            </Box>
                        </Drawer>

                        {/* main logo */}
                        <Logo />

                        {/* navbar for desktop */}
                        <Box sx={{ flexGrow: 1,
                            display: { xs: 'none', sm: 'none', md: 'table' },
                            textAlign:'center',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}>
                            <Navigation navItems={navItems} />
                        </Box>



                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Header;