import "./SuccessScreen.css";
import {useEffect} from "react";
import LoadProcessBar from "../progressBars/LoadProgressBar/LoadProcessBar.jsx";
import AtlasSoundTest from "../../assets/AtlasSoundTest.mp3";

function SuccessScreen(props) {

    function play() {
        const audio = new Audio(AtlasSoundTest)
        audio.volume  = props.soundLevel
        audio.play()
    }

    useEffect(() => {
        if (props.soundOn) {
            play()
        }

        const timer = setTimeout(() => {
            props.setTutorialProgress((prevProgress) => prevProgress + 1);
        }, 3000);

        return () => clearTimeout(timer)
    }, []);


    return (
        <div className="account-created">
            <div className="account-created__container">

                <div className="account-created__circle"></div>

                <h1 className="account-created__title">
                    {props.message}
                </h1>

                <div>
                    <LoadProcessBar/>
                </div>


            </div>
        </div>
    );
}

export default SuccessScreen;