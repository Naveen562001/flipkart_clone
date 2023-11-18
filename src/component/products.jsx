import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import electronics from "../image/flikartE.png";
import "./style.scss";
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Search from './Search';

const Products = (props) => {



  const [data,setData] = useState([]);
  const [filter,setFilter] = useState(data);
  //elctronic product
  
  const [loading,setLoading] = useState(false);


 
 



  useEffect( () => {
    let componentMounted = true;
    const getProducts= async () => {
       setLoading(true);
       const result =await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`);
       const products = await result.json();
       if (componentMounted) {
        setData(products);
        setFilter(products);
        setLoading(false);
        props.handleAllData(products);
      }
       
    } 
    
   getProducts();
    return ()=>{
      componentMounted =false;
    }
     
},[])
  
  const LoadingProducts = () => {
    return (
      <>
      <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        
        </>
    )

  }
  const ShowProducts =()=>{
    return (
        <>
                 {filter.map((items,key)=>{
            return (
                <>
                <div className="col-md-3">
                  <div className="card h-100 text-center p-4" key = {items.id} >
                  <img src={items.images[0]} className="card-img-top" alt={items.title} widthg="100px" height="200px"/>
  
                      <div className="card-body">
                        <h5 className="card-title mb-0">{items.title.substring(0,12)}</h5>
                        <p className="card-text lead fw-bold">
                          ${items.price}
                        </p>
                        <NavLink to ={`/products/${items.id}`} className="btn btn-outline-dark">Buy</NavLink>
                        
                      </div>
                    </div>
                </div>
                </>

                 )

        })}
        
        
        </>
    )
   }
   console.log(filter);




  return (
    <div className='all'>

    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
      
           
        </div>

      </div>
    <div className='all-product'>
    <div className= "row justify-content-center"> 
        {loading?<LoadingProducts/>:<ShowProducts/>}
        
    </div>
    
    </div> 
    </div>
  
    </div>
  )
}

export default Products