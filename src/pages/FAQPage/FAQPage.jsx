import {useState} from "react";
import "./FAQPage.css";
import PageTransition from "../../components/PageTransition/PageTransition.jsx";
import ReturnButton from "../../components/returnButton/ReturnButton.jsx";


function FAQPage() {

    const [openQuestion, setOpenQuestion] = useState(null);
    const [openSection, setOpenSection] = useState(null);

    const faqItems1 =
        {
            title: "General",
            questions:[

                {
                    question: "What is Atlas?",
                    answer:
                        "Atlas is an application that lets you document your life and eternalize your story. You can collect memories, people, places, events and other meaningful parts of your life in one place."
                },
                {
                    question: "What can I use Atlas for?",
                    answer:
                        "You can use Atlas to document important moments throughout your life. Create memories, organize them into chapters, connect people and places, and build a personal timeline of your story."
                },
                {
                    question: "Are my memories private?",
                    answer:
                        "Yes. Your memories are private by default. You decide what you want to keep private and what you want to share with other people."
                },
                {
                    question: "Can I share my memories with other people?",
                    answer:
                        "Yes. Atlas allows you to share selected parts of your story with other people while keeping the rest of your memories private."
                },
                {
                    question: "What are Chapters?",
                    answer:
                        "Chapters allow you to organize longer periods of your life. For example, you could create chapters for your childhood, your time at university, travelling, or any other important period."
                },
                {
                    question: "What are Memories?",
                    answer:
                        "Memories are individual moments or events that you want to preserve. A memory could be anything from a holiday or birthday to a small moment that means something to you."
                },
                {
                    question: "What is Tapestry?",
                    answer:
                        "Tapestry allows you to create a link that you can share with other people. They can use the link to contribute their own memories, messages or stories, which are then collected together into one page."
                },
                {
                    question: "Can I add photos to my memories?",
                    answer:
                        "Yes. You can attach photos to your memories to help preserve the experience and give your stories a visual dimension."
                },
                {
                    question: "Can I edit my memories later?",
                    answer:
                        "Yes. Your memories can be edited whenever you want, allowing you to add new information or change details as your story develops."
                },
                {
                    question: "How do I delete my account?",
                    answer:
                        "You can delete your account from your account settings. Deleting your account will remove your Atlas account and its associated content."
                }
            ]
        };

    const faqItems2 =
        {
            title: "Privacy",
            questions:[

                {
                    question: "What is Atlas?",
                    answer:
                        "Atlas is an application that lets you document your life and eternalize your story. You can collect memories, people, places, events and other meaningful parts of your life in one place."
                },
                {
                    question: "What can I use Atlas for?",
                    answer:
                        "You can use Atlas to document important moments throughout your life. Create memories, organize them into chapters, connect people and places, and build a personal timeline of your story."
                },
                {
                    question: "Are my memories private?",
                    answer:
                        "Yes. Your memories are private by default. You decide what you want to keep private and what you want to share with other people."
                },
                {
                    question: "Can I share my memories with other people?",
                    answer:
                        "Yes. Atlas allows you to share selected parts of your story with other people while keeping the rest of your memories private."
                },
                {
                    question: "What are Chapters?",
                    answer:
                        "Chapters allow you to organize longer periods of your life. For example, you could create chapters for your childhood, your time at university, travelling, or any other important period."
                },
                {
                    question: "What are Memories?",
                    answer:
                        "Memories are individual moments or events that you want to preserve. A memory could be anything from a holiday or birthday to a small moment that means something to you."
                },
                {
                    question: "What is Tapestry?",
                    answer:
                        "Tapestry allows you to create a link that you can share with other people. They can use the link to contribute their own memories, messages or stories, which are then collected together into one page."
                },
                {
                    question: "Can I add photos to my memories?",
                    answer:
                        "Yes. You can attach photos to your memories to help preserve the experience and give your stories a visual dimension."
                },
                {
                    question: "Can I edit my memories later?",
                    answer:
                        "Yes. Your memories can be edited whenever you want, allowing you to add new information or change details as your story develops."
                },
                {
                    question: "How do I delete my account?",
                    answer:
                        "You can delete your account from your account settings. Deleting your account will remove your Atlas account and its associated content."
                }
            ]
        };

    const allList = [faqItems1, faqItems2];


    const toggleQuestion = (index) => {
        setOpenQuestion(
            openQuestion === index ? null : index
        );
    };

    const toggleSection = (sectionIndex) => {
        setOpenSection((
            openSection === sectionIndex ? null : sectionIndex
        ));
    }

    function showList(sectionIndex) {
        return (

            <section className="faq-list">

                {allList[sectionIndex].questions.map((item, index) => (

                    <div
                        className={`faq-item ${openQuestion === index ? "faq-item--open" : ""}`}
                        key={index}
                    >

                        <button
                            className="faq-question"
                            onClick={() => toggleQuestion(index)}
                            aria-expanded={openQuestion === index}
                        >
                            <span className="faq-question-text">
                                {item.question}
                            </span>

                            <span className="faq-icon">
                                {openQuestion === index ? "−" : "+"}
                            </span>
                        </button>


                        <div className="faq-answer">
                            <p>
                                {item.answer}
                            </p>

                        </div>

                    </div>

                ))}

            </section>
        )


    }

    return (

        <PageTransition>
            <main className="faq-page">

                <ReturnButton/>

                <section className="faq-hero">


                    <h1 className="faq-title">
                        Frequently Asked Questions
                    </h1>

                    <p className="faq-introduction">
                        Everything you need to know about Atlas,
                        your memories, and your story.
                    </p>

                </section>

                <section>

                    {allList.map((item, sectionIndex) =>
                        <div className={`faq-section ${openSection === sectionIndex ? "faq-section-open" : ""}`}
                             key={sectionIndex}>

                            <button className="faq-question"
                                    onClick={() => {
                                        toggleSection(sectionIndex);
                                    }}>
                                  <span>
                                {item.title}
                            </span>
                                <span className="faq-section-icon">
                                {openSection === sectionIndex ? "−" : "+"}
                            </span>
                            </button>
                            {openSection === sectionIndex && showList(sectionIndex)}


                        </div>)}
                </section>

            </main>
        </PageTransition>
    )
        ;
}

export default FAQPage;
