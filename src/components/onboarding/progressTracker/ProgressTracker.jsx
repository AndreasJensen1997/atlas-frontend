import "./ProgressTracker.css"


function ProgressTracker({tutorialProgress}) {

    return (

        <div className="progress-container">
            <div className="progress-tracker">
                <div className="step-node active-step"/>
                <div className={`step-line ${tutorialProgress > 1 ? "active-step" : ""}`}/>
                <div className={`step-node ${tutorialProgress > 1 ? "active-step" : ""}`}/>
                <div className={`step-line ${tutorialProgress > 2 ? "active-step" : ""}`}/>
                <div className={`step-node ${tutorialProgress > 2 ? "active-step" : ""}`}/>
                <div className={`step-line ${tutorialProgress > 3 ? "active-step" : ""}`}/>
                <div className={`step-node ${tutorialProgress > 3 ? "active-step" : ""}`}/>
                <div className={`step-line ${tutorialProgress > 4 ? "active-step" : ""}`}/>
                <div className={`step-node ${tutorialProgress > 4 ? "active-step" : ""}`}/>
                <div className={`step-line ${tutorialProgress > 5 ? "active-step" : ""}`}/>
                <div className={`step-node ${tutorialProgress > 5 ? "active-step" : ""}`}/>
            </div>
            <span className="step-label">Step {tutorialProgress} of 6</span>
        </div>


    )

}

export default ProgressTracker