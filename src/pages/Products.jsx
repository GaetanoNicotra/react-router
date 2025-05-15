import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'


const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://dummyjson.com/recipes/').then((resp) => {
            setProducts(resp.data);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>LISTA PRODOTTI</h1>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products
