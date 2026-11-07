import "./ZenGarden.css";
import "../../pages/Homepage/Homepage.css"

function ZenGarden() {
    return (

            <main className="zen-garden">

                {/* Header */}
                <section className="zen-header">
                    <div>
                        <h1>
                            Your Zen Garden
                        </h1>

                        <p>
                            A quiet place for the moments that matter most.
                        </p>
                    </div>

                    <button className="zen-add-button">
                        <span>+</span>
                        Add to garden
                    </button>
                </section>


                {/* Garden */}
                <section className="garden">


                    {/* Featured story */}
                    <article className="garden-memory garden-memory--featured">

                        <div className="memory-type">
                            STORY
                        </div>

                        <h2>
                            Forty-five days
                            <br/>
                            of solitude
                        </h2>

                        <p>
                            Japan, 2025
                        </p>

                        <button>
                            Open story →
                        </button>

                    </article>


                    {/* Memory */}
                    <article className="garden-memory garden-memory--memory">

                        <div className="memory-type">
                            MEMORY
                        </div>

                        <h3>
                            The train to Hakodate
                        </h3>

                        <p>
                            March 18, 2025
                        </p>

                    </article>


                    {/* Another memory */}
                    <article className="garden-memory garden-memory--small">

                        <div className="memory-type">
                            MEMORY
                        </div>

                        <h3>
                            Cherry blossoms
                        </h3>

                        <p>
                            Tokyo · Spring
                        </p>

                    </article>


                    {/* Add element */}
                    <button className="garden-add">
                        <span>+</span>
                        <small>Add a memory</small>
                    </button>

                </section>


                {/* Footer information */}
                <section className="zen-footer">

                    <div className="zen-footer-symbol">
                        ◌
                    </div>

                    <div>
                        <h3>
                            Make space for what matters.
                        </h3>

                        <p>
                            Your garden is a reflection of the stories
                            you choose to keep close.
                        </p>
                    </div>


                </section>


            </main>

    );
}

export default ZenGarden;