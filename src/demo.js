import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    
     let componentMounted = true;

    useEffect( () => {
        const getProducts= async () => {
           setLoading(true);
           const result =await fetch('https://api.escuelajs.co/api/v1/products');
           if (componentMounted){
           setData(await result.clone().json());
           setFilter(await result.json());
           setLoading(false);
           }
           
           return ()=>{
             componentMounted =false;
           }
         } 
         getProducts();
   },[])

   const ShowProducts =()=>{
    return (
        <>
                 {filter.map((items)=>{
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
                        {/* <NavLink to ={`/products/${items.id}`} className="btn btn-outline-dark">Buy</NavLink> */}
                        
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
    <div>

     <ShowProducts/>
    </div>
  )
}

export default Demo