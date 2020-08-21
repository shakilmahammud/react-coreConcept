import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const products=[
    {name:"Photoshop", price:"$30"},
    {name:"Illustrator", price:"$50"},
    {name:"After Effects", price:"$75"},
    {name:"XD", price:"$70"},
    {name:"Adobe Premium pro", price:"$80"},
    {name:"Adobe Ultra", price:"$200"}
  ]
  const footer={
    color:'#000',
    fontSize:'30px',
    marginTop:'30px',
    padding:'30px',
  }
const a={
  textDecoration:'none',
  color:'green'
}
const header={
  backgroundColor:'#000',
  color:'#fff',
  padding:'20px',
  border:'10px dotted #fff',
}
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={header}> React Dynamic Card</h1>
        <div>
        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        </div>
        <div>
        <Product products={products[3]}></Product>
        <Product products={products[4]}></Product>
        <Product products={products[5]}></Product>
        </div>
        <footer style={footer}> 2020 &copy;  All Received by <a href="#" style={a}>SHAKIL</a> </footer>
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
    boxShadow:' 0 0 15px',
    marginTop:'30px',
    
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
