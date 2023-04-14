import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerIndex = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomerData, setFilteredCustomerData] = useState([]);
  const colors = token(theme.palette.mode);
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('/customers/', {
        "credentials": "include"
      })
      const { data } = await res.json();
      
      if(res.status === 200) {
        setCustomerData(data)
      }
    }
    
    fetchData();
  },[]);

  const columns = [
    { field: "customer_id", headerName: "Customer ID", flex: 0.5 },
    {
      field: "designation",
      headerName: "Designation",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
    {
      field: "dob",
      headerName: "Date of Birth",
      headerAlign: "left",
      align: "left",
      valueGetter: (params) => new Date(params.value) 
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
      valueGetter: (params) => new Date(params.value) 
    },
  ];
  //filter and search
  useEffect(() => {
    const filteredData = customerData.filter((customer) =>
      customer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone?.includes(searchQuery) ||
      customer.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCustomerData(filteredData);
  }, [searchQuery, customerData]);
  return (
    <Box m="10px"
    p = "10px" >
      <Header
        title="Customer Index"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="10px 0 0 0"
        height="73vh"
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
          onRowClick={(row) => navigate(`/customers/${row.id}`)}
          rows={customerData}
          columns={columns}
          getRowId={(customerData) => customerData.customer_id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};


export default CustomerIndex;