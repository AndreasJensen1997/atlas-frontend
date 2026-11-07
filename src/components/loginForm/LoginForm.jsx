import "./LoginForm.css"
import {Link} from "react-router-dom";



function LoginForm() {


    return (
        <div className="login-frame">

            <div className="login-frame__heading">
                <h1 className="login-frame__title">Welcome back</h1>
                <p className="login-frame__subtitle">Log in to continue your story</p>
            </div>

            <form className="login-frame__form">
                <div className="login-frame__field">
                    <label className="login-frame__label" htmlFor="email">EMAIL</label>
                    <input
                        id="email"
                        type="email"
                        className="login-frame__input"
                        placeholder="dig@eksempel.dk"
                    />
                </div>

                <div className="login-frame__field">
                    <label className="login-frame__label" htmlFor="password">PASSWORD</label>
                    <input
                        id="password"
                        type="password"
                        className="login-frame__input"
                        placeholder="••••••••"
                    />
                </div>
                    <div className="login-frame__forgot-row">
                        <a className="login-frame__forgot-link">Forgot your password?</a>
                    </div>

                <Link to="/home" type="submit"
                        className="login-frame__button login-frame__button--primary">Log in
                </Link>

                <div className="login-frame__divider">
                    <span className="login-frame__divider-line"/>
                    <span className="login-frame__divider-text">or</span>
                    <span className="login-frame__divider-line"/>
                </div>

                <Link to="/register" type="button"
                        className="login-frame__button login-frame__button--secondary">Create new account
                </Link>
            </form>
        </div>
    );

}

export default LoginForm