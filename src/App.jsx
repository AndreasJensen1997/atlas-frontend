import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";

import Homepage from "./pages/Homepage/Homepage.jsx";
import FAQPage from "./pages/FAQPage/FAQPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage/HowItWorksPage.jsx";
import ZenGardenPage from "./pages/ZenGardenPage/ZenGardenPage.jsx";
import ChaptersPage from "./pages/ChaptersPage/ChaptersPage.jsx";
import SettingsPage from "./pages/settingsPage/SettingsPage.jsx";

import ScrollProgress from "./components/progressBars/scrollProgress/ScrollProgress.jsx";
import AppLayout from "./components/appLayout/AppLayout.jsx";

import YourPage from "./pages/YourPage/YourPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import MPGPage from "./pages/MPGPage/MPGPage.jsx";


function App() {

    const [soundOn, setSoundOn] = useState(() => {
        const savedSound = localStorage.getItem("soundOn");
        return savedSound !== null ? JSON.parse(savedSound) : false;
    });

    const [currentTheme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    });

    const [currentLanguage, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en"
    });


    const [soundLevel, setSoundLevel] = useState(() => {
        const saved = localStorage.getItem("soundLevel");
        return saved !== null ? JSON.parse(saved) : 0.5;
    });


    useEffect(() => {
        localStorage.setItem("soundOn", JSON.stringify(soundOn));
        localStorage.setItem("soundLevel", JSON.stringify(soundLevel))
    }, [soundOn, soundLevel]);

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        localStorage.setItem("language", currentLanguage);
        document.documentElement.setAttribute("language", currentLanguage);
    }, [currentLanguage]);


    return (
        <BrowserRouter>
            <ScrollToTop/>
            <ScrollProgress/>

            <Routes>
                {/* ===== VALIDATION ===== */}

                <Route path="/"
                       element={<LoginPage soundOn={soundOn} setSoundOn={setSoundOn} currentTheme={currentTheme}
                                           setTheme={setTheme} soundLevel={soundLevel}
                                           setSoundLevel={setSoundLevel}/>}></Route>
                <Route path="/register"
                       element={<RegisterPage soundOn={soundOn} setSoundOn={setSoundOn} currentTheme={currentTheme}
                                              setTheme={setTheme} soundLevel={soundLevel}
                                              setSoundLevel={setSoundLevel}/>}></Route>


                {/* ===== MAIN PAGES ===== */}
                <Route element={<AppLayout soundOn={soundOn} setSoundOn={setSoundOn} currentTheme={currentTheme}
                                           setTheme={setTheme} soundLevel={soundLevel} setSoundLevel={setSoundLevel}
                                           language={currentLanguage} setLanguage={setLanguage}/>}>
                    <Route path="/home" element={<Homepage/>}/>
                    <Route path="/your-page" element={<YourPage/>}/>
                    <Route path="/chapters" element={<ChaptersPage/>}/>
                    <Route path="/stories" element={<ChaptersPage/>}/>
                    <Route path="/memories" element={<ChaptersPage/>}/>
                    <Route path="/artifacts" element={<ChaptersPage/>}/>
                    <Route path="/people" element={<ChaptersPage/>}/>
                    <Route path="/places" element={<ChaptersPage/>}/>
                    <Route path="/events" element={<ChaptersPage/>}/>
                    <Route path="/friends" element={<ChaptersPage/>}/>
                    <Route path="/timeline" element={<ChaptersPage/>}/>
                    <Route path="/time-capsule" element={<ChaptersPage/>}/>
                    <Route path="/fragments" element={<ChaptersPage/>}/>
                    <Route path="/mpg" element={<MPGPage/>}/>
                    <Route path="/zen-garden" element={<ZenGardenPage/>}/>
                    <Route path="/reminisce" element={<ChaptersPage/>}/>
                    <Route path="/last-seen" element={<ChaptersPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Route>


                {/* ===== INFORMATION PAGES ===== */}
                <Route path="/faq" element={<FAQPage/>}/>
                <Route path="/about" element={<AboutUsPage/>}/>
                <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
                <Route path="/contact" element={<ContactUsPage/>}/>
                <Route path="/how-it-works" element={<HowItWorksPage/>}/>

                {/* ===== ONBOARDING ===== */}
                <Route path="/onboarding"
                       element={<OnboardingPage soundOn={soundOn} setSoundOn={setSoundOn} soundLevel={soundLevel}/>}/>

                {/* ===== ERROR 404 ===== */}
                <Route path="*" element={<ErrorPage/>}/>


            </Routes>
        </BrowserRouter>
    );
}

export default App