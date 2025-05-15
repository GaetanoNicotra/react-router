import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'


const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://dummyjson.com/recipes/').then((resp) => {
            setProducts(resp.data.recipes);
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
                    <div className="col-3">
                        <h1>LISTA PRODOTTI</h1>
                        {products.map((product) => {
                            return (
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.ingredients}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> {product.difficulty}</li>
                                        <li className="list-group-item">{product.cuisine}</li>
                                        <li className="list-group-item">A third item</li>
                                    </ul>
                                </div>
                            );
                        })};
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products
