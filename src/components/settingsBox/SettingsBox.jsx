import "./SettingsBox.css"


function SettingsBox({title, description, icon,toggler,children}) {

    return (

        <div className="settings-box-container">

            <div className="settings-header-container">
            <div className="settings-box-header">
                <div className="settings-svg">{icon}</div>
                <h1 className="settings-box-title">{title}</h1>
            </div>
                <div className="settings-box-buttons">
                    {toggler}
                </div>
            </div>


            <p className="settings-box-description">{description}</p>

            <div className="settings-divider">
                <span className="settings-divider-line"/>
            </div>

            {children}



        </div>
    )
}

export default SettingsBox