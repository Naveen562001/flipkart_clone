import {useRef,React, useState, useEffect} from 'react';
import './style.scss';
import img from '../image/search-icon.png';
import bell from '../image/bell-avatar.png';
import question from '../image/questionmark.png';
import download from '../image/downloadAvatar.png';
import increasing from '../image/incresing.png';
import cart from '../image/cart-avatar.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



import Dropdown from 'react-bootstrap/Dropdown';
import { nodeName } from 'rsuite/esm/DOMHelper';




const Search = (props) => {
  
 const [products,setProducts] = useState([]);
 const [filterItem ,setFilterItem] = useState([]);
  
  const state = useSelector((state) => state.cart)
  console.log(state);
  
  // getting all data as props
 
const ProductData =(data)=>{
  setProducts(data)
}

useEffect(()=>{
  if(props.allProduct){

    ProductData(props.allProduct)
  }
},[props.allProduct])


const handleSearch =(e)=>{
  const searchWord = e.target.value
  const filterWord = products.filter((item)=>{
    return item.title.toLowerCase().includes(searchWord.toLowerCase())
  })
  if(searchWord ==''){
    setFilterItem([])
  }else{

    setFilterItem(filterWord);
  }
}
console.log(products);

  return (

    <div className="container-search ">
      <div className='logo' >
        <p id = "logo-1">FlipKart</p>
        <p id = "logo-2">Explore<span>Plus</span></p>
      </div>
      <div className='search'>
        <input type="search" id ="searchinput"placeholder='  Search for products,brands and more '
        onChange={handleSearch}></input>
          <label htmlFor='search'>
            <img src ={img} alt=""></img>

          </label>
      </div>

      
      {filterItem.length !=0 && (
      <div className='search-result'>

        
        {filterItem.map((items,key)=>{
          return (
            <NavLink className='search-word' to ={`/products/${items.id}`}>
              <p>{items.title}</p>
              
              </NavLink>
          )
        })}

      </div>
      )}
      <div className ="login-btn">
      <NavLink to ='/login'>
        <button id="btnlogin">
          Login </button>
        </NavLink> 
      </div>
      <div className='seller'>
        <button> Become a Seller</button>

      </div>
      <div className="more">
      <Dropdown className ="dropdown">
      <Dropdown.Toggle id="dropbtn">
        More
      </Dropdown.Toggle>
      
      <Dropdown.Menu className ="dropmenu">
        <Dropdown.Item href="#/action-1"><img src ={bell}></img>   Notification preferences</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><img src ={question}></img>  24*7 Customer Care</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src ={increasing}></img>  Advertise</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><img src ={download}></img>    Download App</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
      </div>
      <div className="cart">
        <img src={cart} alt="cart"></img>
        
          <NavLink to ="/cart">
        
                  <span id ="cart-txt">Cart</span>
                  {state.length>0 &&
                  <span id = 'cart-num'>{state.length}</span>
                  }
                </NavLink>
        
        {/* <a id = 'a' href="http://localhost:3000/cart"> <span id ="cart-txt">Cart</span> <span id = 'cart-num'>{state.length}</span>
        </a> */}

      </div>
    
    
    
      </div>
    
  )
}

export default Search