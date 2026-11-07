import "./AboutUsPage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ReturnButton from "../../components/returnButton/ReturnButton.jsx";

function AboutUsPage() {
    return (
        <PageTransition>
            <main className="about-page">
                <ReturnButton
                    extraClass={"about-return-button"}/>

                {/* HERO */}
                <section className="about-hero">

                    <div className="about-hero__content">
                        <p className="about-hero__eyebrow">ABOUT ATLAS</p>

                        <h1 className="about-hero__title">
                            Your life is a story
                            <span> worth remembering.</span>
                        </h1>

                        <p className="about-hero__subtitle">
                            Atlas is a place to collect the people, places,
                            moments and memories that make your story yours.
                        </p>
                    </div>
                </section>


                {/* INTRODUCTION */}
                <section className="about-section about-intro">
                    <div className="about-section__heading">
                        <p className="about-section__eyebrow">OUR PURPOSE</p>

                        <h2>
                            Remember more than just the moment.
                        </h2>
                    </div>

                    <div className="about-intro__text">
                        <p>
                            We created Atlas with a simple idea:
                            the important parts of our lives deserve more
                            than a photo hidden in a camera roll.
                        </p>

                        <p>
                            A memory is connected to people, places, music,
                            stories and countless little details. Atlas gives
                            you a place to bring those pieces together.
                        </p>
                    </div>
                </section>


                {/* FEATURES */}
                <section className="about-section about-features">

                    <div className="about-section__heading">
                        <p className="about-section__eyebrow">WHAT IS ATLAS?</p>

                        <h2>
                            A map of your life.
                        </h2>
                    </div>

                    <div className="about-features__grid">

                        <article className="about-feature">
                            <div className="about-feature__number">01</div>

                            <h3>Memories</h3>

                            <p>
                                Capture the moments you never want to forget.
                                Add photos, descriptions and the small details
                                that bring them back to life.
                            </p>
                        </article>


                        <article className="about-feature">
                            <div className="about-feature__number">02</div>

                            <h3>People</h3>

                            <p>
                                Connect the people who have been part of your
                                story and discover how different memories
                                connect to the same people.
                            </p>
                        </article>


                        <article className="about-feature">
                            <div className="about-feature__number">03</div>

                            <h3>Places</h3>

                            <p>
                                Keep track of the places that shaped your life,
                                from the city you grew up in to the places
                                you discovered along the way.
                            </p>
                        </article>


                        <article className="about-feature">
                            <div className="about-feature__number">04</div>

                            <h3>Chapters</h3>

                            <p>
                                Organize your life into chapters and turn
                                individual memories into a bigger story.
                            </p>
                        </article>

                    </div>
                </section>


                {/* PHILOSOPHY */}
                <section className="about-philosophy">

                    <div className="about-philosophy__content">

                        <p className="about-section__eyebrow">
                            THE IDEA
                        </p>

                        <blockquote>
                            "A life is made up of moments,
                            but a story is made up of connections."
                        </blockquote>

                        <p className="about-philosophy__text">
                            Atlas is designed around those connections.
                            A person can belong to a memory. A memory can
                            belong to a place. A place can belong to a chapter.
                            Together, these fragments create something bigger.
                        </p>

                    </div>

                </section>


                {/* CTA */}
                <section className="about-cta">

                    <p className="about-section__eyebrow">
                        YOUR STORY
                    </p>

                    <h2>
                        Start building your Atlas.
                    </h2>

                    <p>
                        Your story is already being written.
                        Atlas simply gives you a place to keep it.
                    </p>

                </section>

            </main>
        </PageTransition>
    );
}

export default AboutUsPage;