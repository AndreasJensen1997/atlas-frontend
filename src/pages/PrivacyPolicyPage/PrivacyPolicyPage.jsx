import "./PrivacyPolicyPage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ReturnButton from "../../components/returnButton/ReturnButton.jsx";

function PrivacyPolicyPage() {
    return (
        <PageTransition>
        <main className="privacy-page">

            {/* RETURN BUTTON */}
            <div>
                <ReturnButton
                extraClass={"privacy-return-button"}/>
            </div>


            {/* HEADER */}
            <header className="privacy-header">

                <p className="privacy-eyebrow">
                    ATLAS
                </p>

                <h1>
                    Privacy Policy
                </h1>

                <p className="privacy-intro">
                    Your story belongs to you. This policy explains how
                    Atlas handles the information you choose to share.
                </p>

                <p className="privacy-updated">
                    Last updated: August 2026
                </p>

            </header>


            {/* CONTENT */}
            <div className="privacy-content">

                <section className="privacy-section">
                    <h2>1. Introduction</h2>

                    <p>
                        Welcome to Atlas. Atlas is a personal storytelling
                        application designed to help you collect, organize
                        and preserve the memories, people, places and
                        experiences that make up your life.
                    </p>

                    <p>
                        We respect your privacy and believe you should
                        understand what information is collected, why it
                        is collected and how it is used.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>2. Information We Collect</h2>

                    <p>
                        When you use Atlas, you may choose to provide
                        information such as your name, email address,
                        profile information and content you create within
                        the application.
                    </p>

                    <p>
                        This may include memories, photographs, descriptions,
                        locations, people and other information you decide
                        to associate with your story.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>3. How We Use Your Information</h2>

                    <p>
                        The information you provide is primarily used to
                        provide and improve the Atlas experience.
                    </p>

                    <ul className="list-overview">
                        <li className="list-items">To provide access to your Atlas account.</li>
                        <li className="list-items">To store and display your personal content.</li>
                        <li className="list-items"> To connect memories, people and places.</li>
                        <li className="list-items">To improve the functionality of the application.</li>
                        <li className="list-items">To maintain the security of our services.</li>
                    </ul>
                </section>


                <section className="privacy-section">
                    <h2>4. Your Content</h2>

                    <p>
                        You retain ownership of the content you create and
                        upload to Atlas. Your memories are personal to you,
                        and we do not claim ownership of the stories,
                        photographs or other content you choose to store.
                    </p>

                    <p>
                        You are responsible for ensuring that you have the
                        necessary rights to any content you upload.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>5. Sharing Your Information</h2>

                    <p>
                        Atlas does not sell your personal information to
                        third parties. Information may only be shared when
                        necessary to provide the services you request,
                        comply with legal obligations or protect the
                        security of the application.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>6. Cookies and Local Storage</h2>

                    <p>
                        Atlas may use cookies or local browser storage to
                        remember preferences such as your selected theme
                        and other application settings.
                    </p>

                    <p>
                        These technologies are intended to improve your
                        experience and do not exist to build a personal
                        advertising profile.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>7. Data Security</h2>

                    <p>
                        We take reasonable measures to protect the
                        information stored within Atlas. However, no
                        internet service can guarantee complete security.
                    </p>

                    <p>
                        We continuously work to improve the security and
                        reliability of the application.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>8. Your Rights</h2>

                    <p>
                        Depending on where you live, you may have rights
                        regarding the personal information associated with
                        your account.
                    </p>

                    <p>
                        These may include the right to access, correct,
                        export or delete your personal information.
                    </p>
                </section>


                <section className="privacy-section">
                    <h2>9. Changes to This Policy</h2>

                    <p>
                        This Privacy Policy may be updated from time to
                        time as Atlas evolves. When significant changes
                        are made, the updated policy will be made available
                        within the application.
                    </p>
                </section>


                <section className="privacy-section privacy-contact">
                    <h2>10. Contact</h2>

                    <p>
                        If you have questions about this Privacy Policy
                        or how your information is handled, please contact
                        the Atlas team.
                    </p>

                    <button className="privacy-contact-button">
                        Contact Atlas
                    </button>
                </section>

            </div>

        </main>
        </PageTransition>
    );
}

export default PrivacyPolicyPage;