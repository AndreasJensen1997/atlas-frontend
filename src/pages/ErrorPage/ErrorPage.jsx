import "./ErrorPage.css"
import {Link} from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";


function ErrorPage() {

    return (
        <>
        <PageTransition>

            <div className="error-page-grid">
                <svg className="error-page-svg" xmlns="http://www.w3.org/2000/svg" width="110" height="110"
                     viewBox="0 0 110 110" fill="none">
                    <circle cx="55" cy="55" r="55" fill="#E7DDC9"/>
                </svg>
                <h1 className="error-page-title">404</h1>
                <h2 className="error-page-description">This page is not part of your story</h2>
                <p className="error-page-paragraph">Perhaps the page has been deleted, or you have pressed a link that
                    is not connected to your atlas</p>
                <Link className="error-page-return-button-link" to="/home">
                    <a className="error-page-return-button">
                        <span className="error-page-return-text">Return to homepage</span>
                    </a>
                </Link>
            </div>
        </PageTransition>
        </>
    )


}


export default ErrorPage