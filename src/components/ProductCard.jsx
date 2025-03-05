import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent, Rating } from "@mui/material";
import { AddShoppingCart, Remove, Add } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => Math.max(0, prev - 1));

  return (
    <Card sx={{ width: 250, borderRadius: 2, boxShadow: 3, p: 1, textAlign: "center" }}>
      <CardMedia component="img" height="150" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        
        {/* Rating Component */}
        <Box display="flex" alignItems="center" justifyContent="center" my={1}>
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography variant="body2" ml={1}>({product.rating})</Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          By {product.brand}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" gap={1} my={1}>
          <Typography variant="h6" color="green">${product.discountedPrice}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
            ${product.originalPrice}
          </Typography>
        </Box>

        {quantity === 0 ? (
          <Button
            variant="contained"
            color="success"
            fullWidth
            startIcon={<AddShoppingCart />}
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
            <IconButton color="error" onClick={handleRemove}>
              <Remove />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton color="primary" onClick={handleAdd}>
              <Add />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
