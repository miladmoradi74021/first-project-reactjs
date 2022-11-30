
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                console.log(response);
                setProducts(response.data);
                setSpinner(false)
            })
            .catch(function (error) {
                // handle error

                // navigate(`/TaskContainer`, { replace: true })

                console.log(error);
            })

    }

    const deleteProduct = id => {

        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(function (response) {
                // handle success
                // getData();
                setProducts(products.filter((product) => (product.id != id)));

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
            <div Style="margin-top: 75px;margin-left: 35px;" className="bg-dark text-light">
                <div Style="height: 53px;" className="col-md-12 mx-auto center">
                    <div className="px-3 text-center">
                        <h2  >Product List</h2>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead className="bg-light text-dark fixed" Style="height: 53px;">
                        <tr >
                            <th scope="col">Title</th>
                            <th scope="col" >category</th>
                            <th scope="col" className="text-center">Price</th>
                            <th scope="col" className="text-center">rate</th>
                            <th scope="col" className="text-center">count</th>
                            <th scope="col" className="text-center">image</th>
                            <th scope="col" className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light">
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.rating.rate}</td>
                                <td>{product.rating.count}</td>
                                <td><img src={product.image} width="25"></img></td>
                                <td className="d-flex">
                                    <button className="btn" onClick={() => deleteProduct(product.id)}>
                                        <i className="fa fa-trash bg-danger py-2 px-3 rounded-pill" ></i>
                                    </button>
                                    <Link className="btn" to={`/ProductDetail/${product.id}`}>
                                        <i className="fa fa-product-hunt bg-primary py-2 px-2 rounded-pill" ></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <nav aria-label="Page navigation mb-5 ">
                    <ul class="pagination justify-content-center ">
                        <li className="page-item mx-3">
                            <Link className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" >1</Link></li>
                        <li className="page-item mx-2"><Link className="page-link" >2</Link></li>
                        <li className="page-item"><Link className="page-link" >3</Link></li>
                        <li className="page-item mx-3">
                            <Link className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>


    }

    return (
        <div>{component}</div>
    )



}

export default ProductList