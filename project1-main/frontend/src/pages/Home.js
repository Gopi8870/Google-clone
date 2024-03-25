import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products,setProducts]=useState([]);

    // get the parameter value(keyword=oppo) in url in this home page
    const [searchParams,setSearchParams]=useSearchParams();

    // when refreshing at first time only this work will be happened if []
    // but we need to get parameter value again and again as a updated one 
    // from search bar..so use [serachParams]
    // bcz based on searchParams the api again fetched and get the data from that api
    useEffect(()=>{
        // before '/products' the path will be vary based on server
        // so generalise here using environment variable
        // this fetch is used for fetch the data from getProducts api
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        // convert to json file
        .then(res => res.json())
        // result has the subkey as products.we need this one
        .then(res => setProducts(res.products))
    },[searchParams])

    return <Fragment>

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {/* using map iterate the productcard repeated but same content also repeated*/}
                {/* {products.map(product=><ProductCard />)} */}

                {/* to avoid this */}
                {products.map(product=><ProductCard product={product} />)}
            </div>
        </section>

        

    </Fragment>
}