import "../OnboardingSystemExplanation.css"
import ProgressTracker from "../progressTracker/ProgressTracker.jsx";

function FourthStep({setTutorialProgress,tutorialProgress}) {
    return (
        <div className="onboarding-container">
            {/* Main Card Content */}
            <div className="welcome-card">
                <div className="avatar-circle"/>
                <h1 className="title">Stories</h1>
                <p className="description">A story is a period of your life typically spanning from a couple of days,
                    weeks to several months. For example: </p>

            </div>
            <div className="chapter-icons-grid">
                <div className="chapter-item">
                    <p className="chapter-label">Backpacking in Asia</p>

                    <div className="chapter-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M44.4792 7.62492H46.3854C48.2381 7.62828 50.014 8.36576 51.3241 9.67583C52.6342 10.9859 53.3716 12.7618 53.375 14.6145V22.2395C53.3716 24.0922 52.6342 25.8681 51.3241 27.1782C50.014 28.4882 48.2381 29.2257 46.3854 29.2291H14.6146C12.7619 29.2257 10.986 28.4882 9.67591 27.1782C8.36584 25.8681 7.62836 24.0922 7.625 22.2395V14.6145C7.62836 12.7618 8.36584 10.9859 9.67591 9.67583C10.986 8.36576 12.7619 7.62828 14.6146 7.62492H16.5208V5.08325H24.1458V7.62492H36.8542V5.08325H44.4792V7.62492ZM41.9375 36.8541V33.0416H46.3854C47.974 33.0416 49.4735 32.6985 50.8333 32.0758V46.3853C50.83 48.2381 50.0925 50.0139 48.7824 51.324C47.4723 52.6341 45.6965 53.3716 43.8438 53.3749H17.1562C15.3035 53.3716 13.5277 52.6341 12.2176 51.324C10.9075 50.0139 10.17 48.2381 10.1667 46.3853V32.0758C11.5265 32.6858 13.026 33.0416 14.6146 33.0416H19.0625V36.8541H22.875V33.0416H38.125V36.8541H41.9375Z"
                                  fill="#B17B53"/>
                        </svg>
                    </div>
                </div>

                <div className="chapter-item">
                    <p className="chapter-label">First breakup</p>

                    <div className="chapter-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path
                                d="M21.6162 48.6587C14.1282 42.888 5.3335 36.112 5.3335 24.3653C5.3335 12.0987 18.4615 3.20533 30.0375 12.8373L26.1602 21.8773C25.9802 22.2966 25.9489 22.7648 26.0717 23.2042C26.1944 23.6437 26.4637 24.028 26.8348 24.2933L34.3895 29.6907L27.8135 37.3653C27.4859 37.7478 27.3146 38.2398 27.3339 38.743C27.3531 39.2463 27.5616 39.7237 27.9175 40.08L32.4508 44.6133L30.0242 54.32C28.0082 53.6453 25.9815 52.072 23.8962 50.4267C23.1548 49.8471 22.3939 49.2578 21.6135 48.6587"
                                fill="#B17B53"/>
                            <path
                                d="M34.1645 54.2536C36.1165 53.547 38.0819 52.0216 40.1005 50.4296C40.8419 49.8465 41.6027 49.2563 42.3832 48.659C49.8712 42.8883 58.6659 36.1123 58.6659 24.3656C58.6659 12.3256 46.0232 3.53895 34.6125 12.3176L30.4712 21.9763L38.4952 27.707C38.7208 27.8684 38.9103 28.0749 39.0517 28.3135C39.1932 28.5521 39.2834 28.8175 39.3168 29.0929C39.3501 29.3683 39.3259 29.6476 39.2455 29.913C39.1651 30.1785 39.0304 30.4243 38.8499 30.6349L32.0552 38.563L36.0819 42.587C36.3258 42.8312 36.5024 43.1344 36.5945 43.4671C36.6866 43.7998 36.6909 44.1507 36.6072 44.4856L34.1645 54.2536Z"
                                fill="#B17B53"/>
                        </svg>
                    </div>
                </div>

                <div className="chapter-item">
                    <p className="chapter-label">Internship at work </p>

                    <div className="chapter-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                            <path
                                d="M9.83366 51.6248C8.48158 51.6248 7.32452 51.1438 6.36249 50.1818C5.40046 49.2198 4.91863 48.0619 4.91699 46.7082V19.6665C4.91699 18.3144 5.39883 17.1574 6.36249 16.1953C7.32616 15.2333 8.48321 14.7515 9.83366 14.7498H19.667V9.83317C19.667 8.48109 20.1488 7.32403 21.1125 6.362C22.0762 5.39998 23.2332 4.91814 24.5837 4.9165H34.417C35.7691 4.9165 36.9269 5.39834 37.8906 6.362C38.8543 7.32567 39.3353 8.48273 39.3337 9.83317V14.7498H49.167C50.5191 14.7498 51.6769 15.2317 52.6406 16.1953C53.6043 17.159 54.0853 18.3161 54.0837 19.6665V46.7082C54.0837 48.0603 53.6026 49.2181 52.6406 50.1818C51.6786 51.1455 50.5207 51.6265 49.167 51.6248H9.83366ZM24.5837 14.7498H34.417V9.83317H24.5837V14.7498Z"
                                fill="#B17B53"/>
                        </svg>
                    </div>
                </div>
            </div>


            <div className="button-wrapper">
                <button
                    type="button"
                    className="primary-button"
                    onClick={() => setTutorialProgress((prevProgress) => prevProgress + 1)}
                >
                    Continue
                </button>
                <button
                    type="button"
                    className="secondary-button"
                    onClick={() => setTutorialProgress((prevProgress) => prevProgress - 1)}
                >
                    Go back
                </button>
            </div>

            <ProgressTracker
            tutorialProgress={tutorialProgress}/>
        </div>
    );
}

export default FourthStep;