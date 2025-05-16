import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const DetailProduct = () => {
    const params = useParams();
    const id = params.id
    console.log(params)

    const [product, setProduct] = useState({})

    const getSingleProduct = () => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then((resp) => {
            setProduct(resp.data)
        })
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className='mt-5'>DETTAGLIO DEL PRODOTTO:</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className=" col-6 d-flex">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{product.name}</strong></h5>
                            <div className="card-text mt-3"> <p><strong><em>Ingredients</em></strong></p>{product.ingredients}</div>
                            <div className="card-text mt-3"><p><strong><em>Instruction</em></strong></p>{product.instructions}</div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <p><strong><em>Difficulty</em></strong></p>{product.difficulty}</li>
                            <li className="list-group-item"> <p><strong><em>Cuisine</em></strong></p>{product.cuisine}</li>
                            <li className="list-group-item"> <p><strong><em>Calories</em></strong></p>{product.caloriesPerServing}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
