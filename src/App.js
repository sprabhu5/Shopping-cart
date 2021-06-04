import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const[cart, setCart]= useState(["shirt"])
  const[items, setItems]= useState(["Shoes","Pants"]);
  
  return (
    <div>
   <h1>inventory</h1>
  
   {items.map((item, i) => {return <div><button onClick = {() => setCart(arr => [...arr,item], setItems(curritems => curritems.filter( (it,j)=> j!==i )))}>Add to the cart</button>{item}</div>})}
   <h1>Cart</h1>
   {cart.map((item, i) => {return <div><button onClick = {() => setItems(arr => [...arr,item], setCart(curritems => curritems.filter( (it,j)=> j!==i )))}>Remove</button>{item}</div>})}
   </div>

  );
}



export default App;