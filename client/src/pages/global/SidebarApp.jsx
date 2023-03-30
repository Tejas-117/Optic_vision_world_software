import React from 'react';
import { useState } from 'react';
import { ProSidebar,Menu, MenuItem } from 'react-pro-sidebar';
import { Box , IconButton, Typography , useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { token } from '../../theme';
import LightModeImage from '../../assets/LightModeImage.jpg';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title} // sets true if the selected item is equal to the title
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} 
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}>
          <Typography variant='h6'>{title}</Typography>

        </Link>
    </MenuItem>
  );
};


const SidebarApp = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [isCollapsed , setIsCollapsed] = useState(false);  //Represent whether the sidebar will be collapsed or not
  const [selected , setSelected] = useState("Dashboard"); // Represent which page we are at
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
          padding: "5px 35px 5px 20px !important",
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
      <ProSidebar
        width="200px"
        collapsed={isCollapsed}
        >
      <Menu iconShape='square'
        >
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon = {isCollapsed? <MenuOutlinedIcon /> : undefined}
          style = {{
            margin: "10px 0 20px 0",
            color: colors.grey[100]
          }}>
            {!isCollapsed && (
              <Box 
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  ml="5px"
                  >
                  {/* <Typography variant='h3' color={colors.grey[100]} marginRight="20px">
                    ADMINS
                  </Typography> */}
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                    <MenuOutlinedIcon />
                  </IconButton>
                  </Box>
            )}

          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                 alt = "profile-user"
                 width= '75px'
                 height = "75px"
                 src = {LightModeImage}
                 style={{cursor:"pointer" , borderRadius: "50%"}}
                 />
              </Box>
              <Box textAlign="center">
                <Typography variant='h3' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Optic Eye Center</Typography>
                <Typography variant='h5' color={colors.greenAccent[500]} >VP Fancy Admin</Typography>
              </Box> */}
            </Box>
          )}  
          
          <Box >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}
            >
              Customers
            </Typography>
            <Item
              title="Customer Index"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/customers"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}
            >
              Billing & Invoices
            </Typography>
            <Item
              title="Profile Form"
              to="/customers/add"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Billing"
              to="/billing"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/calendar"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Prescription Entry"
              to="/prescription"
              icon={<RemoveRedEyeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}
            >
              Inventory
            </Typography>
            <Item
              title="Product Index"
              to="/bar"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add New Product"
              to="/pie"
              icon={<AddCircleOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Product Cheatsheet"
              to="/line"
              icon={<GridOnOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Edit Product"
              to="/products/:id/edit"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px"}}
            >
              Mail & SMS Services
            </Typography>

                        <Item
              title="Edit Mail"
              to="/line"
              icon={<AlternateEmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Edit SMS"
              to="/line"
              icon={<SmsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}
            >
              Sales Analysis
            </Typography>

            <Item
              title="Stats"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 5px 20px" }}
            >
              Reminders
            </Typography>

            <Item
              title="Event Calender"
              to="/line"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Due Reminders"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Delivery Reminders "
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
      </Menu>
       </ProSidebar>
    </Box>
  )
}

export default SidebarApp;