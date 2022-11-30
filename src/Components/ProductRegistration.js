import React from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductRegistration = () => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        category: yup.string().required(),
        price: yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(1, 'Must be exactly 11 digits')
            .max(32, 'Must be exactly 11 digits'),
        description: yup.string().required().max(200, 'No more than 200 characters are allowed'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {

        axios.post(`https://fakestoreapi.com/products`, { data })
            .then(res => {
                console.log(res);
                notify();
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
                errNotify();
            })
    };

    const notify = () => {
        toast.success("اطلاعات با موفقیت ثبت گردید", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    const errNotify = () => {
        toast.error("خطا در ثبت اطلاعات", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    return (
        <>
            <div className=" d-flex row">
                {/* Forms */}
                <div className="card col-md-8 mx-auto center">
                    <div className="px-3">
                        <h1 className="my-4">Product Registration</h1>
                    </div>
                    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Title..."
                            {...register("title")}
                        />
                        <span className="text-danger">{errors.title?.message}</span>
                        <br />
                        <input

                            type="text"
                            placeholder="Category..."
                            className="form-control mt-1"
                            {...register("category")}
                        />
                        <span className="text-danger">{errors.category?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Price..."
                            className="form-control mt-1"
                            {...register("price")}
                        />
                        <span className="text-danger">{errors.price?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Description..."
                            className="form-control mt-1"
                            {...register("description")}
                        />
                        <span className="text-danger">{errors.description?.message}</span>
                        <br />
                        <input
                            type="submit"
                            className="mt-1 btn btn-primary"
                        />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}




export default ProductRegistration