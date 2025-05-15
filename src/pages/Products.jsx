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
                <h1 className='mb-4' >LISTA PRODOTTI</h1>
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="card col-3 mb-4 g-2">
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.ingredients.join(',')}</p>
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
            </div >
        </>
    )
}

export default Products
