import { Box,Typography,TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { token } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const ProductIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [FilteredProductData, setFilteredProductData] = useState([]);
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await fetch("/products/", {
        method: "GET",
        credentials: "include"
      })

      const data = await res.json();
      
      if(res.status === 200) {
        setProductData(data.data)
      }
    }

    fetchData();
  },[]);let navigate = useNavigate();

  const handleEdit = (id)=>{
    console.log(id);
    navigate(`/products/${id}/edit`)
  }
  const handleDelete = async(id)=>{
      const res = await fetch(`/products/${id}/delete`, {
        method: "DELETE",
        credentials: "include"
      })

      const data = await res.json();
      console.log(res.status);

      if(res.status === 200) {
        setProductData(productData.filter((product) =>{   
        return product.product_id !== id      // if the function is true then the element will be included - filter
      }))
    }
  };
  

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
        field: "purchase_price",
        headerName: "Purchsing Price",
        flex:0.5,
        renderCell: (params) =>          
          (
          <Typography color={colors.greenAccent[500]}>
            Rs {params.row.purchase_price} /-
          </Typography>)
    },
    {
        field: "selling_price",
        headerName: "Selling Price",
        flex:0.5,
        renderCell: (params) =>          
          (
          <Typography color={colors.blueAccent[500]}>
            Rs {params.row.selling_price} /-
          </Typography>)
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
        renderCell: (params) =>          
          (
          <Typography color={colors.redAccent[500]}>
            Rs {params.row.net_price} /-
          </Typography>)
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      flex: 0.5,
      renderCell: (params) => (
        <Box display="flex" justifyContent="space-between">
          <GridActionsCellItem
            icon={<ModeEditOutlineIcon />}
            onClick={() => handleEdit(params.id)}
            label="Edit" />
          <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => handleDelete(params.id)}
          label="Delete" />
          
        </Box>
      ),
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

      <Box display="flex" justifyContent="space-between"> 
          <Header
            title="PRODUCT INDEX"
            subtitle="List of products for Inventory Reference"
          />

        {/* search field */}
          <TextField 
          variant = "outlined" 
          sx = {{ width : 1/4 }}
          label="Search by product code or name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} /> 
      </Box>


      <Box
        m="10px 0 0 0"
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