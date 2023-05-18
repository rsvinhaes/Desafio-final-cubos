import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { useStyles } from './style';
import './style.css';
import { useNavigate } from 'react-router-dom';
import CifraoIcon from '@material-ui/icons/AttachMoney';
import CarrinhoIcon from '@material-ui/icons/LocalGroceryStore';
import AnuncioIcon from '@material-ui/icons/Storefront';


export default function PrimarySearchAppBar({ search, setSearch }) {

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
            <MenuItem>
                <div>
                    <Button
                        type="submit"
                        variant="text"
                        className={classes.icone}
                        startIcon={<CarrinhoIcon />}
                        onClick={() => navigate('/signIn')}
                    >
                        Meu carrinho
                    </Button>
                </div>
            </MenuItem>
            <MenuItem>
                <div>
                    <Button
                        type="submit"
                        variant="text"
                        className={classes.icone}
                        startIcon={<AnuncioIcon />}
                        onClick={() => navigate('/signIn')}
                    >
                        Meus anúncios
                    </Button>
                </div>
            </MenuItem>
            <MenuItem >
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
            </MenuItem>
            <MenuItem >
                <div>
                    <Button
                        type="submit"
                        variant="contained"
                        color='primary'
                        className={classes.submit}
                        startIcon={<CifraoIcon />}
                        onClick={() => navigate('/signIn')}
                    >
                        Quero vender
                    </Button>
                </div>
            </MenuItem>
        </Menu >
    );

    return (

        <div className={classes.grow}>
            <AppBar position="static" className={classes.container} color='transparent' >
                <Toolbar>
                    <Avatar
                        className={classes.avatar}
                        src={Logo}
                        variant='rounded'
                    />
                    <Typography className={classes.title} color='secondary' variant="h5" noWrap>
                        Market Cubos
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type='search'
                        />
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <div>
                            <Button
                                type="submit"
                                variant="text"
                                className={classes.icone}
                                startIcon={<CarrinhoIcon />}
                                onClick={() => navigate('/signIn')}
                            >
                                Meu carrinho
                            </Button>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                variant="text"
                                className={classes.icone}
                                startIcon={<AnuncioIcon />}
                                onClick={() => navigate('/signIn')}
                            >
                                Meus anúncios
                            </Button>
                        </div>
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
                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                color='primary'
                                className={classes.submit}
                                startIcon={< CifraoIcon />}
                                onClick={() => navigate('/signIn')}
                            >
                                Quero vender
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
