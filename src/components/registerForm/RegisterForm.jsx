import "./RegisterForm.css";
import {Link} from "react-router-dom";



function RegisterForm() {


    return (
        <div className="register-frame">

            <div className="register-frame__heading">
                <h1 className="register-frame__title">Create your account</h1>
                <p className="register-frame__subtitle">Start documenting your story</p>
            </div>

            <form className="register-frame__form">

                <div className="register-frame-form-inputs">

                <div className="register-frame__field">
                    <label className="register-frame__label" htmlFor="name">NAME</label>
                    <input
                        id="name"
                        type="name"
                        className="register-frame__input"
                        placeholder="Jens Jensen"
                    />
                </div>

                <div className="register-frame__field">
                    <label className="register-frame__label" htmlFor="email">EMAIL</label>
                    <input
                        id="email"
                        type="email"
                        className="register-frame__input"
                        placeholder="dig@eksempel.dk"
                    />
                </div>

                <div className="register-frame__field">
                    <label className="register-frame__label" htmlFor="password">PASSWORD</label>
                    <input
                        id="password"
                        type="password"
                        className="register-frame__input"
                        placeholder="••••••••"
                    />
                </div>

                <div className="register-frame__field">
                    <label className="register-frame__label" htmlFor="password">CONFIRM PASSWORD</label>
                    <input
                        id="confirm-assword"
                        type="password"
                        className="register-frame__input"
                        placeholder="••••••••"
                    />
                </div>
                </div>

                <div className="terms-and-conditions">
                    <input type="checkbox" id="accept" className="terms-and-conditions-button"></input>
                    <p className="terms-and-conditions-text">I accept the terms and conditions</p>

                </div>


                <Link to="/onboarding"
                    type="submit"
                    className="register-frame__button register-frame__button--primary"
                >
                    Register
                </Link>

                <div className="register-frame__divider">
                    <span className="register-frame__divider-line"/>
                    <span className="register-frame__divider-text">or</span>
                    <span className="register-frame__divider-line"/>
                </div>

                <Link
                   to="/"
                    type="button"
                    className="register-frame__button register-frame__button--secondary"
                >
                    I already have an account
                </Link>

            </form>
        </div>
    );
}

export default RegisterForm;