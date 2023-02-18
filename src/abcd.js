import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { grey } from '@mui/material/colors';
// import { NumberFormatCustom, numberFormatText } from './functions';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const AddPrescription = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    address: '',
    date: new Date(),
    frame: '',
    color: '',
    number: '',
    notes: '',
    consultationCost: 0,
    frameCost: 0,
    lensesCost: 0,
    serviceCost: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (form) {
      setTotal(
        form.frameCost +
          form.lensesCost +
          form.serviceCost +
          form.consultationCost,
      );
    }
  }, [form]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ p: 2, background: grey[200] }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Customer Details
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <Stack spacing={2} direction="row">
                <TextField
                  name="name"
                  label="Customer Name"
                  type="text"
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter Customer Name"
                  variant="filled"
                />
                <TextField
                  name="age"
                  fullWidth
                  label="Enter Age of Customer"
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">yrs old</InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  placeholder="Enter Age"
                  variant="filled"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField
                  name="address"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Address of Customer"
                  type="text"
                  value={form.address}
                  placeholder="Enter Address"
                  variant="filled"
                />
                <DateTimePicker
                  fullWidth
                  label="Date"
                  value={form.date}
                  onChange={(newValue) => setForm({ ...form, date: newValue })}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Presription
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <TableContainer component={Paper}>
                <Table sx={{ width: 1 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Eye</StyledTableCell>
                      <StyledTableCell>Vision Acuity</StyledTableCell>
                      <StyledTableCell>Sphere</StyledTableCell>
                      <StyledTableCell>Cylinder</StyledTableCell>
                      <StyledTableCell>Axis</StyledTableCell>
                      <StyledTableCell>Addition</StyledTableCell>
                      <StyledTableCell>Tint</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Right Eye</TableCell>
                      <TableCell>
                        <TextField
                          name="reVISION"
                          type="text"
                          placeholder="Enter Left Eye Vision Acuity"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="reSPH"
                          type="text"
                          placeholder="Enter Right Eye Sphere"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="reCYL"
                          type="text"
                          placeholder="Enter Right Eye Cylinder"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="reAxis"
                          type="number"
                          placeholder="Enter Right Eye Axis"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="reAddition"
                          type="number"
                          placeholder="Enter Right Eye Addition"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="reTint"
                          type="text"
                          placeholder="Enter Right Eye Tint"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Left Eye</TableCell>
                      <TableCell>
                        <TextField
                          name="leVISION"
                          type="text"
                          placeholder="Enter Left Eye Vision Acuity"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="leSPH"
                          type="text"
                          placeholder="Enter Left Eye Sphere"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="leCYL"
                          type="text"
                          placeholder="Enter Left Eye Cylinder"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="leAxis"
                          type="number"
                          placeholder="Enter Left Eye Axis"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="leAddition"
                          type="number"
                          placeholder="Enter Left Eye Addition"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="leTint"
                          type="text"
                          placeholder="Enter Left Eye Tint"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <TextField
                name="notes"
                onChange={handleChange}
                fullWidth
                label="Enter Notes about the Pescription"
                type="text"
                multiline
                rows={4}
                value={form.notes}
                placeholder="Enter Notes"
                variant="filled"
              />

              <Stack direction="row" spacing={2}>
                <TextField
                  name="frame"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Frame"
                  type="text"
                  value={form.frame}
                  placeholder="Enter Frame"
                  variant="filled"
                />
                <TextField
                  name="color"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Color"
                  type="text"
                  value={form.color}
                  placeholder="Enter color"
                  variant="filled"
                />
                <TextField
                  name="number"
                  onChange={handleChange}
                  fullWidth
                  label="Enter Serial Number # of Frame"
                  type="number"
                  value={form.number}
                  placeholder="Enter Serial Number # of Frame"
                  variant="filled"
                />
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography sx={{ my: 2 }} variant="body1" color="textSecondary">
              Cost in KES
            </Typography>
            <Stack sx={{ width: 1 }} spacing={2} direction="column">
              <TextField
                name="consultationCost"
                onChange={handleChange}
                fullWidth
                label="Enter Consultation Cost"
                value={form.consultationCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  // inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="frameCost"
                onChange={handleChange}
                fullWidth
                label="Enter Frame Cost"
                value={form.frameCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  // inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="lenseCost"
                onChange={handleChange}
                fullWidth
                label="Enter Lense Cost"
                value={form.lenseCost}
                placeholder="Enter Cost in KES"
                variant="filled"
                InputProps={{
                  // inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <TextField
                name="serviceCost"
                onChange={handleChange}
                fullWidth
                label="Enter Service Cost"
                value={form.serviceCost}
                placeholder="Enter Service Cost in KES"
                variant="filled"
                InputProps={{
                  // inputComponent: NumberFormatCustom,
                  startAdornment: (
                    <InputAdornment position="start">KES</InputAdornment>
                  ),
                }}
              />
              <Alert sx={{ width: 1 }} severity="info">
                <AlertTitle>Info</AlertTitle>
                <p>
                  {' '}
                  Total Cost is{' '}
                  {/* <strong>{numberFormatText(total, 'KES')}</strong> */}
                </p>
              </Alert>
            </Stack>
          </Paper>

          <Button
            type="submit"
            size="large"
            endIcon={<AddBoxIcon />}
            variant="contained"
          >
            ADD
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddPrescription;