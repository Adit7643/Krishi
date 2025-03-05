import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Typography} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import img from "../assets/categoryimages/images.jpg";

const products = [
    { name: "Redish 500g", category: "Vegetables", image: img, originalPrice: 3.99, discountedPrice: 2, rating: 4.5, brand: "Mr. Food" },
    { name: "Carrot 1kg", category: "Vegetables", image: img, originalPrice: 4.99, discountedPrice: 3, rating: 4, brand: "Farm Fresh" },
    { name: "Potato 1kg", category: "Vegetables", image: img, originalPrice: 2.99, discountedPrice: 2.5, rating: 3.5, brand: "Organic Farms" },
    { name: "Tomato 500g", category: "Vegetables", image: img, originalPrice: 3.5, discountedPrice: 2.2, rating: 4.2, brand: "Fresh Pick" },
    { name: "Onion 1kg", category: "Vegetables", image: img, originalPrice: 2.5, discountedPrice: 2, rating: 3.8, brand: "Daily Veggies" },
    { name: "Capsicum 250g", category: "Vegetables", image: img, originalPrice: 2.99, discountedPrice: 2.4, rating: 4.1, brand: "Organic Farms" },
    { name: "Cucumber 500g", category: "Vegetables", image: img, originalPrice: 3.2, discountedPrice: 2.5, rating: 4.3, brand: "Farm Fresh" },
    { name: "Brinjal 500g", category: "Vegetables", image: img, originalPrice: 2.8, discountedPrice: 2, rating: 3.7, brand: "Local Harvest" },
    { name: "Pumpkin 1kg", category: "Vegetables", image: img, originalPrice: 4, discountedPrice: 3.2, rating: 4, brand: "Farm Fresh" },
    { name: "Spinach Bunch", category: "Vegetables", image: img, originalPrice: 1.99, discountedPrice: 1.5, rating: 4.6, brand: "Healthy Greens" },
    { name: "Apple 1kg", category: "Fruits", image: img, originalPrice: 5.99, discountedPrice: 4.5, rating: 4.8, brand: "Orchard Fresh" },
    { name: "Banana 1 dozen", category: "Fruits", image: img, originalPrice: 3.5, discountedPrice: 2.8, rating: 4.5, brand: "Tropical Farms" },
    { name: "Orange 1kg", category: "Fruits", image: img, originalPrice: 4.5, discountedPrice: 3.9, rating: 4.4, brand: "Citrus Fresh" },
    { name: "Grapes 500g", category: "Fruits", image: img, originalPrice: 3.99, discountedPrice: 3, rating: 4.2, brand: "Vineyard Select" },
    { name: "Pineapple 1pc", category: "Fruits", image: img, originalPrice: 6, discountedPrice: 5, rating: 4.3, brand: "Exotic Picks" },
    { name: "Mango 1kg", category: "Fruits", image: img, originalPrice: 7, discountedPrice: 6, rating: 4.9, brand: "Tropical Farms" },
    { name: "Pomegranate 500g", category: "Fruits", image: img, originalPrice: 5.5, discountedPrice: 4.5, rating: 4.7, brand: "Orchard Fresh" },
    { name: "Papaya 1pc", category: "Fruits", image: img, originalPrice: 4.99, discountedPrice: 4, rating: 4.6, brand: "Healthy Farms" },
    { name: "Coconut 1pc", category: "Fruits", image: img, originalPrice: 2.5, discountedPrice: 2, rating: 4.1, brand: "Coastal Picks" },
    { name: "Milk 1L", category: "Dairy", image: img, originalPrice: 3.99, discountedPrice: 3.2, rating: 4.8, brand: "Daily Dairy" },
    { name: "Cheese 200g", category: "Dairy", image: img, originalPrice: 4.99, discountedPrice: 4, rating: 4.5, brand: "Cheese Delight" },
    { name: "Butter 500g", category: "Dairy", image: img, originalPrice: 5.99, discountedPrice: 5, rating: 4.6, brand: "Creamy Farms" },
    { name: "Yogurt 500g", category: "Dairy", image: img, originalPrice: 3.5, discountedPrice: 3, rating: 4.3, brand: "Fresh Dairy" },
    { name: "Paneer 200g", category: "Dairy", image: img, originalPrice: 4.5, discountedPrice: 3.8, rating: 4.7, brand: "Homemade Taste" },
    { name: "Eggs 12pcs", category: "Dairy", image: img, originalPrice: 5, discountedPrice: 4.5, rating: 4.8, brand: "Farm Fresh" },
    { name: "Chicken 1kg", category: "Meat", image: img, originalPrice: 7.99, discountedPrice: 6.5, rating: 4.7, brand: "Organic Meat" },
    { name: "Mutton 1kg", category: "Meat", image: img, originalPrice: 12, discountedPrice: 10.5, rating: 4.9, brand: "Premium Butchery" },
    { name: "Fish 500g", category: "Meat", image: img, originalPrice: 9, discountedPrice: 7.5, rating: 4.6, brand: "Seafood Delight" },
    { name: "Rice 5kg", category: "Grains", image: img, originalPrice: 15, discountedPrice: 12, rating: 4.5, brand: "Organic Grains" },
    { name: "Wheat Flour 5kg", category: "Grains", image: img, originalPrice: 14, discountedPrice: 11, rating: 4.3, brand: "Healthy Choice" },
    { name: "Dal 1kg", category: "Grains", image: img, originalPrice: 6, discountedPrice: 5, rating: 4.2, brand: "Daily Needs" },
    { name: "Sugar 1kg", category: "Essentials", image: img, originalPrice: 3.5, discountedPrice: 3, rating: 4.1, brand: "Sweet Choice" },
    { name: "Salt 1kg", category: "Essentials", image: img, originalPrice: 2.5, discountedPrice: 2, rating: 4.4, brand: "Healthy Needs" },
    { name: "Cooking Oil 1L", category: "Essentials", image: img, originalPrice: 10, discountedPrice: 8.5, rating: 4.7, brand: "Pure Oil" },
    { name: "Tea 500g", category: "Beverages", image: img, originalPrice: 5, discountedPrice: 4.2, rating: 4.6, brand: "Brew Time" },
    { name: "Coffee 200g", category: "Beverages", image: img, originalPrice: 6, discountedPrice: 5, rating: 4.5, brand: "Strong Aroma" },
    { name: "Soft Drink 1L", category: "Beverages", image: img, originalPrice: 3, discountedPrice: 2.5, rating: 4, brand: "Refreshing Cola" },
  ];
  

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      bgcolor: "white",
      color: "black",
      boxShadow: 2,
      "&:hover": { bgcolor: "gray.300" },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      bgcolor: "white",
      color: "black",
      boxShadow: 2,
      "&:hover": { bgcolor: "gray.300" },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const ProductCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <Box sx={{ width: "100%", margin: "auto", padding: "20px 0", position: "relative" }}>
        <Typography 
      variant="h6"
      sx={{ 
        color: "#333333",
        fontSize: "2rem",
        textAlign: "left",
        marginLeft: "10px",
      }}
      >
        Featured Products
      </Typography>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Box key={index} sx={{ padding: "10px" }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
