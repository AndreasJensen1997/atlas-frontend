import "./HowItWorksPage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ReturnButton from "../../components/returnButton/ReturnButton.jsx";

function HowItWorksPage(props) {
    const layers = [
        {
            number: "01",
            title: "Stories",
            subtitle: "The big picture.",
            description:
                "A Story is a collection of chapters that describes a larger period, journey, or part of your life.",
            examples: [
                "My years in Japan",
                "University",
                "My childhood",
                "A summer I'll never forget"
            ]
        },
        {
            number: "02",
            title: "Chapters",
            subtitle: "Break a story into meaningful sections.",
            description:
                "Chapters divide a Story into smaller parts. They can represent a period of time, a place, an experience, or an important phase of your life.",
            examples: [
                "Tokyo",
                "Hokkaido",
                "My first semester",
                "Moving to Copenhagen"
            ]
        },
        {
            number: "03",
            title: "Memories",
            subtitle: "The moments that make up your story.",
            description:
                "A Memory is a specific moment you want to preserve. Memories are the heart of Atlas and can connect to the people, places, and artifacts that were part of them.",
            examples: [
                "Watching the sunrise in Tokyo",
                "The day I met Emma",
                "That rainy afternoon",
                "Graduation day"
            ]
        },
        {
            number: "04",
            title: "People",
            subtitle: "The people who were part of your story.",
            description:
                "People can appear across many different memories, chapters, and stories. One person doesn't have to belong to just one moment.",
            examples: [
                "Family",
                "Friends",
                "Classmates",
                "People you met along the way"
            ]
        },
        {
            number: "05",
            title: "Places",
            subtitle: "Where your memories happened.",
            description:
                "Places give your memories a physical location. A single place can connect many different memories and chapters together.",
            examples: [
                "Tokyo",
                "Your childhood home",
                "University",
                "That café you always visited"
            ]
        },
        {
            number: "06",
            title: "Artifacts",
            subtitle: "The things that carry your memories.",
            description:
                "Artifacts are the objects, images, sounds, and other pieces of your life that help preserve a memory.",
            examples: [
                "Photographs",
                "Tickets",
                "Letters",
                "Songs and souvenirs"
            ]
        }
    ];

    return (
        <PageTransition>
        <main className="how-it-works">
            <div className="how-it-works-return-button">
            <ReturnButton
                setActivePage={props.setActivePage}/>
            </div>

            {/* =========================================
                HERO
            ========================================= */}

            <section className="how-it-works__hero">


                <span className="how-it-works__eyebrow">
                    HOW ATLAS WORKS
                </span>

                <h1 className="how-it-works__hero-title">
                    Your life,
                    <br />
                    <em>connected.</em>
                </h1>

                <p className="how-it-works__hero-description">
                    Atlas gives you a way to document the moments
                    that make up your life — and connect them into
                    something bigger than a collection of memories.
                </p>

                <div className="how-it-works__hero-line">
                    <span></span>
                </div>

            </section>


            {/* =========================================
                STRUCTURE
            ========================================= */}

            <section className="how-it-works__structure">

                <div className="section-heading">
                    <span className="section-heading__eyebrow">
                        THE ATLAS STRUCTURE
                    </span>

                    <h2>
                        Everything starts<br />
                        with a <em>story.</em>
                    </h2>
                </div>


                <div className="structure-diagram">

                    <div className="structure-node structure-node--story">
                        <span>CHAPTER</span>
                        <strong>A significant part of your life</strong>
                    </div>

                    <div className="structure-line"></div>

                    <div className="structure-node">
                        <span>STORY</span>
                        <strong>A brief part of a bigger story</strong>
                    </div>

                    <div className="structure-line"></div>

                    <div className="structure-node structure-node--memory">
                        <span>MEMORY</span>
                        <strong>A moment worth keeping</strong>
                    </div>

                    <div className="structure-branches">

                        <div className="structure-branch">
                            <div className="structure-branch__line"></div>

                            <div className="structure-node structure-node--small">
                                <span>PEOPLE</span>
                                <strong>Who</strong>
                            </div>
                        </div>

                        <div className="structure-branch">
                            <div className="structure-branch__line"></div>

                            <div className="structure-node structure-node--small">
                                <span>PLACE</span>
                                <strong>Where</strong>
                            </div>
                        </div>

                        <div className="structure-branch">
                            <div className="structure-branch__line"></div>

                            <div className="structure-node structure-node--small">
                                <span>ARTIFACT</span>
                                <strong>What remains</strong>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                LAYERS
            ========================================= */}

            <section className="how-it-works__layers">

                {layers.map((layer) => (
                    <article
                        className="how-it-works__layer"
                        key={layer.number}
                    >

                        <div className="layer-number">
                            {layer.number}
                        </div>

                        <div className="layer-content">

                            <div className="layer-heading">

                                <h2>
                                    {layer.title}
                                </h2>

                                <p className="layer-subtitle">
                                    {layer.subtitle}
                                </p>

                            </div>

                            <p className="layer-description">
                                {layer.description}
                            </p>

                            <div className="layer-examples">

                                {layer.examples.map((example) => (
                                    <span
                                        className="layer-example"
                                        key={example}
                                    >
                                        {example}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </article>
                ))}

            </section>


            {/* =========================================
                BOOK METAPHOR
            ========================================= */}

            <section className="how-it-works__metaphor">

                <div className="metaphor-card">

                    <span className="how-it-works__eyebrow">
                        THINK OF ATLAS LIKE A BOOK
                    </span>

                    <h2>
                        Your life is the story.
                    </h2>

                    <p>
                        Your chapters are the periods of your life.
                        Your memories are the scenes. Your people are
                        the characters. Your places are the settings.
                        And your artifacts are the things that remain.
                    </p>


                    <div className="metaphor-grid">

                        <div>
                            <span>STORY</span>
                            <strong>The book</strong>
                        </div>

                        <div>
                            <span>CHAPTER</span>
                            <strong>A chapter</strong>
                        </div>

                        <div>
                            <span>MEMORY</span>
                            <strong>A scene</strong>
                        </div>

                        <div>
                            <span>PERSON</span>
                            <strong>A character</strong>
                        </div>

                        <div>
                            <span>PLACE</span>
                            <strong>A setting</strong>
                        </div>

                        <div>
                            <span>ARTIFACT</span>
                            <strong>An object</strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                FINAL SECTION
            ========================================= */}

            <section className="how-it-works__ending">

                <span className="how-it-works__eyebrow">
                    THAT'S ATLAS
                </span>

                <h2>
                    Start writing your story,
                    <br />
                    <em>today.</em>
                </h2>

            </section>

        </main>
        </PageTransition>
    );
}

export default HowItWorksPage;