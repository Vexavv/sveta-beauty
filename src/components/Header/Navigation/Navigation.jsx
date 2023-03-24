import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navigation.module.scss'
import MenuList from '@mui/material/List'
import MenuItem from '@mui/material/ListItem';

const Navigation = ({onClick, navItems}) => {
    return (
        <div className={styles.Menu}>

            <MenuList className={styles.MenuList} sx={{
                display: {xs: 'block', sm: 'block', md: 'flex'},
                flexDirection: 'center',
            }}>
                {navItems.map(navItem =>
                    (
                        <MenuItem
                            key={navItem.title}
                            component={NavLink}
                            to={navItem.path}
                            sx={{
                                color: "#525151",
                                display:'flex',
                                justifyContent:'center',
                                fontWeight: '600',
                                fontSize: '20px',
                                textTransform: 'uppercase',

                                '&:hover': {
                                    color: "#1A1A1A" ,
                                    textDecoration:'underline',
                                },
                                textAlign: 'center',
                            }}
                            onClick={onClick}
                        >
                            {navItem.title}
                        </MenuItem>
                    )
                )}
            </MenuList>
        </div>
    )
}

export default Navigation