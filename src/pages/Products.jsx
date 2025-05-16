import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState(null)

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
                <h1 className='mb-4 mt-5' >LISTA PRODOTTI</h1>
                <div >
                    {products === null ?
                        <div className='d-flex justify-content center'><span className="loader"></span></div>

                        : <div className="row g-4 ">

                            {products.map((product) => {

                                return (

                                    <div key={product.id} className="col-4">
                                        <NavLink className="product-link" to={`/products/${product.id}`}>
                                            <div className="card mb-4 ">
                                                <img src={product.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title"><strong>{product.name}</strong></h5>
                                                    <div className="card-text mt-2"> <p><strong><em>Ingredients</em></strong></p>{product.ingredients.join(', ')}</div>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item"> <p><strong><em>Difficulty</em></strong></p>{product.difficulty}</li>
                                                    <li className="list-group-item"> <p><strong><em>Cuisine</em></strong></p>{product.cuisine}</li>
                                                    <li className="list-group-item"> <p><strong><em>Calories</em></strong></p>{product.caloriesPerServing}</li>
                                                </ul>
                                            </div>
                                        </NavLink>
                                    </div>

                                );
                            })};
                        </div>
                    }
                </div>
            </div >
        </>
    )
}

export default Products
