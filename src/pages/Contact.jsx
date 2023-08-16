import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Container sx={{ marginTop: 2, maxWidth: "100%" }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6">
          Founded in 2005, XYZ Enterprises has been dedicated to providing
          high-quality products to our customers. Our journey began with a
          passion for innovation.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          If you have any questions, feel free to get in touch with us!
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} alignItems="center">
            <Typography variant="body1">
              <PhoneIcon sx={{ marginRight: 1 }} color="primary" />
              +1 (123) 456-7890
            </Typography>
            <Typography variant="body1">
              <FacebookIcon sx={{ marginRight: 1 }} color="primary" />
              <a
                href="https://www.facebook.com/profile.php?id=61550103963683"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/profile.php?id=61550103963683
              </a>
            </Typography>
            <Typography variant="body1">
              <LocationOnIcon sx={{ marginRight: 1 }} color="primary" />
              V872+X5 La Marsa, Tunis, Tunisia
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
