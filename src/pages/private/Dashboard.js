import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import DashboardHome from './DashboardHome';
import Pay from './Pay';
import MyOrders from './MyOrders';
import Review from './Review';
import ManageOrders from '../adminprivate/ManageProducts';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../adminprivate/AddProduct';
import MakeAdmin from '../adminprivate/MakeAdmin';



const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { logout, user, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/"><Button color="inherit">Home</Button></Link>
            <br />
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            {

                admin ?
                    <Box>
                        <Link to={`${url}/manage-products`}><Button color="inherit">Manage All Products</Button></Link><br />
                        <Link to={`${url}/add-product`}><Button color="inherit">Add A Product</Button></Link><br />
                        <Link to={`${url}/make-admin`}><Button color="inherit">Make Admin</Button></Link><br />
                        <Link to={`${url}/review`}><Button color="inherit">Manage All Products</Button></Link><br />
                        <Button onClick={logout} color="inherit">Log Out</Button>
                    </Box>
                    :
                    <Box>
                        <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link><br />
                        <Link to={`${url}/my-orders`}><Button color="inherit">My Orders</Button></Link><br />
                        <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link><br />
                        <Button onClick={logout} color="inherit">Log Out</Button>
                    </Box>

            }


            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Biker's Place
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route exact path={`${path}/my-orders`}>
                        <MyOrders user={user} />
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review user={user} />
                    </Route>


                    <AdminRoute exact path={`${path}/manage-products`}>
                        <ManageOrders user={user} />
                    </AdminRoute>
                    
                    <AdminRoute exact path={`${path}/add-product`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/make-admin`}>
                        <MakeAdmin />
                    </AdminRoute>

                </Switch>

            </Box>

        </Box >
    )
}

export default Dashboard
