import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const products=[
    {name:"Photoshop", price:"$30"},
    {name:"Illustrator", price:"$50"},
    {name:"After Effects", price:"$75"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        </div>
      </header>
    </div>
  );
};
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    color:'#2C2C2C',
    backgroundColor:'#fff',
    height:'200px',
    width:'300px',
    float:'left',
    marginRight:'30px',
    padding:'20px',
    boxShadow:' 0 0 15px'
  }
  const button={
    border:'2ps solid #green',
    borderRadius:'5px',
    padding:'10px 15px',
    color:'#fff',
    backgroundColor:'#000',
    outline:'none',
    cursor:'pointer'
  }
  return(
    <div style={productStyle} >
      
      <h3>{props.products.name}</h3>
  <h5>{props.products.price}</h5>
  <button style={button}>Buy Now</button>
     
    </div>
  )
}

export default App;
