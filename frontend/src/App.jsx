import React from 'react';
import Navbar from './components/Navbar';
import { Box, Typography } from "@mui/material";
import FirstSection from './components/FirstSection';
import { SecondSection } from './components/SecondSection';
import CategoryCarousel from './components/CategoryCara';
import ProductCarousel from './components/ProductCarousel';
import { OfferBanner } from './components/OfferBanner';
const App = () => {
  return (
    <>
      <Box sx={{  display: "flex", flexDirection: "column", margin: "auto" }}>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <CategoryCarousel />
        <ProductCarousel />
        <OfferBanner />
      </Box>
    </>
  )
}
export default App;
