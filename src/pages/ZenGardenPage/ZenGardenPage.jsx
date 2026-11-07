import "./ZenGardenPage.css";
import "../Homepage/Homepage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ZenGarden from "../../components/zenGarden/ZenGarden.jsx";

function ZenGardenPage() {
    return (


        <PageTransition>
            <ZenGarden/>
        </PageTransition>

    );
}

export default ZenGardenPage;