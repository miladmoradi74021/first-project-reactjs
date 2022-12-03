import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <>
            {/* The sidebar */}
            <div className="sidebar">
                <Link to="/ProductList"><i className="menu-item fa fa-list m-3"></i>Products List </Link>
                <Link to="/ProductRegistration"><i className="menu-item fa fa-registered  m-3"></i>Product registration</Link>
            </div>

        </>
    );
}


export default Sidebar









