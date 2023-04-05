import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [customers, setCustomers] = useState([]);
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const columns = [
    { 
      field: "customer_id",
      headerName: "ID", 
      flex: 0.5 
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "designation",
      headerName: "Designation",
      flex: 1,
    },
    {
      field: "dob",
      headerName: "Date of Birth",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "entry_date",
      headerName: "Entry Date",
      flex: 1,
    },
  ];

  async function fetchCustomers() {
    const res = await fetch(`/customers/`);
    const { data } = await res.json();

    if(res.status === 200) {
      setCustomers(data);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, [])

  return (
    <Box m="20px">
      <Header
        title="Customer Index"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={customers}
          columns={columns}
          getRowId={(row) => row.customer_id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;