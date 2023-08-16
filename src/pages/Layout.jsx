import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#843537" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asian Paradise
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/Contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/Store">
            Store
          </Button>
          <Button color="inherit" component={Link} to="/Cart">
            Cart
          </Button>
        </Toolbar>
      </AppBar>

      <div sx={{ marginTop: 2, maxWidth: false }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
