import { Component } from 'react';
import data from "./data/productData";
import "./App.css";



class App extends Component{
  constructor(){
    super();
    this.state ={
      // productList: data.productData,
      
      

    }
}
  render(){
    //  let productElArr = this.state.productList.map(()=>{
    //  })
    

    return (
    <div className="app">
      <h1>My Garage Sale</h1>
      
      <div>
     <section className="cart">
        <h3>Cart</h3>
        <ul>
          <li>Subtotal:</li>
          <li>Tax:</li>
          <li>Total:</li>
        </ul>
     </section>
     </div>

        <div className="products">
          
            <div>
              Baseball Glove
           <button type="submit">Add to Cart</button>
            </div>

            <div>
              Vintage VCR
            <button type="submit">Add to Cart</button>
            </div>

            <div>
              Rusty Bicycle
            <button type="submit">Add to Cart</button>
            </div>

            <div>
              Mismatched Socks
            <button type="submit">Add to Cart</button>
            </div>

            <div>
              Old Newspapers
            <button type="submit">Add to Cart</button>
            </div>

            <div>
              Comfy Armchair
            <button type="submit">Add to Cart</button>
            </div>

        </div>
      
      
   <div className="checkout">
     <section className="checkout">
      <form id="checkout" onSubmit="">
        <h3>Checkout</h3>
        <label htmlFor="first-name">First Name: </label>
        <br/>
        <input type="text" value="" id="first-name"/>
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <br />
        <input type="text" value="" id="last-name"/>
         <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input type="email" value="" id="email"/>
         <br />
        <label htmlFor="credit-card">Credit Card: </label>
        <br />
        <input type="number" value="" id="credit-card"/>
         <br />
        <label htmlFor="zip-code">Zip Code: </label>
        <br />
        <input 
        type="number" 
        value="" 
        id="zip-code"/>
         <br />
        <button type="submit">Buy Now</button>
        
      </form>
      </section>
   </div>
    </div>
    
    )
  }
};



export default App;
