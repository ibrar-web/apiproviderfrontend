import * as React from 'react';
import { Link } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CasinoIcon from '@mui/icons-material/Casino';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from '../../navigation/Navigation';

// import Home from '../Home/Home'
// import Partner from '../Partner/Partner'
// import PartnerUser from '../Partneruser/PartnerUser'
// import Games from '../Games/Games'
// import PartnerGames from '../Partnergames/PartnerGames'
// import GameReport from '../GameReport/GameReport'
// import PlayerReport from '../PlayerReport/PlayerReport'
// import SupplierReport from '../SupplierReport/SupplierReport'
// import SummaryReport from '../SummaryReport/SummaryReport'




// Componenets import here


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 20px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{backgroundColor:'black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{color:'#f5b618'}}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{backgroundColor:'black'}}>
                <Typography variant="h6" noWrap component="div" sx={{color:'#f5b618', marginRight:'40px'}}>
                        Super Admin
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color:'#f5b618'}} /> : <ChevronLeftIcon sx={{color:'#f5b618'}}/>}
                    </IconButton>
                </DrawerHeader>
                {/* <Divider /> */}
                <List sx={{backgroundColor:'black'}}>

                    <Link to={'/home'}><ListItem><ListItemButton><ListItemIcon sx={{color:'#f5b618'}}><HomeIcon /></ListItemIcon><Typography sx={{color:'#f5b618'}}>Home</Typography></ListItemButton></ListItem></Link>
                    <Link to={'/partner'}><ListItem ><ListItemButton><ListItemIcon sx={{color:'#f5b618'}}><HandshakeIcon /></ListItemIcon><Typography sx={{color:'#f5b618'}}>Partner</Typography></ListItemButton></ListItem></Link>
                    <Link to={'/partnerusers'}><ListItem ><ListItemButton><ListItemIcon sx={{color:'#f5b618'}}><PersonIcon /></ListItemIcon><Typography sx={{color:'#f5b618'}}>Partner Users</Typography></ListItemButton></ListItem></Link>
                    <Link to={'/games'}><ListItem ><ListItemButton><ListItemIcon sx={{color:'#f5b618'}}><SmartToyIcon /></ListItemIcon><Typography sx={{color:'#f5b618'}}>Games</Typography></ListItemButton></ListItem></Link>
                    <Link to={'/partnergames'}><ListItem ><ListItemButton><ListItemIcon sx={{color:'#f5b618'}}><CasinoIcon /></ListItemIcon><Typography sx={{color:'#f5b618'}}>Partner Games</Typography></ListItemButton></ListItem></Link>


                </List>
                {/* <Divider /> */}

                <List sx={{backgroundColor:'black', color:'black'}}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <ListItemIcon sx={{ ml: 4 }}><DragHandleIcon /></ListItemIcon>
                                <Button variant="containedprimary" {...bindTrigger(popupState)} sx={{backgroundColor:'#f5b618'}}>
                                    Reports
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <Link to={'/gamesreport'}><MenuItem sx={{backgroundColor:'black', color:'#f5b618'}} onClick={popupState.close}><Typography>Game Report</Typography></MenuItem></Link>
                                    <Link to={'/playerreport'}><MenuItem sx={{backgroundColor:'black', color:'#f5b618'}} onClick={popupState.close}><Typography>Player Report</Typography></MenuItem></Link>
                                    <Link to={'/supplierreport'}><MenuItem sx={{backgroundColor:'black', color:'#f5b618'}} onClick={popupState.close}><Typography>Supplier Report</Typography></MenuItem></Link>
                                    <Link to={'/summaryreport'}><MenuItem sx={{backgroundColor:'black', color:'#f5b618'}} onClick={popupState.close}><Typography>Summary Report</Typography></MenuItem></Link>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt:10}}>
                <DrawerHeader>
                    <Navigation />
                    {/* <BrowserRouter> */}
                    {/* <Routes>               
                        <Route path="/home" element={<Home />} />
                        <Route path="/partner" element={<Partner />} />
                        <Route path="/partnerusers" element={<PartnerUser />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/partnergames" element={<PartnerGames />} />
                        <Route path="/gamesreport" element={<GameReport />} />
                        <Route path="/playerreport" element={<PlayerReport />} />
                        <Route path="/supplierreport" element={<SupplierReport />} />
                        <Route path="/summaryreport" element={<SummaryReport />} />
                    </Routes> */}
                    {/* </BrowserRouter> */}
                </DrawerHeader>

            </Box>
        </Box>
    );
}
