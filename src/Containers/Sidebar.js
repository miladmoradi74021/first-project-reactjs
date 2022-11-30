
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductList from "../Components/ProductList";
import ProductRegistration from "../Components/ProductRegistration";

const Sidebar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle1 = () => setToggle(false)
    const handleToggle2 = () => setToggle(true)

    return (
        <>
            {/* The sidebar */}
            <div className="sidebar">
                <Link onClick={handleToggle1} className={`${!toggle ? "active" : ""}`}><i className="menu-item fa fa-list m-3"></i>Products List </Link>
                <Link onClick={handleToggle2} className={`${toggle ? "active" : ""}`}><i className="menu-item fa fa-registered  m-3"></i>Product registration</Link>
            </div>

            {/* Page content */}
            <div className="content">
                {toggle ? <ProductRegistration /> : <ProductList />}
            </div>

            <Outlet />
        </>
    );
}


export default Sidebar









