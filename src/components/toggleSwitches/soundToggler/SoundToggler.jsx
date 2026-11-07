import {useRef, useState} from "react";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch.jsx";
import lightTheme from "../../../assets/lightTheme.mp3"

function SoundToggler(props) {

    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);


    function play() {
        const audio = new Audio(lightTheme);
        audio.volume = props.soundLevel;
        audio.play();}

    const toastTimerRef = useRef(null);



    const handleToggle = () => {
        const newState = !props.soundOn;
        props.setSoundOn(newState);
        if (newState) {
            play();
        }

        // 1. Clear any active timer so rapid clicks reset the countdown
        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
        }

        // Set message based on state
        setToastMessage(newState ? "Sound Activated" : "Sound Muted");
        setShowToast(true);

        // Auto-hide toast after 2 seconds
        toastTimerRef.current = setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };


    return (
        <>
            <ToggleSwitch
                isActive={props.soundOn}
                onToggle={handleToggle}
                icon1={<svg className="theme-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.52 3.78192C16.4 3.16192 14.97 3.32192 13.51 4.23192L10.59 6.06192C10.39 6.18192 10.16 6.25192 9.93 6.25192H8.5C6.08 6.25192 4.75 7.58192 4.75 10.0019V14.0019C4.75 16.4219 6.08 17.7519 8.5 17.7519H9.93C10.16 17.7519 10.39 17.8219 10.59 17.9419L13.51 19.7719C14.39 20.3219 15.25 20.5919 16.05 20.5919C16.5636 20.5965 17.0698 20.4691 17.52 20.2219C18.63 19.6019 19.25 18.3119 19.25 16.5919V7.41192C19.25 5.69192 18.63 4.40192 17.52 3.78192Z"
                        fill="#AA9A87"/>
                </svg>}

                icon2={<svg className="theme-toggle__icon" width="30" height="24" viewBox="0 0 30 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.52 3.78192C16.4 3.16192 14.97 3.32192 13.51 4.23192L10.59 6.06192C10.39 6.18192 10.16 6.25192 9.93 6.25192H8.5C6.08 6.25192 4.75 7.58192 4.75 10.0019V14.0019C4.75 16.4219 6.08 17.7519 8.5 17.7519H9.93C10.16 17.7519 10.39 17.8219 10.59 17.9419L13.51 19.7719C14.39 20.3219 15.25 20.5919 16.05 20.5919C16.5636 20.5965 17.0698 20.4691 17.52 20.2219C18.63 19.6019 19.25 18.3119 19.25 16.5919V7.41192C19.25 5.69192 18.63 4.40192 17.52 3.78192Z"
                        fill="#AA9A87"/>
                    <path
                        d="M26.326 14.652C26.1797 14.7983 25.9813 14.8804 25.7744 14.8804C25.5676 14.8804 25.3692 14.7983 25.2229 14.652L23.4998 12.6825L21.7766 14.6513C21.7044 14.7247 21.6184 14.7831 21.5235 14.8231C21.4286 14.8631 21.3267 14.8839 21.2238 14.8843C21.1208 14.8847 21.0188 14.8647 20.9236 14.8255C20.8284 14.7863 20.7419 14.7287 20.669 14.6558C20.5962 14.583 20.5386 14.4965 20.4994 14.4013C20.4601 14.3061 20.4402 14.2041 20.4406 14.1011C20.441 13.9982 20.4618 13.8963 20.5018 13.8014C20.5418 13.7065 20.6002 13.6205 20.6736 13.5483L22.4663 11.5008L20.6729 9.45198C20.5995 9.37977 20.5411 9.29374 20.5012 9.19886C20.4612 9.10397 20.4404 9.00211 20.4399 8.89914C20.4395 8.79618 20.4595 8.69415 20.4987 8.59894C20.5379 8.50373 20.5956 8.41723 20.6684 8.34442C20.7412 8.27162 20.8277 8.21394 20.9229 8.17473C21.0181 8.13553 21.1202 8.11555 21.2231 8.11597C21.3261 8.11639 21.4279 8.13719 21.5228 8.17718C21.6177 8.21716 21.7037 8.27554 21.776 8.34893L23.4998 10.3191L25.2229 8.34893C25.2951 8.27554 25.3812 8.21716 25.476 8.17718C25.5709 8.13719 25.6728 8.11639 25.7757 8.11597C25.8787 8.11555 25.9807 8.13553 26.076 8.17473C26.1712 8.21394 26.2577 8.27162 26.3305 8.34442C26.4033 8.41723 26.4609 8.50373 26.5002 8.59894C26.5394 8.69415 26.5593 8.79618 26.5589 8.89914C26.5585 9.00211 26.5377 9.10397 26.4977 9.19886C26.4577 9.29374 26.3994 9.37977 26.326 9.45198L24.5333 11.5008L26.326 13.5483C26.3985 13.6207 26.456 13.7067 26.4953 13.8014C26.5345 13.8961 26.5547 13.9976 26.5547 14.1001C26.5547 14.2026 26.5345 14.3041 26.4953 14.3988C26.456 14.4935 26.3985 14.5795 26.326 14.652Z"
                        fill="#AA9A87"/>
                </svg>
                }
            />
            {showToast && (
                <div className="toast-center">
                    {toastMessage}
                </div>
            )}
        </>
    );
}

export default SoundToggler;