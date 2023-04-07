import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { token } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import ProductFinder from "../../api/ProductFinder";
import { useState } from "react";
import { TextField } from "@mui/material"

const ProductIndex = () => {
  // const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [FilteredProductData, setFilteredProductData] = useState([]);
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const {productData, setProductData} = useContext(AppContext);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await ProductFinder.get("/");
        console.log(response);
        setProductData(response.data.data);
      }
      catch (error) {
        console.log(error.message);
     }
    }
    fetchData();
  },[]);

  const columns = [
    { field: "product_id", headerName: "Product ID", flex: 0.5 },
    { field: "product_code", headerName: "Product Code", flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field:"brand",
      headerName:"Brand",
      flex:1,
    },

    {
      field: "category",
      headerName: "Category",
      flex:0.5,
    },
    {
        field: "color",
        headerName: "Color",
        flex:0.5,
    },
    {
        field: "size",
        headerName: "Size",
        flex:0.5,
    },
    {
        field: "model_number",
        headerName: "Model Number",
        flex:0.5,
    },
    {
        field: "quantity",
        headerName: "Quantity",
        flex:0.5,
    },
    {
        field: "purchasing_price",
        headerName: "Purchsing Price",
        flex:0.5,
    },
    {
        field: "selling_price",
        headerName: "Selling Price",
        flex:0.5,
    },
    {
        field: "cgst",
        headerName: "CGST",
        flex:0.5,
    },
    {
        field: "sgst",
        headerName: "SGST",
        flex:0.5,
    },
    {
        field: "net_price",
        headerName: "Net Price",
        flex:0.5,
        cellClassName: "net_price-column--cell",
    },
    
  ];
  // Search hook
  useEffect(() => {
    const filteredData = productData.filter((products) =>
      products.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      products.product_code?.toLowerCase().includes(searchQuery) 
      
    );
    setFilteredProductData(filteredData);
  }, [searchQuery, productData]);


  return (
    <Box m="20px">
      <Header
        title="Customer Index"
        subtitle="List of Contacts for Future Reference"
      />
    {/* search field */}
      <TextField
      label="Search by product_code or name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} /><Box m="20px"></Box>

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
          "& .net_price-column--cell":{
            color: colors.redAccent[300],
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
          rows={FilteredProductData}
          columns={columns}
          getRowId={(productData) => productData.product_id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductIndex;