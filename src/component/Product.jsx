import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton/';
import { NavLink, useParams } from 'react-router-dom';
import './style.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Search from './Search';

const Product = () => {

    const {id} = useParams();
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    let componentMounted =true;



    const dispatch = useDispatch();
    const addProduct = (data)=>{
       dispatch(addCart(data));
       console.log('add');
      
    }

    useEffect( () => {
        const getProducts= async () => {
           setLoading(true);
           const result =await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
           if (componentMounted){
           setData(await result.json());
           setLoading(false);
           }
           
           return ()=>{
             componentMounted =false;
           }
         } 
         getProducts();
   },[id])

    const Loading =()=>{
        return(
        <>
        <div className='col-md-6'>
            <Skeleton height={400}/>

        </div>
        <div className='col-md-6' style={{lineHeight:2}}>
            <Skeleton height={50} width ={300}/>
            <Skeleton height={75} />
            <Skeleton height={25} width ={150}/>
            <Skeleton height={50} />
            <Skeleton height={150}/>
            <Skeleton height={50} width ={100}/>
            <Skeleton height={50} width ={100} style= {{marginLeft:6}}/>
            

        </div>
        </>
        )
    }
    //console.log(data);



    const ShowProduct = () =>{
     
        return(
            <div className='one-product'>
            <div className='col-md-5'>
                <img className="particular" src = {data.images} alt={data.title} height="400px" width ="400px"></img>

            </div>
            <div className='descr'>
            <div className="col-md-9">
                <h4 className='text-uppercase text-black-50'>
                </h4>

                <h1 className='display-5'>{data.title}</h1>
                {/* <p className='lead'>
                    Rating <span style={{color:"blue"}}>{data.rating && data.rating.rate}</span>  <i className='fa fa-star'></i>  count :<span >{data.rating && data.rating.count}</span>
                    
                    
                </p> */}
                <h3 className='display-6 fw-bold my-4'> 
                $ {data.price}
                </h3>
                <p className='lead'>{data.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={()=>{addProduct(data)}}>
                    Add To Cart
                </button>
                <NavLink to ="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go To Cart
                </NavLink>
                
            </div>
            </div>
            </div>

        )
    }
  return (
    <div>
    <Search/>
        <div className='conatiner py-5'>
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProduct/>}

            </div>

        </div>
    </div>
  )
}

export default Product