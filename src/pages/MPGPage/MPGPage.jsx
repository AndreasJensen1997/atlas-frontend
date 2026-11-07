import "./MPGPage.css"
import PageTransition from "../../components/PageTransition/PageTransition.jsx";


function MPGPage() {


    return (

        <PageTransition>

            <div className="mpg-page-grid">
                <div className="mpg-header">
                    <h1 className="mpg-title">Memory prompt generator</h1>
                    <p className="mpg-introduction">
                        Feeling stuck? Generate a prompt to spark your next page.
                    </p>
                </div>

                <div className="mpg-main-box">

                </div>

            </div>
        </PageTransition>
    )
}

export default MPGPage