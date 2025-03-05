import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Bg from "../assets/hero-bg.png";
import LeftImg from "../assets/hreo-img.png";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        background: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        maxWidth: "1440px",
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
    },
    text: {
        color: "#333333",
        fontSize: "3rem",
        textAlign: "left",
        marginBottom: "10px",
    },
    text2: {
        color: "#795548",
        fontSize: "1.5rem",
        textAlign: "left",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
    },
    input: {
        padding: "10px",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "1px solid #4CAF50",
        width: "100%",
        maxWidth: "300px",
        outline: "none",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        borderRadius: "5px",
        height: "40px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "#fff",
        textTransform: "none",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#45a049",
        }
    },
    imageContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    image: {
        maxWidth: "100%",
        height: "auto",
    },
};

export const SecondSection = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.content}>
                <Typography sx={styles.text}>
                    Don't miss our daily amazing deals
                </Typography>
                <Typography sx={styles.text2}>
                    For latest notifications, Subscribe to our Newsletter
                </Typography>
                <Box component="form" sx={styles.form}>
                    <input type="email" placeholder="Enter your email" style={styles.input} />
                    <Button type="submit" sx={styles.button}>
                        Subscribe
                    </Button>
                </Box>
            </Box>
            <Box sx={styles.imageContainer}>
                <img src={LeftImg} alt="Promotional Offer" style={styles.image} />
            </Box>
        </Box>
    );
};