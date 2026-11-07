import "./NotificationDropdown.css"

function NotificationDropdown() {
    return (
        <div
            id="notifications"
            popover="auto"
            className="notification-dropdown"
        >
            <div className="notification-dropdown__header">
                <h2>Notifications</h2>
            </div>

            <div className="notification-dropdown__content">

                <div className="notification">
                    <div className="notification__dot"></div>

                    <div>
                        <p>New memory added</p>
                        <span className="notification-box-time-label">2 minutes ago</span>
                    </div>
                </div>

                <div className="notification">
                    <div className="notification__dot"></div>

                    <div>
                        <p>New connection created</p>
                        <span className="notification-box-time-label">1 hour ago</span>
                    </div>
                </div>

                <div className="notification">
                    <div className="notification__dot"></div>

                    <div>
                        <p>Your story was updated</p>
                        <span className="notification-box-time-label">Yesterday</span>
                    </div>
                </div>

            </div>

            <button className="notification-dropdown__view-all">
                View all notifications
            </button>
        </div>
    );
}

export default NotificationDropdown;