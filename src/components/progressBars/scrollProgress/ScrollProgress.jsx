import "./ScrollProgress.css"

function ScrollProgress(){

    return(

        <div className="scroll-progress">
            <svg viewBox="0 0 100 100">
                <circle
                    className="scroll-progress__background"
                    cx="50"
                    cy="50"
                    r="45"
                />

                <circle
                    className="scroll-progress__circle"
                    cx="50"
                    cy="50"
                    r="45"
                />

            </svg>
        </div>
    )
}
export default ScrollProgress