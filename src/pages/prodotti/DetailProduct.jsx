import React from 'react'
import { useParams } from 'react-router-dom'


const DetailProduct = () => {
    const params = useParams();
    return (
        <div>
            <h1>DETTAGLIO DEL PRODOTTO:</h1>
        </div>
    )
}

export default DetailProduct
