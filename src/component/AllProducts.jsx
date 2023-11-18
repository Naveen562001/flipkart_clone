import React, { useEffect, useState } from 'react';
import Search from './Search';
import './style.scss';

const AllProducts = () => {

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);

    let componentMounted = true;



    useEffect( () => {
        const getProducts= async () => {
           
           const result =await fetch('https://fakestoreapi.com/products');
           if (componentMounted){
           setData(await result.clone().json());
           setFilter(await result.json());
           }
           
        
     } 
     getProducts();
     return (()=>{
       const componentMounted =false;
     })
   },[])



   const ShowProducts = () =>{
    //cart count
    const [count,setCount ]=useState(0);

    const handleCart = ()=>{
      setCount(count+1)
    }
    return (
        <>
        <span>{count}</span>
          {filter.map((items)=>{
            return(
              <>
              <div className="col-md-3">
                <div className="card h-100 text-center p-4" key = {items.id} >
                <img src={items.image} className="card-img-top-hover" alt={items.title} widthg="100px" height="200px"/>

                    <div className="card-body">
                      <h5 className="card-title mb-0">{items.title.substring(0,12)}</h5>
                      <p className="card-text lead fw-bold ">
                        rating :<span className='text-warning'> {items.rating.rate}</span> count : <span className='text-warning bg-grey'>{items.rating.count}</span>
                      </p>
                      <p className="card-text lead fw-bold">
                        $ {items.price}
                      </p>
                      <p className="card-text lead fw-bold">
                        Description : {items.description}
                      </p>
                      <p></p>
                      <button className="btn btn-outline-dark" onClick ={handleCart}>Add To Cart</button>
                      
                    </div>
                  </div>
              </div>
              </>
            )
          })}
        
     </>
    )
  }
   console.log(data);
  return (
    <div className='all-descr'>
        <div className='all-search'>
               <Search/>
        </div>
            <div className='All-products'>
              <div className= "row justify-content-center" style={{height:100}}> 
        {filter?<ShowProducts/>:"error"}
        
    </div>
    </div>
        </div>
  )
}

export default AllProducts