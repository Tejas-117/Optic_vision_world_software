import React from 'react';
import { useState } from 'react';
import { ProSidebar,Menu, MenuItem } from 'react-pro-sidebar';
import { Box , IconButton, Typography , useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { token } from '../../theme';

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
          height: "100%",
          overflowY:"auto",
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
       width="230px"
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
                  <Typography variant='h3' color={colors.grey[100]} marginRight="20px">
                    ADMINS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                    <MenuOutlinedIcon />
                  </IconButton>
                 </Box>
            )}

          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                 alt = "profile-user"
                 width= '75px'
                 height = "75px"
                 src = {'../../assets/LightModeImage.jpg'}
                 style={{cursor:"pointer" , borderRadius: "50%"}}
                 />
              </Box>
              <Box textAlign="center">
                <Typography variant='h3' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>Optic Eye Center</Typography>
                <Typography variant='h5' color={colors.greenAccent[500]} >VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}  
          
           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
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
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Product 
            </Typography>
            <Item
              title="Add Product"
              to="/products/add"
              icon={<AddShoppingCartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
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