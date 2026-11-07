import {useRef} from "react";
import "./PopUp.css";
import PageTransition from "../PageTransition/PageTransition.jsx";

function PopUp({text, title, children}) {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
                <div onClick={openDialog}>
                    {children}
                </div>

                <dialog ref={dialogRef} className="pop-up">
                    <div className="pop-up-content">

                        <div className="pop-up-text">
                            <h1 className="pop-up-title">{title}</h1>
                            <p className="pop-up-subtitle">{text}</p>
                        </div>

                        <div className="pop-up-actions">
                            <a
                                className="pop-up-button pop-up-button-confirm"
                                onClick={closeDialog}
                            >
                                Confirm
                            </a>
                            <a
                                className="pop-up-button pop-up-button-cancel"
                                onClick={closeDialog}
                            >
                                Cancel
                            </a>


                        </div>

                    </div>
                </dialog>
        </>
    );
}

export default PopUp;