import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

export default function ProdDetail({cartItems,setCartItems})
{
    const [product,setProduct]=useState(null);

    const [qty,setQty]=useState(1);

    // for getting id from the url
    const {id}=useParams();

    useEffect(()=>{
        // before '/products' the path will be vary based on server
        // so generalise here using environment variable
        // this fetch is used for fetch the data from getProducts api
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        // convert to json file
        .then(res => res.json())
        // result has the subkey as products.we need this one
        .then(res => setProduct(res.product))
    },[])


    function addToCart()
    {
        // both are equal 
        // if key and value will be same name then directly can give like line 29
        // const newItem={product:product,qty:qty};
        
        const itemExist=cartItems.find((item)=>item.product._id===product._id);
        if(!itemExist)
        {
            const newItem={product,qty};
            setCartItems((state)=>[...state,newItem]);
            toast.success('Cart items added successfully');
        }
        
    }

    function increaseQty()
    {
        // if reached maximum qty then terminate the execution of this function by return nothing
        if(product.stock === qty){
            return;
        }
        setQty((state)=>state+1);
    }

    function decreaseQty()
    {
        if(qty > 1)
        {
            setQty((state)=>state-1);
        }
        else{
            return;
        }
        
    }


    // when refreshing this page this will show error
    // bcz before gettig value in product variable in useState
    // this html code loaded so it is having null value

    // To avoid this one
    // product && html code in return keyword
    return product && <div className="container container-fluid">
    <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img src={product.images[0].image} alt="sdf" height="500" width="500" />
        </div>

        <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Product # {product._id}</p>

            <hr />

            <div className="rating-outer">
                <div className="rating-inner"  style={{width:`${product.ratings/5*100}%`}}></div>
            </div>


            <hr />

            <p id="product_price">{product.price}</p>
            <div className="stockCounter d-inline">
                <span onClick={decreaseQty} className="btn btn-danger minus">-</span>

                <input type="number" className="form-control count d-inline" value={qty} readOnly />

                <span onClick={increaseQty} className="btn btn-primary plus">+</span>
            </div>
            <button onClick={addToCart} disabled={product.stock == 0} type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

            <hr />

            <p>Status: <span id="stock_status" className={product.stock>0 ? 'text-success':'text-danger' }>{product.stock>0 ? 'In Stock':'Out of Stock'}</span></p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

            <div className="rating w-50"></div>

        </div>
    </div>
    </div>
}