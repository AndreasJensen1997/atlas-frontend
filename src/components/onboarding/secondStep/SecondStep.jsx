import "./SecondStep.css";
import ProgressTracker from "../progressTracker/ProgressTracker.jsx";

function SecondStep({setTutorialProgress,tutorialProgress}) {
    return (
        <div className="onboarding-container">
            {/* Main Card Content */}
            <div className="welcome-card">
                <div className="avatar-circle"/>
                <h1 className="title">What is Atlas?</h1>
                <p className="description">Atlas is a personal time capsule for your life. Document your chapters, preserve your memories, and connect them to the people, places, and things that shaped your story. Share the parts of your life you choose with the people who matter to you — and let your story live on. </p>
                <div className="button-wrapper">
                    <button
                        type="button"
                        className="primary-button"
                        onClick={() =>  setTutorialProgress((prevProgress) => prevProgress + 1)}
                    >
                        Continue
                    </button>

                </div>
            </div>

            <ProgressTracker
            tutorialProgress={tutorialProgress}/>
        </div>
    );
}

export default SecondStep;