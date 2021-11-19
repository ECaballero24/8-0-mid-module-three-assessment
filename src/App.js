import { Component } from 'react';
import "./App.css";
import data from './data/productData'

class App extends Component{
  constructor(){
    super();
    this.state ={
      products: data.productData

    }
}
  render(){


    return (
    <div className="app">
      <h1>MY GARAGE SALE</h1>
      
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
          
            <div>Baseball Glove:</div>
            <div>Vintage VCR</div>
            <div>Rusty Bicycle</div>
            <div>Mismatched Socks</div>
            <div>Old Newspapers</div>
            <div>Comfy Armchair</div>
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
        <input type="number" value="" id="zip-code"/>
         <br />
        <button>Buy Now</button>
        
      </form>
      </section>
   </div>
    </div>
    
    )
  }
};



export default App;
