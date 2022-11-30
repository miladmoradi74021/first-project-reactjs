

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);
    const { id } = useParams();
    debugger
    useEffect(() => {
        getData();

    });
    const getData = () => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(function (response) {
                // handle success
                setProduct(response.data);
                setSpinner(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    let component;
    if (spinner === true) {
        component = <LoadingSpinner />
    } else {
        component =
            <div className=" d-flex row">
                <div className="card col-md-6 mx-auto center mb-5">
                    <div className="px-3">
                        <h3 className="my-5">{product.title}</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Category: {product.category}</p>
                            <br />
                            <p>Price: ${product.price}</p>
                            <br />
                            <p>Rate: {product.rating.rate}</p>
                            <br />
                            <p>Count : {product.rating.count}</p>
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <img src={product.image} width="250" height="200"></img>
                        </div>
                        <p>Description: {product.description}</p>
                        <br />
                    </div>

                </div>
            </div>
    }

    return (
        <div>{component}</div>
    )
}

export default ProductDetail






















