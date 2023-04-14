import React from 'react';
import { Typography, Box, Divider } from '@mui/material';


export default function Footer({name,address,email,phno,accnumber}) {
    return(
       <>
       <Divider sx={{ mt: 3, backgroundColor: 'white' }} />
      <Box sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
        Customer Signature
      </Typography>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        Thank you, visit again
      </Typography>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
        Optic Vision World
      </Typography>
      <Divider sx={{ mt: 3, backgroundColor: 'white' }} />
    </Box>
       </>
    )
}
