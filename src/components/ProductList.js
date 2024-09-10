import React from "react";
import { Button, Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import products from "../data/product";

const ProductList = ({handleClick , cart})=>{
    
    return(
        <Grid className="productList">
            {
                products.map((item)=>(
                    <Grid item xs={6}  key={item.id}>
                        <ProductItem product={item}/>
                        <Button onClick={() => (handleClick({ id: item.id, name: 'add' }))} >Add</Button>
                        <Button onClick={() => (handleClick({ id: item.id, name: 'remove' }))}>Remove</Button>
                    </Grid>
                ))
                
            }
        </Grid>
    )
}

export default ProductList;