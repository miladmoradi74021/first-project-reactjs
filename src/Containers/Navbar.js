

import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle1 = () => setToggle(false)
    const handleToggle2 = () => setToggle(true)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="ml-5">
                            <Link onClick={handleToggle1} className="btn" to="/ProductList">Products</Link>
                        </li>
                        <li className="ml-5">
                            <Link onClick={handleToggle2} className="btn" to="/UserContainer">Register</Link>
                        </li>
                        <li className="ml-5">
                            <Link onClick={handleToggle2} className="btn" to="/TaskContainer">Tasks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <div>
                    {!toggle ? <Sidebar /> : ""}
                    <Outlet />
                </div>
            </div>

        </>
    );
}


export default Navbar