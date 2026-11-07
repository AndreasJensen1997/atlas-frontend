import Dashboard from "../../components/dashboard/Dashboard.jsx";
import "./Homepage.css"
import PageTransition from "../../components/PageTransition/PageTransition.jsx";


function Homepage(props) {


    return (
        <PageTransition>
            <Dashboard
            setActivePage={props.setActivePage}/>
        </PageTransition>
    );
}


export default Homepage