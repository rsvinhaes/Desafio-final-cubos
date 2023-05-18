import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useStyles } from './style';
import './style.css';


export default function PrimarySearchAppBar() {

    const navigate = useNavigate()
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem >
                <div>
                    <Button
                        type="submit"
                        variant="text"
                        className={classes.icone}
                        startIcon={<AccountCircle />}
                    >
                        Usuário
                    </Button>
                </div>
            </MenuItem>

        </Menu>
    );

    return (

        <div className={classes.grow}>
            <AppBar position="static" className={classes.container} color='transparent' >
                <Toolbar>
                    <div>
                        <IconButton
                            className={classes.icone}
                            onClick={() => navigate('/')}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.logo}>
                        <Avatar
                            className={classes.avatar}
                            src={Logo}
                            variant='rounded'
                        />
                        <Typography className={classes.title} variant="h3" noWrap>
                            Market Cubos
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <div>
                            <Button
                                type="submit"
                                variant="text"
                                className={classes.icone}
                                startIcon={<AccountCircle />}
                                onClick={() => navigate('/signIn')}
                            >
                                Usuário
                            </Button>
                        </div>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}

                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div >
    );
}
