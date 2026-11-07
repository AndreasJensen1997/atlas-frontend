import Navbar from "../navbar/Navbar.jsx";
import "./AppLayout.css";
import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";


function AppLayout({soundOn, setSoundOn, currentTheme, setTheme, soundLevel, setSoundLevel, language, setLanguage }) {

    const [hiddenNavbar, setHiddenNavbar] = useState( false);


    return (
        <>
        <div className={`app-layout ${hiddenNavbar ? "app-layout--collapsed" : ""}`}>
            {!hiddenNavbar && (
            <div className="navbar-grid">
                <Navbar
                onCollapse ={() => setHiddenNavbar(true)}/>
            </div>
                )}

            <main className="app-content">
                {hiddenNavbar && (
                    <svg onClick={() => setHiddenNavbar(false)} className="show-navbar-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4V20M20 6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6Z" stroke="#AA9A87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 10L11 12L9 14" stroke="#AA9A87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                )}
                <Outlet context={{ soundOn, setSoundOn,currentTheme,setTheme,soundLevel,setSoundLevel, language, setLanguage }}/>
            </main>
        </div>
            <Footer  />
        </>
    );
}

export default AppLayout;
