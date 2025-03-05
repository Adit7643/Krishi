import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import img from "../assets/categoryimages/images.jpg"; // Ensure this path is correct

const categories = [
  { name: "Fruits", image: img },
  { name: "Vegetables", image: img },
  { name: "Dairy", image: img },
  { name: "Wheat", image: img },
  { name: "Rice", image: img },
  { name: "Maize", image: img },
];

const Arrow = styled("div")({
  position: "absolute",
  top: "50%",
  zIndex: 10,
  cursor: "pointer",
  padding: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  transform: "translateY(-50%)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

const PrevArrow = styled(Arrow)({
  left: "10px",
});

const NextArrow = styled(Arrow)({
  right: "10px",
});

const CategoryBox = styled(Box)({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.3s ease-in-out",
  margin: "10px", // Adding margin for spacing
  padding: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2))",
  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
});

const CategoryImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  filter: "brightness(0.7)",
  transition: "filter 0.3s ease-in-out",
  '&:hover': {
    filter: "brightness(1)",
  }
});

const CategoryName = styled(Typography)({
  color: "black",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "10px",
  textAlign: "center",
  padding: "5px 10px",
});

const CarouselSection = styled(Box)({
  width: "100%",
  margin: "auto",
  padding: "20px 0",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  borderRadius: "10px",
});

const CategoryCara = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: false,
    prevArrow: <PrevArrow>{'<'}</PrevArrow>, 
    nextArrow: <NextArrow>{'>'}</NextArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselSection>
      <Typography 
      variant="h6"
      sx={{ 
        color: "#333333",
        fontSize: "2rem",
        textAlign: "left",
        marginLeft: "10px",
      }}
      >
        Explore Categories
      </Typography>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} style={{ margin: "0 10px" }}> 
            <CategoryBox>
              <CategoryImage src={category.image} alt={category.name} />
              <CategoryName>{category.name}</CategoryName>
            </CategoryBox>
          </div>
        ))}
      </Slider>
    </CarouselSection>
  );
};

export default CategoryCara;
