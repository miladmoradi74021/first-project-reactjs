import { Outlet, Link } from "react-router-dom";

const NoPage = () => {
    return (
        <>
            <div className="py-5">
                <h1 className="mt-5">404 Error Page </h1>
                <p class="zoom-area"> The requested page was <b>Not Found</b> . </p>
                <section class="error-container">
                    <span class="four"><span class="screen-reader-text">4</span></span>
                    <span class="zero"><span class="screen-reader-text">0</span></span>
                    <span class="four"><span class="screen-reader-text">4</span></span>
                </section>
                <div class="link-container">
                    <Link class="more-link" to="/">Go Home</Link>
                </div>

            </div>

            <Outlet />
        </>

    )
};

export default NoPage;