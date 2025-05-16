import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const DetailProduct = () => {

    const params = useParams();
    const id = parseInt(params.id)

    const navigate = useNavigate();

    const [product, setProduct] = useState({})

    const getSingleProduct = () => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then((resp) => {
            setProduct(resp.data)
        })
    }

    useEffect(() => {
        getSingleProduct();
    }, [id])

    return (
        <div>
            <Navbar />
            <h1 className='mt-5'>DETTAGLIO DEL PRODOTTO:</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4 ">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className=" col-6 d-flex">
                        <div className="card-body">
                            <ul className='list-group '>
                                <li className='list-group-item'> <h5 className="card-title text-center"><strong>{product.name}</strong></h5></li>
                                <li className='list-group-item'><div className="card-text mt-3"> <p><strong><em>Ingredients</em></strong></p>{product.ingredients}</div></li>
                                <li className='list-group-item'> <div className="card-text mt-3"><p><strong><em>Instruction</em></strong></p>{product.instructions}</div></li>
                                <button onClick={() => { navigate(-1) }} className=' col-4 btn btn-primary mt-2'>Torna indietro</button>
                                <button onClick={() => { navigate(`/products/${parseInt(id) + 1}`) }} className='col-4 mt-2 btn btn-primary'>Avanti</button>
                            </ul>
                        </div>
                        <ul className="list-group-flush">
                            <li className="list-group-item mb-3 mt-1"> <p><strong><em>Difficulty</em></strong></p>{product.difficulty}</li>
                            <li className="list-group-item mb-3 mt-1"> <p><strong><em>Cuisine</em></strong></p>{product.cuisine}</li>
                            <li className="list-group-item mb-3 mt-1"> <p><strong><em>Calories</em></strong></p>{product.caloriesPerServing}</li>
                            <li className="list-group-item mb-3 mt-1"> <p><strong><em>Prep time</em></strong></p>{product.prepTimeMinutes}</li>
                            <li className="list-group-item mb-3 mt-1"> <p><strong><em>Cook Time</em></strong></p>{product.cookTimeMinutes}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
