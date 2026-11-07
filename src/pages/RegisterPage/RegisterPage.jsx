import "./RegisterPage.css"
import RegisterForm from "../../components/registerForm/RegisterForm.jsx";
import LoginLogoBox from "../../components/loginLogoBox/LoginLogoBox.jsx";




function RegisterPage(props){


    return(

        <div className="login-grid">
            <div className="title-card">
                <LoginLogoBox
                    soundOn={props.soundOn}
                    setSoundOn={props.setSoundOn}
                    currentTheme={props.currentTheme}
                    setTheme={props.setTheme}/>
            </div>
            <div className="login-form">
                <RegisterForm/>
            </div>
        </div>

    )

}


export default RegisterPage