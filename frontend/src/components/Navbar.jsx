import React from "react";
import { Box, Grid, Typography, MenuItem, TextField, Button, IconButton } from "@mui/material";
import { FaUser, FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // React Icons
import Logo from "../assets/krishi.svg";

const Navbar = () => {
  const isLoggedIn = false; // Replace with your authentication logic

  return (
    <Box
      sx={{
        height: "10vh",
        backgroundColor: "#fff",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Quicksand",
      }}
    >
      {/* Logo */}
      <Grid item lg={2} md={3} sm={4} xs={6} sx={{border:"none"}}>
        <img src={Logo} alt="logo" style={{ height: "100%", width: "250px" , border:"none"}} />
      </Grid>

      {/* Location Dropdown, Search Bar, and Login/Profile Button */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ flexGrow: 1 }}
      >
        {/* Location Dropdown */}
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <TextField
            select
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: <FaMapMarkerAlt style={{ marginRight: "8px", color: "#4CAF50" }} />,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#4CAF50",
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50",
                },
              },
            }}
          >
            <MenuItem value="Location 1">Location 1</MenuItem>
            <MenuItem value="Location 2">Location 2</MenuItem>
            <MenuItem value="Location 3">Location 3</MenuItem>
          </TextField>
        </Grid>

        {/* Search Bar */}
        <Grid item lg={4} md={5} sm={6} xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: <FaSearch style={{ marginRight: "8px", color: "#4CAF50" }} />,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#4CAF50",
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50",
                },
              },
            }}
          />
        </Grid>

        {/* Login/Profile Button */}
        <Grid item lg={2} md={3} sm={4} xs={12}>
          {isLoggedIn ? (
            <IconButton
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              <FaUser />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              startIcon={<FaUser />}
              sx={{
                backgroundColor: "#4CAF50",
                textTransform: "none",
                color: "white",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              Login
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;