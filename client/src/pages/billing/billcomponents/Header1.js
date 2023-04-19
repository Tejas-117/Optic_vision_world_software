import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import logoLeft from './assets2/LOGO.svg'
import logoRight from './assets2/LOGO.svg'


export default function Header({handelPrint,Print}) {
    return(
        <>
         {/* <header className="flex flex-col items-center justify-center mb-5 xl:flex-row ">
       
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4-xl mb-2 ">Optic Vision World</h1>
        </div> */}
        <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
       
          <img src={logoLeft} alt="Logo Left" width="500" height="500" />
          
      </Toolbar>
     
    </AppBar>
    <Divider sx={{ mt: 3, backgroundColor: 'white' }} />
        <div>
          <ul className="flex  items-center justify-evenly space-x-4 mt-4">
          <li> <button onClick={Print}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">PRINT </button></li>
         
          </ul>
        </div>
      {/* </header> */}
        </>
    )
}