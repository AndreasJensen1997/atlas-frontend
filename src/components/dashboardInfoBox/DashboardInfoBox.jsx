import "./DashboardInfoBox.css"


function DashboardInfoBox({icon,title,description,size,button,newPage,setActivePage}) {

    return (

        <div className={`dashboard-info-box dashboard-info-box--${size}`}>
            <div className="dashboard-info-box__icon">
                <div className="svg">
                {icon}
                </div>
                <div className="dashboard-info-box__title">{title}</div>
            </div>

            <div className="dashboard-info-box__content">
                <p  className="dashboard-info-box__description">
                    {description}
                </p>
                <a onClick={() => setActivePage(newPage)} className="dashboard-info-box__button">{button}</a>

            </div>
        </div>

    )
}

export default DashboardInfoBox