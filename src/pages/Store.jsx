import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Stack,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

import MoadlEdit from "./MoadlEdit";
import ModalAdd from "./ModalAdd";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditP = (_id, row) => {
    const index = products.findIndex((item) => item._id === _id);
    if (index !== -1) {
      products[index] = { ...products[index], ...row };
    }
  };

  const handleEdit = (product) => {
    console.log(product);
    setOpen(true);
    setProduct(product);
  };
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAdd(false);
  };

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/products";
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [products]);

  const handleDelete = (product) => {
    const productId = product._id;
    axios
      .delete(`http://localhost:5000/api/products/delete/${productId}`)
      .then((response) => {
        setProducts(products.filter((p) => p._id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item._id === product._id);

    if (!existingProduct) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <Stack direction="row">
        <Box flexGrow={1}>
          <Button variant="contained" onClick={() => handleOpenAdd()}>
            Add Product
          </Button>
        </Box>

        <TextField
          size="small"
          label="Search by Name"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Grid container spacing={5} mt={3} alignContent="center">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="250px"
                  image={product.imageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Stack direction="row">
                    <Box flexGrow={1}>
                      <Typography gutterBottom variant="h6">
                        {product.price}$
                      </Typography>
                    </Box>

                    <IconButton
                      aria-label="Add to Card"
                      color="error"
                      onClick={() => handleDelete(product)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Edit"
                      color="success"
                      onClick={() => handleEdit(product)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Add to Card"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <MoadlEdit
        open={open}
        handleClose={handleClose}
        product={product}
        handleEditP={handleEditP}
      />
      <ModalAdd openAdd={openAdd} handleClose={handleClose} />
    </div>
  );
};

export default ProductList;
