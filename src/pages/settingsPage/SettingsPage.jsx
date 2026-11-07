import "./SettingsPage.css";
import SettingsBox from "../../components/settingsBox/SettingsBox.jsx";
import ThemeToggler from "../../components/toggleSwitches/themeToggler/ThemeToggler.jsx";
import SoundToggler from "../../components/toggleSwitches/soundToggler/SoundToggler.jsx";
import ToggleSwitch from "../../components/toggleSwitches/toggleSwitch/ToggleSwitch.jsx";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import {useOutletContext} from "react-router-dom";


function SettingsPage() {
    const {soundOn, setSoundOn, currentTheme, setTheme, soundLevel, setSoundLevel, language, setLanguage} = useOutletContext();


    return (

        <>
            <PageTransition>
                <div className="settings-page-grid">

                    <div className="settings-header">
                        <h1 className="settings-title">Settings</h1>
                        <p className="settings-introduction">
                            Modify Atlas to fit your exact needs
                        </p>
                    </div>


                    {/* THEME */}

                    <SettingsBox
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 1.5C9.21 1.5 6.54 2.61 4.57 4.58C2.61 6.55 1.5 9.22 1.5 12C1.5 14.79 2.61 17.46 4.57 19.43C6.54 21.4 9.21 22.5 12 22.5C14.78 22.5 17.46 21.4 19.43 19.43C21.39 17.46 22.5 14.79 22.5 12C22.5 9.22 21.39 6.55 19.43 4.58C17.46 2.61 14.78 1.5 12 1.5ZM12 21V3C14.39 3 16.68 3.95 18.36 5.64C20.05 7.32 21 9.61 21 12C21 14.39 20.05 16.68 18.36 18.36C16.68 20.05 14.39 21 12 21Z"
                                    fill="#AA9A87"
                                />
                            </svg>
                        }
                        title="Theme"
                        description="Change the appearance of Atlas to match your preference"
                        toggler={<ThemeToggler
                            soundOn={soundOn}
                            currentTheme={currentTheme}
                            setTheme={setTheme}
                            soundLevel={soundLevel}
                        />
                        }
                    ><h1 className="volume-button-title">Accent picker</h1>
                        <div className="volume-button-grid">
                            <div className="volume-button-grid">
                                <a onClick={() => setSoundLevel(0.1)}
                                   className={`volume-button ${soundLevel === 0.1 ? "volume-button-active" : ""}`}>1</a>
                                <a onClick={() => setSoundLevel(0.3)}
                                   className={`volume-button ${soundLevel === 0.3 ? "volume-button-active" : ""}`}>2</a>
                                <a onClick={() => setSoundLevel(0.5)}
                                   className={`volume-button ${soundLevel === 0.5 ? "volume-button-active" : ""}`}>3</a>
                                <a onClick={() => setSoundLevel(0.7)}
                                   className={`volume-button ${soundLevel === 0.7 ? "volume-button-active" : ""}`}>4</a>
                                <a onClick={() => setSoundLevel(1.0)}
                                   className={`volume-button ${soundLevel === 1.0 ? "volume-button-active" : ""}`}>5</a>
                            </div>
                        </div>
                    </SettingsBox>


                    {/* SOUND */}

                    <SettingsBox
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M17.52 3.78C16.4 3.16 14.97 3.32 13.51 4.23L10.59 6.06C10.39 6.18 10.16 6.25 9.93 6.25H8.5C6.08 6.25 4.75 7.58 4.75 10V14C4.75 16.42 6.08 17.75 8.5 17.75H9.93C10.16 17.75 10.39 17.82 10.59 17.94L13.51 19.77C14.39 20.32 15.25 20.59 16.05 20.59C16.56 20.6 17.07 20.47 17.52 20.22C18.63 19.6 19.25 18.31 19.25 16.59V7.41C19.25 5.69 18.63 4.4 17.52 3.78Z"
                                    fill="#AA9A87"
                                />
                            </svg>
                        }
                        title="Sound"
                        description="Control sounds and interactions throughout Atlas"
                        toggler={
                            <SoundToggler
                                soundOn={soundOn}
                                setSoundOn={setSoundOn}
                                soundLevel={soundLevel}
                                setSoundLevel={setSoundLevel}
                            />
                        }
                    >
                        <h1 className="volume-button-title">Volume control</h1>
                        <div className="volume-button-grid">
                            <div className="volume-button-grid">
                                <a onClick={() => setSoundLevel(0.1)}
                                   className={`volume-button ${soundLevel === 0.1 ? "volume-button-active" : ""}`}>1</a>
                                <a onClick={() => setSoundLevel(0.3)}
                                   className={`volume-button ${soundLevel === 0.3 ? "volume-button-active" : ""}`}>2</a>
                                <a onClick={() => setSoundLevel(0.5)}
                                   className={`volume-button ${soundLevel === 0.5 ? "volume-button-active" : ""}`}>3</a>
                                <a onClick={() => setSoundLevel(0.7)}
                                   className={`volume-button ${soundLevel === 0.7 ? "volume-button-active" : ""}`}>4</a>
                                <a onClick={() => setSoundLevel(1.0)}
                                   className={`volume-button ${soundLevel === 1.0 ? "volume-button-active" : ""}`}>5</a>
                            </div>
                        </div>
                    </SettingsBox>


                    {/* PRIVACY */}

                    <SettingsBox
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M19 9H18V6C18 2.69 15.31 0 12 0C8.69 0 6 2.69 6 6V9H5C3.9 9 3 9.9 3 11V22C3 23.1 3.9 24 5 24H19C20.1 24 21 23.1 21 22V11C21 9.9 20.1 9 19 9ZM8 6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6V9H8V6Z"
                                    fill="#AA9A87"
                                />
                            </svg>
                        }
                        title="Privacy"
                        description="Control who can see your Atlas and personal information"
                        toggler={<ToggleSwitch/>}
                    />


                    {/* NOTIFICATIONS */}

                    <SettingsBox
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M19 9C19 5.13 16.76 1.79 13.5 0.55C13.04 0.38 12.53 0.5 12.22 0.86L12 1.12L11.78 0.86C11.47 0.5 10.96 0.38 10.5 0.55C7.24 1.79 5 5.13 5 9V13L3 16V18H21V16L19 13V9ZM9 21C9.45 22.72 11.04 24 13 24C14.96 24 16.55 22.72 17 21H9Z"
                                    fill="#AA9A87"
                                />
                            </svg>
                        }
                        title="Notifications"
                        description="Choose whether Atlas can send you notifications"
                        toggler={<ToggleSwitch/>}
                    />

                    {/* ANIMATIONS */}

                    <SettingsBox
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21H9.75C6.825 21 4.5 18.675 4.5 15.75V12.75H6V15.75C6 17.85 7.65 19.5 9.75 19.5H12V21ZM21 22.5H22.65L19.2 14.25H17.55L14.1 22.5H15.75L16.35 21H20.325L21 22.5ZM17.025 19.5L18.375 16.2L19.725 19.5H17.025ZM21 11.25H19.5V8.25C19.5 6.15 17.85 4.5 15.75 4.5H12.75V3H15.75C18.675 3 21 5.325 21 8.25V11.25ZM10.5 3.75V2.25H6.75V0.75H5.25V2.25H1.5V3.75H7.65C7.5 4.425 7.05 5.625 6 6.75C5.55 6.225 5.175 5.7 4.95 5.25H3.225C3.525 6 4.05 6.9 4.8 7.725C4.2 8.25 3.3 8.7 2.25 9.075L2.775 10.5C4.125 9.975 5.175 9.375 6 8.775C6.825 9.45 7.875 10.05 9.225 10.5L9.75 9.075C8.7 8.7 7.8 8.175 7.125 7.725C8.55 6.225 9 4.65 9.15 3.75H10.5Z" fill="#AA9A87"/>
                            </svg>


                        }
                        title="Language"
                        description="Toggle between a select amount of languages"

                    >
                        <div className="language-list-grid">
                            <a onClick={() => setLanguage("da")}
                               className={`language ${language === "da" ? "language-active" : ""}`}
                               title="Danish">DA</a>
                            <a onClick={() => setLanguage("en")}
                               className={`language ${language === "en" ? "language-active" : ""}`}
                               title="English">EN</a>
                            <a onClick={() => setLanguage("de")}
                               className={`language ${language === "de" ? "language-active" : ""}`}
                               title="German">DE</a>
                            <a onClick={() => setLanguage("fr")}
                               className={`language ${language === "fr" ? "language-active" : ""}`}
                               title="French">FR</a>
                            <a onClick={() => setLanguage("es")}
                               className={`language ${language === "es" ? "language-active" : ""}`}
                               title="Spanish">ES</a>
                            <a onClick={() => setLanguage("it")}
                               className={`language ${language === "it" ? "language-active" : ""}`}
                               title="Italian">IT</a>
                            <a onClick={() => setLanguage("sv")}
                               className={`language ${language === "sv" ? "language-active" : ""}`}
                               title="Swedish">SV</a>
                            <a onClick={() => setLanguage("no")}
                               className={`language ${language === "no" ? "language-active" : ""}`}
                               title="Norwegian">NO</a>
                        </div>
                    </SettingsBox>
                </div>
            </PageTransition>
        </>
    );
}

export default SettingsPage;