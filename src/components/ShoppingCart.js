import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// export default function ShoppingCart({ cart }) {
//     console.log("inside shopping cart");
//     console.log(cart);
//     return (
//         <div className="shoppingCart">
//             {cart.map((product, index) => (
//                 <Card className="shoppingCartItem" key={product.productId}>
//                     <CardMedia
//                         component="img"
//                         height="50"
//                         width="50"
//                         image={product.productData.image}
//                         alt={product.name}
//                     />
//                     <CardContent>
//                         <Typography variant="h7" component="div">
//                             {product.productData.name}
//                         </Typography>
//                         <div className="itemDetails">
//                             <div className="quantity">
//                                 <Typography variant="body1" color="text.primary">
//                                     Quantity: {product.quantity}
//                                 </Typography>
//                             </div>
//                             <div className="totalPrice">
//                                 <Typography variant="body1" color="text.primary">
//                                     Total Price: ${(product.productData.price * product.quantity).toFixed(2)}
//                                 </Typography>
//                             </div>

//                         </div>

//                     </CardContent>
//                 </Card>))}
//         </div>
//     )
// }


export default function ShoppingCart({ cart }) {

    const totalPrice = cart && Array.isArray(cart) ?cart.reduce((accumulator, product) => {
        return accumulator + (product.productData.price * product.quantity);
      }, 0).toFixed(2) : 0;

    return (<TableContainer component={Paper}>
        
        {cart && cart.length!=0 && <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cart.map((product) => (
                    <TableRow key={product.productId}>
                        <TableCell>{product.productData.name}</TableCell>
                        <TableCell align="center">{product.quantity}</TableCell>
                        <TableCell align="center">${(product.productData.price * product.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">Total Price</TableCell>
                    <TableCell align="center">${totalPrice}</TableCell>
                </TableRow>
            </TableBody>
        </Table>}
        {(!cart || cart.length === 0) && <h3>Your shopping will be displayed here</h3>}
    </TableContainer>
    )
}