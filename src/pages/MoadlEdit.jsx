import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField, MenuItem, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

function ModalEdit({ open, handleClose, product, handleEditP }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  useEffect(() => {
    console.log(product);
    setName(product?.name);
    setImageUrl(product?.imageUrl);
    setPrice(product?.price);
    setCategory(product?.category);
  }, [product]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConfirm = () => {
    const updatedProduct = {
      name,
      imageUrl,
      price,
      category,
    };
    axios
      .put(
        `http://localhost:5000/api/products/update/${product._id}`,
        updatedProduct
      )
      .then((response) => {
        handleEditP(product._id, updatedProduct);
        handleClose();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{"Edit Product"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              label="Name"
              size="small"
              value={name}
              onChange={handleNameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="imageUrl"
              label="Image URL"
              size="small"
              value={imageUrl}
              onChange={handleImageUrlChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="price"
              label="Price"
              type="number"
              size="small"
              value={price}
              onChange={handlePriceChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value={"snacks"}>Snacks</MenuItem>
                <MenuItem value={"noodles"}>Noodles</MenuItem>
                <MenuItem value={"mochis"}>Mochis</MenuItem>
                <MenuItem value={"drinks"}>Drinks</MenuItem>
                <MenuItem value={"sauces"}>Sauces</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleConfirm} autoFocus variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalEdit;
