import './FirstStep.css';
import ProgressTracker from "../progressTracker/ProgressTracker.jsx";
import {Link} from "react-router-dom";

function FirstStep({setTutorialProgress,tutorialProgress}) {


    return (
        <div className="onboarding-container">
            {/* Main Card Content */}
            <div className="welcome-card">
                <div className="avatar-circle"/>
                <h1 className="title">Welcome to Atlas, Andreas!</h1>
                <p className="description">Your account is created. Lets get you up to speed </p>
                <div className="button-wrapper">
                    <button
                        type="button"
                        className="primary-button"
                        onClick={() =>  setTutorialProgress((prevProgress) => prevProgress + 1)}
                    >
                        Begin tutorial
                    </button>
                    <Link
                        type="button"
                        className="secondary-button"
                        to="/home"
                    >
                        Skip
                    </Link>
                </div>
            </div>

           <ProgressTracker
           tutorialProgress={tutorialProgress}/>
        </div>
    );
}

export default FirstStep;