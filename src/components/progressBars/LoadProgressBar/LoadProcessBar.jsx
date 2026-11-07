import "./LoadProcessBar.css";

function LoadProcessBar() {
    return (
        <div className="line-progress">
            <div className="line-progress__background"></div>
            <div className="line-progress__line"></div>
        </div>
    );
}

export default LoadProcessBar;