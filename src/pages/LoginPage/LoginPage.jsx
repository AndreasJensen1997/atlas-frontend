import LoginLogoBox from "../../components/loginLogoBox/LoginLogoBox.jsx";
import LoginForm from "../../components/loginForm/LoginForm.jsx";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import "./LoginPage.css"


function LoginPage(props) {


    return (

        <>
            <PageTransition>
                <div className="login-grid">
                    <div className="title-card">
                        <LoginLogoBox
                            {...props}
                        />
                    </div>
                    <div className="login-form">
                        <LoginForm
                        />
                    </div>
                </div>
            </PageTransition>
        </>
    )
}

export default LoginPage