import "./OnboardingPage.css"
import SuccessScreen from "../../components/SuccessScreen/SuccessScreen.jsx";
import FirstStep from "../../components/onboarding/firstStep/FirstStep.jsx";
import {useState} from "react";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import SecondStep from "../../components/onboarding/secondStep/SecondStep.jsx";
import ThirdStep from "../../components/onboarding/ThirdStep/ThirdStep.jsx";
import FourthStep from "../../components/onboarding/FourthStep/FourthStep.jsx";
import FifthStep from "../../components/onboarding/FifthStep/FifthStep.jsx";
import SixthStep from "../../components/onboarding/SixthStep/SixthStep.jsx";
import CompletitionStep from "../../components/onboarding/CompletionStep/CompletitionStep.jsx";


function OnboardingPage(props) {


    const [tutorialProgress, setTutorialProgress] = useState(0)


    return (

        <>
            <PageTransition>

                <div className="onboard-grid">

                    {tutorialProgress === 0 && (
                        <SuccessScreen
                            soundOn={props.soundOn}
                            soundLevel={props.soundLevel}
                            setTutorialProgress={setTutorialProgress}
                            message={"Account successfully created!"}/>
                    )}

                    {tutorialProgress === 1 && (
                        <PageTransition>

                            <FirstStep
                                setActivePage={props.setActivePage}
                                tutorialProgress={tutorialProgress}
                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}

                    {tutorialProgress === 2 && (
                        <PageTransition>

                            <SecondStep
                                tutorialProgress={tutorialProgress}

                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}
                    {tutorialProgress === 3 && (
                        <PageTransition>

                            <ThirdStep
                                tutorialProgress={tutorialProgress}

                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}

                    {tutorialProgress === 4 && (
                        <PageTransition>

                            <FourthStep
                                tutorialProgress={tutorialProgress}

                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}
                    {tutorialProgress === 5 && (
                        <PageTransition>

                            <FifthStep
                                tutorialProgress={tutorialProgress}

                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}

                    {tutorialProgress === 6 && (
                        <PageTransition>

                            <SixthStep
                                tutorialProgress={tutorialProgress}

                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}

                    {tutorialProgress === 7 && (
                        <PageTransition>

                            <CompletitionStep
                                setActivePage={props.setActivePage}
                                setTutorialProgress={setTutorialProgress}/>
                        </PageTransition>

                    )}

                </div>
            </PageTransition>
        </>

    )


}


export default OnboardingPage