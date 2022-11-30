


import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="ml-5">
                            <Link className="btn" to="/">Products</Link>
                        </li>
                        <li className="ml-5">
                            <Link className="btn" to="/UserContainer">Register</Link>
                        </li>
                        <li className="ml-5">
                            <Link className="btn" to="/TaskContainer">Tasks</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
}


export default Navbar