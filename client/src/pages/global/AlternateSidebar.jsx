// import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { ColorModeContext,token } from '../../theme';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon  from '@mui/icons-material/Search';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import { Link } from "react-router-dom";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import EventIcon from '@mui/icons-material/Event';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



// const drawerWidth = 240;

// const theme = useTheme();
// const colors = token(theme.palette.mode);

const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   // backgroundColor: colors.primary[400],
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );


export default function MiniDrawer() {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);

  const openedMixin = (theme) => ({
    width: drawerWidth,
    backgroundColor: colors.primary[400],
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
    backgroundColor: colors.primary[400],
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: colors.primary[400],
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: colors.primary[400],
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
      backgroundColor: colors.primary[400],
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
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex"
    sx = {{
    "& .pro-sidebar-inner":{
      backgroundColor: `${colors.primary[400]} !important`,  //using important tag since we are overwriting  a library
      height: "auto",
    },
    "& .pro-icon-wrapper":{
      backgroundColor: "transparent !important"
    },
    "& .pro-inner-item":{
      padding: "15px 35px 5px 20px !important",
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      fontSize:"20px"

    },
    "& .pro-inner-item:hover": {
      color:"#868dfb !important"
    },
    "& .pro-menu-item.active":{
      color : "#6870fa !important"

    },
    "& .pro-menu-item ":{
      listStyle:"none !important",
    },
    "& ul":{
      padding:"0px"
    },
    "& .pro-item-content":{
      ml:"10px",
      marginTop:"5px"
    },
    
    }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Box display="flex" justifyContent= "space-between" sx={{
          px : 3,
          py : 2
        }}>

          <Box display="flex">

          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            color={colors.primary[400]}
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>


        <Typography variant="h5" display="flex" alignItems="center" noWrap component="div" color={colors.grey[100]}>
              Optic Vision World 
            </Typography>


          </Box>




            <Box display="flex" 
                backgroundColor = {colors.primary[800]} 
                borderRadius ="3px">
              <InputBase sx = {{ml: 2 , flex: 1 }} placeholder = "Search" />
                <IconButton type='button' sx={{p:1}}>
                  <SearchIcon />
                </IconButton>
            </Box>

            <Box display= "flex">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ?  (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
              </IconButton>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </Box>

        </Box>

      </AppBar>

            {/* Side drawer*/}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />


        <List 
        sx={{
          my: open ? 1 : 2,
        }}>
            <Link to="" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}>

              <ListItem key="Dashboard" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      // justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      // pt: 3,
                    }}>

                              {/* <Typography variant='h6' 
                              sx={{ opacity: open ? 1 : 0 }}>Dashboard</Typography> */}
                        <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                          {<HomeOutlinedIcon />} 
                        </ListItemIcon>
                              <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />


                        {/* <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} /> */}
                    </ListItemButton>
                  </ListItem>
                  </Link>
                </List>

                <Divider variant="middle"/>

        <List 
        sx={{
          my: open ? 0 : 2
        }}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Customers
            </Typography> 
        <Link to="/customers" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}>
          <ListItem key="Customers" disablePadding sx={{ display: 'block'}}>
            <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}>

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {<PeopleOutlinedIcon />} 
                </ListItemIcon>
                <ListItemText primary='Customer Index' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/customers/add" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
          <ListItem key='Add New customer' disablePadding sx={{ display: 'block'}}>
            <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}>

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {<PersonAddAltIcon />} 
                </ListItemIcon>
                <ListItemText primary='Add New Customer' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          </Link>
        </List>

        <Divider variant="middle"/>

        <List
        sx={{
          my: open ? 0 : 2
        }}>
        <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Prescription & Billing
            </Typography> 
        <Link to="/prescription" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
          <ListItem key="Prescription Entry" disablePadding sx={{ display: 'block'}} to="/prescription">
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<RemoveRedEyeOutlinedIcon />} 
                  </ListItemIcon>
                  <ListItemText primary='Prescription Entry' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          
        </Link>
        
        <Link to="/billing" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <ListItem key="Direct Billing" disablePadding sx={{ display: 'block'}}>
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<ReceiptLongOutlinedIcon />} 
                  </ListItemIcon>
                  <ListItemText primary='Direct Billing' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/invoices" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <ListItem key="Invoice Balances" disablePadding sx={{ display: 'block'}}>
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<ReceiptOutlinedIcon />} 
                  </ListItemIcon>
                  <ListItemText primary='Invoice Balances' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Link>

            </List>

            <Divider variant="middle"/>
        
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Inventory
            </Typography>
            <List         sx={{
          my: open ? 0 : 2
        }}>

            <Link to="/products" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
              <ListItem key="Product Index" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<Inventory2OutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Product Index' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  </Link>
                  

                  <Link to="/products/add" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
                  <ListItem key="Add New Products" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<AddCircleOutlineOutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Add New Products' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  </Link>

                  {/* <ListItem key="Products Cheatsheet" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<GridOnOutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Products Cheatsheet' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem> */}
                  </List>

                  <Divider variant="middle"/>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Mail & SMS Services
            </Typography>
                  <List
                          sx={{
                            my: open ? 0 : 2
                          }}>
              <ListItem key="Edit Email" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<AlternateEmailOutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Edit Mail' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>

                  {/* <ListItem key="Edit SMS" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<SmsOutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Edit SMS' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem> */}

                </List >

                <Divider variant="middle"/>

                <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Sales Analysis
            </Typography>
                <List 
                        sx={{
                          my: open ? 0 : 2
                        }}>
              <ListItem key="Stats" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<TimelineOutlinedIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Stats' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>

                </List>

                <Divider variant="middle"/>

                <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 10px 20px" ,
                    display: open ? 'block' : 'none'}}
            >
              Reminders
            </Typography>
                <List
                        sx={{
                          my: open ? 0 : 2
                        }}>

                <Link to="/calendar" 
                style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
              <ListItem key="Event Calender" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<EventIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Event Calender' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                  </Link>

                  <ListItem key="Due Reminders" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<RunningWithErrorsIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Due Reminders' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem key="Delivery Reminders" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<DeliveryDiningIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Delivery Reminders' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem key="Check-up Reminders" disablePadding sx={{ display: 'block'}}>
                    <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}>

                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {<FavoriteBorderIcon />} 
                        </ListItemIcon>
                        <ListItemText primary='Check-up Reminders' sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>

                </List>

      </Drawer>
    
    </Box>
  );
}