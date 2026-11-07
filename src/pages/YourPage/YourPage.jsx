import "./YourPage.css"
import profilePic from "../../assets/img.png";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import PopUp from "../../components/popUp/PopUp.jsx";


function YourPage() {

    return (
        <>
            <PageTransition>
                <div className="your-page-grid">

                    <div className="header-and-content">
                        <div className="your-page-header-container">
                            <div className="profile-header-and-edit-button-container">
                                <h1 className="your-page-title">Andreas Jensen</h1>
                                <PopUp title={"Are you sure?"}
                                text="This action cannot be undone">
                                <a className="profile-edit-button">Edit</a>
                                </PopUp>
                            </div>
                            <p className="your-page-introduction">Your page · Last edited 3 days ago</p>
                        </div>
                        <div className="your-page-divider">
                            <span className="your-page-divider-line"/>
                        </div>

                        <div className="your-page-main-content">
                            <p> Andreas (born c. 2000s) is a young Danish man known for his engagement and active
                                participation
                                within his local community.

                                Early in life, Andreas distinguished himself through a strong sense of curiosity and a
                                versatile
                                approach to his interests, which span social, academic, and extracurricular pursuits.
                                Throughout
                                his upbringing and youth, he built a reputation for his collaborative skills and
                                positive
                                contributions to the communities of which he is a part.

                                As of the mid-2020s, Andreas is in a phase marked by education and personal development,
                                continuing to expand his academic and professional profile.
                            </p>
                            <h1>Early life</h1>
                            <p> Andreas (born c. 2000s) is a young Danish man known for his engagement and active
                                participation
                                within his local community.

                                Early in life, Andreas distinguished himself through a strong sense of curiosity and a
                                versatile
                                approach to his interests, which span social, academic, and extracurricular pursuits.
                                Throughout
                                his upbringing and youth, he built a reputation for his collaborative skills and
                                positive
                                contributions to the communities of which he is a part.

                                As of the mid-2020s, Andreas is in a phase marked by education and personal development,
                                continuing to expand his academic and professional profile.
                            </p>
                            <h1>Early life</h1>
                            <p> Andreas (born c. 2000s) is a young Danish man known for his engagement and active
                                participation
                                within his local community.

                                Early in life, Andreas distinguished himself through a strong sense of curiosity and a
                                versatile
                                approach to his interests, which span social, academic, and extracurricular pursuits.
                                Throughout
                                his upbringing and youth, he built a reputation for his collaborative skills and
                                positive
                                contributions to the communities of which he is a part.

                                As of the mid-2020s, Andreas is in a phase marked by education and personal development,
                                continuing to expand his academic and professional profile.
                                Andreas (born c. 2000s) is a young Danish man known for his engagement and active
                                participation
                                within his local community.

                                Early in life, Andreas distinguished himself through a strong sense of curiosity and a
                                versatile
                                approach to his interests, which span social, academic, and extracurricular pursuits.
                                Throughout
                                his upbringing and youth, he built a reputation for his collaborative skills and
                                positive
                                contributions to the communities of which he is a part.

                                As of the mid-2020s, Andreas is in a phase marked by education and personal development,
                                continuing to expand his academic and professional profile.
                            </p>
                        </div>

                    </div>

                    <div className="profile-box">
                        <img className="profile-pic" src={profilePic}/>

                        <div className="profile-info">
                            <h1 className="profile-name">Andreas Jensen</h1>

                            <h2 className="profile-box-label">BORN</h2>
                            <hp className="profile-box-info">15. marts 1997</hp>

                            <h2 className="profile-box-label">RESIDENCE</h2>
                            <hp className="profile-box-info">Copenhagen, Denmark</hp>

                            <h2 className="profile-box-label">EDUCATION</h2>
                            <hp className="profile-box-info">Computer science, 3. semester</hp>
                            <div className="your-page-divider">
                                <span className="your-page-divider-line"/>
                            </div>
                            <h2 className="profile-box-label">BORN</h2>
                            <hp className="profile-box-info">15. marts 1997</hp>

                            <h2 className="profile-box-label">RESIDENCE</h2>
                            <hp className="profile-box-info">Copenhagen, Denmark</hp>

                            <h2 className="profile-box-label">EDUCATION</h2>
                            <hp className="profile-box-info">Computer science, 3. semester</hp>
                            <div className="your-page-divider">
                                <span className="your-page-divider-line"/>
                            </div>
                            <h2 className="profile-box-label">BORN</h2>
                            <hp className="profile-box-info">15. marts 1997</hp>

                            <h2 className="profile-box-label">RESIDENCE</h2>
                            <hp className="profile-box-info">Copenhagen, Denmark</hp>

                            <h2 className="profile-box-label">EDUCATION</h2>
                            <hp className="profile-box-info">Computer science, 3. semester</hp>
                            <div className="your-page-divider">
                                <span className="your-page-divider-line"/>
                            </div>
                            <h2 className="profile-box-label">BORN</h2>
                            <hp className="profile-box-info">15. marts 1997</hp>

                            <h2 className="profile-box-label">RESIDENCE</h2>
                            <hp className="profile-box-info">Copenhagen, Denmark</hp>

                            <h2 className="profile-box-label">EDUCATION</h2>
                            <hp className="profile-box-info">Computer science, 3. semester</hp>


                        </div>
                    </div>

                </div>
            </PageTransition>
        </>
    )

}

export default YourPage