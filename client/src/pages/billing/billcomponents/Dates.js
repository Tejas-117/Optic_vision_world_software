import { Box, Typography } from '@mui/material';

export default function Dates({invoicenumber,invoicedate}) {
    return(
        <>
         
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
     
      <Typography variant="h6" sx={{ mb: 1 }}>
        Invoice Date :{invoicedate}
      </Typography>
      </Box>
   
        </>
    )
}