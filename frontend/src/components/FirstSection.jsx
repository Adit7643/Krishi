import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { FaThLarge, FaCompass, FaFire } from "react-icons/fa"; // Importing icons

const FirstSection = () => {
    return (
        <Box
            sx={{
                height: "10vh",
                backgroundColor: "#fff",
                paddingX: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #4CAF50",
                fontFamily: "Quicksand", // Change the font family
            }}
        >
            <Grid container spacing={2} alignItems="center">
                {/* Browse All Categories Button */}
                <Grid item lg={2.5} md={3} sm={4} xs={12}>
                    <Button
                        variant="contained"
                        startIcon={<FaThLarge />} // Adding icon
                        sx={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#45a049" },
                            width: "100%",
                        }}
                    >
                        Browse all Categories
                    </Button>
                </Grid>

                {/* Explore Text */}
                <Grid item lg={1} md={5} sm={6} xs={12}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#795548", textAlign: "center", display: "flex", alignItems: "center", gap: 1 }}
                    >
                        <FaCompass /> Explore
                    </Typography>
                </Grid>

                {/* Hotdeals Text */}
                <Grid item lg={2} md={5} sm={6} xs={12}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#795548", textAlign: "center", display: "flex", alignItems: "center", gap: 1 }}
                    >
                        <FaFire /> Hot Deals
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FirstSection;
