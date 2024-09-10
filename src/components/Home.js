import '../App.css';
import ProductList from '../components/ProductList';
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import products from '../data/product';

function Home() {
  const [cart, setCart] = useState([])
  const [quant , setQuantity] = useState();
  useEffect(() => {
    console.log(cart);
  }, [cart])

  function handleClick(val) {
    console.log("inside handle CLick");
    let prod = products[(val.id) - 1];
    if (val.name === 'add') {
      console.log("inside add", val.id);
      let isPresent = false;
      isPresent = cart.some((ele) => ele.productId === val.id);
      console.log(isPresent);
      if (isPresent) {
        console.log('inside first if');
        setCart(prevCart => {
          return prevCart.map((item) => {
            if (item.productId === val.id) {
              setQuantity(item.quantity + 1)
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          })
        })

      } else {
        const updatedCart = [...cart];
        setQuantity(1)
        updatedCart.push({
          productId: val.id,
          productData: prod,
          quantity: 1
        })
        setCart(updatedCart)
        console.log("product is not present and we are adding new product ");


      }
    } else {
      
      setCart(prevCart =>{
        const updatedCart = prevCart.map((item)=>{
          if(item.productId === val.id){
            if(item.quantity !== 1){
              setQuantity(item.quantity - 1)
              return {...item , quantity : item.quantity - 1}
            }else{
              return null
            }
          }
          return item;
        })
         return updatedCart.filter((item)=> item!== null);
      })
    }

  }
  return (
    <div className="App">
      <Header />
      <Grid className='app'>
        <Grid item key="left" id="leftPart">
          <ProductList handleClick={handleClick} cart={cart}/> 
        </Grid>
        <Grid item key="right" id="rightPart">
          <ShoppingCart cart={cart} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
