import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UserContainer = () => {

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required(),
        mobile: yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(11, 'Must be exactly 11 digits')
            .max(11, 'Must be exactly 11 digits'),
        nationalCode: yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits'),
        gender: yup.string().required(),
        province: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        notify();
    };

    const notify = () => {
        toast.success("اطلاعات با موفقیت ثبت گردید", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    return (
        <>
            <div className=" d-flex row">
                {/* Forms */}
                <div className="card col-md-4 mx-auto center">
                    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Full Name..."
                            {...register("fullname")}
                        />
                        <span className="text-danger">{errors.fullname?.message}</span>
                        <br />
                        <input

                            type="text"
                            placeholder="Email..."
                            className="form-control mt-1"
                            {...register("email")}
                        />
                        <span className="text-danger">{errors.email?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="mobile..."
                            className="form-control mt-1"
                            {...register("mobile")}
                        />
                        <span className="text-danger">{errors.mobile?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="National Code..."
                            className="form-control mt-1"
                            {...register("nationalCode")}
                        />
                        <span className="text-danger">{errors.nationalCode?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Gender..."
                            className="form-control mt-1"
                            {...register("gender")}
                        />
                        <span className="text-danger">{errors.gender?.message}</span>
                        <br />
                        <input
                            type="text"
                            placeholder="Province Of Residence..."
                            className="form-control mt-1"
                            {...register("province")}
                        />
                        <span className="text-danger">{errors.province?.message}</span>
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




export default UserContainer
