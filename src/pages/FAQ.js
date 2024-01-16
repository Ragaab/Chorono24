import Header from "../Components/Header";
import "../Css/FAQ.css";
import "../Css/Collection.css";

function FAQ() {
    return (
        <>
            <Header />
            <div className="faq">
                <div className="my-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-0">
                            <div className="sidebar">
                                <a href="#/">Overview</a>
                                <ul>
                                    <li>
                                        <a href="#/">FAQ / Help</a>
                                    </li>
                                    <li>
                                        <a href="#/">Legal Details</a>
                                    </li>
                                    <li>
                                        <a href="#/">Marketplace Tax Collection</a>
                                    </li>
                                    <li>
                                        <a href="#/">Contact</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#/">Advice for private sellers</a>
                                    </li>
                                    <li>
                                        <a href="#/">Watch Terms Glossary</a>
                                    </li>
                                    <li>
                                        <a href="#/">Condition Grades</a>
                                    </li>
                                    <li>
                                        <a href="#/">Security Notes</a>
                                    </li>
                                    <li>
                                        <a href="#/">Chrono24 Trusted Seller</a>
                                    </li>
                                    <li>
                                        <a href="#/">Why Register?</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#/">Trade Shows</a>
                                    </li>
                                    <li>
                                        <a href="#/">Link to Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                            <div className="content">
                                <div className="info-box">
                                    <h2 className="mb-4">Searching for Watches on Chrono24</h2>
                                    <div className="info">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
                                            What is the Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseOne">
                                            <div className="card card-body">
                                                The Watch Collection lets you manage and track all of your watches online. Simply enter each watch's details and, if you'd like, add your own photos.
                                                You'll then have access to historical price trends, as well as projections of your timepieces' future financial performance. You can also use the Watch
                                                Collection to follow other watches you are interested in.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
                                            Do I have to own a watch to add it to my Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseTwo">
                                            <div className="card card-body">
                                                No, you can also follow watches that you are simply interested in. To track a watch's performance, enter its reference number or brand, model, and
                                                condition and select the option "I don't own this watch."
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
                                            How many watches can I add to my Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseThree">
                                            <div className="card card-body">You may add an unlimited number of watches.</div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
                                            Why is there a watch in my Watch Collection that I didn't personally add?
                                        </button>
                                        <div className="collapse" id="collapseFour">
                                            <div className="card card-body">
                                                As soon as you purchase a watch on Chrono24, it is automatically added to your Watch Collection, allowing you to track its value over time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
                                            Which estimated values are available in the Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseFive">
                                            <div className="card card-body">You can view the estimated value and change in value of each individual watch, as well as your entire collection.</div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseExample">
                                            How often is the estimated value updated?
                                        </button>
                                        <div className="collapse" id="collapseSix">
                                            <div className="card card-body">
                                                Estimated values are reassessed on a daily basis. However, price fluctuations are only visible across longer periods of time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
                                            Can I save personal information in the Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseSeven">
                                            <div className="card card-body">Yes, you can add your own photos and notes to each watch.</div>
                                        </div>
                                    </div>
                                    <div className="info last">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >
                                            Can I add rare timepieces to the Watch Collection?
                                        </button>
                                        <div className="collapse" id="collapseEight">
                                            <div className="card card-body">
                                                Yes, you can add any watch to your Watch Collection so that it is complete. That being said, there may be little to no data available on rare watches.
                                                If the same model is added by other users and we have sufficient data, new information will be added to your Watch Collection automatically.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
