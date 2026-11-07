import "./ToggleSwitch.css";

function ToggleSwitch({ isActive, onToggle, icon1, icon2 }) {
    return (
        <div className="theme-toggle">
            {/* Put the onToggle click on the track so the whole switch is interactive */}
            <div
                className={`theme-toggle__track ${isActive ? "theme-toggle__track--dark" : ""}`}
                onClick={onToggle}
            >
                {/* Moving circle */}
                <div
                    className={`theme-toggle__indicator ${
                        isActive ? "theme-toggle__indicator--dark" : ""
                    }`}
                />

                <button className="theme-toggle__option" aria-label="Option 1" type="button">
                    {icon1}
                </button>

                <button className="theme-toggle__option" aria-label="Option 2" type="button">
                    {icon2}
                </button>
            </div>
        </div>
    );
}

export default ToggleSwitch;