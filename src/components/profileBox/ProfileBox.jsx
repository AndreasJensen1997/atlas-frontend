import "./ProfileBox.css"


function ProfileBox({title, description, icon,toggler,size}) {

    return (

        <div className={`profile-box-container profile-box-container-${size}`}>

            <div className="profile-header-container">
                <div className="profile-box-header">
                    <div className="profile-svg">{icon}</div>
                    <h1 className="profile-box-title">{title}</h1>
                </div>
                <div className="profile-box-buttons">
                    {toggler}
                </div>
            </div>


            <p className="profile-box-description">{description}</p>

            <div className="profile-divider">
                <span className="profile-divider-line"/>
            </div>



        </div>
    )
}

export default ProfileBox