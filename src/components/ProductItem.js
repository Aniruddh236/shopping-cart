
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductItem = ({ product }) => {
  
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      
    </Card>
  );
};

export default ProductItem;
