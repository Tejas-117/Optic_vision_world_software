import React from 'react';
import { Box, Typography } from '@mui/material';


export default function ClientDetails({name,address,accnumber}) {
    
    return(
        <>
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Client name:{name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Account number: {accnumber}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Address: {address}
      </Typography>
    </Box>
        </>
    )
}