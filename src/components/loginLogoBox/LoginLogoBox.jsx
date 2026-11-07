import "./LoginLogoBox.css"
import ThemeToggler from "../toggleSwitches/themeToggler/ThemeToggler.jsx";
import SoundToggler from "../toggleSwitches/soundToggler/SoundToggler.jsx";

function LoginLogoBox(props) {


    return (
        <>

            <div className="login-text-box">
                <svg className="big-circle" xmlns="http://www.w3.org/2000/svg" width="220" height="220"
                     viewBox="0 0 220 220" fill="none">
                    <circle opacity="0.15" cx="110" cy="110" r="110" fill="#B17B53"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                    <circle opacity="0.12" cx="70" cy="70" r="70" fill="#B17B53"/>
                </svg>
                <div className="title-logo-box">

                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17" cy="17" r="17" fill="#B17B53"/>
                    </svg>
                    <h1 className="login-box-title">Atlas</h1>
                </div>
                <h2 className="subtitle">Your story, one place</h2>
                <p className="paragraph">Write about people, places, and moments — and see how they connect, like a
                    personal encyclopedia.</p>
                <div className="login-box-theme-box">
                    <ThemeToggler
                        {...props}
                    />
                    <SoundToggler
                        {...props}
                    />
                </div>
            </div>

        </>
    )
}

export default LoginLogoBox