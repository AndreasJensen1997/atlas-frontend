// components/returnButton/ReturnButton.jsx
import "./ReturnButton.css";
import {Link} from "react-router-dom";

function ReturnButton({ setActivePage, targetPage = "homepage", label = "Return", extraClass }) {
    return (
        <Link to="/home" >
        <div
            className={`return-button ${extraClass}`}
            onClick={() => setActivePage(targetPage)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    className="return-button__icon"
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="#AA9A87"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className="return-button__label">{label}</p>
        </div>
        </Link>
    );
}

export default ReturnButton;