import "./ContactUsPage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ReturnButton from "../../components/returnButton/ReturnButton.jsx";

function ContactUsPage() {
    return (
        <PageTransition>
            <main className="contact-page">

                {/* TOP BAR */}

                <ReturnButton></ReturnButton>


                {/* HERO / INTRO */}
                <section className="contact-intro">

                    <div className="contact-intro__number">
                        01
                    </div>

                    <div className="contact-intro__content">

                        <p className="contact-eyebrow">
                            GET IN TOUCH
                        </p>

                        <h1>
                            We'd love to
                             hear from you.
                        </h1>

                        <p className="contact-intro__text">
                            Whether you've found a problem, have a question,
                            or simply want to tell us something about your
                            experience with Atlas, we're always happy to hear
                            from you.
                        </p>

                    </div>

                </section>


                {/* CONTACT AREA */}
                <section className="contact-main">

                    {/* LEFT SIDE */}
                    <div className="contact-info">

                        <div className="contact-info__heading">
                            <p className="contact-eyebrow">
                                CONTACT
                            </p>

                            <h2>
                                Start a conversation.
                            </h2>
                        </div>


                        <div className="contact-methods">

                            <div className="contact-method">
                            <span className="contact-method__number">
                                01
                            </span>

                                <div>
                                    <h3>Email</h3>

                                    <p>
                                        hello@atlas-app.example
                                    </p>
                                </div>
                            </div>


                            <div className="contact-method">
                            <span className="contact-method__number">
                                02
                            </span>

                                <div>
                                    <h3>Response time</h3>

                                    <p>
                                        Usually within 1–2 business days.
                                    </p>
                                </div>
                            </div>


                            <div className="contact-method">
                            <span className="contact-method__number">
                                03
                            </span>

                                <div>
                                    <h3>Location</h3>

                                    <p>
                                        Copenhagen, Denmark
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* FORM */}
                    <div className="contact-form-container">

                        <form className="contact-form">

                            <div className="contact-form__row">

                                <div className="contact-field">
                                    <label htmlFor="contact-name">
                                        Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Your name"
                                    />
                                </div>


                                <div className="contact-field">
                                    <label htmlFor="contact-email">
                                        Email
                                    </label>

                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                </div>

                            </div>


                            <div className="contact-field">

                                <label htmlFor="contact-subject">
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="What would you like to talk about?"
                                />

                            </div>


                            <div className="contact-field">

                                <label htmlFor="contact-message">
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    placeholder="Tell us what's on your mind..."
                                    rows="7"
                                />

                            </div>


                            <button
                                type="button"
                                className="contact-submit-button"
                            >
                                Send message
                                <span>→</span>
                            </button>

                        </form>

                    </div>

                </section>


                {/* BEFORE CONTACTING */}
                <section className="contact-help">

                    <div className="contact-help__label">
                        <span>02</span>
                        BEFORE YOU REACH OUT
                    </div>


                    <div className="contact-help__content">

                        <h2>
                            Maybe we already have
                            the answer? <span className="faq-link">Check our FAQ</span>
                        </h2>

                    </div>

                </section>


                {/* FINAL MESSAGE */}
                <section className="contact-footer-message">


                    <h2>
                        Every story starts
                        with a conversation.
                    </h2>

                </section>

            </main>
        </PageTransition>
    );
}

export default ContactUsPage;