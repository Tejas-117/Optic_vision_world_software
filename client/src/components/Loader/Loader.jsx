import { Box, Typography, useTheme } from '@mui/material';
import { token } from '../../theme';
import './Loader.css';

function Loader(props) {

  const theme = useTheme();
  const colors = token(theme.palette.mode);


  return (
    <div>
      <Box
        flexDirection="column"
        display="flex"
        alignItems="center"
        height="1"
        justifyContent="center"
        sx={{ backgroundColor : "none"}} 
      >
        <Box className='loader'></Box>
        <Typography m={2} variant="h4" color={colors.grey[100]} fontStyle="" fontWeight="bold"> {props.prompt} </Typography>

      </Box>
    </div>
  )
}

export default Loader;