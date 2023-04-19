import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { token } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";

const Invoices = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [invoice, setInvoice] = useState([]);

  const columns = [
    { field: "bill_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "balance",
      headerName: "Balance",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          Rs.{params.row.balance}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => (
        formatDate(params.row.generated_date)
      )
    },
  ];

  async function fetchInvoiceBalances() {
    const res = await fetch('bills/balance');
    const data = await res.json();

    if(res.status === 200) {
      setInvoice(data.bills);
    }
  }

  useEffect(() => {
    fetchInvoiceBalances();
  }, [])

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="20px 0 0 0"
        height="70vh"
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
        }}
      >
        <DataGrid 
          checkboxSelection
          rows={invoice}
          columns={columns} 
          getRowId={(row) => row.bill_id}
        />
      </Box>
    </Box>
  );
};

export default Invoices;