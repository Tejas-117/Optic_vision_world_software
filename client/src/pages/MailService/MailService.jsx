import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import { token } from "../../theme";
import { Divider, useTheme } from "@mui/material";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

    export default function MailService() {
    const theme = useTheme();
    const colors = token(theme.palette.mode);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: colors.primary[400],
        boxShadow: 24,
        p: 4,
    };

    return (

        <Box m="20px" p="10px" >
            <Header title="Email Services" subtitle="View & edit mails sent to customers" />
            <Box display="grid"
            gap = "30px"
            gridTemplateColumns = "1fr 1fr 1fr">
                <Card 
                sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}>
                    <CardContent sx={{ p : 3, m : 0 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" 
                        sx = {{ px : 1 }}>
                            <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Mails for dues</Typography>
                            <Button color="secondary" variant ="outlined" onClick ={handleOpen} > Edit Mail </Button>
                        </Box>

                        <Divider display="grid" sx ={{ my : 2 ,  borderBottomWidth: 2 }}/>

                        <Box display="flex">
                            <Typography paragraph={ true }>
                                Greetings from Optic Vision World [<em> Customer Name </em>] !
                                <br/>
                                <br/>

                                &emsp; &emsp; We are glad to inform you that your order, [<em> Product Name </em>] is ready to be collected/delivered. 
                                Please collect your product via visiting the store or delivery by completing the due payment.

                                <br/>
                                <br/>

                                &emsp; &emsp; Please ignore if you are already paid the full amount.
                                <br/>
                                Thank you.


                            </Typography>
                        </Box>

                        
                    </CardContent>

                </Card>

                <Card 
                sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}>
                    <CardContent sx={{ p : 3, m : 0 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" 
                        sx = {{ px : 1 }}>
                            <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Mails for delivery</Typography>
                            <Button color="secondary" variant ="outlined" onClick ={handleOpen}> Edit Mail </Button>
                        </Box>

                        <Divider display="grid" sx ={{ my : 2 ,  borderBottomWidth: 2 }}/>

                        <Box display="flex">
                            <Typography paragraph={ true }>
                                Greetings from Optic Vision World [<em> Customer Name </em>] !
                                <br/>
                                <br/>

                                &emsp; &emsp; We are glad to inform you that your order, [<em> Product Name </em>] is ready to be delivered and will be delivered on [ <em> delivery date </em>] at the address [ <em> Customer Address </em> ]
                                Please collect your delivery and contact us if you have any queries.

                                <br/>
                                <br/>

                                &emsp; &emsp; Please ignore if you are already paid the full amount.
                                <br/>
                                Thank you.


                            </Typography>
                        </Box>

                        
                    </CardContent>

                </Card>

                <Card 
                sx = {{backgroundColor : colors.primary[400], boxShadow: 3}}>
                    <CardContent sx={{ p : 3, m : 0 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" 
                        sx = {{ px : 1 }}>
                            <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Mails for check-up</Typography>
                            <Button color="secondary" variant ="outlined" onClick ={handleOpen}> Edit Mail </Button>
                        </Box>

                        <Divider display="grid" sx ={{ my : 2 ,  borderBottomWidth: 2 }}/>

                        <Box display="flex">
                            <Typography paragraph={ true }>
                                Greetings from Optic Vision World [<em> Customer Name </em>] !
                                <br/>
                                <br/>

                                &emsp; &emsp; We wanted to remind you that the day for your eye check up is on [<em> Check-up date </em>]. Please contact us 
                                and visit us on the given date while carrying the details of your previous check-up details with you.

                                <br/>
                                <br/>

                                Thank you.


                            </Typography>
                        </Box>

                        
                    </CardContent>

                </Card>

            </Box>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <Typography variant="h4" color={colors.blueAccent[500]} fontStyle="" fontWeight="bold">Edit Mail</Typography>
            </Typography>
            <TextField
                display="flex"
                id="outlined-multiline-static"
                multiline
                rows={10}
                defaultValue= ""
                variant="filled"
                sx = {{ my : 2 , width : 1 }}
            />

                <Box display='flex' justifyContent="flex-end">
                    <Button sx ={{ fontWeight: 'medium' }} type="submit" color="secondary" variant="contained">
                        <Typography fontStyle="" fontWeight="bold">Apply changes</Typography>
                    </Button>
                </Box>

            </Box>
        </Modal>
        </Box>

    );
}