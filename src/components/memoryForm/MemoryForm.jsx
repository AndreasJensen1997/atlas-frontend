import "./MemoryForm.css"

function MemoryForm() {

    return (

        <div>
            <form className="memory-form">

                <fieldset className="memory-form__section">

                    <legend>The memory</legend>

                    <label>
                        Title
                        <input className="memory-form_input"
                            type="text"
                            placeholder="Give your memory a title"
                        />
                    </label>

                    <label>
                        Description
                        <textarea className="memory-form_input"
                            placeholder="Tell the story..."
                        />
                    </label>

                </fieldset>


                <fieldset className="memory-form__section">

                    <legend>When & where</legend>

                    <div className="memory-form__row">

                        <label>
                            Date
                            <input className="memory-form_input" type="date"/>
                        </label>

                        <label>
                            Place
                            <input className="memory-form_input" type="text"/>
                        </label>

                    </div>

                </fieldset>


                <fieldset className="memory-form__section">

                    <legend>People</legend>

                    <label>
                        Who was there?
                        <input className="memory-form_input" type="text"/>
                    </label>

                    <div className="memory-form__people">
                        <span>Andreas</span>
                        <span>Sarah</span>

                        <button className="memory-form_input" type="button">
                            + Add person
                        </button>
                    </div>

                </fieldset>


                <fieldset className="memory-form__section">

                    <legend>Connections</legend>

                    <button className="memory-form_input" type="button">
                        + Connect another memory
                    </button>

                    <button className="memory-form_input" type="button">
                        + Add artifact
                    </button>

                </fieldset>


                <div className="memory-form__actions">
                    <button type="button">
                        Cancel
                    </button>

                    <button type="submit">
                        Save memory
                    </button>
                </div>

            </form>


        </div>
    )
}

export default MemoryForm