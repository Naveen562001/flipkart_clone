import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { delCart } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [total, setTotal] = useState(0);


 var adtotal= 0;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    const p = product1.findIndex((cost)=> cost.id === item.id)
    dispatch(delCart(product1[p])); 
  };

  useEffect(() => {
    setProduct(cart)
    setProduct1(cart)
  }, [cart]);

  //counter function
  const increment = (itemId) => {
  
      const p = product.findIndex((cost)=> cost.id === itemId)
    const updatedCartItems = product1.map((item) => {
      if (item.id === itemId) {
        return { ...item, qty: item.qty + 1, price: item.price + product[p].price};
      }
      return item;
    });
    setProduct1(updatedCartItems);
  };

  const decrement = (itemId) => {
    const p = product.findIndex((cost)=> cost.id === itemId)

    const updatedCartItems = product1.map((item) => {
      if (item.id === itemId && item.qty >= 2) {
        return { ...item, qty: item.qty - 1, price: item.price - product[p].price};
      }
      return item;
    });
    setProduct1(updatedCartItems);
  };

  const CartPay = () => {
  
    useEffect(()=>{

      const prices = product1.forEach((value)=>{
        adtotal +=value.price
        setTotal(adtotal);
      })
      return prices
    },[product1])
    console.log(total);
    
    return (
      <div className='pay-cart'>
  
         
              <div className="col-md-4">
                  <div className="payment-info">
                      <div className="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30"/></div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>
  
  <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png"/></span> </label>
  
  <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png"/></span> </label>
  
  
  <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png"/></span> </label>
                      <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name"/></div>
                      <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                      <div className="row">
                          <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24"/></div>
                          <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342"/></div>
                      </div>
                      <hr className="line"/>
                      <div className="d-flex justify-content-between information"><span>Subtotal</span><span>${total}</span></div>
                      <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
                      <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>${total + 20}</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>${total + 20}</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
              </div>
          
      
      </div>
    )
  }

  return (
    <>
    <div>
    <div className='cart-head'>
      
         Cart
    </div>
    <div className='no-item'>
          You Added {cart.length} product to the cart
    </div>
    <div  className='bak'>
    <NavLink to ="/" className="btn btn-dark ms-2 px-3 py-2">
                  Contine Shopping
                </NavLink>
    </div>
      {product1.map((items) => {
        return (
          <div className='cardu-container' key={items.id}>
            <div className='cardu'>
              <div className='product-img'>
                <img id="img-cart" src={items.images[0]} alt="car-img"></img>
              </div>
              <div className='delete-svg'>
                <img
                  id='delete-img'
                  src="https://tse2.mm.bing.net/th?id=OIP.M668ItG2tduJEEc_Jrk01wHaHa&pid=Api&P=0"
                  alt='delete-svg'
                  onClick={() => handleDelete(items)} 
                  ></img>
              </div>
              <div className='counter'>
                    <button id ='incre' onClick={()=>increment(items.id)}>+</button>
                    <button id ='decre' onClick={()=>decrement(items.id)}>-</button>
              </div>
              <div className='titel'>
                <h3 id="h3-tit">{items.title}</h3>
                <span id='rate'>$ {items.price }</span>
                <p id='qty'>{items.qty }</p>
              </div>
              
             
            </div>
          </div>
        )
      })}
      <div>
        <CartPay/>
      </div>
      </div>
    </>
  )
}

export default Cart;
