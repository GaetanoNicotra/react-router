import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

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
            <h1>DETTAGLIO DEL PRODOTTO:</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
